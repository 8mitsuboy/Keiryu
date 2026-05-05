# Keiryu テーマ — デザイン仕様書

作成日: 2026-05-05

## 概要

**Keiryu（渓流）** は、山間の渓流をテーマにしたVSCodeダークカラーテーマ。苔・水面・木漏れ日・土・紅葉・岩影という自然の色彩をパレットに取り込む。Gruvbox / Gruvbox Material・Everforest・moegi dark vintage を参考にしている。

- パブリッシャー: `8mitsuboy`
- 拡張機能ID: `keiryu`
- テーマラベル: `Keiryu Dark`
- 種別: ダークテーマのみ（`vs-dark`）、ファイルアイコンテーマなし
- 優先対応言語: TypeScript/JavaScript、Dart

---

## プロジェクト構成

```
Keiryu/
├── package.json          # 拡張機能メタデータ + スクリプト
├── tsconfig.json
├── .vscodeignore         # src/ をパッケージから除外
├── src/
│   ├── palette.ts        # カラー定数の一元定義（唯一の変更箇所）
│   ├── theme.ts          # ワークベンチ + トークンカラーのマッピング
│   └── build.ts          # themes/keiryu-dark.json を生成
└── themes/
    └── keiryu-dark.json  # 自動生成・gitにコミット
```

### 作業フロー

| やりたいこと | コマンド |
|---|---|
| JSONを生成 | `npm run build` |
| 変更を監視して自動生成 | `npm run watch` |
| VSCodeでプレビュー | F5 → Extension Development Host |
| Marketplaceに公開 | `npm run build && npx vsce publish` |

---

## カラーパレット

### 背景色

| 役割 | カラーコード | 使用箇所 |
|------|------------|---------|
| bg_activity | `#191a13` | アクティビティバー・ステータスバー・非アクティブタブ |
| bg_hard | `#171814` | 最暗の背景（直接使用は最小限） |
| bg | `#1c1d16` | **エディタ本体（基準値）** |
| bg_sidebar | `#1e1f17` | サイドバー（エディタとの差は意図的に小さい） |
| bg_selection | `#2b2a20` | 選択範囲・ホバー・アクティブ行 |
| bg_border | `#252619` | パネル間の境界線・区切り |
| bg_line_number | `#4a5040` | 行番号テキスト |

`bg_activity` と `bg` の差は約3 hex、`bg` と `bg_sidebar` の差は約2 hex と非常に小さく、Gruvbox Dark Hard と同様の「見れば分かる程度」の段差にとどめる。

### 前景色

| 役割 | カラーコード |
|------|------------|
| fg_hard | `#d4c9a8` |
| fg | `#bfb49a` |
| fg_muted | `#a89e86` |
| コメント | `#6e6858`（イタリック） |

### シンタックスカラー

| 名前 | カラーコード | 由来 | 割り当て先 |
|------|------------|------|----------|
| green / 苔 | `#7a9a6a` | 苔 | 文字列リテラル |
| aqua / 水面 | `#6a9080` | 水面 | キーワード・制御フロー |
| yellow / 木漏れ日 | `#b0945a` | 木漏れ日 | 関数名・型名・クラス名・インターフェース |
| orange / 土 | `#a07850` | 土 | プロパティ・パラメータ・属性 |
| red / 紅葉 | `#a06858` | 紅葉 | デコレーター（`@override`・`@Injectable` など） |
| purple / 岩影 | `#8878a0` | 岩影 | 数値・真偽値・`null`・`undefined` |

---

## ワークベンチUIカラー

### 背景の階層（暗い順）

```
#191a13  アクティビティバー・ステータスバー・非アクティブタブ
#1c1d16  エディタ本体  ← 基準
#1e1f17  サイドバー
#2b2a20  選択・ホバー・アクティブ行
```

### タブバー

- アクティブタブ: `#1c1d16` の背景 ＋ `#b0945a`（木漏れ日）の下線
- 非アクティブタブ: `#191a13` の背景 ＋ `#4a5040` のテキスト

### Git装飾

| 状態 | カラー | 名前 |
|------|-------|------|
| 追加 (A) | `#7a9a6a` | green / 苔 |
| 変更 (M) | `#b0945a` | yellow / 木漏れ日 |
| 削除 (D) | `#a06858` | red / 紅葉 |

### 診断（エラー/警告/情報）

| レベル | カラー |
|-------|-------|
| エラー | `#a06858`（red） |
| 警告 | `#b0945a`（yellow） |
| 情報 | `#6a9080`（aqua） |

---

## トークンカラーマッピング（TypeScript / Dart 重点）

| トークン | カラー | カラーコード |
|---------|-------|------------|
| キーワード（`const`・`class`・`return`・`if`・`async` など） | aqua | `#6a9080` |
| 関数名・メソッド名 | yellow | `#b0945a` |
| 型名・クラス名・インターフェース名 | yellow | `#b0945a` |
| 文字列リテラル（テンプレートリテラル含む） | green | `#7a9a6a` |
| 数値リテラル | purple | `#8878a0` |
| `true`・`false`・`null`・`undefined` | purple | `#8878a0` |
| プロパティ・パラメータ | orange | `#a07850` |
| デコレーター（`@override`・`@Injectable` など） | red | `#a06858` |
| 変数・識別子・演算子 | fg | `#bfb49a` |
| コメント | comment | `#6e6858`（イタリック） |

---

## 公開設定

- パブリッシャー: `8mitsuboy`
- `package.json` の `categories`: `["Themes"]`
- `.vscodeignore` で `src/`・`tsconfig.json`・`node_modules/` を除外
- `themes/keiryu-dark.json` はコミット済みのファイルをそのまま配布（インストール時のビルド不要）
