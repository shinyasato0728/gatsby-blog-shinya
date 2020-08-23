---
path: /wordpress/not_wordpress_merit
date: 2020-08-08T19:00:00
thumbnail: /images/blog/2020.08.08_01-top.jpg
title: 脱WordPressなブログを目指してわかった3つのメリット【現代では超レガシーな技術です】
tags:
  - WordPress
  - ブログ術
description: >-
  僕のブログはReact.jsという技術を用いて作られているフレームワーク、「GatsbyJS」で運用されています。作る時から脱WordPressを目指しました。今回は脱WordPressを目指してわかったメリットを、3つほど解説いたします。
---

こんにちは、シンヤです！

今回は、*脱WordPressなブログを目指してわかった3つのメリット【現代では超レガシーな技術です】*というテーマで、お話しいたします。

---

## 脱WordPressのメリット3つ

![](/images/blog/2020.08.08_01-01.jpg)

具体的には下記の通りです。

1. *ハッキングされるリスクがほぼない*
2. *表示速度が速い*
3. *Webアプリ化できる*

です。  
それぞれ詳しく以下に解説いたします。

---

## 1. ハッキングされるリスクがほぼない

なぜハッキングされるリスクがほぼないのかというと、

1. データベース自体が存在していないから
2. 管理画面が存在していないから

になります。  
詳しく解説いたします。

### 1. データベースが存在していないから

データベースとは、文字通りデータを格納している格納庫のようなものです。  
WordPressの記事の内容は、このデータベースに格納されています。  

> WordPressはデータベースに格納されている内容を引っ張ってきて、記事として表示させているのです。

つまりデータベースがないということは、*ネットに野晒しにされっぱなしのデータが存在しないということ*です。  
大事な情報がネットに晒されていないから、そもそもハッキングされる情報が存在しないのです😊

このブログは、Markdownで記事を書いています。  
つまりブログにとって一番大事な「記事のデータ」は、ブログ本体と同じMarkdownファイルとなって格納されています。

### 2. 管理画面が存在していないから

WordPressの管理画面は、実に簡単な方法でアクセスできてしまいます。  
URLを変えるなどの対策を施していないと、

#### ブログのドメイン/wp-admin

と入力するだけで、かんたんに管理画面へアクセスできちゃいます。  

> あとはログインIDとパスワードを解析すれば、ネットに詳しい悪い人たちならアクセスできちゃいます😱  
> 2段階認証や文字認証を施していても、安全とはいえません😓

例えば僕のブログがWordPressで運用されているなら、`https://shinya-it.com/wp-admin`と入力するだけで、*管理画面にアクセスできちゃいます。*  
（このブログはWordPressで運用されていないので、実際に上記のURLを入力しても意味はありません😅）

記事をMarkdownで書けば管理画面は必要ありません。  
なぜかというと、このブログで実際に使われている以下のコードを見ていただきたいのですが、

```markdown
---
path: /wordpress/not_wordpress_merit
date: 2020-08-08T19:00:00
thumbnail: /images/blog/2020.08.08_01-top.jpg
title: 脱WordPressなブログを目指してわかった3つのメリット【現代では超レガシーな技術です】
tags:
  - WordPress
  - ブログ術
description: >-
  僕のブログはReact.jsという技術を用いて作られているフレームワーク、「GatsbyJS」で運用されています。作る時から脱WordPressを目指しました。今回は脱WordPressを目指してわかったメリットを、3つほど解説いたします。
---

こんにちは、シンヤです！

今回は、*脱WordPressなブログを目指してわかった3つのメリット【そもそも現代では超レガシーな技術です】*というテーマで、お話しいたします。
```

それぞれ英語から何を表しているか、わかりやすいのではないかと思います。  
具体的にいうと、

<ul class="u-pa-reset u-pa-24 u-pt-16 u-pb-16 u-list-none">
  <li><em>path</em></li>
  <ul class="u-bg-reset u-m-reset u-mb-24 u-pa-reset u-list-none">
    <li class="u-list-arrow">ページのpath（URL）です</li>
  </ul>
  <li><em>date</em></li>
  <ul class="u-bg-reset u-m-reset u-mb-24 u-pa-reset u-list-none">
    <li class="u-list-arrow">ブログを投稿した日時です</li>
  </ul>
  <li><em>thumbnail</em></li>
  <ul class="u-bg-reset u-m-reset u-mb-24 u-pa-reset u-list-none">
    <li class="u-list-arrow">一覧画面やOGP、ファーストビューの写真です</li>
  </ul>
  <li><em>title</em></li>
  <ul class="u-bg-reset u-m-reset u-mb-24 u-pa-reset u-list-none">
    <li class="u-list-arrow">ブログのタイトルです</li>
  </ul>
  <li><em>tags</em></li>
  <ul class="u-bg-reset u-m-reset u-mb-24 u-pa-reset u-list-none">
    <li class="u-list-arrow">タイトルや記事の一番下に表示される、ブログのタグです</li>
  </ul>
  <li><em>description</em></li>
  <ul class="u-bg-reset u-m-reset u-pa-reset u-list-none">
    <li class="u-list-arrow">一覧画面やOGPの、description（説明文）です</li>
  </ul>
