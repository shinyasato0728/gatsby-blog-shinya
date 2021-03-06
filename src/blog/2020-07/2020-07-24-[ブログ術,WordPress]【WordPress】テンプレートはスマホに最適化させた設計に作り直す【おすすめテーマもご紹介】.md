---
path: /wordpress/smartphone_optimisation
date: 2020-07-24T19:00:00
thumbnail: /images/blog/2020.07.24_01-top.jpg
title: 【WordPress】テンプレートはスマホに最適化させた設計に作り直す【おすすめテーマもご紹介】
tags:
  - WordPress
  - ブログ術
description: >-
  ブログはテンプレートをそのままに使うのではなく、スマホに最適化させた設計に作り直した方がいいです。なぜなら、テンプレート作者はパソコンで作業しているので、パソコンに最適化させたデザインに作りがちだからです。今回は、スマホに最適化させる為にはどうすればいいかと、おすすめのテーマもご紹介いたします。
---

こんにちは、シンヤです！

今回は、*【WordPress】テンプレートはスマホに最適化させた設計に作り直す【おすすめテーマもご紹介】*というテーマで、お話しいたします。

---

## 大抵のWordPressのテンプレートはスマホに最適化されていない

結論からいうと、テンプレートをそのまま使わない方がいい理由は、上記の通りです。  
文字通り、そのままの意味ですね。

*大抵のWordPressのテンプレートは、スマホに最適化されていません。*  
何故ならそれは、

#### テンプレートの作者は、パソコンでデザインを作っているから

です。  
*デザインをするときにパソコンで作業するので、パソコンに最適化させたデザインになりがちです。*  
ですが、今のユーザーはほとんどがスマホでネットを見ます。  
割合的にいうと、

- *スマホ：8割*
- パソコン：2割

ぐらいらしいです。  
*今はパソコンを持っておらず、スマホだけしか持っていないユーザーも多いです😀*

このブログは割とリテラシーが高い層も見ているので、パソコンとスマホ半々ぐらいです。  
ですが、大抵のWebサービス、およびブログは、見ているデバイスの割合は上記の比率になると思います。  
ということは、**必然的にスマホに最適化させたデザインにした方がいいということです😊**

---

## スマホに最適化させたデザイン

具体的に定義すると、下記の通りです。

- *表示速度を速くするデザイン*
- *ヘッダーにメニューを追加しすぎない*
- *サイドバーをなくす*

ざっくりとした定義ですが、以下に詳しく解説いたします。

### 表示速度を速くするデザイン

**Googleが2018年1月に、モバイルの表示速度を、検索順位の基準の一つに使用すると発表しました。**  
約2年半前です。

<img class="u-b-lighter" src="/images/blog/2020.07.24_01-01.jpg" alt="">

*WordPressはページを表示する前に様々な処理を読み込むので、表示速度の観点でいうと最適な設計ではありません。*  
SEOに表示速度が影響しない時代に作られたフレームワークで、技術的にはそれからほとんど進歩していないからです。

SEOに最適化させるなら、必ず表示速度を改善しないといけません。  
ですが、こちらは初学者の方にはかなり難易度が高いです。  
やることの例を挙げると、

- *CSSの軽量化*
- *HTMLの軽量化*
- *画像の軽量化*
- *Lazyloadの導入*
- *Webフォントの削除*

などなど、*かなり専門的な技術的要件が絡んできます。*

### ヘッダーにメニューを追加しすぎない

基本パソコンは「横長」になっています。  
*必然的にパソコンに最適化させたメニューも、横長になっていきます。*  
ヘッダーに追加されたメニューなどが、良い例だと思います。

ですが、*スマホはほとんどの場合「縦長」で使います。*  
スマホを横に傾けて、横長で使う人は少数だと思います。  
画面が見づらいからです。

ということは、**必然的にパソコンに最適化させた、ヘッダーメニューもスマホだと使いづらいことになります。**  
それを解消するために、ボタンを押したら開く「ハンバーガーメニュー」が開発されました。

ハンバーガーメニューはボタンを押さないとメニューが開かないので、使いづらいです。  
また使いづらいメニューでも、*HTMLではソースコードとして読み込まれるので、表示速度は少し遅くなります。*

