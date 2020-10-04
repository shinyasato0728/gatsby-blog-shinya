---
path: /wordpress/demerit_resolution
date: 2020-07-26T19:00:00
thumbnail: /images/blog/2020.07.26_01-top.jpg
title: WordPressのデメリットを解消できる、おすすめのフレームワーク2選【Static Site Generator】
tags:
  - WordPress
  - ブログ術
description: >-
  WordPressは世界中で使われているブログを作れるフレームワークです。ですがWordPressには、現行のWebサイトと比較すると致命的なデメリットがあります。それは「DB（データベース）を使っていること」です。この記事ではDBを使うリスクと、DBを使わなくてもブログが作れるシステムについて、解説いたします。
---

こんにちは、シンヤです！

今回は、*WordPressのデメリットを解消できる、おすすめのフレームワーク2選【Static Site Generator】*というテーマで、お話しいたします。

---

## 全てはDB（データベース）につながっているのが悪い

![](/images/blog/2020.07.26_01-01.jpg)

結論から言うと、WordPressのデメリットは上記の通りです。  
技術は日々進歩していて、実はDBを使わなくてもブログを作れる技術は数多くあります。  
そして、DBに繋ぐのは色々とリスクがあるのです。  
例を挙げると、

1. *ハッキングリスクがある*
2. *表示速度が遅い*
3. *移行コストが高い*

です。  
**WordPressのトラブルは、ほとんどがこのDBに繋がっているせいで起こっています😅**  
以下に詳しく解説いたします。

---

## 1. ハッキングリスクがある

DB（データベース）とは文字通り、*「ネット上にデータを格納した基地がある」*というイメージを持っていただければ、分かりやすいと思います😊

つまりDBを使うということは、**第三者に悪戯されたり、データを盗まれたり壊されたりする可能性があります。**  
これを、*「ハッキング」*といいます。

決済を使ったり、会員登録をしたりするような、ユーザーから情報を入力するWebサービスの場合、DBが必要です。  
なぜなら、*ユーザーが情報を入力したら、それを格納する場所が必要だからです。*

ですが、ブログは「個人が第三者に向けて情報を発信するメディア」です。  
*自分で発信する情報をコントロールできるので、本来DB自体必要ありません😅*  
必要ないのに記事の情報をDBへ入れて野晒しにして、危険に晒しながらブログを運営しているようなものです😨

これを回避するには、DBを守るシステムを組み込む必要があります。  
ですが、*これは難易度が非常に高いです😨*  
エンジニア系インフルエンサーで有名な「マナブ」さんでも、対応は難しいと思います。  
まとめると、

#### テクノロジーが発達した現代では、ブログにDBを使うのはリスクが高すぎる

ということです。  
*現代ではDBを使わずにブログは作れるので、WordPressは運営上のリスクが結構高いのです。*  
かくいうこのブログも、DBは使っておりません😊

---

## 2. 表示速度が遅い

WordPressはページを表示前に、WordPressを構成する要素をいくつも読み込まないといけないので、*表示速度が遅いです。*  
DBから記事を表示させる作りも、*記事をDBから引っ張ってこないといけないので*、表示速度の遅さに拍車をかけています。

軽くする手段はいくつかありますが、全てWebサイト作りの技術が必要になってくるので、初学者の方々では対応は少し難しいかなと思います。  
表示速度を軽くする例を挙げると、

- *CSSの軽量化*
- *HTMLの軽量化*
- *画像の軽量化*
- *Lazyloadの導入*
- *Webフォントの削除*

などが一般的だと思います。  
どれも対応するには、結構技術について深く理解しないといけません😅

**表示速度は、Googleが検索順位の優先位付けに使用すると公言しております。**  
つまり、表示速度を軽くすることそのものが、SEO対策になります😊

<img class="u-b-lighter" src="/images/blog/2020.07.24_01-01.jpg" alt="">

---

## 3. 移行コストが高い

WordPressはDBに記事を格納している都合上、*サーバーを変えたらDBのデータを移行しないといけません。*  
具体的な手順を言うと、

#### DBを別のサーバーに移行する場合

1. 移行前のDBから、*SQLファイルをダウンロード*
2. 移行後のサーバーに、*DBを作成*
3. 移行後のサーバーに、*SQLファイルをエクスポート*
4. WordPressのwp-config.phpを開き、*DBの設定を変更する*

