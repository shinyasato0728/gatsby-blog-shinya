---
path: /programming/create_react_project
date: 2020-07-14T19:00:00
thumbnail: /images/blog/2020.07.12_01-top.jpg
title: 【月単価90万エンジニアへの道】create-react-appを使って、簡単にReactのプロジェクトを作る
tags:
  - デザイン
  - プログラミング
  - 教育
description: >-
  今回は人気のJavaScriptフレームワークである「React」を使って、かんたんにプロジェクトを作る方法について、ご説明したいと思います。Reactは、学習コストは高いですが、処理速度の高さと拡張性の高さにより、人気の高いJavaScriptフレームワークです。
---

こんにちは、シンヤです！

今回は、*【月単価90万エンジニアへの道】create-react-appを使って、簡単にReactのプロジェクトを作る*というテーマで、お話しいたします。  
なお、以下に解説するやり方はMacでのやり方となります。

---

## Reactとは？

Reactとは、*「JavaScriptを使って、Webでアプリを作ることができる便利な道具集」*のことです。

この様なアプリを作るために作られた道具集を、専門用語で*「フレームワーク」*といいます。  
つまりReactとは、**「Webアプリを作ることができる、JavaScriptフレームワーク」**の一つです。

[以前紹介した、Vue.js](/programming/vuecli_project)の仲間です😊

このブログも、Reactを応用した技術で作られています😊

### Reactの特徴

<ul class="arrow--ul">
  <li><em>JSX</em></li>
  <ul>
    <li>JavaScriptの中にHTMLを書く、「JSX」という特殊な文法でコードを書いていきます。</li>
  </ul>
  <li><em>処理が高速</em></li>
  <ul>
    <li>「仮想DOM」という技術を使い、部分的に表示を切り替える事で、高い処理速度を実現しています。</li>
  </ul>
  <li><em>コンポーネントの管理がしやすい</em></li>
  <ul>
    <li>複雑な条件も記載でき、かつコンポーネントに条件も記載できるので、複雑な計算式もコンポーネントにまとめて管理ができます。</li>
  </ul>
  <li><em>拡張性が高い</em></li>
  <ul>
    <li>React様に開発されたプラグインが、npmにたくさんアップロードされています。</li>
  </ul>
  <li><em>Facebook製</em></li>
  <ul>
    <li>Facebook社が開発を行っているので、信頼度が高いフレームワークとなっております。</li>
  </ul>
  <li><em>日本語のドキュメントが少ない</em></li>
  <ul>
    <li>Facebook公式が開発しているため、日本語のドキュメントは少ないです。</li>
  </ul>
  <li><em>学習コストが高い</em></li>
  <ul>
    <li>日本語のドキュメントの少なさに加えて、条件式とHTMLを一緒のコンポーネントに書くJSX独特の文法に慣れるのに、多少時間がかかります。</li>
  </ul>
</ul>

---

## 環境構築をする

以下の方法で、ご使用Macに環境を構築していきます。  
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

---

## プロジェクトを作成する

以下のコマンドを入力して、Reactのプロジェクトを作成します。

```shell
$ npx create-react-app react-project
```

`react-project`の部分は、好きな名前に変更してください。  

### ローカルサーバーを立ち上げる

ターミナルから以下のコマンドを入力して、作成したフォルダに移動します。

```shell
$ cd react-project
```

移動後、以下のコマンドをターミナルで入力してください。  
下記の画面が自動的に表示されたら、正常にローカルサーバーが立ち上がっています😊

```shell
$ npm run start
```

![](/images/blog/2020.07.12_01-01.jpg)

---

## 改造してみる

ローカルサーバーを立ち上げられたら、実際に改造してみましょう😊  
フォルダの中の`src`に移動してください。  
この中の、`index.js`というファイルを、以下の様に変更してください😀

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <main>
      <h1 className="header">Hello World!</h1>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
