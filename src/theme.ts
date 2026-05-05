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
