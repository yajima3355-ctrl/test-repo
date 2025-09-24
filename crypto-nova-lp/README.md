# Crypto Nova - Landing Page

次世代暗号通貨プラットフォーム「Crypto Nova」のランディングページです。AI技術と量子暗号化を組み合わせた革新的なデザインとユーザーエクスペリエンスを提供します。

## 🚀 特徴

- **攻めのデザイン**: ハイコントラストでモダンなサイバーパンク風デザイン
- **高性能**: Core Web Vitals準拠（LCP ≤ 2.5s、INP ≤ 200ms、CLS ≤ 0.1）
- **レスポンシブ**: 375px〜1440pxの全ブレークポイント対応
- **アクセシビリティ**: WCAG AA準拠
- **SEO最適化**: 構造化データ、OGP、メタデータ完備
- **アニメーション**: 60fps滑らかなマイクロインタラクション

## 📁 プロジェクト構造

```
crypto-nova-lp/
├── src/
│   ├── assets/
│   │   ├── img/          # 画像ファイル
│   │   ├── fonts/        # Webフォント
│   │   └── icons/        # アイコンとファビコン
│   ├── styles/
│   │   ├── base/         # リセット、変数、タイポグラフィ
│   │   ├── components/   # ボタン、カード、アニメーション
│   │   ├── layout/       # グリッド、レイアウト
│   │   └── main.css      # メインスタイル
│   ├── scripts/
│   │   └── main.js       # メインJavaScript
│   └── index.html        # メインHTMLファイル
├── dist/                 # 本番用ビルドファイル
└── README.md
```

## 🛠️ 開発環境のセットアップ

### 必要な環境
- Node.js 16.x以上
- npm または yarn
- モダンブラウザ（Chrome 90+, Firefox 88+, Safari 14+）

### ローカル開発の開始

1. **リポジトリのクローン**
```bash
git clone [repository-url]
cd crypto-nova-lp
```

2. **依存関係のインストール**
```bash
npm install
# または
yarn install
```

3. **開発サーバーの起動**
```bash
npm run dev
# または
yarn dev
```

4. **ブラウザでアクセス**
```
http://localhost:3000
```

## 📦 ビルドとデプロイ

### 本番ビルド
```bash
npm run build
# または
yarn build
```

### プレビュー
```bash
npm run preview
# または
yarn preview
```

### ファイル最適化
```bash
npm run optimize
# または
yarn optimize
```

## 🎨 デザインシステム

### カラーパレット
- **プライマリ**: `#FFD700` (Gold)
- **セカンダリ**: `#C0C0C0` (Silver) 
- **アクセント**: `#00FFFF` (Cyan)
- **バックグラウンド**: `#0A0A0A` (Deep Black)
- **テキスト**: `#FFFFFF` / `#CCCCCC` / `#999999`

### タイポグラフィ
- **ヘッディング**: Space Grotesk (300-700)
- **ボディ**: Inter (300-900)
- **モノスペース**: JetBrains Mono

### ブレークポイント
- **Mobile**: 375px
- **Tablet**: 768px
- **Desktop**: 1280px
- **Large**: 1440px

## 🔧 カスタマイズ

### CSS変数の変更
`src/styles/base/variables.css`でデザイントークンを変更できます：

```css
:root {
  --color-primary: #FFD700;
  --color-secondary: #C0C0C0;
  --font-size-base: 1rem;
  /* その他の変数... */
}
```

### コンポーネントの追加
新しいコンポーネントは`src/styles/components/`に追加し、`main.css`でインポートしてください。

### アニメーションの調整
`src/styles/components/animations.css`でアニメーション設定を変更できます。

## 📊 パフォーマンス

### Core Web Vitals目標値
- **LCP**: ≤ 2.5秒
- **INP**: ≤ 200ms
- **CLS**: ≤ 0.1

### 最適化手法
- Critical CSS抽出
- 画像の遅延読み込み
- フォントの最適化
- JavaScript分割読み込み
- Gzip/Brotli圧縮

### パフォーマンス測定
```bash
npm run lighthouse
# または
yarn lighthouse
```

## ♿ アクセシビリティ

### WCAG AA準拠項目
- コントラスト比 4.5:1以上
- キーボードナビゲーション対応
- スクリーンリーダー対応
- フォーカス表示
- セマンティックHTML

### アクセシビリティテスト
```bash
npm run a11y-test
# または
yarn a11y-test
```

## 🔍 SEO対応

### 実装済み項目
- セマンティックHTML構造
- メタデータ最適化
- OGP/Twitter Card
- 構造化データ (JSON-LD)
- サイトマップ
- robots.txt

### SEO監査
```bash
npm run seo-audit
# または
yarn seo-audit
```

## 📱 ブラウザサポート

### 対応ブラウザ
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- iOS Safari 14+
- Chrome Android 90+

### 非対応ブラウザでの動作
- 基本機能は動作
- アニメーションは簡略化
- フォールバック実装済み

## 🧪 テスト

### ユニットテスト
```bash
npm run test
# または
yarn test
```

### E2Eテスト
```bash
npm run test:e2e
# または
yarn test:e2e
```

### ビジュアル回帰テスト
```bash
npm run test:visual
# または
yarn test:visual
```

## 📈 アナリティクス

### Google Analytics 4
- ページビュー追跡
- イベント追跡
- スクロール深度
- コンバージョン測定

### 実装済みイベント
- `cta_click`: CTAボタンクリック
- `scroll_depth`: スクロール深度
- `form_submit`: フォーム送信
- `page_performance`: パフォーマンス指標

## 🚀 デプロイメント

### Vercel
```bash
npm run deploy:vercel
# または
yarn deploy:vercel
```

### Netlify
```bash
npm run deploy:netlify
# または
yarn deploy:netlify
```

### 従来のホスティング
`dist/`フォルダの内容をWebサーバーにアップロードしてください。

## 📝 ライセンス

### 使用フォント
- **Inter**: SIL Open Font License 1.1
- **Space Grotesk**: SIL Open Font License 1.1
- **JetBrains Mono**: SIL Open Font License 1.1

### 使用ライブラリ
- なし（Vanilla JavaScript使用）

### 画像・アイコン
- カスタム作成またはライセンス済み素材を使用
- 詳細は各ファイルのメタデータを参照

## 🤝 コントリビューション

1. フォークしてください
2. フィーチャーブランチを作成してください (`git checkout -b feature/amazing-feature`)
3. 変更をコミットしてください (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュしてください (`git push origin feature/amazing-feature`)
5. プルリクエストを作成してください

## 📞 サポート

### 技術的な質問
- GitHub Issues
- メール: dev@cryptonova.jp

### デザインに関する質問
- Figmaファイル参照
- デザインシステムドキュメント

## 🔄 更新履歴

### v1.0.0 (2025-09-24)
- 初回リリース
- レスポンシブデザイン実装
- パフォーマンス最適化
- アクセシビリティ対応
- SEO対応

## 🎯 今後の予定

- [ ] PWA対応
- [ ] ダークモード切り替え
- [ ] 多言語対応
- [ ] A/Bテスト機能
- [ ] チャットボット統合

---

**Crypto Nova Landing Page** - Built with ❤️ and cutting-edge web technologies