手順だけ書くと簡単そうですが、*失敗が許されないので、クライアントワークなどの場合は結構神経を使う作業です。*

---

## DBを使わなくてもブログが作れる

これがこの記事の本題でもあります。  
**今はDBを使わなくても、ブログを作ることができます。**  
専門的にいうと、このような技術のことを、

#### 静的サイトジェネレーター（SSG）

といいます。  
*このブログも、SSGで作られています。*  
これからこのSSGについて、以下に詳しく解説していきます。

---

## 静的サイトジェネレーター（SSG）とは

![](/images/blog/2020.07.26_01-02.jpg)

*静的サイトジェネレーター（Static Site Generator）*とは、前述申し上げた通り、

#### DBを使わずにブログサイトを作ることができる技術

です。  
*これがあるからこそ、WordPressのデメリットを解消できるブログを作ることができます。*  
つまり、前述のデメリットを逆転させればいいので、SSGのメリットは、

1. *DBがないのでハッキングリスクが低い*
2. *表示速度が速い*
3. *移行リスクが低い*

ということです。  
以下に詳しく解説いたします。

---

## 1. DBがないのでハッキングリスクが低い

DBがあるとハッキングリスクがあるのは、先ほどご説明した通りです。

SSGは*Markdown（マークダウン）でブログ記事を書く*ので、**そもそものDB自体が存在しません。**  
DBがないので、ブログがハッキングされて記事が全て消されるみたいな、事故が起こる事も限りなく低くなります。

外部からのハッキングリスクが低いことを、IT業界では*「セキュア」*といいます。  
意味は文字通り、「安全な」という意味です。  
「絶対とは言えないけど、限りなく安全な環境」という意味で使われます。  
**SSGならDBがないので、セキュアな環境が作れるということです😊**

---

## 2. 表示速度が速い

SSGは、

- *限りなくページを軽く圧縮してくれる*
- *DBがないので記事の表示速度も速い*

というメリットもあります。  
表示速度が速くなれば、

- *検索順位が上がりやすくなる*
- *ページがすぐ表示されるので、読者にも優しい*

というメリットがあります😊

---

## 3. 移行リスクが低い

SSGは記事をMarkdownで書くので、*記事もブログの一部として取り込まれていきます。*  
ということは、**ブログ本体のデータをダウンロードするだけで、環境の移行が完了します😊**  
厳密には、

- 開発環境を構築する
- Netlifyの設定をする

という作業がありますが、*DBと違いいくらでもやり直しができる*ので、移行リスクは限りなく低いです😊

---

## SSGの比較

ここまでSSGのメリットを書きました。  
次は、SSGにはどんな種類があるか、解説いたします😊

SSGにもたくさん種類がありますが、代表的なのは、

#### [HUGO](https://gohugo.io/)
#### [Gatsby](https://www.gatsbyjs.org/)

この2つになるかと思います。  
以下に詳しく解説いたします。

### [HUGO](https://gohugo.io/)

![](/images/logo/logo_hugo.svg)

HUGOとは、Go言語制のSSGです。  
メリットとして、

- *開発環境の動作が非常に速い*
- シンプルなHTMLを生成するだけなので、*表示速度が非常に速い*
- WordPressと同じように、*テーマを入れ替えてデザインを変えられる*
- *比較的学習コストが低い*

反面デメリットとして、

- HUGOの求人はほぼないので、*実務では役立ちにくい*

があげられます😅  
具体的にまとめると、以下のようになります。

