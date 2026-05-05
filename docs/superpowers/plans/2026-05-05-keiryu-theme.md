# Keiryu テーマ 実装プラン

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** TypeScriptジェネレーター方式でKeiryuダークテーマのVSCode拡張機能を構築し、Marketplaceに公開できる状態にする

**Architecture:** `src/palette.ts` に全カラー定数を定義し、`src/theme.ts` でワークベンチ色・トークン色のマッピングを記述。`src/build.ts` が `themes/keiryu-dark.json` を生成する。VSCode拡張機能はビルド済みJSONを配布するためインストール時のビルド不要。

**Tech Stack:** TypeScript 5、ts-node 10、nodemon（watchモード用）、vsce（公開用）

---

## ファイル構成

| ファイル | 役割 |
|---------|------|
| `package.json` | 拡張機能メタデータ・npm scripts |
| `tsconfig.json` | TypeScriptコンパイラ設定 |
| `.vscodeignore` | パッケージから除外するファイル指定 |
| `src/palette.ts` | 全カラー定数（変更はここだけ） |
| `src/theme.ts` | workbenchColors・tokenColors・semanticTokenColors の定義 |
| `src/build.ts` | theme.ts を読んで themes/keiryu-dark.json を書き出す |
| `themes/keiryu-dark.json` | 自動生成・gitコミット・VSCodeが実際に読むファイル |
| `README.md` | Marketplace掲載ページの説明文 |

---

## Task 1: プロジェクト初期設定

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `.vscodeignore`
- Create: `themes/.gitkeep`

- [ ] **Step 1: package.json を作成する**

```json
{
  "name": "keiryu",
  "displayName": "Keiryu",
  "description": "自然の渓流をテーマにしたダークカラーテーマ — 苔・水面・木漏れ日",
  "version": "0.1.0",
  "publisher": "8mitsuboy",
  "engines": {
    "vscode": "^1.80.0"
  },
  "categories": ["Themes"],
  "keywords": ["theme", "dark", "japanese", "nature", "gruvbox", "everforest"],
  "contributes": {
    "themes": [
      {
        "label": "Keiryu Dark",
        "uiTheme": "vs-dark",
        "path": "./themes/keiryu-dark.json"
      }
    ]
  },
  "scripts": {
    "build": "ts-node src/build.ts",
    "watch": "nodemon --watch src --ext ts --exec \"npm run build\""
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "nodemon": "^3.0.0",
    "ts-node": "^10.9.0",
    "typescript": "^5.0.0"
  }
}
```

- [ ] **Step 2: tsconfig.json を作成する**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "out"
  },
  "include": ["src"]
}
```

- [ ] **Step 3: .vscodeignore を作成する**

```
src/
tsconfig.json
node_modules/
out/
docs/
.superpowers/
```

- [ ] **Step 4: themes/ ディレクトリを作成する**

```bash
mkdir themes
```

- [ ] **Step 5: 依存パッケージをインストールする**

```bash
npm install
```

期待される出力: `node_modules/` が作成され、エラーなし。

- [ ] **Step 6: コミットする**

```bash
git init
git add package.json tsconfig.json .vscodeignore
git commit -m "chore: プロジェクト初期設定"
```

---

## Task 2: カラーパレット定義

**Files:**
- Create: `src/palette.ts`

- [ ] **Step 1: src/palette.ts を作成する**

```typescript
export const palette = {
  // 背景色（暗い順）
  bgHard:      '#171814',
  bgActivity:  '#191a13',  // アクティビティバー・ステータスバー・非アクティブタブ
  bg:          '#1c1d16',  // エディタ本体（基準）
  bgSidebar:   '#1e1f17',  // サイドバー
  bgBorder:    '#252619',  // 境界線・区切り
  bgSelection: '#2b2a20',  // 選択・ホバー・アクティブ行

  // 前景色
  fgHard:      '#d4c9a8',
  fg:          '#bfb49a',
  fgMuted:     '#a89e86',
  comment:     '#6e6858',
  lineNumber:  '#4a5040',

  // シンタックスカラー
  green:  '#7a9a6a',  // 苔       — 文字列
  aqua:   '#6a9080',  // 水面     — キーワード
  yellow: '#b0945a',  // 木漏れ日 — 関数・型
  orange: '#a07850',  // 土       — プロパティ・パラメータ
  red:    '#a06858',  // 紅葉     — デコレーター
  purple: '#8878a0',  // 岩影     — 数値・真偽値
} as const

