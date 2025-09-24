# ふくどくや LP制作 提出物パッケージ構成

## 📁 推奨フォルダ構成

```
fukudokuya_lp_deliverables/
├── 📁 design/
│   ├── 📄 lp_sp_main.xd                    # メインデザインファイル（XD形式）
│   ├── 📄 lp_sp_main.psd                   # メインデザインファイル（PSD形式）
│   ├── 📄 lp_sp_main.ai                    # メインデザインファイル（AI形式）
│   ├── 📄 preview_sp.jpg                   # プレビュー用画像（高解像度）
│   ├── 📄 preview_sp_web.jpg               # Web用プレビュー画像
│   └── 📄 preview_sp_thumbnail.jpg         # サムネイル画像
│
├── 📁 assets/
│   ├── 📁 images/
│   │   ├── 📄 hero_main.jpg                # メインヒーロー画像
│   │   ├── 📄 hero_main.png                # メインヒーロー画像（PNG）
│   │   ├── 📄 hero_main.webp               # メインヒーロー画像（WebP）
│   │   ├── 📄 hero_main_transparent.png    # 背景透過版
│   │   ├── 📄 background_pattern.jpg       # 背景パターン
│   │   ├── 📄 gold_jewelry_01.jpg          # 金・貴金属写真1
│   │   ├── 📄 gold_jewelry_02.jpg          # 金・貴金属写真2
│   │   ├── 📄 gold_jewelry_03.jpg          # 金・貴金属写真3
│   │   ├── 📄 staff_photo.jpg              # スタッフ写真
│   │   └── 📄 customer_testimonial.jpg     # お客様の声用写真
│   │
│   ├── 📁 icons/
│   │   ├── 📄 icon_gold.svg                # 金アイコン
│   │   ├── 📄 icon_cash.svg                # 現金アイコン
│   │   ├── 📄 icon_free.svg                # 無料アイコン
│   │   ├── 📄 icon_experience.svg          # 実績アイコン
│   │   ├── 📄 icon_phone.svg               # 電話アイコン
│   │   ├── 📄 icon_line.svg                # LINEアイコン
│   │   ├── 📄 icon_web.svg                 # Webアイコン
│   │   ├── 📄 icon_arrow_up.svg            # 上向き矢印
│   │   └── 📄 icon_price_tag.svg            # 価格タグ
│   │
│   ├── 📁 buttons/
│   │   ├── 📄 btn_cta_primary.png          # メインCTAボタン
│   │   ├── 📄 btn_cta_secondary.png        # サブCTAボタン
│   │   ├── 📄 btn_cta_small.png            # 小サイズCTAボタン
│   │   └── 📄 btn_cta_hover.png            # ホバー状態ボタン
│   │
│   └── 📁 badges/
│       ├── 📄 badge_campaign.png           # キャンペーンバッジ
│       ├── 📄 badge_trust.png              # 信頼バッジ
│       ├── 📄 badge_limited.png            # 限定バッジ
│       └── 📄 badge_number1.png            # No.1バッジ
│
├── 📁 docs/
│   ├── 📄 color-typo-styleguide.pdf        # カラー・タイポグラフィガイド
│   ├── 📄 component-list.md                # コンポーネント一覧
│   ├── 📄 license-ledger.xlsx              # 購入素材台帳
│   ├── 📄 font-license.pdf                 # フォントライセンス
│   ├── 📄 design-specifications.pdf        # デザイン仕様書
│   └── 📄 technical-requirements.pdf      # 技術要件書
│
├── 📁 copy/
│   ├── 📄 lp_copy_sp.md                    # コンテンツ原稿
│   ├── 📄 lp_copy_sp_final.md              # 最終版コンテンツ原稿
│   ├── 📄 copy_variations.md                # コピーバリエーション
│   └── 📄 legal_disclaimers.md             # 法的注意文
│
├── 📁 mockups/
│   ├── 📄 mobile_mockup_01.jpg             # モバイルモックアップ1
│   ├── 📄 mobile_mockup_02.jpg             # モバイルモックアップ2
│   ├── 📄 mobile_mockup_03.jpg             # モバイルモックアップ3
│   └── 📄 desktop_mockup.jpg                # デスクトップモックアップ
│
├── 📁 source/
│   ├── 📁 fonts/
│   │   ├── 📄 font_main.otf                # メインフォント
│   │   ├── 📄 font_heading.otf             # 見出しフォント
│   │   └── 📄 font_number.otf              # 数字フォント
│   │
│   ├── 📁 raw_images/
│   │   ├── 📄 hero_raw.psd                 # ヒーロー画像PSD
│   │   ├── 📄 jewelry_raw.psd              # 貴金属写真PSD
│   │   └── 📄 staff_raw.psd                # スタッフ写真PSD
│   │
│   └── 📁 templates/
│       ├── 📄 button_template.psd          # ボタンテンプレート
│       ├── 📄 card_template.psd            # カードテンプレート
│       └── 📄 badge_template.psd           # バッジテンプレート
│
└── 📁 delivery/
    ├── 📄 delivery_summary.pdf             # 納品サマリー
    ├── 📄 file_structure.txt               # ファイル構成説明
    ├── 📄 usage_instructions.pdf           # 使用方法説明書
    └── 📄 contact_information.txt         # 連絡先情報
```

