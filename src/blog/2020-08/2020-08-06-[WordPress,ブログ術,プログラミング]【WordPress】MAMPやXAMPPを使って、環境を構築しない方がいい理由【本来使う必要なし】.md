---
path: /wordpress/not_mamp
date: 2020-08-06T19:00:00
thumbnail: /images/blog/2020.08.06_01-top.jpg
title: 【WordPress】MAMPやXAMPPを使って、環境を構築しない方がいい理由【本来使う必要なし】
tags:
  - WordPress
  - ブログ術
  - プログラミング
description: >-
  MAMP（マンプ）、XAMPP（ザンプ）をご存知でしょうか？WordPressを使ってブログを作っている方々の大半は、両者2つのうちどちらかを使っていると思います。どちらも手軽にWordPressの環境を構築できますが、Macなら本来使う必要はございません。
---

こんにちは、シンヤです！

今回は、*【WordPress】MAMPやXAMPPを使って、環境を構築しない方がいい理由【本来使う必要なし】*というテーマで、お話しいたします。

---

## MAMP（マンプ）、XAMPP（ザンプ）とは？

<img class="u-bo-reset" src="/images/logo/logo_mamp.svg" alt="">
<img class="u-bo-reset" src="/images/logo/logo_xampp.svg" alt="">

MAMP、XAMPPとは、*手軽にPHPとMySQLの環境を構築できるツールです。*  
おそらくWordPressを使う方は、ほとんどがどちらかを使っていると思います。

> 元々MAMPはMac専用ソフトで、Windowsで手軽にWordPressを動かす環境を構築する場合、XAMPPを使う必要がありました。  
> ですが、今はMAMPもWindowsに対応しているようですね。  

両者とも同じようにWordPressの環境を手軽に構築できるソフトなので、ほとんど違いはありません😅

---

## 手軽にWordPressの環境を構築できるゆえの弊害

MAMPやXAMPPもそうですが、*Macなら必要な環境を全てターミナルから自分で構築できるので、本来使う必要はございません。*  
ですが、ほとんどの人がMAMPやXAMPPを使って環境を構築していると思います。

> それゆえに、そもそものPHPのコマンドや仕組み、DBやSQLのコマンドや仕組みを知らずに、*「ただ何となく動かせるから」*という理由で使い続けている人が多い印象を持ちます。  
> （もうひどい有様です😅）


手軽にWordPressの環境を構築できるゆえの弊害は、主に以下の2つになります。

1. *PHPやSQLの技術が培われない*
2. *そもそも2つとも本来使う必要がない*

です。  
以下に詳しく解説いたします。

---

## 1. PHPやSQLの技術が培われない

PHPやSQLとは、どちらも「パソコンに命令を出すプログラミング言語」です。  
つまりどちらも、*本来ターミナルから指示を出して、目的の動作を促していく技術*になります。

MAMPやXAMPPは、それらをマウス操作でかんたんに行うことができます（専門的にいうと、GUIといいます）  
ですがそれゆえに、以下のような問題も発生しました。

- 土台となる技術を知らずに、ただ「なんとなく動くから」という理由で使い続けている
- GUIだと細かい操作はできないので、痒いところに手が届かない

例えばMAMPやXAMPPでよく使う、PHPとSQLの動作をターミナルで行う場合、主に以下の操作だけで事足ります。

### PHPの場合

よく使う、というよりWordPressを動かすために使うPHPは、*ビルトインウェブサーバーを起動するだけ*だと思います。  
それは、以下のコマンドで簡単に起動できます。

```shell
$ php -S localhost:8000
```

たったこれだけです。  
このコマンドをターミナルで実行して、`localhost:8000`にアクセスすれば、ローカル環境にインストールされたWordPressを起動することができます。

### SQLの場合

よく使うコマンドは、主に以下のものだと思います。

```sql
# MySQLへログインする
$ mysql -u root -p

# ユーザー追加
mysql> create user '{{ユーザー名}}'@'{{ホスト}}' identified with mysql_native_password by '{{設定するパスワード}}';

# ユーザー一覧の確認
mysql> SELECT User, Host FROM mysql.user;

# データベース作成
mysql> create database {{データベース名}};

# データベースの操作の権限を変更する
mysql> grant all privileges on {{データベース名}}.* to '{{ユーザー名}}'@'{{ホスト}}';

# データベース一覧の確認
mysql> show databases;

# テーブル作成
mysql> create table {{テーブル名}} {{データ型}};

# テーブル一覧の確認
mysql> show tables;

# SQLの設定を確認
mysql> status;
```

