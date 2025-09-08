# 後藤工業 トップページ デザイン試作

本リポジトリは、依頼内容に基づくトップページ中心の静的デザイン試作です。最小限の文字・アイコン主体の直感ナビで、スクロール量を抑え“探さない”UIを目指しています。

- 配色: 青系を基調（`styles.css`のCSS変数を参照）
- 構成: ヒーロー + 4枚のカード型クイックナビ + 固定ドック
- 目的: 主要な4導線へ最短アクセス（事業 / 実績 / 会社 / 問い合わせ）

## ファイル
- `index.html`: トップページ
- `services.html`, `projects.html`, `company.html`, `contact.html`: 最小サブページ
- `styles.css`: テーマ、レイアウト、コンポーネント
- `script.js`: 年表記等の最小スクリプト
- `assets/icons/*.svg`: ピクトアイコン
- `IA.md`: 情報設計・ワイヤーフレーム要点
- `BRAND_GUIDE.md`: ブランド/デザインガイド

## プレビュー
任意の静的サーバで開いてください。

```bash
cd gotokogyo
python3 -m http.server 5173
# ブラウザで http://localhost:5173 を開く
```

## 納品について（JPG / AI）
- JPG: `index.html`表示状態をフルHD(1920×1080)でスクリーンショット
- AI: Illustrator版レイアウトはご要望に応じて作成可（フォント: Noto Sans JP）

## 参考
- 情報設計: `IA.md`
- ブランドガイド: `BRAND_GUIDE.md`