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
