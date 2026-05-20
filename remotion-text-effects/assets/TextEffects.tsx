import type { CSSProperties } from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";

type SplitMode = "word" | "char" | "manual";

type BaseTextEffectProps = {
  text: string;
  startFrame?: number;
  durationInFrames?: number;
  revealFrames?: number;
  staggerFrames?: number;
  split?: SplitMode;
  chunks?: string[];
  style?: CSSProperties;
  wordStyle?: CSSProperties;
  charStyle?: CSSProperties;
};

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

const eased = (frame: number, start: number, end: number) =>
  interpolate(frame, [start, end], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

const smooth = (value: number) => value * value * (3 - 2 * value);

const splitText = (
  text: string,
  split: SplitMode = "word",
  chunks?: string[],
) => {
  if (split === "manual" && chunks) {
    return chunks;
  }

  if (split === "char") {
    return Array.from(text);
  }

  return text.split(/(\s+)/).filter((part) => part.length > 0);
};

const isSpace = (value: string) => /^\s+$/.test(value);

const itemProgress = ({
  frame,
  index,
  count,
  startFrame,
  durationInFrames,
  revealFrames,
  staggerFrames,
}: {
  frame: number;
  index: number;
  count: number;
  startFrame: number;
  durationInFrames: number;
  revealFrames: number;
  staggerFrames: number;
}) => {
  if (staggerFrames > 0) {
    const start = startFrame + index * staggerFrames;
    return eased(frame, start, start + revealFrames);
  }

  const window = revealFrames / Math.max(durationInFrames, 1);
  const globalProgress = clamp01((frame - startFrame) / Math.max(durationInFrames, 1));
  const start = (index / Math.max(count, 1)) * Math.max(0.01, 1 - window);
  return smooth(clamp01((globalProgress - start) / window));
};

export const TypewriterText: React.FC<
  Omit<BaseTextEffectProps, "split" | "chunks" | "wordStyle" | "charStyle"> & {
    cursor?: boolean;
    cursorStyle?: CSSProperties;
  }
> = ({
  text,
  startFrame = 0,
  durationInFrames = 60,
  style,
  cursor = true,
  cursorStyle,
}) => {
  const frame = useCurrentFrame();
  const progress = clamp01((frame - startFrame) / Math.max(durationInFrames, 1));
  const visible = Math.floor(text.length * progress);
  const blink = Math.floor(frame / 14) % 2 === 0;

  return (
    <span style={style}>
      {text.slice(0, visible)}
      {cursor ? (
        <span style={{ opacity: progress < 1 || blink ? 1 : 0, ...cursorStyle }}>
          |
        </span>
      ) : null}
    </span>
  );
};

export const WordFadeText: React.FC<BaseTextEffectProps> = ({
  text,
  startFrame = 0,
  durationInFrames = 45,
  revealFrames = 14,
  staggerFrames = 0,
  split = "word",
  chunks,
  style,
  wordStyle,
}) => {
  const frame = useCurrentFrame();
  const parts = splitText(text, split, chunks);

  return (
    <span style={style}>
      {parts.map((part, index) => {
        if (isSpace(part)) return part;
        const progress = itemProgress({
          frame,
          index,
          count: parts.length,
          startFrame,
          durationInFrames,
          revealFrames,
          staggerFrames,
        });

        return (
          <span key={`${part}-${index}`} style={{ opacity: progress, ...wordStyle }}>
            {part}
          </span>
        );
      })}
    </span>
  );
};

export const BlurSharpenText: React.FC<
  BaseTextEffectProps & { blurPx?: number; yPx?: number }
> = ({
  text,
  startFrame = 0,
  durationInFrames = 50,
  revealFrames = 24,
  staggerFrames = 8,
  split = "word",
  chunks,
  style,
  wordStyle,
  blurPx = 6,
  yPx = 10,
}) => {
  const frame = useCurrentFrame();
  const parts = splitText(text, split, chunks);

  return (
    <span style={style}>
      {parts.map((part, index) => {
        if (isSpace(part)) return part;
        const progress = itemProgress({
          frame,
          index,
          count: parts.length,
          startFrame,
          durationInFrames,
          revealFrames,
          staggerFrames,
        });

        return (
          <span
            key={`${part}-${index}`}
            style={{
              display: "inline-block",
              opacity: 0.14 + progress * 0.86,
              filter: `blur(${(1 - progress) * blurPx}px)`,
              transform: `translateY(${(1 - progress) * yPx}px)`,
              willChange: "opacity, filter, transform",
              ...wordStyle,
            }}
          >
            {part}
          </span>
        );
      })}
    </span>
  );
};

export const WordLiftText: React.FC<
  BaseTextEffectProps & { yPx?: number }
> = ({
  text,
  startFrame = 0,
  durationInFrames = 45,
  revealFrames = 16,
  staggerFrames = 5,
  split = "word",
  chunks,
  style,
  wordStyle,
  yPx = 12,
}) => {
  const frame = useCurrentFrame();
  const parts = splitText(text, split, chunks);

  return (
    <span style={style}>
      {parts.map((part, index) => {
        if (isSpace(part)) return part;
        const progress = itemProgress({
          frame,
          index,
          count: parts.length,
          startFrame,
          durationInFrames,
          revealFrames,
          staggerFrames,
        });

        return (
          <span
            key={`${part}-${index}`}
            style={{
              display: "inline-block",
              opacity: progress,
              transform: `translateY(${(1 - progress) * yPx}px)`,
              ...wordStyle,
            }}
          >
            {part}
          </span>
        );
      })}
    </span>
  );
};

export const LetterDropText: React.FC<
  BaseTextEffectProps & { yPx?: number }
> = ({
  text,
  startFrame = 0,
  durationInFrames = 45,
  revealFrames = 6,
  staggerFrames = 2,
  style,
  charStyle,
  yPx = -12,
}) => {
  const frame = useCurrentFrame();
  const chars = Array.from(text);

  return (
    <span style={style}>
      {chars.map((char, index) => {
        if (char === " ") return " ";
        const progress = itemProgress({
          frame,
          index,
          count: chars.length,
          startFrame,
          durationInFrames,
          revealFrames,
          staggerFrames,
        });

        return (
          <span
            key={`${char}-${index}`}
            style={{
              display: "inline-block",
              opacity: progress,
              transform: `translateY(${(1 - progress) * yPx}px)`,
              ...charStyle,
            }}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

export const WordWipeText: React.FC<BaseTextEffectProps> = ({
  text,
  startFrame = 0,
  durationInFrames = 45,
  revealFrames = 16,
  staggerFrames = 5,
  split = "word",
  chunks,
  style,
  wordStyle,
}) => {
  const frame = useCurrentFrame();
  const parts = splitText(text, split, chunks);

  return (
    <span style={style}>
      {parts.map((part, index) => {
        if (isSpace(part)) return part;
        const progress = itemProgress({
          frame,
          index,
          count: parts.length,
          startFrame,
          durationInFrames,
          revealFrames,
          staggerFrames,
        });

        return (
          <span
            key={`${part}-${index}`}
            style={{
              display: "inline-block",
              clipPath: `inset(0 ${(1 - progress) * 100}% 0 0)`,
              ...wordStyle,
            }}
          >
            {part}
          </span>
        );
      })}
    </span>
  );
};

const splitIntoLines = (text: string, targetLines = 4) => {
  const words = text.split(/\s+/).filter(Boolean);
  const perLine = Math.max(2, Math.ceil(words.length / targetLines));
  const lines = [];

  for (let i = 0; i < words.length; i += perLine) {
    lines.push(words.slice(i, i + perLine).join(" "));
  }

  return lines;
};

export const SkeletonFillText: React.FC<
  Omit<BaseTextEffectProps, "split" | "chunks" | "wordStyle" | "charStyle"> & {
    lines?: number;
    barColor?: string;
    textColor?: string;
  }
> = ({
  text,
  startFrame = 0,
  durationInFrames = 60,
  revealFrames = 18,
  style,
  lines = 4,
  barColor = "#e2e1dc",
  textColor = "#0b0b08",
}) => {
  const frame = useCurrentFrame();
  const chunks = splitIntoLines(text, lines);

  return (
    <div style={{ display: "grid", gap: 8, ...style }}>
      {chunks.map((chunk, index) => {
        const progress = itemProgress({
          frame,
          index,
          count: chunks.length,
          startFrame,
          durationInFrames,
          revealFrames,
          staggerFrames: 8,
        });

        return (
          <div key={`${chunk}-${index}`} style={{ position: "relative", minHeight: 24 }}>
            <div
              style={{
                width: `${70 + ((index * 13) % 22)}%`,
                height: 18,
                borderRadius: 999,
                background: barColor,
                opacity: 1 - progress,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                color: textColor,
                opacity: progress,
              }}
            >
              {chunk}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const scramblePool = "abcdefghijklmnopqrstuvwxyz0123456789";

const pseudoRandomChar = (frame: number, index: number) => {
  const seed = ((Math.floor(frame / 2) + 1) * 2654435761 + index * 374761393) >>> 0;
  return scramblePool[seed % scramblePool.length] ?? "x";
};

export const CharScrambleText: React.FC<
  Omit<BaseTextEffectProps, "split" | "chunks" | "wordStyle" | "charStyle">
> = ({ text, startFrame = 0, durationInFrames = 55, style }) => {
  const frame = useCurrentFrame();
  const progress = clamp01((frame - startFrame) / Math.max(durationInFrames, 1));
  const chars = Array.from(text);

  return (
    <span style={style}>
      {chars.map((char, index) => {
        if (!/[a-zA-Z0-9]/.test(char)) return char;
        const lockAt = index / Math.max(chars.length, 1);
        const value = progress >= lockAt ? char : pseudoRandomChar(frame, index);
        const cased = char === char.toUpperCase() ? value.toUpperCase() : value;

        return <span key={`${char}-${index}`}>{cased}</span>;
      })}
    </span>
  );
};

const tokenize = (text: string) => {
  const tokens = [];
  let i = 0;

  while (i < text.length) {
    const size = 2 + ((i * 7) % 5);
    const end = Math.min(i + size, text.length);
    tokens.push(text.slice(i, end));
    i = end;
  }

  return tokens;
};

export const TokenChunksText: React.FC<
  Omit<BaseTextEffectProps, "split" | "chunks" | "wordStyle" | "charStyle"> & {
    flashColor?: string;
  }
> = ({
  text,
  startFrame = 0,
  durationInFrames = 55,
  style,
  flashColor = "rgba(11, 11, 8, 0.14)",
}) => {
  const frame = useCurrentFrame();
  const tokens = tokenize(text);
  const progress = clamp01((frame - startFrame) / Math.max(durationInFrames, 1));

  return (
    <span style={style}>
      {tokens.map((token, index) => {
        const start = (index / Math.max(tokens.length, 1)) * 0.94;
        const since = progress - start;
        const visible = since >= 0;
        const flash = 1 - clamp01(since / 0.05);

        return (
          <span
            key={`${token}-${index}`}
            style={{
              opacity: visible ? 1 : 0,
              backgroundColor: visible && flash > 0.02 ? flashColor : "transparent",
            }}
          >
            {token}
          </span>
        );
      })}
    </span>
  );
};

export const InkWashText: React.FC<
  Omit<BaseTextEffectProps, "wordStyle"> & {
    baseRgb?: string;
    minAlpha?: number;
  }
> = ({
  text,
  startFrame = 0,
  durationInFrames = 50,
  revealFrames = 8,
  staggerFrames = 0,
  split = "char",
  chunks,
  style,
  charStyle,
  baseRgb = "11, 11, 8",
  minAlpha = 0.14,
}) => {
  const frame = useCurrentFrame();
  const parts = splitText(text, split, chunks);

  return (
    <span style={style}>
      {parts.map((part, index) => {
        if (part === " ") return " ";
        const progress = itemProgress({
          frame,
          index,
          count: parts.length,
          startFrame,
          durationInFrames,
          revealFrames,
          staggerFrames,
        });
        const alpha = minAlpha + (1 - minAlpha) * progress;

        return (
          <span
            key={`${part}-${index}`}
            style={{ color: `rgba(${baseRgb}, ${alpha})`, ...charStyle }}
          >
            {part}
          </span>
        );
      })}
    </span>
  );
};

export const TextEffect: React.FC<
  BaseTextEffectProps & {
    effect:
      | "typewriter"
      | "word-fade"
      | "blur-sharpen"
      | "word-lift"
      | "letter-drop"
      | "word-wipe"
      | "skeleton-fill"
      | "char-scramble"
      | "token-chunks"
      | "ink-wash";
  }
> = ({ effect, ...props }) => {
  if (effect === "typewriter") return <TypewriterText {...props} />;
  if (effect === "word-fade") return <WordFadeText {...props} />;
  if (effect === "blur-sharpen") return <BlurSharpenText {...props} />;
  if (effect === "word-lift") return <WordLiftText {...props} />;
  if (effect === "letter-drop") return <LetterDropText {...props} />;
  if (effect === "word-wipe") return <WordWipeText {...props} />;
  if (effect === "skeleton-fill") return <SkeletonFillText {...props} />;
  if (effect === "char-scramble") return <CharScrambleText {...props} />;
  if (effect === "token-chunks") return <TokenChunksText {...props} />;
  return <InkWashText {...props} />;
};
