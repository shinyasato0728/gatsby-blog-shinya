<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->

[シンヤのITブログ](https://shinya-it.com/?link=github)のRepository

使われている環境は、[こちらから詳しく見ることができます](https://shinya-it.com/blog/environmental_explanation/?link=github)

# Version

* MacOS version 10.15.3

* Node.js version 12.13.1

* Gatsby CLI version: 2.8.29

* Gatsby version: 2.19.45

---

macOS上での開発環境の構築手順を示す。

### Homebrewのインストール

```
# インストールする
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# 確認する
$ brew -v
#> Homebrew 1.2.3
#> Homebrew/homebrew-core (git revision 7212; last commit 2017-07-02)
```

### nodebrewのインストール

```
# インストールする
$ curl -L git.io/nodebrew | perl - setup

# パスを通す
# ~/.bash_profileに追加
export PATH=$HOME/.nodebrew/current/bin:$PATH

# node.jsのインストール可能なバージョンを確認する
$ nodebrew ls-remote

# node.js v12.13.1のインストール
$ nodebrew install-binary v12.13.1

# 確認する
$ nodebrew ls
v12.13.1

current: none

# node.jsをセットアップする
$ nodebrew use v12.13.1

# 確認する
$ node -v
v12.13.1
```

### yarnのインストール
```
$ brew install yarn
```

### gatsbyのインストール
```
$ npm install -g gatsby-cli
```

### yarn installの実行
```
$ yarn install
```

### ローカルサーバーを立ち上げる
```
$ yarn develop
```

---

### NetlifyとNetlifyCMSの設定

下記を参照。

[Netlifyの設定](https://docs.netlify.com/)

[NetlifyCMSの設定](https://www.netlifycms.org/docs/intro/)

---

gatsby-config.js > サイトの設定

gatsby-ssr > metaタグの設定

static/admin > NetlifyCMSの設定

このままでは動かないので、事前にこちらを確認して設定を変更して下さい

---

src/blog > ブログのディレクトリ。マークダウンで記事を書くだけです
