---
path: /wordpress/postcss_install
date: 2020-08-04T19:00:00
thumbnail: /images/blog/2020.08.04_01-top.jpg
title: 【上級者向け】WordPressにPostCSSをインストールする【MAMPなし、phpMyAdminなし】
tags:
  - WordPress
  - ブログ術
  - プログラミング
description: >-
  今回はWordPressにPostCSSをインストールする手順を解説いたします。PostCSSはコマンドラインで操作をするので、今回はよくあるMAMPを使わず、Apatchの起動からMySQLの起動やDBの作成まで、全てコマンドラインで操作します。少し難しいかもしれませんが、頑張ってついてきてください。
---

こんにちは、シンヤです！

今回は、*【上級者向け】WordPressにPostCSSをインストールする【MAMPなし、phpMyAdminなし】*というテーマで、お話しいたします。

---

## PostCSSとは

![](/images/blog/2020.04.18-02.jpg)

PostCSSとは、*「JavaScriptを使って、書いたCSSを書き出すことができるツール」*です。  
CSSは書きづらいので、SassやPostCSSみたいにCSSを書きやすくするためのツール（AltCSSと言います）を使って、コードを書いていきます。

書いたソースコードを別の言葉に書き換えてくれるものを、*「プリプロセッサー」。*  
ソースコードを書き換える行為を、*「コンパイル」*と言います。

つまり、PostCSSは、**「書いたソースコードをCSSにコンパイルしてくれる、プリプロセッサー」**ということになります。

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

### yarnのインストール

以下のコマンドを入力して、yarnをインストールします。

```shell
$ brew install yarn
```

---

## Apacheの設定を変更する

以下の手順を用いて、Apatchの設定を変更します。  
*ここから少し手順が複雑になるかもしれませんが、がんばってついてきてください😅*

以下のコマンドを実行し、テキストエディタを開いて編集してください。

```shell
$ sudo vi /etc/apache2/httpd.conf
```

パスワード入力を求められますが、パソコンを立ち上げた時に入力したパスワードをご入力ください😊

### ドキュメントルートを変更する

まずは以下の該当箇所を見つけ出し、編集してください。

```shell
#DocumentRoot "/Library/WebServer/Documents"
```

これを、

```shell
DocumentRoot "/Users/あなたのユーザ名/apatch-webserver"
```

上記のように変更します。  
`#`を外してコメントアウトを解除し、あなたのホームディレクトリの「apatch-webserver」ディレクトリを指定しています。  
ユーザー名がわからない場合は、

```shell
$ cd ~
$ pwd
/Users/あなたのユーザー名
```

と出てきます。  
「apatch-webserver」のディレクトリは、お好きな名前に変更していただいても問題ございません。  
ですが、以下は「apatch-webserver」で統一いたしますので、*よくわからない方はapatch-webserverのままディレクトリを作成することをお勧めいたします😊*

### .htaccessを使えるようにする

上記で変更いたしました、

```shell
<Directory "/Users/あなたのユーザ名/apatch-webserver">  
  ~ ~ 以下略 ~ ~  
  AllowOverride None  
</Directory>
```

*「AllowOverride None」*の箇所を、以下のように変更してください。

```shell
<Directory "/Users/あなたのユーザ名/apatch-webserver">  
  ~ ~ 以下略 ~ ~  
  AllowOverride All  
</Directory >  
```

### PHPを有効にする

```shell
#LoadModule php7_module libexec/apache2/libphp7.so
```

上記の該当箇所を探し出し、`#`を削除してコメントアウトを解除します。

```shell
LoadModule php7_module libexec/apache2/libphp7.so
```

さらに、

```shell
<IfModule dir_module>
    DirectoryIndex index.php index.html
</IfModule>
```

上記の該当箇所を探し出し、以下のように編集してください。

```shell
<IfModule dir_module>
    DirectoryIndex index.php index.html
</IfModule>
```

こうすることで、ローカルホストを立ち上げホームディレクトリに移動した際に、自動で`index.php`を参照するようになります。