---

## 📋 ファイル詳細仕様

### デザインファイル（/design/）

#### lp_sp_main.xd
- **形式**: Adobe XD
- **バージョン**: 最新版
- **解像度**: 375×812px（iPhone X基準）
- **内容**: 全3セクションの完全なデザイン
- **特徴**: Auto Layout、コンポーネント化済み

#### lp_sp_main.psd
- **形式**: Adobe Photoshop
- **バージョン**: CC 2024以上
- **解像度**: 750×1624px（@2x）
- **内容**: レイヤー構造化されたデザイン
- **特徴**: スマートオブジェクト使用

#### lp_sp_main.ai
- **形式**: Adobe Illustrator
- **バージョン**: CC 2024以上
- **解像度**: ベクター形式
- **内容**: ロゴ、アイコン、イラスト
- **特徴**: スケーラブルなベクター形式

#### preview_sp.jpg
- **解像度**: 750×1624px
- **品質**: 95%
- **用途**: プレビュー・プレゼンテーション用

---

### アセットファイル（/assets/）

#### 画像ファイル
- **形式**: JPG, PNG, WebP
- **解像度**: @1x, @2x, @3x対応
- **品質**: 95%（JPG）、PNG-24（PNG）
- **最適化**: Web用に最適化済み

#### アイコンファイル
- **形式**: SVG（推奨）、PNG
- **サイズ**: 24px, 32px, 48px, 64px
- **スタイル**: アウトライン、フィル、2色対応

#### ボタンファイル
- **形式**: PNG
- **解像度**: @2x, @3x
- **状態**: 通常、ホバー、アクティブ
- **サイズ**: 44px以上（タップ領域）

---

### ドキュメント（/docs/）

#### color-typo-styleguide.pdf
- **内容**: カラーパレット、タイポグラフィ設定
- **形式**: PDF
- **用途**: デザインシステム参照

#### component-list.md
- **内容**: コンポーネント一覧、使用方法
- **形式**: Markdown
- **用途**: 開発者向け仕様書

#### license-ledger.xlsx
- **内容**: 購入素材のライセンス情報
- **形式**: Excel
- **項目**: URL、ライセンス、ファイル名、購入日

---

### コピー（/copy/）

#### lp_copy_sp.md
- **内容**: 全セクションのテキスト内容
- **形式**: Markdown
- **特徴**: 変数【】で実データ置換可能

#### legal_disclaimers.md
- **内容**: 法的注意文、免責事項
- **形式**: Markdown
- **用途**: 法的要件対応

---

## 🔧 技術仕様

### ファイル命名規則
```
[カテゴリ]_[用途]_[サイズ].[拡張子]

例:
- hero_main_750x1624.jpg
- btn_cta_primary_88x44.png
- icon_gold_24x24.svg
```

### 解像度対応
- **@1x**: 375×812px（基準）
- **@2x**: 750×1624px（高解像度）
- **@3x**: 1125×2436px（超高解像度）

### ファイルサイズ制限
- **JPG**: 500KB以下（Web用）
- **PNG**: 1MB以下（アイコン用）
- **SVG**: 50KB以下（ベクター用）

---

## 📦 納品パッケージ

### 圧縮ファイル
```
fukudokuya_lp_deliverables_v1.0.zip
├── 全ファイル（上記構成通り）
└── README.txt（解凍方法説明）
```

### クラウドストレージ
- **Google Drive**: 共有リンク提供
- **Dropbox**: 共有リンク提供
- **OneDrive**: 共有リンク提供

### 物理メディア
- **USBメモリ**: 32GB以上
- **DVD**: データ用DVD
- **外付けHDD**: 1TB以上

---

## ✅ 納品チェックリスト

### ファイル存在確認
- [ ] デザインファイル（XD/PSD/AI）
- [ ] プレビュー画像（JPG）
- [ ] アセットファイル（画像・アイコン・ボタン）
- [ ] ドキュメント（PDF・MD・XLSX）
- [ ] コピーファイル（MD）
- [ ] モックアップ画像
- [ ] ソースファイル（フォント・RAW画像）

### 品質確認
- [ ] ファイルサイズ適切
- [ ] 解像度適切
- [ ] ファイル名規則準拠
- [ ] フォルダ構成準拠
- [ ] ドキュメント完成度

### ライセンス確認
- [ ] 購入素材台帳完成
- [ ] フォントライセンス確認
- [ ] 画像ライセンス確認
- [ ] 著作権譲渡完了

---

## 📞 納品後のサポート

### 修正対応
- **初回修正**: 無料（3回まで）
- **追加修正**: 別途見積もり
- **緊急修正**: 24時間以内対応

### 技術サポート
- **ファイル使用方法**: 1週間
- **デザインシステム**: 1ヶ月
- **技術仕様**: 3ヶ月

### 連絡先
- **メール**: [デザイナー連絡先]
- **電話**: [デザイナー電話番号]
- **対応時間**: 平日10:00-18:00