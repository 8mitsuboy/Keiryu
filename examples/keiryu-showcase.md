# Keiryu

## Preview

Keiryu is a dark theme shaped by stream, stone, moss, and late autumn light.

### Links

- [Marketplace](https://marketplace.visualstudio.com/items?itemName=8mitsuboy.keiryu)

### Inline Code

Use `npm run build` before `npx vsce publish`.

### Quote

> Quiet backgrounds hold the frame.

### Table

| **Name** | **Hex** | **Role** |
| --- | --- | --- |
| green | `#517860` | strings |
| aqua | `#587d86` | functions |
| red | `#c04848` | keywords |
| purple | `#736985` | types |

#### Notes

**Markdown** heading levels should feel distinct without getting noisy.

### Code Block

```ts
const streamPalette = {
  aqua: '#587d86',
  green: '#517860',
} as const

export function pickAccent(kind: 'function' | 'type') {
  return kind === 'function' ? streamPalette.aqua : '#736985'
}
```