# style-dictionary-transform-repro

### `style-dictionary < 3.9.0`

```css
:root {
  --length-base: 4;
  --length-3x: 12;
  --length-2x: 8;
  --length-1x: 4;
}
```

### `style-dictionary >= 3.9.0`

```css
:root {
  --length-base: 4;
  --length-3x: var(--length-base);
  --length-2x: var(--length-base);
  --length-1x: var(--length-base);
}
```