```

JSXではHTMLのclassは、**className**と表記します。  
*これはJavaScriptのclassと区別するためです。*  
初めてのJSXだとつまづいてしまいやすいポイントなので、覚えておきましょう😊

### ファイルを作って読み込んでみる

`src`フォルダの中に、`hello.css`ファイルを作って、以下の様に編集してください。

```css
body {
  background: #20232a;
  color: #ffffff;
}

main {
  text-align: center;
}

a {
  color: #ffffff;
}
```

作成したら、以下の様にコードを編集して、CSSを読み込んでみましょう。

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './hello.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <main>
      <h1 className="header">Hello World!</h1>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
```

以下の様に、背景が青黒色になって、白文字の「Hello World!」が表示されていたら、正常にCSSが読み込まれています😊

![](/images/blog/2020.07.12_02-01.jpg)

---

## Componentを作ってみる

ReactにはVueと同じ様に、*部品（Component）を作る機能があります。*  
これを使う事で、

- Header
- Footer
- Sidebar
- Navigation

などなど、**部品を切り分けて、画面毎に呼び出して使うことができます。**  
これにより、

- *部品の管理がやりやすくなり*
- *作るファイルが少なくなる*
- *それぞれの画面で部品を使いまわせる*
- *複数人でのファイル管理がやりやすくなる*

などのメリットがあります。

### Headerを作ってみる

早速、HeaderをComponentで作ってみましょう😊  
`src`フォルダに新しく`components`フォルダを作成してください。  
その後、`components`フォルダに、`Header.js`ファイルを作成します。

次に作った`Header.js`ファイルに、以下のコードを追加します。

```javascript
import React from 'react';

const Header = () => {
  return (
    <header>Headerです</header>
  )
}

export default Header;
```

### Headerを呼び出してみる

`iidex.js`に以下のコードを追加して、作ったHeaderを呼び出してみましょう。

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './hello.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <main>
      <Header />
      <h1 className="header">Hello World!</h1>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
```

以下の画像の様に、Headerが呼び出されていたら成功です😊

![](/images/blog/2020.07.12_03-01.jpg)

---

## 複数のComponentを管理してみる

Reactには一つのファイルで、複数のComponentを管理することができます。  
これにより、同じ様なComponentを一つのファイルにまとめることができます😊  
早速使ってみましょう！

`components`フォルダに、`Tabs.js`ファイルを作成します。  
作成したら、以下のコードを追加します。

```javascript
import React from "react";

export const Tabs1 = () => {
  return (
    <nav>
      Tab1です
    </nav>
  )
}

export const Tabs2 = () => {
  return (
    <nav>
      Tab2です
    </nav>
  )
}
```

作成したら以下のコードを`index.js`に追加して、Componentを読み込んでみましょう。

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import {
  Tabs1,
  Tabs2
} from './components/Tabs';
import './hello.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <main>
      <Header />
      <Tabs1 />
      <Tabs2 />
      <h1 className="header">Hello World!</h1>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
```

---

## ページを作ってみる

次は他のページを作ってみましょう😊  
`src`に新しく`pages`というフォルダを作成します。  
そのフォルダの中に、

- About.js
- Policy.js

というファイルを作ります。

### About.js

以下の様にコードを書いてください。

```javascript
import React from "react";

const About = () => {
  return (
    <div>
      Aboutページです
    </div>
  )
}

export default About;
```

### Policy.js

以下の様にコードを書いてください。

```javascript
import React from "react";

const Policy = () => {
  return (
    <div>
      Policyページです
    </div>
  )
}

export default Policy;
```

---

## ルーティングを設定してみる

ルーティングとは、*「どのページがどのURLに対応するのか、指定する事」*をいいます。  
Webアプリは普通のHTMLと違い、**ページを追加してURLを入力しただけでは、ページ遷移することはできません。**  
*必ずルーティングを設定して、ページのURLを指定する必要があります。*

ここから先は、少し難しいかもしれませんが、頑張ってついてきてください😅

### react-router-domを使う