export type Palette = typeof palette
```

- [ ] **Step 2: ビルドが通ることを確認する（theme.ts の前に型チェックのみ）**

```bash
npx tsc --noEmit
```

期待される出力: エラーなし。

- [ ] **Step 3: コミットする**

```bash
git add src/palette.ts
git commit -m "feat: カラーパレット定義"
```

---

## Task 3: ワークベンチカラー定義

**Files:**
- Create: `src/theme.ts`（workbenchColors のみ）

- [ ] **Step 1: src/theme.ts を作成する（workbenchColors）**

```typescript
import { palette as p } from './palette'

export const workbenchColors: Record<string, string> = {
  // エディタ本体
  'editor.background':                        p.bg,
  'editor.foreground':                        p.fg,
  'editor.lineHighlightBackground':           p.bgSelection,
  'editor.selectionBackground':               p.bgSelection,
  'editor.inactiveSelectionBackground':       p.bgBorder,
  'editorCursor.foreground':                  p.fg,
  'editor.findMatchBackground':               p.yellow + '55',
  'editor.findMatchHighlightBackground':      p.yellow + '33',
  'editor.wordHighlightBackground':           p.bgSelection,
  'editor.wordHighlightStrongBackground':     p.bgSelection,

  // 行番号
  'editorLineNumber.foreground':              p.lineNumber,
  'editorLineNumber.activeForeground':        p.fgMuted,

  // ガター（git差分マーカー）
  'editorGutter.background':                  p.bg,
  'editorGutter.addedBackground':             p.green,
  'editorGutter.modifiedBackground':          p.yellow,
  'editorGutter.deletedBackground':           p.red,

  // インデントガイド
  'editorIndentGuide.background1':            p.bgBorder,
  'editorIndentGuide.activeBackground1':      p.lineNumber,

  // アクティビティバー
  'activityBar.background':                   p.bgActivity,
  'activityBar.foreground':                   p.fg,
  'activityBar.inactiveForeground':           p.lineNumber,
  'activityBar.border':                       p.bgBorder,
  'activityBarBadge.background':              p.yellow,
  'activityBarBadge.foreground':              p.bgHard,

  // サイドバー
  'sideBar.background':                       p.bgSidebar,
  'sideBar.foreground':                       p.fg,
  'sideBar.border':                           p.bgBorder,
  'sideBarTitle.foreground':                  p.fgMuted,
  'sideBarSectionHeader.background':          p.bgSidebar,
  'sideBarSectionHeader.foreground':          p.fgMuted,
  'sideBarSectionHeader.border':              p.bgBorder,

  // タブ
  'editorGroupHeader.tabsBackground':         p.bgActivity,
  'tab.activeBackground':                     p.bg,
  'tab.activeForeground':                     p.fg,
  'tab.activeBorderTop':                      p.yellow,
  'tab.inactiveBackground':                   p.bgActivity,
  'tab.inactiveForeground':                   p.lineNumber,
  'tab.border':                               p.bgBorder,
  'tab.hoverBackground':                      p.bgSelection,

  // ステータスバー
  'statusBar.background':                     p.bgActivity,
  'statusBar.foreground':                     p.fgMuted,
  'statusBar.border':                         p.bgBorder,
  'statusBar.noFolderBackground':             p.bgActivity,
  'statusBarItem.hoverBackground':            p.bgSelection,
  'statusBarItem.remoteBackground':           p.aqua,
  'statusBarItem.remoteForeground':           p.bgHard,

  // タイトルバー
  'titleBar.activeBackground':                p.bgActivity,
  'titleBar.activeForeground':                p.fgMuted,
  'titleBar.inactiveBackground':              p.bgActivity,
  'titleBar.border':                          p.bgBorder,

  // パネル（ターミナル等）
  'panel.background':                         p.bg,
  'panel.border':                             p.bgBorder,
  'panelTitle.activeForeground':              p.fg,
  'panelTitle.activeBorder':                  p.yellow,
  'panelTitle.inactiveForeground':            p.fgMuted,

  // ターミナル
  'terminal.background':                      p.bg,
  'terminal.foreground':                      p.fg,
  'terminal.ansiBlack':                       p.bgActivity,
  'terminal.ansiRed':                         p.red,
  'terminal.ansiGreen':                       p.green,
  'terminal.ansiYellow':                      p.yellow,
  'terminal.ansiBlue':                        p.aqua,
  'terminal.ansiMagenta':                     p.purple,
  'terminal.ansiCyan':                        p.aqua,
  'terminal.ansiWhite':                       p.fg,
  'terminal.ansiBrightBlack':                 p.comment,
  'terminal.ansiBrightRed':                   p.red,
  'terminal.ansiBrightGreen':                 p.green,
  'terminal.ansiBrightYellow':                p.yellow,
  'terminal.ansiBrightBlue':                  p.aqua,
  'terminal.ansiBrightMagenta':               p.purple,
  'terminal.ansiBrightCyan':                  p.aqua,
  'terminal.ansiBrightWhite':                 p.fgHard,

  // リスト（ファイルエクスプローラー）
  'list.activeSelectionBackground':           p.bgSelection,
  'list.activeSelectionForeground':           p.fg,
  'list.hoverBackground':                     p.bgBorder,
  'list.inactiveSelectionBackground':         p.bgBorder,
  'list.focusBackground':                     p.bgSelection,

  // Git装飾
  'gitDecoration.addedResourceForeground':    p.green,
  'gitDecoration.modifiedResourceForeground': p.yellow,
  'gitDecoration.deletedResourceForeground':  p.red,
  'gitDecoration.untrackedResourceForeground':p.green,
  'gitDecoration.ignoredResourceForeground':  p.comment,
  'gitDecoration.conflictingResourceForeground': p.orange,

  // 入力・ドロップダウン
  'input.background':                         p.bgSelection,
  'input.foreground':                         p.fg,
  'input.border':                             p.bgBorder,
  'input.placeholderForeground':              p.comment,
  'inputOption.activeBorder':                 p.yellow,
  'dropdown.background':                      p.bgSidebar,
  'dropdown.foreground':                      p.fg,
  'dropdown.border':                          p.bgBorder,

  // ボタン
  'button.background':                        p.yellow,
  'button.foreground':                        p.bgHard,
  'button.hoverBackground':                   p.orange,

  // バッジ
  'badge.background':                         p.yellow,
  'badge.foreground':                         p.bgHard,

  // スクロールバー
  'scrollbarSlider.background':               p.bgSelection + '80',
  'scrollbarSlider.hoverBackground':          p.bgSelection + 'cc',
  'scrollbarSlider.activeBackground':         p.bgSelection,

  // フォーカス・ボーダー
  'focusBorder':                              p.yellow,
  'widget.shadow':                            '#00000040',

  // エラー・警告・情報
  'editorError.foreground':                   p.red,
  'editorWarning.foreground':                 p.yellow,
  'editorInfo.foreground':                    p.aqua,

  // ピークビュー
  'peekView.border':                          p.yellow,
  'peekViewEditor.background':                p.bgHard,
  'peekViewResult.background':                p.bgSidebar,
  'peekViewTitle.background':                 p.bgSidebar,
  'peekViewTitleDescription.foreground':      p.fgMuted,
  'peekViewTitleLabel.foreground':            p.fg,

  // パンくずリスト
  'breadcrumb.background':                    p.bg,
  'breadcrumb.foreground':                    p.fgMuted,
  'breadcrumb.focusForeground':               p.fg,

  // 通知
  'notifications.background':                 p.bgSidebar,
  'notifications.border':                     p.bgBorder,
  'notifications.foreground':                 p.fg,
}