SQLを理解する場合は、最低限

- ユーザー
- データベース
- テーブル
- データ型

ぐらいは理解していないと、正直「お話にならない」のですが、この「基礎中の基礎」すら知らずに**安易にデータベースを操作している方々が散見されます。**  
主にブロガーやコードが書けるデザイナーに多いですね。  
私から言わせると、

#### 基礎も知らず裏側でどんな動きをしているのかも知らず、データベースを弄るとは、なんて恐ろしいことをしているのだろう😱

と思います。

---

## 2. そもそも2つとも本来使う必要がない

Macならターミナルを使って必要な環境は全て構築できるので、*本来MAMPもXAMPPも使う必要がございません。*

既にある技術でまかなえるのに、本来必要がないツールや技術を用いて、同じような二度手間作業をしてしまうのを、IT業界では

#### 車輪の再発明

といいます。  
MacにMAMPやXAMPPを使ってWordPressの環境を構築することは、この「車輪の再発明」をしているのです。  
前述のように基礎となる技術も培われず、車輪の再発明をして本来使う必要がないツールを使うのは、僕は避けるべきだと思います😊

---

## MacにPHPとSQLが動く環境を構築する

すでに大部分の技術は、*[【上級者向け】WordPressにPostCSSをインストールする【MAMPなし、phpMyAdminなし】](/wordpress/postcss_install)*で解説しているのですが、こちらにも記載いたします。  
なお、内容はNode.jsの設定を省いたことを除けば、同じものになります😊

> 以下の方法で、ご使用中のMacに環境を構築していきます。  
> 既に環境構築済みの方は、こちらの項目は飛ばして読んでください。

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

> MySQLは8.0から、新たに追加された認証プラグイン(caching&#x5F;sha2&#x5F;password)がデフォルトであてがわれるようになりました。  
> その為、ユーザーを追加する際は、旧式の認証プラグインである(mysql&#x5F;native&#x5F;password)を指定する必要があります。

```sql
# mysqlの操作を開始する
$ mysql -u root -p

# mysqlのルート権限のパスワード入力(デフォルトは空白)
Enter password: 

# ユーザ作成
mysql> create user '{{ユーザー名}}'@'{{ホスト}}' identified with mysql_native_password by '{{設定するパスワード}}';
# 以下のような表示が出ていたらOK
Query OK, 0 rows affected (0.00 sec)

# データベース作成
mysql> create database {{データベース名}};
# 以下のような表示が出ていたらOK
Query OK, 1 row affected (0.00 sec)

# ユーザにデータベース操作の権限追加
mysql> grant all privileges on {{データベース名}}.* to '{{ユーザー名}}'@'{{ホスト名}}';
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
| {{作成したデータベース}} |
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
| {{作成したユーザー名}} | {{ホスト名}} |
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

以上で設定は完了です😊

---

## 仕組みを知らずにデータベースを動かし続けることは、本来非常に恐ろしいこと

MAMPやXAMPPを使うと、技術に関する知識は全くないのに、なんとなくでWordPressを動かせます。  
**これは長期的に見たら非常に恐ろしいことです。**

データベースの技術や知識を何も知らずにWordPressを動かし続けると、*トラブルが起きた際に自分で対処ができなくなるので、本来非常に恐ろしいことです😱*  
WordPressのトラブルって、ほとんどがデータベースとの接続に関係するものな気がします😅

> 私はブログのような複雑なシステムを使う必要がない制作物に、メンテナンスコストやセキュリティリスクが高いデータベースは、**絶対に使いたくなりません。**  

それもあってこのブログは、WordPressを使わず「GatsbyJS」というSSG（Static Site Generator）を使っています。  
SSGについては、以前詳しく解説いたしました以下の記事をご覧ください😊

#### [WordPressのデメリットを解消できる、おすすめのフレームワーク2選【Static Site Generator】](/wordpress/demerit_resolution)

ではでは、またね〜🤗