</ul>

つまり、*管理画面で入力する情報が、そのままMarkdownで入力できちゃうんですよね。*  
だから僕のブログの場合、そもそも管理画面がいらないのです😊

<hr class="u-bt-lightest u-mt-48 u-mb-48">

ちなみにこのブログをハッキングするには、

#### Repositoryを管理している、Gitのアカウントをハッキングする

必要があります。  
具体的には、以下のような手順を踏む必要があります。

1. このブログのRepositoryが、どんなサービスで運用されているか特定する
2. 僕のアカウントを特定する
3. 2段階認証されている、僕のアカウントをハッキングする

上記3つの手順を踏む必要があります。  
*もう1の段階で結構大変なのがお分かりいただけると思います😊*

> ちなみによく使われているだろう、「Github」ではありません。  
> 僕はプライベートはGithub、その他のセキュアにしたいものは別サービスと、使い分けています😊

---

## 2. 表示速度が速い

WordPressはページを表示前に、WordPressを構成する要素をいくつも読み込まないといけないので、*表示速度が遅いです。*  
DBから記事を表示させる作りも、*記事をDBから引っ張ってこないといけないので*、表示速度の遅さに拍車をかけています。

軽くする手段はいくつかありますが、全てWebサイト作りの技術が必要になってくるので、初学者の方々では対応は少し難しいかなと思います。  
表示速度を軽くする例を挙げると、

- CSSの軽量化
- HTMLの軽量化
- 画像の軽量化
- Lazyloadの導入
- Webフォントの削除

などが一般的だと思います。  
どれも対応するには、結構技術について深く理解しないといけません😅

### 表示速度が速いことはSEO対策にもなる

**表示速度は、Googleが検索順位の優先位付けに使用すると公言しております。**  
つまり、表示速度を軽くすることそのものが、SEO対策になります😊

<img class="u-b-lighter" src="/images/blog/2020.07.24_01-01.jpg" alt="">

---

## 3. Webアプリ化できる

このブログでは以下の技術とフレームワークが使われています。

- 使われている技術：*React.js*
- フレームワーク：*GatsbyJS*

### React.js

React.jsは、*Webアプリを作るために生まれた、JavaScriptをルーツとする開発言語です。*  
React.jsについては、以前開設いたしましたこちらの記事もご参照ください😊

#### [【月単価90万エンジニアへの道】create-react-appを使って、簡単にReactのプロジェクトを作る](/programming/create_react_project)

React.jsには、主に以下のような特徴があります。

<ul class="u-pa-reset u-pa-24 u-pt-16 u-pb-16 u-list-none">
  <li><em>JSX</em></li>
  <ul class="u-bg-reset u-m-reset u-mb-24 u-pa-reset u-list-none">
    <li class="u-list-arrow">JavaScriptの中にHTMLを書く、「JSX」という特殊な文法でコードを書いていきます。</li>
  </ul>
  <li><em>処理が高速</em></li>
  <ul class="u-bg-reset u-m-reset u-mb-24 u-pa-reset u-list-none">
    <li class="u-list-arrow">「仮想DOM」という技術を使い、部分的に表示を切り替える事で、高い処理速度を実現しています。</li>
  </ul>
  <li><em>コンポーネントの管理がしやすい</em></li>
  <ul class="u-bg-reset u-m-reset u-mb-24 u-pa-reset u-list-none">
    <li class="u-list-arrow">複雑な条件も記載でき、かつコンポーネントに条件も記載できるので、複雑な計算式もコンポーネントにまとめて管理ができます。</li>
  </ul>
  <li><em>拡張性が高い</em></li>
  <ul class="u-bg-reset u-m-reset u-mb-24 u-pa-reset u-list-none">
    <li class="u-list-arrow">React様に開発されたプラグインが、npmにたくさんアップロードされています。</li>
  </ul>
  <li><em>Facebook製</em></li>
  <ul class="u-bg-reset u-m-reset u-mb-24 u-pa-reset u-list-none">
    <li class="u-list-arrow">Facebook社が開発を行っているので、信頼度が高いフレームワークとなっております。</li>
  </ul>
  <li><em>日本語のドキュメントが少ない</em></li>
  <ul class="u-bg-reset u-m-reset u-mb-24 u-pa-reset u-list-none">
    <li class="u-list-arrow">Facebook公式が開発しているため、日本語のドキュメントは少ないです。</li>
  </ul>
  <li><em>学習コストが高い</em></li>
  <ul class="u-bg-reset u-m-reset u-pa-reset u-list-none">
    <li class="u-list-arrow">日本語のドキュメントの少なさに加えて、条件式とHTMLを一緒のコンポーネントに書くJSX独特の文法に慣れるのに、多少時間がかかります。</li>
  </ul>