<dl>
  <dt class="u-w-30 u-fs-13 u-d-flex u-ta-l u-ai-c u-fw-m u-ta-l">使用技術</dt>
  <dd class="u-w-70 u-bt-reset">Go言語</dd>
  <dt class="u-w-30 u-fs-13 u-d-flex u-ta-l u-ai-c u-fw-m u-bt-lighter">動作速度</dt>
  <dd class="u-w-70">速い</dd>
  <dt class="u-w-30 u-fs-13 u-d-flex u-ta-l u-ai-c u-fw-m u-bt-lighter">表示速度</dt>
  <dd class="u-w-70">速い</dd>
  <dt class="u-w-30 u-fs-13 u-d-flex u-ta-l u-ai-c u-fw-m u-bt-lighter">種類</dt>
  <dd class="u-w-70">Webサイト：基本的に見た目は変わらない（静的なもの）</dd>
  <dt class="u-w-30 u-fs-13 u-d-flex u-ta-l u-ai-c u-fw-m u-bt-lighter">デザインの変更</dt>
  <dd class="u-w-70">テーマを変えるだけで様々なデザインに変更できる</dd>
  <dt class="u-w-30 u-fs-13 u-d-flex u-ta-l u-ai-c u-fw-m u-bt-lighter">プラグイン</dt>
  <dd class="u-w-70">未対応</dd>
  <dt class="u-w-30 u-fs-13 u-d-flex u-ta-l u-ai-c u-fw-m u-bt-lighter">移行コスト</dt>
  <dd class="u-w-70">記事のデータもMarkdownでブログに格納されているので、比較的低い</dd>
  <dt class="u-w-30 u-fs-13 u-d-flex u-ta-l u-ai-c u-fw-m u-bt-lighter">学習コスト</dt>
  <dd class="u-w-70">HTMLを編集するだけなので、比較的低い</dd>
  <dt class="u-w-30 u-fs-13 u-d-flex u-ta-l u-ai-c u-fw-m u-bt-lighter">技術の応用力</dt>
  <dd class="u-w-70">低い：HUGO単体の求人はほぼない</dd>
</dl>

### [Gatsby](https://www.gatsbyjs.org/)

![](/images/logo/logo_gatsby.svg)

Gatsbyとは、React.js制のSSGです。  
このブログも、Gatsbyで作られています😊  
メリットとして、

- SPAなので、*ストレスなくページ遷移ができる*
- *プラグインで機能を追加できる*
- WordPressと同じように、*テーマを入れ替えてデザインを変えられる*
- React.js制なので、*実務でも使える技術が手に入る*

反面デメリットして、

- *React.js自体の学習コストが比較的高い*

があげられます😅  
具体的にまとめると、以下のようになります。

<dl>
  <dt class="u-w-30 u-fs-13 u-d-flex u-ta-l u-ai-c u-fw-m u-ta-l">使用技術</dt>
  <dd class="u-w-70 u-bt-reset">React.js</dd>
  <dt class="u-w-30 u-fs-13 u-d-flex u-ta-l u-ai-c u-fw-m u-bt-lighter">動作速度</dt>
  <dd class="u-w-70">速い</dd>
  <dt class="u-w-30 u-fs-13 u-d-flex u-ta-l u-ai-c u-fw-m u-bt-lighter">表示速度</dt>
  <dd class="u-w-70">速い</dd>
  <dt class="u-w-30 u-fs-13 u-d-flex u-ta-l u-ai-c u-fw-m u-bt-lighter">種類</dt>
  <dd class="u-w-70">Webアプリ：ユーザーの状態によって見た目を変えられる（動的なもの）</dd>
  <dt class="u-w-30 u-fs-13 u-d-flex u-ta-l u-ai-c u-fw-m u-bt-lighter">デザインの変更</dt>
  <dd class="u-w-70">テーマを変えるだけで様々なデザインに変更できる</dd>
  <dt class="u-w-30 u-fs-13 u-d-flex u-ta-l u-ai-c u-fw-m u-bt-lighter">プラグイン</dt>
  <dd class="u-w-70">対応済み</dd>
  <dt class="u-w-30 u-fs-13 u-d-flex u-ta-l u-ai-c u-fw-m u-bt-lighter">移行コスト</dt>
  <dd class="u-w-70">記事のデータもMarkdownでブログに格納されているので、比較的低い</dd>
  <dt class="u-w-30 u-fs-13 u-d-flex u-ta-l u-ai-c u-fw-m u-bt-lighter">学習コスト</dt>
  <dd class="u-w-70">React.js自体が「JSX」という特殊な文法でコードを書くので、比較的高い</dd>
  <dt class="u-w-30 u-fs-13 u-d-flex u-ta-l u-ai-c u-fw-m u-bt-lighter">技術の応用力</dt>
  <dd class="u-w-70">高い：React.jsはホットな技術なので、求人の数も多くエンジニアの単価も高い</dd>
</dl>

---

## SSGは管理画面は使えない

![](/images/blog/2020.07.26_01-03.jpg)

厳密には使えないわけではありません。  
ですが**WordPressではないので、当然WordPressと同じような管理画面は使えません。**