export const tokenColors: object[] = []
export const semanticTokenColors: Record<string, string | object> = {}
```

- [ ] **Step 2: 型チェックを通す**

```bash
npx tsc --noEmit
```

期待される出力: エラーなし。

- [ ] **Step 3: コミットする**

```bash
git add src/theme.ts
git commit -m "feat: ワークベンチカラー定義"
```

---

## Task 4: トークンカラー定義

**Files:**
- Modify: `src/theme.ts`（tokenColors・semanticTokenColors を埋める）

- [ ] **Step 1: src/theme.ts の tokenColors を置き換える**

`export const tokenColors: object[] = []` を以下で置き換える:

```typescript
export const tokenColors = [
  // コメント
  {
    scope: ['comment', 'punctuation.definition.comment'],
    settings: { foreground: p.comment, fontStyle: 'italic' },
  },
  // キーワード・制御フロー・ストレージ修飾子
  {
    scope: [
      'keyword',
      'keyword.control',
      'keyword.operator.new',
      'storage.type',
      'storage.modifier',
    ],
    settings: { foreground: p.aqua },
  },
  // 関数名・メソッド名
  {
    scope: [
      'entity.name.function',
      'support.function',
      'meta.function-call entity.name.function',
    ],
    settings: { foreground: p.yellow },
  },
  // 型名・クラス名・インターフェース名
  {
    scope: [
      'entity.name.type',
      'entity.name.class',
      'entity.name.interface',
      'entity.name.enum',
      'support.type',
      'support.class',
    ],
    settings: { foreground: p.yellow },
  },
  // 文字列リテラル
  {
    scope: ['string', 'string.quoted', 'string.template'],
    settings: { foreground: p.green },
  },
  // 数値リテラル・真偽値・null/undefined
  {
    scope: [
      'constant.numeric',
      'constant.language.boolean',
      'constant.language.null',
      'constant.language.undefined',
    ],
    settings: { foreground: p.purple },
  },
  // プロパティ・パラメータ
  {
    scope: [
      'variable.other.property',
      'variable.other.object.property',
      'variable.parameter',
      'meta.parameters variable.other',
    ],
    settings: { foreground: p.orange },
  },
  // デコレーター
  {
    scope: [
      'meta.decorator',
      'meta.decorator entity.name.function',
      'punctuation.decorator',
      'meta.annotation',
      'meta.annotation entity.name.type',
    ],
    settings: { foreground: p.red },
  },
  // 変数・識別子
  {
    scope: ['variable', 'variable.other'],
    settings: { foreground: p.fg },
  },
  // 演算子
  {
    scope: ['keyword.operator'],
    settings: { foreground: p.fgMuted },
  },
  // 記号・括弧
  {
    scope: ['punctuation', 'meta.brace'],
    settings: { foreground: p.fg },
  },
]
```

- [ ] **Step 2: src/theme.ts の semanticTokenColors を置き換える**

`export const semanticTokenColors: Record<string, string | object> = {}` を以下で置き換える:

```typescript
export const semanticTokenColors: Record<string, string | object> = {
  'function':              p.yellow,
  'function.declaration':  p.yellow,
  'method':                p.yellow,
  'method.declaration':    p.yellow,
  'class':                 p.yellow,
  'interface':             p.yellow,
  'type':                  p.yellow,
  'typeParameter':         p.yellow,
  'enum':                  p.yellow,
  'enumMember':            p.purple,
  'parameter':             p.orange,
  'property':              p.orange,
  'variable':              p.fg,
  'variable.constant':     p.purple,
  'keyword':               p.aqua,
  'string':                p.green,
  'number':                p.purple,
  'regexp':                p.green,
  'decorator':             p.red,
  'namespace':             p.fg,
  'macro':                 p.aqua,
}
```

- [ ] **Step 3: 型チェックを通す**

```bash
npx tsc --noEmit
```

期待される出力: エラーなし。

- [ ] **Step 4: コミットする**

```bash
git add src/theme.ts
git commit -m "feat: トークンカラー・セマンティックカラー定義"
```

---

## Task 5: ビルドスクリプト作成と初回ビルド

**Files:**
- Create: `src/build.ts`
- Create: `themes/keiryu-dark.json`（自動生成）

- [ ] **Step 1: src/build.ts を作成する**

```typescript
import { writeFileSync, mkdirSync } from 'fs'
import { resolve } from 'path'
import { workbenchColors, tokenColors, semanticTokenColors } from './theme'

