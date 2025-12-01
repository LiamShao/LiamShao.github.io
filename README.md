# Shao Yulu - Personal Website

## 概要
Backend Engineer × Data Scientist のポートフォリオサイト

## 特徴
- **3言語対応**: 日本語 / English / 中文
- **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
- **ダークテーマ**: プロフェッショナルな黒白灰深青配色
- **履歴書ダウンロード**: ワンクリックでPDFダウンロード
- **静的サイト**: GitHub Pagesで簡単ホスティング

## ファイル構成
```
├── index.html          # メインHTML
├── styles.css          # スタイルシート
├── script.js           # JavaScript (言語切替・ダウンロード機能)
└── README.md           # このファイル
```

## セクション構成
1. **Hero**: 名前・肩書き・主要実績
2. **Tech Stack**: 技術スタック一覧
3. **Projects**: プロジェクト詳細
   - AI & Data Science
   - Backend Engineering
4. **Experience**: 職務経歴タイムライン
5. **About**: 学歴・強み・言語能力・実績
6. **Footer**: 連絡先情報

## GitHub Pagesへのデプロイ方法

### 方法1: GitHub Web UIで直接アップロード
1. GitHubで新規リポジトリ作成 (例: `portfolio`)
2. `index.html`, `styles.css`, `script.js` をアップロード
3. Settings → Pages → Source を `main` ブランチに設定
4. 履歴書PDFファイルも同じディレクトリにアップロード
5. 数分後 `https://yourusername.github.io/portfolio/` でアクセス可能

### 方法2: Git CLIを使用
```bash
# リポジトリ作成とクローン
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# ファイルをコピー
cp index.html styles.css script.js /path/to/portfolio/

# 履歴書もコピー (必要に応じて)
cp 汎用履歴書.pdf /path/to/portfolio/

# コミット & プッシュ
git add .
git commit -m "Initial commit: Personal portfolio website"
git push origin main

# GitHub PagesをSettings → Pagesで有効化
```

## カスタマイズ方法

### 履歴書ダウンロードパスの変更
`script.js` の以下の部分を編集:
```javascript
const resumeFiles = {
    'ja': '汎用履歴書.pdf',
    'en': 'Resume_EN.pdf',  // 英語版履歴書
    'zh': 'Resume_ZH.pdf'   // 中国語版履歴書
};
```

### 配色の変更
`styles.css` の `:root` セクションで色を変更:
```css
:root {
    --primary-dark: #0a0a0a;      /* 背景色 */
    --accent-blue: #2c5282;       /* アクセントカラー */
    --text-primary: #ffffff;      /* 主要テキスト */
    /* ... */
}
```

### 翻訳の追加・修正
`script.js` の `translations` オブジェクトを編集:
```javascript
const translations = {
    ja: { /* 日本語 */ },
    en: { /* 英語 */ },
    zh: { /* 中国語 */ }
};
```

## ブラウザ対応
- Chrome / Edge (最新版)
- Firefox (最新版)
- Safari (最新版)
- モバイルブラウザ

## 技術スタック
- **HTML5**: セマンティックマークアップ
- **CSS3**: Grid、Flexbox、CSS Variables
- **JavaScript (Vanilla)**: フレームワーク不使用
- **レスポンシブ**: メディアクエリによる最適化

## ライセンス
© 2025 Shao Yulu. All rights reserved.

## 連絡先
- Email: liamshao1999@gmail.com
- Location: 東京、日本

---

## 開発メモ

### 配色コンセプト
- **黒**: プロフェッショナル・洗練
- **白**: 可読性
- **グレー**: 階層・情報整理
- **深青**: アクセント・信頼感

### デザイン原則
1. **ミニマリズム**: 余計な装飾なし
2. **可読性**: 十分なコントラスト・行間
3. **階層**: フォントサイズ・色で情報整理
4. **一貫性**: 統一されたスペーシング・スタイル

### パフォーマンス
- **No Framework**: 軽量・高速
- **No Images**: テキストベース
- **Lazy Load**: 不要
- **CDN**: 不要