使えるようにする技術もありますが、*Markdownで記事を書けるなら、必要がないのです😅*  
なぜかというと、このブログで実際に使われている以下のコードを見ていただきたいのですが、

```markdown
---
path: /wordpress/demerit_resolution
date: 2020-07-26T19:00:00
thumbnail: /images/blog/2020.07.24_01-top.jpg
title: WordPress最大のデメリットを解消できる、おすすめのフレームワーク【DBを使うのはリスクが高い】
tags:
  - WordPress
  - ブログ術
description: >-
  WordPressは世界中で使われているブログを作れるフレームワークです。ですがWordPressには、現行のWebサイトと比較すると致命的なデメリットがあります。それは「DB（データベース）を使っていること」です。この記事ではDBを使うリスクと、DBを使わなくてもブログが作れるシステムについて、解説いたします。
---

こんにちは、シンヤです！

今回は、*WordPress最大のデメリットを解消できる、おすすめのフレームワーク【DBを使うのはリスクが高い】*というテーマで、お話しいたします。
```

それぞれ英語から何を表しているか、わかりやすいのではないかと思います。  
具体的にいうと、

<ul class="arrow--ul">
  <li><em>path</em></li>
  <ul class="u-bg-reset u-m-reset u-mb-24 u-pa-reset u-list-none">
    <li>ページのpath（URL）です</li>
  </ul>
  <li><em>date</em></li>
  <ul>
    <li>ブログを投稿した日時です</li>
  </ul>
  <li><em>thumbnail</em></li>
  <ul>
    <li>一覧画面やOGP、ファーストビューの写真です</li>
  </ul>
  <li><em>title</em></li>
  <ul>
    <li>ブログのタイトルです</li>
  </ul>
  <li><em>tags</em></li>
  <ul>
    <li>タイトルや記事の一番下に表示される、ブログのタグです</li>
  </ul>
  <li><em>description</em></li>
  <ul>
    <li>一覧画面やOGPの、description（説明文）です</li>
  </ul>
</ul>

つまり、*管理画面で入力する情報が、そのままMarkdownで入力できちゃうんですよね。*  
だからSSGの場合、そもそも管理画面がいらないのです😊

---

## リスクがあるがWordPressで運用するか、リスクは限りなく0だが新しい環境で運用するか

WordPressにはDBと紐づいているので、*セキュリティリスクがあります。*  
WordPressからSSGに移行する場合、*記事をMarkdownで書き直さないといけません。*  
どちらを取るかはトレードオフの関係なので、両者のメリデメをまとめますと、

<hr class="u-bt-lightest u-mt-48 u-mb-48">

#### WordPress

<dl>
  <dt class="u-w-30 u-fs-13 u-d-flex u-ta-l u-ai-c u-fw-m u-ta-l">メリット</dt>
  <dd class="u-w-70 u-bt-reset">今まで運用しているなら、何もせず運用し続けることができる</dd>
  <dt class="u-w-30 u-fs-13 u-d-flex u-ta-l u-ai-c u-fw-m u-bt-lighter">デメリット</dt>
  <dd class="u-w-70">ハッキングされるリスクに、永遠と晒され続けることになる</dd>
</dl>

#### SSG

<dl>
  <dt class="u-w-30 u-fs-13 u-d-flex u-ta-l u-ai-c u-fw-m u-ta-l">メリット</dt>
  <dd class="u-w-70 u-bt-reset">DBが存在しないので、ハッキングリスクは限りなく0にできる</dd>
  <dt class="u-w-30 u-fs-13 u-d-flex u-ta-l u-ai-c u-fw-m u-bt-lighter">デメリット</dt>
  <dd class="u-w-70">記事をMarkdownで書き直さないといけない</dd>
</dl>

<hr class="u-bt-lightest u-mt-48 u-mb-48">

なのではないかと思います。  
**ブログが誰かに壊されるリスクを孕みながら運用し続けるか、最初は手間がかかるけどSSGに乗り換えるか。**  
このどちらにするか、悩みどころですね😅

今からブログを作るなら、セキュアなSSG一択ですけどね。  
おまけのメリットして、DBを使わないからサーバーを契約しなくてもいいので、ドメイン代だけでブログが運営できるので😄

ではでは、またね〜🤗