ヘッダーにメニューを追加しすぎることは、「使いやすさ」「表示速度」両方でデメリットがあるので、  
*あまりヘッダーにメニューを追加しないほうが、良いと思います😊*

### サイドバーをなくす

*サイドバーもパソコンに最適化させたデザインです。*  
「横長」のパソコンは横に使える面積は広いので、右側に補足情報を入れるためにサイドバーをつけることが多いです。

*今はほとんどのユーザーがスマホでネットを見ます。*  
そしてスマホは基本的に「縦長」の世界です。  
**必然的に横長用に最適化させたサイドバーは、使いにくい部品となってきます。**

CSSを使えばサイドバーがあっても、見た目上は消したり、フッター上などに配置することはできます。  
ですが、*HTMLのソースコードとしては読み込まれるので、表示速度は少し遅くなります。*  
使わずに消したり、一番下に配置してほぼ見えない部品のために、HTMLのソースコードを読み込ませるのは、無駄なことだと僕は思います😅

---

## スマホに最適化させたWordPressテーマは無い...と思っていた

なぜなら、

#### 表示速度が速いテーマがないから

です。  
ヘッダーのメニューを少なくしたり、サイドバーを消すのは、HTMLを勉強すればできます。  
**ですが、表示速度を速くするのは容易ではありません。**

有名な無料テーマも、表示速度のスコアは「30」ぐらい。  
*15,000円ぐらいする有料テーマでも、表示速度のスコアは良くて「50」ぐらい。*  
WordPressの表示速度が遅すぎるのも、このブログがWordPressで作られていない理由の一つです😅

---

## 探してみると表示速度が速いWordPressのテーマがあった

ネットの海は広いので、探してみると表示速度が速いWordPressのテーマがありました。  
ちょっと自分無知でしたね。反省します😅  
そのWordPressのテーマは、

#### [STILE（スティーレ）](https://px.a8.net/svt/ejp?a8mat=3BIBTA+9R9ROY+4FQK+62U36)
<img style="display: none;" border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=3BIBTA+9R9ROY+4FQK+62U36" alt="">

#### [STREETIST（ストリーティスト）](https://px.a8.net/svt/ejp?a8mat=3BIBTA+9R9ROY+4FQK+5YJRM)
<img style="display: none;" border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=3BIBTA+9R9ROY+4FQK+5YJRM" alt="">

この2つになります。  
*ちなみに上記2つに機能的な違いはありません。*  
*違いは「デザインのみ」です😀*  
両方共通の特徴として、

- *デザインがオシャレ*
- *設定が簡単*
- *WordPress最新のエディタ「Gutenberg」に対応*
- *アドセンス広告自動配信*

があります。  
気になる表示速度は、デモサイトだとそれぞれ、

### STILE（スティーレ）

<img class="u-w-50 u-b-lighter" src="/images/blog/2020.07.24_01-02.jpg" alt="">

### STREETIST（ストリーティスト）

<img class="u-w-50 u-b-lighter" src="/images/blog/2020.07.24_01-03.jpg" alt="">

<hr class="u-bt-lightest u-mt-48 u-mb-48">

という感じになっております。  
**WordPressテーマの表示速度は、「5〜40」ぐらいが普通だと思うので、かなり速いと思います😊**

---

## デザインの違い

### [STILE（スティーレ）](https://px.a8.net/svt/ejp?a8mat=3BIBTA+9R9ROY+4FQK+62U36)

#### パソコン

<img class="u-b-lighter" src="/images/blog/2020.07.24_01-04_pc.jpg" alt="">

#### スマホ

<img class="u-w-50 u-b-lighter" src="/images/blog/2020.07.24_01-04_sp.jpg" alt="">

STILEは、割とポップでカラフルな仕上がりのデザインになっていますね。

### [STREETIST（ストリーティスト）](https://px.a8.net/svt/ejp?a8mat=3BIBTA+9R9ROY+4FQK+5YJRM)

#### パソコン

<img class="u-b-lighter" src="/images/blog/2020.07.24_01-05_pc.jpg" alt="">

#### スマホ

<img class="u-w-50 u-b-lighter" src="/images/blog/2020.07.24_01-05_sp.jpg" alt="">

対してSTREETISTは、ブラックとホワイトを基調とした、シックで大人びたデザインになっていますね。  
個人的に、こちらのデザインの方が好きです😊

