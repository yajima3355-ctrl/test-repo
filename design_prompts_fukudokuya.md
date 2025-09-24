# デザイン指示プロンプト集

## 3-1. デザイン指示プロンプト（人間向け：XD/PSD/AI）

### 目的
- スマホLPの主要3セクション（FV／参考価格／特徴+CTA）を、赤系ベースで「インパクト×安心」で設計する。
- ファーストビューで地域No.1・高額買取・査定無料・即現金化を強く可視化し、コンバージョン（無料査定）に直結させる。

### 要件

#### カラー
- **主色**: 赤系（#C00000～#E3002B帯を候補）
- **補色**: 白・黒・グレーでメリハリ
- **アクセント**: 金系/黄系を限定的に使用可

#### タイポ
- **フォント**: ゴシック系で視認性重視
- **見出し**: 太字
- **本文**: 中量
- **数字**: 等幅に近い見栄えを確保

#### レイアウト

**FV（ファーストビュー）**:
- H1（大）→サブ→キャンペーンバッジ→信頼ラベル→主要CTA→補足の順
- 第一画面でCTA必ず見える配置

**参考価格**:
- カードグリッド（2列可）
- 商品名／最高買取参考価格（強調）／状態・年式・付属の小文
- ソーシャルプルーフ帯を上か下に

**特徴+CTA**:
- 4アイコン+短文
- 最終CTAは黒帯or固定ボトムで常時表示
- 入力導線（LINE/WEB/TEL）を3択ボタン化

#### コンポーネント化
- ボタン、バッジ、カード、アイコンは再利用化
- SP→PC展開を想してAuto Layout/コンポーネントで管理

#### 画像
- 人物写真・商材写真は著作権譲渡可能な有料素材を選定
- 購入リスト（URL/ライセンス/ファイル名）を台帳化

#### 出力
- XD/PSD/AIいずれか＋高解像度JPG
- 書体情報・カラースタイル・コンポーネント一覧付き

#### 品質
- コントラスト比（WCAG AA準拠目安）を担保
- タップ領域44px以上
- フォームCTAは折返し下でも常時認識可

#### 文言
- 提供済みドラフトをベースに微調整可
- 法的注意文を最小サイズで配置

### チェック
- FVにて「地域No.1／高額買取／査定無料／即現金化」の4点が視線誘導内に収まっているか
- 参考価格が"実数値"に見える視覚設計（桁区切り、単位、補足条件）になっているか
- CTAが最少2箇所（FVと最終）で、離脱位置にも追従表示があるか

---

## 3-2. 画像生成AIプロンプト（ヒーロー写真・背景用）

※素材は購入・譲渡が必須。下記は"作風の当たり付け用"。本番はストックサイトで近似を購入してください。

### /imagine（参考ワーディング）

**高額査定の"驚き"を象徴する、明るい白背景×赤アクセントのクリーンな商材ビジュアル。**

**被写界深度浅め、被写体は【想定商材】のプレミア感が伝わる斜め45度のライティング。**

**ハイキー、反射をほんのり、価格タグや上向き矢印の抽象アイコンを背景に薄く散らす。**

**スマホ画面上での視認性最優先、余白広め、テキストのせ前提のネガティブスペース確保。**

### 出力条件
- **縦長**（推奨 1080×1920）
- **JPEG/PNG**、高解像度
- **背景透過版**も用意

### 具体的なプロンプト例

#### ヒーロー画像用
```
/imagine prompt: Clean minimalist gold jewelry photography, white background, dramatic lighting, premium luxury feel, high contrast, red accent elements, upward arrows, price tags floating, smartphone optimized layout, negative space for text overlay, professional product photography style, high resolution --ar 9:16 --v 6
```

#### 背景パターン用
```
/imagine prompt: Abstract geometric patterns, red and gold color scheme, subtle textures, professional business background, clean lines, modern minimalist design, smartphone screen friendly, high contrast elements --ar 9:16 --v 6
```