ターミナルで以下のコードを入力して、**react-router-dom**をインストールします。

```shell
$ npm install react-router-dom
```

インストールしたら、`src/components/Tabs.js`ファイルを、以下の様に修正してください。

```javascript
import React from "react";
import { Link } from 'react-router-dom'

export const Tabs1 = () => {
  return (
    <nav>
      <Link to="/About">About</Link>
    </nav>
  )
}

export const Tabs2 = () => {
  return (
    <nav>
      <Link to="/Policy">Policy</Link>
    </nav>
  )
}
```

### index.jsの設定を変更する

`src/index.js`に以下のコードを追加して、画面遷移が行える様にします。

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import {
  Tabs1,
  Tabs2
} from './components/Tabs';
import About from './pages/About';
import Policy from './pages/Policy';
import './hello.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <main>
      <Header />
      <h1 className="header">Hello World!</h1>
      <Router>
        <div>
          <Tabs1 />
          <Tabs2 />
          <Route path='/About' component={About}/>
          <Route path='/Policy' component={Policy}/>
        </div>
      </Router>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
```

リンクをクリックすると、`<Route />`の中の画面が変更されています。
URLもきちんと変更されます😊  
リンクをクリックして、以下の画面が出たら成功しています。

![](/images/blog/2020.07.12_04-01.jpg)

---

## 最後に

今回は軽くReactについて触れて、かんたんなプロジェクトを作ってみました。  
Reactは**「Single Page Application（SPA）」**と呼ばれる技術を使っています。  
SPAには、

- *非同期通信による滑らかな画面遷移*
- *ネイティブアプリと遜色がないUX*
- *APIによる高い拡張性*

などの特徴があります。  
*これを使えば、WordPressなどではできなかった、いろいろなことができる様になります。*

*フロントエンドエンジニアが凄い足りなくて、フリーランスのフロントエンドエンジニアの単価は、めちゃくちゃ高いです❗️*  
例を挙げると、レバテックフリーランスで検索すると、Reactを使うエンジニアの単価は大体**「月60万〜90万」**ぐらいみたいですね😊

![](/images/blog/2020.07.12_05-01.jpg)

これだけもらえるなんて、いいな〜  
僕もフロントエンドエンジニアに転職しようかなぁ😅

学ぶものも多いですが、*[FrontHacksさん](https://yukisako99.com/l/c/5Epv56rN/qrNxh3UK)*が、そこらへんを漏れなく全て教えてくれている、動画教材をご用意されています😊  
特徴として、

<ul>
  <li class="u-mb-16">「MENTA」という教わりたい人と教える人のマッチングサービスで、<em>1位のエンジニア</em>が教えてくれる</li>
  <li class="u-mb-16">主要なフロントエンドの技術である、「React」「Vue」2つの動画講座がある</li>
  <li class="u-mb-16">質問し放題</li>
  <li class="u-mb-16"><em>352本</em>の動画本数</li>
  <li>ソースコードのバージョン管理である「Git」も教えてくれる</li>
  <ul class="u-bg-reset u-m-reset u-mb-16 u-pa-reset u-list-none">
    <li class="u-list-arrow">現場に入るには必須の技術です</li>
  </ul>
  <li>他の教材ではなかなか教えてくれない、「テストコードの書き方」も教えてくれる</li>
  <ul class="u-bg-reset u-m-reset u-pa-reset u-list-none">
    <li class="u-list-arrow">現場に入るには必須の技術です</li>
  </ul>
</ul>

などなど、結構数え切れないぐらいの特徴がありますね〜  
*お値段は「15万円」と少々高額ですが、動画の本数と、実践に近いカリキュラム、実績がある講師の方が教えてくれるのだから、とても安いものだと思います😊*  
月90万円の単価が取れるエンジニアになれば、余裕で回収できますからね〜

なお、今回記事にさせていただきましたソースコードは、[こちらのRepository](https://github.com/shinyasato0728/react-project-sample)に公開しております。

ではでは、またね〜🤗