const theme = {
  name: 'Keiryu Dark',
  type: 'dark',
  semanticHighlighting: true,
  colors: workbenchColors,
  tokenColors,
  semanticTokenColors,
}

const outPath = resolve(__dirname, '../themes/keiryu-dark.json')
mkdirSync(resolve(__dirname, '../themes'), { recursive: true })
writeFileSync(outPath, JSON.stringify(theme, null, 2) + '\n', 'utf-8')
console.log('✓ themes/keiryu-dark.json を生成しました')
```

- [ ] **Step 2: 初回ビルドを実行する**

```bash
npm run build
```

期待される出力:
```
✓ themes/keiryu-dark.json を生成しました
```

- [ ] **Step 3: 生成ファイルの構造を確認する**

```bash
node -e "const t = require('./themes/keiryu-dark.json'); console.log('colors:', Object.keys(t.colors).length, '個'); console.log('tokenColors:', t.tokenColors.length, '個')"
```

期待される出力:
```
colors: 70以上 個
tokenColors: 10以上 個
```

- [ ] **Step 4: コミットする**

```bash
git add src/build.ts themes/keiryu-dark.json
git commit -m "feat: ビルドスクリプト追加・初回JSON生成"
```

---

## Task 6: VSCodeでの動作確認

**Files:** なし（視覚的確認のみ）

- [ ] **Step 1: このリポジトリをVSCodeで開いていることを確認する**

VSCodeのエクスプローラーで `Keiryu/` フォルダが開かれていること。

- [ ] **Step 2: Extension Development Hostを起動する**

`F5` キーを押す（または「実行」→「デバッグの開始」）。

新しいVSCodeウィンドウ（Extension Development Host）が開く。

- [ ] **Step 3: テーマを適用する**

Extension Development Host のウィンドウで:
1. `Cmd + Shift + P` → 「色のテーマ」を検索
2. `Keiryu Dark` を選択

- [ ] **Step 4: TypeScriptファイルで視覚的に確認する**

`themes/keiryu-dark.json` または任意の `.ts` ファイルを開き、以下を確認:

| チェック項目 | 期待する色 |
|-------------|-----------|
| `import` などのキーワード | aqua `#6a9080` |
| 文字列リテラル | green `#7a9a6a` |
| 関数名・型名 | yellow `#b0945a` |
| 数値リテラル | purple `#8878a0` |
| コメント | grey italic `#6e6858` |
| エディタ背景 | `#1c1d16` |
| サイドバー背景 | エディタより微妙に明るい `#1e1f17` |
| アクティビティバー | 一番暗い `#191a13` |
| アクティブタブの下線 | yellow `#b0945a` |

