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
  // シンタックスカラー
  green:     '#527860', // moss
  greenSoft: '#658f74', // moss hover
  aqua:      '#3d7870', // stream
  yellow:    '#b08830', // sunlight
  orange:    '#c06030', // wood
  red:       '#a85545', // maple
  purple:    '#746b87', // mineral
} as const
export type Palette = typeof palette