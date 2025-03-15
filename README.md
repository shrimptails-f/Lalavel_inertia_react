# 概要

このプロジェクトは、DevContainer + Laravel+ Reactの構成で、MVC + Service + Repository のアーキテクチャを採用した雛形として作成しました。

# ローカル環境構築手順

1. Dockerをインストール
2. VsCodeをインストール
3. VsCodeの拡張機能にDevContainersをインストール
4. プロジェクトルート直下と.devcontainerディレクトリ内に.envを作成

```bash
cp .env.sample .env
cp .devcontainer/.env.sample .env
```

5. ソースをクローン<br>
6. Ctrl Shift Pでコマンドパレットを開く<br>
7. DevContainer:Reopen in Containerを押下

# 技術スタック

## 使用技術

バックエンド: Laravel 12系<br>
フロントエンド: React 19

## 開発環境

DevContainer<br>
Inertia<br>
Vite HMR

## コード品質管理

PHPCsFixer<br>
PHP Intelephense<br>
Prettier
ESLint
