# Remotion Text Effects Guide

## Effect Selection

| Effect | Best for | Avoid when |
| --- | --- | --- |
| `TypewriterText` | Terminal, prompt, code, live answer simulation | Long polished editorial titles |
| `WordFadeText` | Calm captions and explanatory body text | Text needs strong motion |
| `BlurSharpenText` | Editorial titles, quotes, elegant reveals | Very tiny labels where blur looks muddy |
| `WordLiftText` | Warm, readable phrase-by-phrase entrances | Dense paragraphs |
| `LetterDropText` | Short playful words, emphasis beats | Long Chinese text or serious sections |
| `WordWipeText` | Premium headline reveals, tab labels, CTA copy | Multi-line paragraphs with unstable wrapping |
| `SkeletonFillText` | Loading-to-answer transitions | Very short titles |
| `CharScrambleText` | AI/code/decoder moments | Formal human-facing copy |
| `TokenChunksText` | LLM token streaming, prompt/code snippets | Elegant serif title cards |
| `InkWashText` | Magazine-like gray-to-black text, quotes | Dark backgrounds unless colors are adjusted |

## Timing Defaults

- Hero title: `durationInFrames={36}`, `staggerFrames={8}`, `revealFrames={30}`.
- Subtitle/caption: `durationInFrames={28}`, `staggerFrames={4}`, `revealFrames={18}`.
- Code/token: `durationInFrames={45}`, `staggerFrames={0}`.
- Loading/skeleton: `durationInFrames={55}`.

## CJK and Mixed-Language Notes

- For Chinese hero titles, pass phrase chunks manually when using `BlurSharpenText` if natural grouping matters:

```tsx
<BlurSharpenText text="我自己都不读" split="manual" chunks={["我自己", "都不读"]} />
```

- For mixed English text split into chunks, preserve spaces with `\u00A0`:

```tsx
<BlurSharpenText
  text="I've stopped using Markdown"
  split="manual"
  chunks={["I've stopped\u00A0", "using\u00A0", "Markdown"]}
/>
```

## Adapting to Existing Designs

- Match the parent composition’s typography and color system through `style`, `wordStyle`, or `charStyle`.
- Keep the effect component layout-neutral. Position it from the parent scene when possible.
- For highlighted quotes, render a highlight shape behind the effect, then reveal text on top.
- For text that must not reflow, set a stable width on the parent and use manual chunks.

## Verification

Render stills at:

- Early reveal: `startFrame + 6`
- Mid reveal: `startFrame + durationInFrames / 2`
- Final state: `startFrame + durationInFrames + 10`

Check for missing spaces, clipped descenders, over-blurred small text, and unstable line wrapping.