問題があれば `src/palette.ts` または `src/theme.ts` を修正して `npm run build` を再実行する。

---

## Task 7: README作成と公開準備

**Files:**
- Create: `README.md`

- [ ] **Step 1: README.md を作成する**

```markdown
# Keiryu — 渓流

山間の渓流をテーマにしたVSCodeダークカラーテーマ。苔・水面・木漏れ日・土・紅葉・岩影の色彩でコードを彩る。

Gruvbox / Gruvbox Material・Everforest・moegi dark vintage を参考に設計。

## カラーパレット

| 名前 | 色 | 由来 |
|------|---|------|
| green / 苔 | `#7a9a6a` | 苔むした岩 |
| aqua / 水面 | `#6a9080` | 渓流の水面 |
| yellow / 木漏れ日 | `#b0945a` | 木漏れ日 |
| orange / 土 | `#a07850` | 川辺の土 |
| red / 紅葉 | `#a06858` | 秋の紅葉 |
| purple / 岩影 | `#8878a0` | 岩の影 |

## 対応言語

TypeScript / JavaScript・Dart を優先的に調整。その他言語も標準的なTextMateスコープに対応。
```

- [ ] **Step 2: バージョンを確認してパッケージを作成する**

```bash
npx vsce package
```

期待される出力: `keiryu-0.1.0.vsix` が生成される。

- [ ] **Step 3: vsixをローカルインストールして最終確認する**

```bash
code --install-extension keiryu-0.1.0.vsix
```

VSCodeを再起動し、テーマが正常に適用されることを確認する。

- [ ] **Step 4: コミットする**

```bash
git add README.md
git commit -m "docs: README追加"
```

- [ ] **Step 5: Marketplaceに公開する（準備ができたら）**

```bash
npx vsce publish
```

`vsce` がPersonal Access Tokenを求める場合は https://dev.azure.com/ でトークンを発行する（スコープ: Marketplace → Manage）。

---

## セルフレビュー

### スペックカバレッジ確認

| 仕様項目 | 対応タスク |
|---------|-----------|
| TypeScriptジェネレーター方式 | Task 1〜5 |
| パレット一元管理 (`palette.ts`) | Task 2 |
| ワークベンチUI（Gruvbox方式の階層） | Task 3 |
| シンタックストークン（TextMate） | Task 4 |
| セマンティックトークン（VS Code新方式） | Task 4 |
| Git装飾（追加・変更・削除） | Task 3 |
| ターミナルカラー | Task 3 |
| アクティブタブ下線 `#b0945a` | Task 3 |
| TypeScript/Dart優先対応 | Task 4 |
| `.vscodeignore` で `src/` 除外 | Task 1 |
| publisher: `8mitsuboy` | Task 1 |
| README + 公開手順 | Task 7 |
