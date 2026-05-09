import { palette as p } from './palette'

export const workbenchColors: Record<string, string> = {
  // エディタ本体
  'editor.background':                        p.bg,
  'editor.foreground':                        p.fg,
  'editor.lineHighlightBackground':           p.bgSelection,
  'editor.selectionBackground':               p.bgSelection,
  'editor.inactiveSelectionBackground':       p.bgBorder,
  'editorCursor.foreground':                  p.fg,
  'editor.findMatchBackground':               p.red + '55',
  'editor.findMatchHighlightBackground':      p.red + '33',
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

  // 括弧ペア色分け
  'editorBracketHighlight.foreground1':       p.fgMuted,
  'editorBracketHighlight.foreground2':       p.red,
  'editorBracketHighlight.foreground3':       p.aqua,
  'editorBracketHighlight.foreground4':       p.red,
  'editorBracketHighlight.foreground5':       p.purple,
  'editorBracketHighlight.foreground6':       p.green,
  'editorBracketHighlight.unexpectedBracket.foreground': p.yellow,
  'editorBracketPairGuide.activeBackground1': p.fgMuted,
  'editorBracketPairGuide.activeBackground2': p.red,
  'editorBracketPairGuide.activeBackground3': p.aqua,
  'editorBracketPairGuide.activeBackground4': p.red,
  'editorBracketPairGuide.activeBackground5': p.purple,
  'editorBracketPairGuide.activeBackground6': p.green,
  'editorBracketPairGuide.background1':       p.bgBorder,
  'editorBracketPairGuide.background2':       p.bgBorder,
  'editorBracketPairGuide.background3':       p.bgBorder,
  'editorBracketPairGuide.background4':       p.bgBorder,
  'editorBracketPairGuide.background5':       p.bgBorder,
  'editorBracketPairGuide.background6':       p.bgBorder,
  'editorBracketMatch.foreground':            p.red,

  // アクティビティバー
  'activityBar.background':                   p.bgActivity,
  'activityBar.foreground':                   p.fg,
  'activityBar.inactiveForeground':           p.lineNumber,
  'activityBar.border':                       p.bgBorder,
  'activityBarBadge.background':              p.green,
  'activityBarBadge.foreground':              p.bgHard,

  // サイドバー
  'sideBar.background':                       p.bg,
  'sideBar.foreground':                       p.fg,
  'sideBar.border':                           p.bgBorder,
  'sideBarTitle.foreground':                  p.fgMuted,
  'sideBarSectionHeader.background':          p.bgSidebar,
  'sideBarSectionHeader.foreground':          p.fgMuted,
  'sideBarSectionHeader.border':              p.bgBorder,

  // タブ
  'editorGroupHeader.tabsBackground':         p.bg,
  'tab.activeBackground':                     p.bg,
  'tab.activeForeground':                     p.fg,
  'tab.activeBorderTop':                      p.green,
  'tab.inactiveBackground':                   p.bg,
  'tab.inactiveForeground':                   p.lineNumber,
  'tab.border':                               p.bgBorder,
  'tab.hoverBackground':                      p.bgSelection,

  // ステータスバー
  'statusBar.background':                     p.bg,
  'statusBar.foreground':                     p.fgMuted,
  'statusBar.border':                         p.bgBorder,
  'statusBar.noFolderBackground':             p.bg,
  'statusBarItem.hoverBackground':            p.bgSelection,
  'statusBarItem.remoteBackground':           p.aqua,
  'statusBarItem.remoteForeground':           p.bgHard,

  // タイトルバー
  'titleBar.activeBackground':                p.bg,
  'titleBar.activeForeground':                p.fgMuted,
  'titleBar.inactiveBackground':              p.bg,
  'titleBar.border':                          p.bgBorder,

  // パネル（ターミナル等）
  'panel.background':                         p.bg,
  'panel.border':                             p.bgBorder,
  'panelTitle.activeForeground':              p.fg,
  'panelTitle.activeBorder':                  p.red,
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
  'gitDecoration.conflictingResourceForeground': p.red,

  // 入力・ドロップダウン
  'input.background':                         p.bgSelection,
  'input.foreground':                         p.fg,
  'input.border':                             p.bgBorder,
  'input.placeholderForeground':              p.comment,
  'inputOption.activeBorder':                 p.green,
  'dropdown.background':                      p.bgSidebar,
  'dropdown.foreground':                      p.fg,
  'dropdown.border':                          p.bgBorder,

  // ボタン
  'button.background':                        p.green,
  'button.foreground':                        p.bgHard,
  'button.hoverBackground':                   p.greenSoft,

  // バッジ
  'badge.background':                         p.green,
  'badge.foreground':                         p.bgHard,

  // スクロールバー
  'scrollbarSlider.background':               p.bgSelection + '80',
  'scrollbarSlider.hoverBackground':          p.bgSelection + 'cc',
  'scrollbarSlider.activeBackground':         p.bgSelection,

  // フォーカス・ボーダー
  'focusBorder':                              p.green,
  'widget.shadow':                            '#00000040',

  // エラー・警告・情報
  'editorError.foreground':                   p.yellow,
  'editorWarning.foreground':                 p.red,
  'editorInfo.foreground':                    p.aqua,

  // ピークビュー
  'peekView.border':                          p.green,
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
    settings: { foreground: p.red },
  },
  // 関数名・メソッド名
  {
    scope: [
      'entity.name.function',
      'support.function',
      'meta.function-call entity.name.function',
    ],
    settings: { foreground: p.aqua },
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
    settings: { foreground: p.purple },
  },
  // JSX / TSX のタグ名
  {
    scope: [
      'entity.name.tag',
      'meta.tag entity.name.tag',
      'meta.tag.custom entity.name.tag',
      'support.class.component',
    ],
    settings: { foreground: p.orange },
  },
  // JSX / TSX のタグ括弧
  {
    scope: [
      'punctuation.definition.tag',
      'meta.tag punctuation',
      'punctuation.bracket.angle',
    ],

    settings: { foreground: p.lineNumber },
  },
  // JSX / TSX の属性名
  {
    scope: [
      'entity.other.attribute-name',
      'entity.other.attribute-name.jsx',
      'meta.tag.attributes entity.other.attribute-name',
      'support.type.property-name',
    ],
    settings: { foreground: p.purple },
  },
  // Markdown の見出し 1
  {
    scope: [
      'markup.heading.1',
      'markup.heading.1.markdown',
      'entity.name.section.markdown.1',
    ],
    settings: { foreground: p.red },
  },
  // Markdown の見出し 2
  {
    scope: [
      'markup.heading.2',
      'markup.heading.2.markdown',
      'entity.name.section.markdown.2',
    ],
    settings: { foreground: p.orange },
  },
  // Markdown の見出し 3
  {
    scope: [
      'markup.heading.3',
      'markup.heading.3.markdown',
      'entity.name.section.markdown.3',
    ],
    settings: { foreground: p.yellow },
  },
  // Markdown の見出し 4
  {
    scope: [
      'markup.heading.4',
      'markup.heading.4.markdown',
      'entity.name.section.markdown.4',
    ],
    settings: { foreground: p.aqua },
  },
  // Markdown の見出し記号
  {
    scope: [
      'markup.heading',
      'markup.heading.markdown',
      'entity.name.section.markdown',
      'punctuation.definition.heading.markdown',
    ],
    settings: { foreground: p.lineNumber },
  },
  // Markdown のリンク
  {
    scope: [
      'markup.underline.link',
      'markup.underline.link.markdown',
      'string.other.link.title.markdown',
      'markup.link',
    ],
    settings: { foreground: p.aqua },
  },
  // Markdown のインラインコード・コードフェンス
  {
    scope: [
      'markup.inline.raw',
      'markup.inline.raw.markdown',
      'markup.fenced_code.block.markdown',
      'markup.raw.block.markdown',
    ],
    settings: { foreground: p.green },
  },
  // Markdown の引用
  {
    scope: [
      'markup.quote',
      'markup.quote.markdown',
      'punctuation.definition.quote.begin.markdown',
    ],
    settings: { foreground: p.green, fontStyle: 'italic' },
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
    settings: { foreground: p.fgMuted },
  },
  // プロパティ・パラメータ
  {
    scope: [
      'variable.other.property',
      'variable.other.object.property',
      'variable.parameter',
      'meta.parameters variable.other',
    ],
    settings: { foreground: p.green },
  },
  // デコレーター
  {
    scope: [
      'entity.name.annotation',
      'entity.name.type.annotation',
      'meta.decorator',
      'meta.decorator entity.name.function',
      'meta.annotation',
      'punctuation.decorator',
      'punctuation.definition.annotation',
      'storage.type.annotation',
      'support.annotation',
      'meta.annotation entity.name.type',
    ],
    settings: { foreground: p.purple },
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

export const semanticTokenColors: Record<string, string | object> = {
  function: p.aqua,
  'function.declaration': p.aqua,
  method: p.aqua,
  'method.declaration': p.aqua,
  class: p.purple,
  interface: p.purple,
  type: p.purple,
  typeParameter: p.purple,
  enum: p.purple,
  enumMember: p.purple,
  parameter: p.green,
  property: p.green,
  variable: p.fg,
  'variable.constant': p.fgMuted,
  keyword: p.red,
  string: p.green,
  number: p.fgMuted,
  regexp: p.green,
  annotation: p.purple,
  'annotation.declaration': p.purple,
  decorator: p.purple,
  namespace: p.fg,
  macro: p.purple,
}