#### アイコン用
```
/imagine prompt: Simple line icons, gold and precious metals symbols, clean vector style, red accent colors, professional business icons, high contrast, scalable design --v 6
```

---

## 3-3. コーディング／実装ブリーフ（将来のPC展開も想定）

### ビルド
- **SPファースト**（幅375px基準）
- 後続でPCへメディアクエリ展開

### ナビ
- **固定ボトムCTA**（position: fixed; bottom:0;）で「無料査定」導線を常時可視

### タップ
- **ボタン44px以上**
- フォーム入力はID/ラベル明示
- LINE/WEB/電話の3CTAを並列

### 画像
- **webp優先**、fallbackにjpg/png
- **LCP画像**（FVヒーロー）はpreload
- srcsetで密度最適化

### 計測
- CTAクリック
- ファーストインタラクション
- スクロール到達（参考価格/特徴）をイベント計測

### 速度
- **CLS抑制**（画像サイズ固定）
- CSSはCritical CSS内包
- JSは遅延読込
- 合計リクエスト最小化

### アクセシビリティ
- **alt必須**
- ボタンはrole/aria-label適切化
- **コントラストAA相当**

---

## 3-4. デザインツール別詳細指示

### Adobe XD 用指示

#### アートボード設定
- **SP版**: 375×812px（iPhone X基準）
- **PC版**: 1440×1024px（後続制作用）

#### コンポーネント作成
```
/Components/
  ├── Buttons/
  │   ├── CTA_Primary
  │   ├── CTA_Secondary
  │   └── CTA_Small
  ├── Cards/
  │   ├── PriceCard
  │   └── FeatureCard
  ├── Badges/
  │   ├── Campaign
  │   └── Trust
  └── Icons/
      ├── Gold
      ├── Cash
      ├── Free
      └── Experience
```

#### Auto Layout設定
- 全コンポーネントにAuto Layout適用
- レスポンシブ対応のためのFlex設定
- スペーシング統一（8px, 16px, 24px, 32px）

### Figma 用指示

#### デザインシステム
```
/Design System/
  ├── Colors/
  │   ├── Primary (Red)
  │   ├── Secondary (Gold)
  │   ├── Neutral (Gray)
  │   └── Accent (White/Black)
  ├── Typography/
  │   ├── Headings
  │   ├── Body
  │   └── Captions
  └── Components/
      ├── Buttons
      ├── Cards
      └── Icons
```

#### プロトタイピング
- CTAボタンにタップアニメーション
- スクロール連動アニメーション
- ホバー効果（PC版用）

### Photoshop 用指示

#### レイヤー構成
```
/Layers/
  ├── Background
  ├── Hero_Section/
  │   ├── Background_Image
  │   ├── Text_Overlay
  │   └── CTA_Button
  ├── Price_Section/
  │   ├── Cards_Grid
  │   └── Social_Proof
  └── Features_Section/
      ├── Icons
      ├── Text
      └── Final_CTA
```

#### スマートオブジェクト
- 全テキストをスマートオブジェクト化
- 画像をスマートオブジェクト化（後続編集用）
- ボタン・バッジをスマートオブジェクト化

---

## 3-5. 品質チェックリスト

### デザイン品質
- [ ] コントラスト比4.5:1以上（WCAG AA準拠）
- [ ] タップ領域44px以上
- [ ] フォントサイズ16px以上（本文）
- [ ] 行間1.5以上
- [ ] 色だけで情報を伝えていない

### 技術品質
- [ ] 高解像度対応（@2x, @3x）
- [ ] 画像最適化済み
- [ ] フォント埋め込み対応
- [ ] レスポンシブ対応

### コンテンツ品質
- [ ] 全テキストが読みやすい
- [ ] CTAが明確
- [ ] 信頼要素が適切に配置
- [ ] 法的注意文が適切

### ブランド品質
- [ ] 赤系メインカラー使用
- [ ] 金・貴金属のイメージ統一
- [ ] 信頼感のあるトーン
- [ ] 地域No.1の訴求が明確