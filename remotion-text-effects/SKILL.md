---
name: remotion-text-effects
description: Build Remotion-native animated text reveal effects for video compositions. Use when Codex needs to add or adapt streaming typography, kinetic titles, subtitles, quote reveals, typewriter text, word fade, blur sharpen, word lift, letter drop, word wipe, skeleton-to-text, char scramble, token chunk flashes, or ink-wash text in Remotion/React code.
---

# Remotion Text Effects

Use this skill to implement text reveal effects in Remotion with `useCurrentFrame()` and `interpolate()`. Do not copy browser demos that use `requestAnimationFrame`, `setInterval`, CSS transitions, CSS animations, or Tailwind animation utilities; those are not reliable for deterministic rendering.

## Quick Workflow

1. Inspect the composition and identify the text role: hero title, subtitle, quote, UI label, code/token text, or loading/skeleton text.
2. Choose the effect from `references/effects-guide.md` if the user did not name one.
3. Copy or adapt `assets/TextEffects.tsx` into the target Remotion project, commonly as `src/components/TextEffects.tsx`.
4. Use effect components inside a Remotion component. Drive timing by `startFrame`, `durationInFrames`, `staggerFrames`, and `revealFrames`.
5. Run `npm run lint` or the project’s equivalent, then render one or more still frames with `npx remotion still <composition-id> --frame=<n> --scale=0.25`.

## Recommended Mapping

- Editorial hero title: `BlurSharpenText`, `InkWashText`, or `WordWipeText`.
- Fast AI/code feeling: `CharScrambleText`, `TokenChunksText`, or `TypewriterText`.
- Warm readable captions: `WordFadeText` or `WordLiftText`.
- Dramatic quote reveal: `BlurSharpenText` for each phrase plus a highlight shape.
- Loading-to-answer moment: `SkeletonFillText`.
- Playful glyph motion: `LetterDropText`, used sparingly.

## Usage Example

```tsx
import { AbsoluteFill, useVideoConfig } from "remotion";
import { BlurSharpenText, WordWipeText } from "./components/TextEffects";

export const TitleScene = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill>
      <BlurSharpenText
        text="我自己都不读"
        durationInFrames={1.2 * fps}
        staggerFrames={8}
        style={{ fontFamily: "Songti SC", fontSize: 140, lineHeight: 1.04 }}
      />
      <WordWipeText
        text="AI output becomes readable"
        startFrame={1.1 * fps}
        durationInFrames={0.9 * fps}
      />
    </AbsoluteFill>
  );
};
```

## Implementation Rules

- Use Remotion frame math only: `useCurrentFrame()`, `useVideoConfig()`, `interpolate()`, `Easing`, and `spring()` if needed.
- Keep spaces explicit when splitting words. Use non-breaking spaces in chunks when needed, such as `"using\u00A0"`.
- Prefer word-level effects for long titles. Use per-character effects only for short text.
- Clamp all interpolations with `extrapolateLeft: "clamp"` and `extrapolateRight: "clamp"`.
- Verify rendered frames, especially for CJK text, mixed Chinese/English, and large serif titles.

## Bundled Resources

- `assets/TextEffects.tsx`: reusable Remotion text effect components.
- `references/effects-guide.md`: selection guide, timing notes, and adaptation advice.
