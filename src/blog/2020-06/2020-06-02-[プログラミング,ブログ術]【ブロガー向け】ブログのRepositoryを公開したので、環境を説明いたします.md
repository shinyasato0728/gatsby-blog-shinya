---
path: /blog/environmental_explanation
date: 2020-06-02T18:00:00
thumbnail: /images/blog/2020.06.02_01-top.jpg
title: 【ブロガー向け】ブログのRepositoryを公開したので、環境を説明いたします
tags:
  - プログラミング
  - ブログ術
description: >-
  技術は「課題解決のための手段」でしかありません。技術そのものに価値はありません。そう思って今回、僕のブログのRepositoryを公開することにしました。合わせて使われている環境も、ご説明いたします。
---

こんにちは、シンヤです！

今回は*[ブログのRepositoryを公開したので](https://github.com/shinyasato0728/gatsby-blog-shinya)*、改めて環境を説明いたします。

技術は課題解決のための手段でしかありません。  
どうぞ煮るなり焼くなり、好きにして使ってください😆

---

## 使われている技術は以下の通り

このブログで使われている技術は、以下になります。

- *Gatsby*
- *PostCSS*
- *Google Analytics*
- *Google Search Console*
- *Google Optimize*
- *Netlify*
- *Netlify CMS*

です。  
それぞれ詳しく解説していきます。

---

## Gatsby

![](/images/blog/2020.04.18-01.jpg)

Gatsbyとは、*「JavaScriptを使ってアプリっぽいブログが作れるツール」*です。

このブログ、結構ぬるぬる動くと思いませんか？  
それは、GatsbyがJavaScriptを使って、スマホアプリみたいにページを切り替えているからです。   
JavaScriptを使って、アプリっぽい動きができるWebサイトのことを、**「Webアプリ」**と言います。

---

## PostCSS

![](/images/blog/2020.04.18-02.jpg)

PostCSSとは、*「JavaScriptを使って、書いたCSSを書き出すことができるツール」*です。

CSSはそのまま書くと書きづらいので、SassやPostCSSみたいに、CSSを書きやすくするためのツール（AltCSSと言います）を使って、書くことが多いです。  
PostCSSは、欲しい機能を自分で探して、自分で使いやすい「CSS書き出しツール」を作っていけるツールです。

書いたソースコードを別の言葉に書き換えてくれるものを、「プリプロセッサー」。   
ソースコードを書き換える行為を、「コンパイル」と言います。

つまり、PostCSSは、**「書いたソースコードをCSSにコンパイルしてくれる、プリプロセッサー」**ということになります。

---

## Google Analytics

![](/images/blog/2020.04.18-03.jpg)

Google Analyticsとは、*「Webサイトを分析できる、Googleが無料で提供しているツール」*です。

聞いたことある人も多いと思います。  
Webサイトの訪問者を見たり、どこのページを見ているか見たり、特別な処理（アクション）を仕込めば、どのボタンがどれぐらい押されたのかも見ることができます。

---

## Google Search Console

![](/images/blog/2020.04.18-04.jpg)

Google Search Consoleは、*「ブログを見に来た人が、どんな検索キーワードでたどり着いたのかを見ることができるツール」*です。

検索キーワードはGoogle Analyticsでは確認できないので、Search Consoleも一緒に使っていきます。  
ただし、Google Analyticsより数字が正確ではないなどの、欠点もあります。

---

## Google Optimize

![](/images/blog/2020.04.18-05.jpg)

Google Optimizeとは、*「Googleが提供している、A/Bテストをすることができるようになるツール」*です。

A/Bテストとは、2つの違うデザインのうち、どちらが良い結果を出したか検証するものです。  
場合によっては、3パターンや4パターン同時にテストすることもあります。

---

## Netlify

![](/images/blog/2020.04.18-06.jpg)

Netlifyとは、*「設定するだけで、作ったWebアプリを簡単に公開してくれる、Webサービス」*です。

Webアプリは作ったら、サーバーを借りて設定をしないと、インターネットに公開することができません。  
さらにWebアプリの場合、サーバーに設置した後に、公開するためのコマンドを入力しないと、Webアプリを動かすことができません。

Netlifyは、Webアプリを公開するために必要なサーバーを、無料で貸してくれて、なおかつコマンドを入力してインターネットに公開することまで、設定するだけで全部自動的にやってくれる、Webサービスです。

---

## Netlify CMS

![](/images/blog/2020.04.18-07.jpg)

Netlify CMSとは、*「Netlifyが無料で提供している、WebアプリにCMSを組み込むことができるWebサービス」*です。

GatsbyはWordPressとは違い、*CMS機能がありません。*  
しかし、Netlify CMSやその他CMSのみを提供しているWebサービスがあるので、それらと連携することで、CMS機能を実装することができます。

---

## 最後に

冒頭でもお伝えした通り、*技術は「課題解決のための手段」でしかありません。*  
技術そのものに価値はなく、**「技術を使ってどんな課題を解決するか」**に価値があると思っています。  
なので今回、隠すことなくRepositoryを公開しました。

ブログ業界は何年もWordPressからアップデートが行われていないので、これを機に技術がアップデートされてほしいと思っています。

では、僕は今日新しく投稿されたフェルミ研究所の動画を見ながら寝ます😴  
僕は[マッチングアプリをやってたので](/service/dating_app_cheats)、この男の子の気持ちすごいわかります😅

<div class="post__movie--wrap">
  <iframe src="https://www.youtube.com/embed/ic5az_JDax8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

ではでは、またねー😀
