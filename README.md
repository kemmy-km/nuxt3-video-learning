# 動画サービスサンプル

## デプロイ先

https://nuxt3-video-app.web.app/

- firebase でデプロイ
- API サーバーはまだ公開していないためエラーが発生します

## 環境

- nuxt3.6
- npm 8.3.1
- nodejs v16.14.0

## 起動

```sh
yarn dev
```

## firebase

firebase を使ったデプロイの手順・コマンド

```sh
# yarnで、firebase-toolsを追加
yarn global add firebase-tools

firebase login

# もし別のアカウントでログインしていたら
firebase logout
firebase login

firebase init
## .output/public
## kemmy-km/nuxt3-video-learning

yarn generate

firebase deploy
```

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# http

chrome://flags/
をアドレス欄に。

下記を入力して enable に変えてみる
#allow-insecure-localhost
