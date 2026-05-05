import { mkdirSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { semanticTokenColors, tokenColors, workbenchColors } from './theme'

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
