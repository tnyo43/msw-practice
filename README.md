# msw-practice

[Mock Server Worker](https://mswjs.io/) を利用したモックサーバの実装のサンプル。

開発用環境での利用と Storybook でのできるように試した。

# install

```
$ git clone https://github.com/tnyo43/msw-practice.git
$ cd msw-practice
$ yarn
```

# 開発環境での用途

## 準備

[./.env](https://github.com/tnyo43/msw-practice/blob/main/.env) の `REACT_APP_ENVIRONMENT` の指定を `develop` にして、開発モードにする。

## 実行

```
$ yarn dev
```

http://localhost:3000 にアクセスすると、モックサーバを用いた動作が確認できる。

# Storybook での用途

## 実行

```
$ yarn storybook
```

http://localhost:6006 にアクセスすると、3 タイプのモックサーバを用いた Storybook の動作が確認できる。
