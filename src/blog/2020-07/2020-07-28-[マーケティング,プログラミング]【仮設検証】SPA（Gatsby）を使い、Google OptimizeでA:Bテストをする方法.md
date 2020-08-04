---
path: /marketing/spa_abtesting
date: 2020-07-28T19:00:00
thumbnail: /images/blog/2020.07.28_01-top.jpg
title: 【仮設検証】SPA（Gatsby）を使い、Google OptimizeでA/Bテストをする方法
tags:
  - マーケティング
  - プログラミング
description: >-
  Google Optimizeは、Google公式からリリースされているA/Bテストを行うことができるツールです。Google Analyticsと連動してデータを蓄積しつつ、A/Bテストを行うことができます。便利なツールですが、SPAで使う場合は非同期通信の特性上、まず環境を構築し特殊な方法でテストを行う必要がございます。
---

こんにちは、シンヤです！

今回は、*【仮設検証】SPA（Gatsby）を使い、Google OptimizeでA/Bテストをする方法*というテーマで、お話しいたします。

---

## 概要

SPAは非同期通信の特性上、*[Google Optimize](https://marketingplatform.google.com/intl/ja/about/optimize/)でA/Bテストをするには、特殊なやり方が必要になります。*

やり方さえわかれば簡単なのですが、日本語でまとめられたドキュメントがなかったので、自分で作ることにしました。  
GTM（Google Tag Manager）を使ってOptimizeを配信するやり方は、**[Google公式から非推奨となっているので](https://support.google.com/optimize/answer/6314801?hl=ja)**、直接コードを埋め込みます。

---

## 環境構築をする

以下の方法で、ご使用中のMacに環境を構築していきます。  
既に環境構築済みの方は、こちらの項目は飛ばして読んでください。  
少し難しいかもしれませんが、頑張ってついてきてください😅

### ターミナルを起動する

まずは、ターミナルの起動を行います。  
Mac下部の「Launchpad」で、「terminal」と入力して出てきたアイコンを、クリックしてください。

![](/images/blog/2020.07.01_03-01.jpg)

### Homebrewのインストール

以下のコマンドを入力して、Homebrewをインストールします。

```shell
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

インストール後、以下のコマンドを入力して、Homebrewのバージョンが表示されたら、成功しています😊

```shell
$ brew -v
#> Homebrew 1.2.3
#> Homebrew/homebrew-core (git revision 7212; last commit 2017-07-02)
```

### Nodebrewのインストール

以下のコマンドを入力して、Nodebrewをインストールします。

```shell
$ brew install nodebrew
```

インストール後、以下のコマンドを入力して、Nodebrewのバージョンが表示されたら、成功しています😊

```shell
$ nodebrew -v
#> nodebrew 1.0.0
```

### Nodebrewを使える様にする

以下のコマンドをターミナル上で入力して、環境変数を追加します。

```shell
$ vi ~/.bash_profile
```

ターミナルの画面が変わったら、

1. キーボードの「I」を押す
2. 「export PATH=$HOME/.nodebrew/current/bin:$PATH」のコードを追加する。

以下の様な画像になっていればOKです。

![](/images/blog/2020.07.12_06-01.jpg)

コードを追加したら、

1. 「esc」キーを押す
2. 「:wq」と入力する
3. 「Enter」を押す

以上で、コードの保存が終わり、エディターが閉じます😊

### Nodebrewのセットアップ

以下のコマンドを入力して、先ほど作った`bash_profile`を反映させます。

```shell
$ source ~/.bash_profile
```

次に以下のコマンドを入力して、Nodebrewをセットアップします。

```shell
$ nodebrew setup
```

### Node.jsのインストール

以下のコマンドを入力して、Node.jsをインストールします。

```shell
$ nodebrew install-binary v12.13.1
```

次に以下のコマンドを入力して、インストールしたNode.jsを使える様にします。

```shell
$ nodebrew use v12.13.1
```

インストール後、以下のコマンドを入力して、Node.jsのバージョンが表示されたら、成功しています😊

```shell
$ node -v
#> v12.13.1
```

### Gatsby.jsのインストール

以下のコマンドを入力して、Gatsby.jsをインストールします。

```shell
$ npm install -g gatsby-cli
```

---

## プロジェクトを作成する

以下のコマンドを入力して、Gatsby.jsのプロジェクトを作成します。

```shell
$ gatsby new gatsby-project
```

`gatsby-project`の部分は、好きな名前に変更してください。

### ローカルサーバーを立ち上げる

ターミナルから以下のコマンドを入力して、作成したフォルダに移動します。

```shell
$ cd gatsby-project
```

移動後、以下のコマンドをターミナルで入力してください。  
入力後`http://localhost:8000`にアクセスして、下記の画面が表示されたら、正常にローカルサーバーが立ち上がっています😊

```shell
$ npm run dev
```

![](/images/blog/2020.07.20_01-01.jpg)

---

## Google Optimizeの準備をする

[オプティマイズスニペット](https://support.google.com/optimize/answer/6262084?hl=ja#get-optimize)と、~~[アンチフリッカースニペット](https://support.google.com/optimize/answer/7100284?hl=ja)~~を、```gatsby-ssr.js```に記載して、Google Optimizeを使う準備をします。  
Gatsbyならプラグインがありますが、Optimizeから警告が出たので、直接コードを埋め込みます。

```javascript
import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
 if (process.env.NODE_ENV === `production`) {
   setHeadComponents([
     // オプティマイズスニペット
     <script async src="https://www.googletagmanager.com/gtag/js?id=UA-........."></script>,
     <script
       dangerouslySetInnerHTML={{
         __html: `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'UA-.........', { 'optimize_id': 'GTM-.........'});
         `
       }}
     />
   ])
 }
}
```

### 追記

後述のカスタムイベントのタイミングでテストを開始する場合、アンチフリッカースニペットは必要ないみたいです。  
Optimizeのインストール診断をすると、アンチフリッカースニペットを埋め込む様推奨されますが、特に問題はありません。

![](/images/blog/2020.07.28_01-01.jpg)

---

## テストの有効化のタイミングを変更する

SPAの場合、デフォルトの設定であるページ読み込み時のままテストを行うと、*ページ読み込み時に一瞬テスト結果が反映され、その後JSでテスト結果が上書きされてしまいます。*  
そうなるとOptimize上では50/50ですが、**実際はオリジナルのデザインの描画が増えます。**  
*上書きされた場合でも、変更したBパターンとして記録されるので、数値に誤差が出ます。*

またSPAは読み込みが発生しないので、ページ読み込み時のままテストを行うと、*ページ遷移した際テスト結果が反映されません。*  
それでは困るので、有効化のタイミングを[カスタムイベント発火後](https://support.google.com/optimize/answer/7008840?hl=ja)に設定します。

### カスタムイベントを埋め込む

```javascript
dataLayer.push({'event': 'optimize.activate'});
```

上記のコードを、テストを行いたいページに埋め込みます。

```javascript
import React, { useEffect } from "react";

const IndexPage = ({ location }) => {
   useEffect(() => {
     window.dataLayer = window.dataLayer || [];
     window.dataLayer.push({'event': 'optimize.activate'});
   }, [location.pathname])
   return (
     <div>...</div>
   )
}
export default IndexPage;
```

### Google Optimize側の設定
エクスペリエンスを作成したら、テストの有効化のタイミングを```optimize.active```にします。

![](/images/blog/2020.07.28_01-02.jpg)

---

## デバックする

パターンを追加したら、正常に動作するかデバックします。

![](/images/blog/2020.07.28_01-03.jpg)

エラーが出なければ完了です😊

![](/images/blog/2020.07.28_01-04.jpg)