---

## 会員登録

[STILE（スティーレ）](https://px.a8.net/svt/ejp?a8mat=3BIBTA+9R9ROY+4FQK+62U36)と[STREETIST（ストリーティスト）](https://px.a8.net/svt/ejp?a8mat=3BIBTA+9R9ROY+4FQK+5YJRM)は、両方とも**「14,300円（税込）」の有料テンプレートです。**  
購入する場合、会員登録が必要です。  
ご興味がおありの方は、下記手順の会員登録が必要です。

### 「ダウンロード」ボタンを押す

以下はSTREETISTを例にして解説いたします。  
まず、[STREETISTのリンク](https://px.a8.net/svt/ejp?a8mat=3BIBTA+9R9ROY+4FQK+5YJRM)から「ダウンロード」ボタンを押します。

#### パソコン

<img class="u-b-lighter" src="/images/blog/2020.07.24_01-06_pc.jpg" alt="">

#### スマホ

<img class="u-w-50 u-b-lighter" src="/images/blog/2020.07.24_01-06_sp.jpg" alt="">

### フォームに情報を入力する

ダウンロードボタンを押しましたら、遷移先のフォームに情報を入力します。  
*この時点では、まだ料金は発生致しません。*

#### パソコン

<img class="u-b-lighter" src="/images/blog/2020.07.24_01-07_pc.jpg" alt="">

#### スマホ

<img class="u-w-50 u-b-lighter" src="/images/blog/2020.07.24_01-07_sp.jpg" alt="">

---

## ログインをする

会員登録完了後、ログインができるようになります。  
メールの確認などは必要ございません😊

#### パソコン

<img class="u-b-lighter" src="/images/blog/2020.07.24_01-08_pc.jpg" alt="">

#### スマホ

<img class="u-w-50 u-b-lighter" src="/images/blog/2020.07.24_01-08_sp.jpg" alt="">

---

## 購入する

ログイン後、テーマの購入ができるようになります。

#### パソコン

<img class="u-b-lighter" src="/images/blog/2020.07.24_01-09_pc.jpg" alt="">

#### スマホ

<img class="u-w-50 u-b-lighter" src="/images/blog/2020.07.24_01-09_sp.jpg" alt="">

「カードで支払う」のボタンを押すと、カード情報を入力する画面が開きます。  
*この時点では、まだ料金は発生致しません。*  
カード情報入力後、「カードで支払う」を押すと、決済が完了しテーマのダウンロードができるようになります。

#### パソコン

<img class="u-b-lighter" src="/images/blog/2020.07.24_01-10_pc.jpg" alt="">

#### スマホ

<img class="u-w-50 u-b-lighter" src="/images/blog/2020.07.24_01-10_sp.jpg" alt="">

---

## 有料テーマは実はコスパがいい

僕みたいな、一人でデザインもできて、Webアプリ作りもできて、ある程度マーケティングもできる。  
そういう特殊な人は、一人でなんでもできるから、わざわざテンプレートを買ったりはしません😅

*ですが、僕のような特殊な人間でもない限り、有料テーマは実は結構コスパがいい投資だったりします。*  
なぜなら、

1. *初心者にもカスタマイズしやすい設計になっている*
2. *デザインも綺麗に整えられている*
3. *サポート体制がしっかりしていることが多い*
4. *ちゃんとした会社組織がやっていることが多い*
5. *サーバーの設置や管理なども、格安で承っていることが多い*

などがあります。  
もちろん全てのテーマがそうというわけではなく、事前に調べる必要があります。

今回ご紹介させていただきました[STILE（スティーレ）](https://px.a8.net/svt/ejp?a8mat=3BIBTA+9R9ROY+4FQK+62U36)と[STREETIST（ストリーティスト）](https://px.a8.net/svt/ejp?a8mat=3BIBTA+9R9ROY+4FQK+5YJRM)は、*「5以外」は全て対応しているみたいですね。*  
会社も「*[株式会社 RETVAL](https://retval.jp/)*」という、しっかりしたWebコンテンツ制作会社さんが販売しています。  
14,300円（税込）で、**表示速度対策やSEO対策、整えられたデザインとサポートもついていている**のは、結構お得なのではないかと思います😊