</ul>

### GatsbyJS

GatsbyJSとは、*React.jsを元にして作られた、主にブログを作るためのフレームワークです。*  
このブログも、GatsbyJSで作られております。  
GatsbyJSについては、以前開設いたしましたこちらの記事もご参照ください😊

#### [【月単価90万+αのエンジニアへの道】Gatsby.jsを使って、簡単にイケてるブログを作る](/programming/gatsby_project)

GatsbyJSには、主に以下のような特徴があります。

<ul class="u-pa-reset u-pa-24 u-pt-16 u-pb-16 u-list-none">
  <li><em>データベースなしでブログが作れる</em></li>
  <ul class="u-bg-reset u-m-reset u-mb-24 u-pa-reset u-list-none">
    <li class="u-list-arrow">サーバー代やメンテナンスコストがかかりません。</li>
  </ul>
  <li><em>SPAでブログが作れる</em></li>
  <ul class="u-bg-reset u-m-reset u-mb-24 u-pa-reset u-list-none">
    <li class="u-list-arrow">非同期通信であるSPAを使って、スマホアプリと同じように滑らかなブログが作れます。</li>
  </ul>
  <li><em>デザインを自由に切り替えられる</em></li>
  <ul class="u-bg-reset u-m-reset u-mb-24 u-pa-reset u-list-none">
    <li class="u-list-arrow">WordPressと同じように、テーマを切り替える事でデザインも自由に変えられます。</li>
  </ul>
  <li><em>ルーティングを自動で行ってくれる</em></li>
  <ul class="u-bg-reset u-m-reset u-mb-24 u-pa-reset u-list-none">
    <li class="u-list-arrow">個別で指定したルーティングを、Gatsby.jsは自動的に行ってくれます。</li>
  </ul>
  <li><em>プラグインがある</em></li>
  <ul class="u-bg-reset u-m-reset u-mb-24 u-pa-reset u-list-none">
    <li class="u-list-arrow">Gatsby.jsには便利なプラグインが、たくさん用意されています。</li>
  </ul>
  <li><em>初学者向けではない</em></li>
  <ul class="u-bg-reset u-m-reset u-mb-24 u-pa-reset u-list-none">
    <li class="u-list-arrow">React.js自体が「JSX」という特殊な文法でコードを書いていく為、初学者の方は対応は難しくなっています。</li>
  </ul>
  <li><em>Webサービス作りには向いていない</em></li>
  <ul class="u-bg-reset u-m-reset u-pa-reset u-list-none">
    <li class="u-list-arrow">フレームワーク外の事は行いにくく、かつブログ作成に特化している為、Webサービス作りには向いていない。</li>
  </ul>
</ul>

GatsbyJSを使うと*ブログをWebアプリにして発信できるので、ストレスがない高いUXが実現できます。*  
このブログの動作は、結構サクサクで快適だと思います😊

---

## そろそろWordPressは地球上から消えてなくなってほしい

![](/images/blog/2020.08.08_01-02.jpg)

これは嘘偽りなく直接言葉にした場合の、僕の心情を吐露しています😅  

> WordPressは現代では時代錯誤もいいところの「超レガシーな技術」なので、個人的には地球上から撲滅したいと思っております。

でないといつまでたっても、*既存の技術のデメリットを解消した新しい技術が、世の中に日の目を浴びる事もなく埋もれちゃう*んですよね。  
それはIT業界の発展も妨げるし、より良い技術で様々な人々の課題を解決することもできないので、非常によろしくない事態だと僕は思うわけです😅

それかもしくは、*新しい技術を積極的に取り入れて、モダンなフレームワークとして生まれ変わってほしい*と切に願っています😊  

> エディターは「Gutenberg」からReact.jsになったので、だいぶ進化しましたけどね。  
> それができるなら、いい加減表側もReact.jsに生まれ変わってほしいです😅

ので僕は、**WordPressの案件は「絶対に」仕事を受け付けておりません。**  
早くWordPressを撲滅させて、Web業界のデファクトスタンダードを塗り替えたいと思っているので😊  
やっている仕事が主にアプリのPdMなので、やる必要がないというのも大きいです😅

ではでは、またね〜🤗