全ての設定の記述が終わったので、以下のコマンドを入力して、変更を保存しエディターを終了させます。

1. 「esc」キーを押す
2. 「:wq」と入力する
3. 「Enter」を押す

---

## PHPを動かしてみる

まずは以下のコマンドを入力して、ホームディレクトリに「apatch-webserver」ディレクトリを作成します。

```shell
$ cd ~
$ mkdir apatch-webserver
```

次に以下のコマンドを入力して、「apatch-webserver」ディレクトリに移動し、`index.php`を作成します。

```shell
$ cd apatch-webserver
$ touch index.php
```

次に作成した`index.php`に、以下の情報を入力します。

```php
<?php
phpinfo();
?>
```

次に以下のコマンドを入力して、Apatchを再起動します。

```shell
# apacheを再起動する
$ sudo apachectl restart
```

もし正常に動かない場合は、以下のコマンドを入力して、Apatchを停止した後起動してください。

```shell
# apacheを終了する
$ sudo apachectl stop

# apacheを起動する
$ sudo apachectl start
```

次に以下のコマンドを入力して、PHPのビルトインウェブサーバーを立ち上げます。

```shell
$ php -S localhost:8000
```

以下の画像のような画面が出ていたら、正常にPHPが作動しています😊

![](/images/blog/2020.08.04_01-01.jpg)

---

## MySQLのインストールと起動

以下のコマンドを入力して、MySQLをインストールします。

```shell
# HomebrewからMySQLをインストール（バージョン指定）
$ brew install mysql@8.0.12
```

次に以下のコマンドを入力して、MySQLフォルダの権限を変更します。

```shell
# MySQLフォルダの権限を変更
$ chown -R _mysql:_mysql /usr/local/var/mysql
```

次に以下のコマンドを入力して、MySQLを動かしてみます。

```shell
# MySQLサーバ起動
$ mysql.server start

# MySQLサーバが動いてるか確認
$ mysqladmin ping

# MySQLサーバを止める
$ mysql.server stop
```

---

## MySQLでデータベースとユーザー作成

ターミナルからMySQLを操作して、データベースとユーザーを作成していきます。

