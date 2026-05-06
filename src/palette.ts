export const palette = {
  // 背景色
  bgHard:        '#171a1b',
  bgActivity:    '#181b1c',
  bg:            '#1d2021',
  bgSidebar:     '#202325',
  bgNotification:'#1d2420',
  bgBorder:      '#2b2c2f',
  bgSelection:   '#2b302d',
  // 前景色
  fgHard:      '#c9bfa3',
  fg:          '#b3a990',
  fgMuted:     '#9b927d',
  comment:     '#666152',
  lineNumber:  '#454b3f',
  // UIアクセント
  greenSoft: '#658f74', // moss hover
  // シンタックスカラー
  green:     '#517860', // moss
  aqua:      '#587d86', // stream
  yellow:    '#a7884a', // sunlight
  orange:    '#a96b46', // wood
  red:       '#c04848', // maple
  purple:    '#736985', // mineral
} as const
export type Palette = typeof palette