MySQLは8.0から、新たに追加された認証プラグイン(caching&#x5F;sha2&#x5F;password)がデフォルトであてがわれるようになりました。  
その為、ユーザーを追加する際は、旧式の認証プラグインである(mysql&#x5F;native&#x5F;password)を指定する必要があります。

```sql
# mysqlの操作を開始する
$ mysql -u root -p

# mysqlのルート権限のパスワード入力(デフォルトは空白)
Enter password: 

# ユーザ作成
mysql> create user 'postcss_sample_user'@'localhost' identified with mysql_native_password by 'postcss_sample_password';
# 以下のような表示が出ていたらOK
Query OK, 0 rows affected (0.00 sec)

# データベース作成
mysql> create database postcss_sample_database;
# 以下のような表示が出ていたらOK
Query OK, 1 row affected (0.00 sec)

# ユーザにデータベース操作の権限追加
mysql> grant all privileges on postcss_sample_database.* to 'postcss_sample_user'@'localhost';
# 以下のような表示が出ていたらOK
Query OK, 0 rows affected (0.00 sec)

# データベース一覧で作ったデータベースがあるか確認する
mysql> show databases;
# 以下のような表示が出ていたらOK
+-------------------------+
| Database                |
+-------------------------+
| information_schema      |
| mysql                   |
| performance_schema      |
| postcss_sample_database |
| sys                     |
+-------------------------+
5 rows in set (0.00 sec)

# ユーザ一覧で作ったユーザがあるか確認する
mysql> SELECT User, Host FROM mysql.user;
# 以下のような表示が出ていたらOK
+---------------------+-----------+
| User                | Host      |
+---------------------+-----------+
| mysql.infoschema    | localhost |
| mysql.session       | localhost |
| mysql.sys           | localhost |
| postcss_sample_user | localhost |
| root                | localhost |
+---------------------+-----------+
5 rows in set (0.00 sec)

# mysql.sockの場所を確認しておく
mysql> status;
# 以下のような表示が出ていたらOK
--------------
mysql  Ver 8.0.21 for osx10.15 on x86_64 (Homebrew)
　：
UNIX socket:        /tmp/mysql.sock   <- これを覚えておく

Threads: 2  Questions: 10  Slow queries: 0  Opens: 141  Flush tables: 3  Open tables: 64  Queries per second avg: 0.045
--------------

# mysqlの操作を終了する
mysql> quit;
```

---

## php.iniの設定変更

以下のコマンドを入力して、`php.ini`を作成しアクセス権も変えます。

```shell
#php.ini.defaultをコピーしてphp.ini作成
$ sudo cp /etc/php.ini.default /etc/php.ini

#ファイルのアクセス権を設定
$ sudo chmod 644 /etc/php.ini
```

次に以下のコマンドを入力して、作成した`php.ini`を開きます。

```shell
$ sudo vi /etc/php.ini
```

次に以下の該当箇所の空欄に、先ほどの確認したMySQLのソケットファイルのパスを指定します。

```shell
pdo_mysql.default_socket = /tmp/mysql.sock
mysqli.default_socket = /tmp/mysql.sock
```

コードの記載が終わりましたら、以下のコマンドを入力して、変更内容を保存してエディターを終了させます。

1. 「esc」キーを押す
2. 「:wq」と入力する
3. 「Enter」を押す

---

## WordPressのインストール

[こちらからWordPressの最新版](https://ja.wordpress.org/download/)をダウンロードして、「apatch-webserver」ディレクトリにコピーします。  
次に以下のコマンドを入力して、先ほどコピーしたWordPressのディレクトリに移動します。

```shell
$ cd ~/apatch-webserver/wordpress
```

次に以下のコマンドを入力して、PHPのビルトインウェブサーバーを立ち上げます。

```shell
$ php -S localhost:8000
```

`localhost:8000`にアクセスし、以下のような画面が出ていたら成功しています😊

![](/images/blog/2020.08.04_01-02.jpg)

「さあ、始めましょう！」ボタンをクリックすると、次の画面でデータベースの情報を入力します。  
先ほどMySQLでいたしました、*データベース名・ユーザー名・パスワードを入力します。*  
それぞれ以下のように入力してください。

<ul class="arrow--ul">
  <li><em>データベース名</em></li>
  <ul>
    <li>postcss_sample_database</li>
  </ul>
  <li><em>ユーザー名</em></li>
  <ul>
    <li>postcss_sample_user</li>
  </ul>
  <li><em>パスワード</em></li>
  <ul>
    <li>postcss_sample_password</li>
  </ul>
  <li><em>データベースのホスト</em></li>
  <ul>
    <li>localhost</li>
  </ul>
  <li><em>テーブル接頭辞</em></li>
  <ul>
    <li>wp_</li>
  </ul>
</ul>

![](/images/blog/2020.08.04_01-03.jpg)

送信後、以下の画像が出ていたら成功です😊

![](/images/blog/2020.08.04_01-04.jpg)

「インストール続行」をクリックして、WordPressをインストールします。  
以下の画像のようなWordPressのサイト情報とログイン情報を入力する画面が出ます。  
こちらは、お好きな名前とパスワードを入力してください😊

![](/images/blog/2020.08.04_01-05.jpg)

情報を入力したら、「インストール続行」をクリックしてください。  
少し時間がたった後、以下の画像が表示されたら、インストールが正常に完了しています😊

![](/images/blog/2020.08.04_01-06.jpg)

インストールが完了したら、「ログイン」を押して、先ほど入力したユーザー名とパスワードを入力します。

![](/images/blog/2020.08.04_01-07.jpg)

ログイン後、以下のような管理画面が表示されたら、インストール成功です😊

![](/images/blog/2020.08.04_01-08.jpg)

---

## PostCSSのインストール

WordPressには標準でnpmもWebpackもインストールされていないので、まずは2つとも使える環境を構築します。

### npmの導入

まず以下のコマンドを入力して、npmを導入してください。

```shell
# ルートディレクトリかどうか確認
$ pwd
/Users/あなたのユーザー名/apatch-webserver/wordpress

# npmの導入
$ npm init
```

質問形式で色々と聞かれますが、全てEnterを押していただいて問題ございません😊

### postcss-cliのインストール

手軽にPostCSSの環境を構築できるライブラリ*「postcss-cli」*をインストールします。

```shell
yarn add postcss-cli
```

---

## PostCSSのプラグインをインストール

PostCSSはSassと違って、*単体ではなんの効力も発揮しません。*  
**PostCSSはプラグインを追加して、自分で使いやすいCSSコンパイラーを作るライブラリーなのです😊**  
ので、プラグインをインストールしないと使えません。

インストールするプラグインはなんでもいいですが、私は以下のプラグインをよく使うので、インストールしていきます😅

<hr class="u-bt-lightest u-mt-48 u-mb-48">

#### autoprefixer
<p class="u-mt-24 u-mb-48">自動的にベンダープレフィックスを付けてくれる。</p>

#### postcss-import
<p class="u-mt-24 u-mb-48">PostCSSでimportが使えるようになる。</p>

#### postcss-apply
<p class="u-mt-24 u-mb-24">策定中のCSSの仕様に乗っ取って、変数・関数を指定することができる。</p>

```css
/* postcss.css */
:root {
  --radius: 4px;
  --my-style: { display: flex; background: #ffffff;};
}

.foo { border-radius: var(--radius);}
.bar { @apply --my-style;}

/* build.css */
.foo { border-radius: 4px;}
.bar { display: flex; background: #ffffff;}
```

<h4 class="u-mt-48">postcss-nesting</h4>
<p class="u-mt-24 u-mb-48">PostCSSで入れ子が使えるようになる。<a href="https://tabatkins.github.io/specs/css-nesting/" target="_blank" rel="nofollow noopener noreferrer">ルールは最新のもの</a>が適用される。</p>

#### postcss-css-reset
<p class="u-mt-24 u-mb-48">normalize.cssに基づいたreset.cssが使えるようになる。</p>

#### postcss-color-function
<p class="u-mt-24 u-mb-24">PostCSSでcolor関数が使えるようになる。</p>

```css
/* postcss.css */
.f__color {
  color: color(#000 a(50%));
  background-color: color(#000 l(40%));
  border-color: color(#fff b(50%));
}

/* build.css */
.f__color {
  color: rgba(0.0.0.0.5);
  background-color: rgb(102,102,102);
  border-color: rgb(170, 170, 170);
}
```

<h4 class="u-mt-48">postcss-flexbugs-fixes</h4>
<p class="u-mt-24 u-mb-48">flexboxのバグを取り除いてくれる。</p>

#### postcss-custom-media
<p class="u-mt-24 u-mb-24">Media Queriesに名前をつけることができる。</p>

```css
/* postcss.css */
@custom-media --smartphone (max-width: 600px);
.media { width: 100%;
  @media(--smartphone) { width: 95%;}
}

/* build.css */
.media { width: 100%;
  @media (max-width: 600px) { width: 95%;}
}
```

<h4 class="u-mt-48">postcss-media-minmax</h4>
<p class="u-mt-24 u-mb-24">Media Queriesのmax-width,min-widthを不等号で指定することができる。</p>

```css
/* postcss.css */
@media (width <= 960px) { width: 50%;}
@media (width => 600px) { width: 100%;}

/* build.css */
@media (max-width: 960px) { width: 50%;}
@media (min-width: 600px) { width: 100%;}
```

<h4 class="u-mt-48">postcss-pixels-to-rem</h4>
<p class="u-mt-24 u-mb-48">全てのpixelを、rem,emに自動的に変換する。</p>

<hr class="u-bt-lightest u-mt-48 u-mb-48">

以下のコマンドを実行して、プラグインをインストールします。

```shell
$ yarn add autoprefixer postcss-import postcss-apply postcss-nesting postcss-css-reset postcss-color-function postcss-flexbugs-fixes postcss-custom-media postcss-media-minmax postcss-pixels-to-rem
```

---

## PostCSSの設定ファイルを作る

WordPressのルートディレクトリに移動し、以下のコマンドを実行して、`postcss.config.js`を作成します。

```shell
# ルートディレクトリかどうか確認
$ pwd
/Users/あなたのユーザー名/apatch-webserver/wordpress

# postcss.config.jsを作成
$ touch postcss.config.js
```

次に作成した`postcss.config.js`に、以下のコードを追加して、作成したプラグインを読み込みます。

```javascript
module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: [
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-apply'),
    require('postcss-nesting'),
    require('postcss-css-reset'),
    require('postcss-color-function'),
    require('postcss-flexbugs-fixes'),
    require('postcss-custom-media'),
    require('postcss-media-minmax'),
    require('postcss-pixels-to-rem')
  ]
});
```

次に以下のコマンドを入力して、WordPressのルートディレクトリに「postcss」ディレクトリを作りこの中に「assets」ディレクトリを作ります。  
「assets」ディレクトリに`style.css`というファイルを作ります。

```shell
# ルートディレクトリかどうか確認
$ pwd
/Users/あなたのユーザー名/apatch-webserver/wordpress

# postcssディレクトリ作成
$ mkdir postcss

# assetsディレクトリ作成
$ mkdir postcss/assets

# style.css作成
$ touch postcss/assets/style.css
```

### テーマを配置する

`wp-content/themes`に、[こちらのZIPファイル](https://github.com/shinyasato0728/sample-postcss-wordpress/blob/master/wp-content/themes/sample-postcss.zip)の中身のファイルを配置します。  
私がPostCSS用に作りましたテーマになります。  
テーマを配置したら、WordPressの管理画面からテーマを有効にしてください😀

### コマンドスクリプトを記載する

次にWordPressのルートディレクトリにある、`package.json`を確認します。  
ここに、npmの設定が記載されています。

以下のコマンドを追加して、*PHPのビルトインウェブサーバーとPostCSSのCLIを同時に起動させます。*  
同時にautoprefixerの設定も、こちらに記載します。

```json
"scripts": {
  "start": "php -S localhost:8000 & postcss postcss/*.css -d wp-content/themes/sample-postcss/assets/css/ -w"
},
"browserslist": [
  "> 1%",
  "last 2 versions",
  "Opera >=10.1",
  "Firefox >= 4",
  "iOS >=3.2"
]
```

記載後、以下のコマンドを入力すれば、PHPのビルトインウェブサーバーとPostCSSのCLIが同時に起動します。

```shell
$ yarn start
```

起動後は、WordPressのルートディレクトリにある`postcss/assets/style.css`を編集すれば、WordPressのCSSも同時に修正されます😊

---

## 終わりに

WordPressはPostCSSが動くNode.js環境ではないので、*まずNode.jsが動く環境を構築して、その後CLIでWordPressとPostCSSを動かすやり方を解説いたしました。*  
よくあるMAMPを使うやり方だと、MAMPを起動してPostCSSのCLIを起動しないといけないので、一つのコマンドラインにまとめて動かすやり方を解説いたしました😊

MAMPって本来必要ないんですけどね。  
もともと上記で解説したApatchとMySQLの設定や起動を、代わりに行っているだけなので。  
結局CLIで操作しないと、*Apatchの仕組みやDBの仕組みの理解、SQLのスキルが身に付かない*ので、**WordPressはDBやサーバー周りの事故でつまづく人が非常に多い印象があります。**

ほとんどのクリエイターがMac使ってるんだから、全部CLIで操作すればいいんですけどね。  
私は「車輪の再発明」はしたくないので、MAMPは使わず全てコマンドラインで操作しています。

なお、今回解説いたしましたソースコードは、[こちらに無料で公開しております😊](https://github.com/shinyasato0728/sample-postcss-wordpress)

ではでは、またね〜🤗
