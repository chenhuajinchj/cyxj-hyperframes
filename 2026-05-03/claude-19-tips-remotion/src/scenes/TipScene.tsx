import React from "react";
import {
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import type { TipNode } from "../data/timeline";
import {
  AgentTeamsPanel,
  ApiVsMcpCompare,
  ClearContextScene,
  CommandResult,
  CommitSnapshotScene,
  ContextBreakdown,
  ContextGauge,
  EscStopCard,
  HooksNotification,
  MiniCards,
  PlanModePanel,
  RemoteControlQR,
  ScreenshotDropzone,
  SelfCheckTodo,
  SkillCreatorCard,
  StatusLineDemo,
  TerminalWindow,
  ThinkingBudgetCard,
  TypingPrompt,
  WorktreeParallel,
} from "../components/TerminalComponents";
import { MotionStage } from "../visual/MotionStage";
import { SHADOWS, THEME } from "../visual/visualSystem";
import { getSceneSpec } from "./sceneRegistry";

export const TipScene: React.FC<{ tip: TipNode }> = ({ tip }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const spec = getSceneSpec(tip);
  const enter = interpolate(frame, [0, 0.9 * fps], [36, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const opacity = interpolate(frame, [0, 0.65 * fps], [0.72, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <MotionStage>
      <div style={{ opacity, transform: `translateY(${enter}px)` }}>
        <SceneHeader tip={tip} />
        <div style={{ marginTop: 26 }}>{renderMainVisual(tip, spec)}</div>
        <CueRail tip={tip} />
        <MiniCards items={tip.keywords} />
      </div>
    </MotionStage>
  );
};

const SceneHeader: React.FC<{ tip: TipNode }> = ({ tip }) => (
  <div
    style={{
      width: 1010,
      maxWidth: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
    }}
  >
    <div>
      <div
        style={{
          color: THEME.colors.claudeOrange,
          fontFamily: THEME.monoFamily,
          fontSize: 24,
          fontWeight: 800,
        }}
      >
        TIP {String(tip.number).padStart(2, "0")}
      </div>
      <div style={{ marginTop: 8, fontSize: 58, fontWeight: 900, letterSpacing: 0 }}>
        {tip.title}
      </div>
    </div>
    <div
      style={{
        width: 180,
        height: 10,
        borderRadius: 999,
        background: THEME.colors.line,
        overflow: "hidden",
        boxShadow: SHADOWS.soft,
      }}
    >
      <div
        style={{
          width: `${(tip.number / 19) * 100}%`,
          height: "100%",
          background: tip.number >= 15 ? THEME.colors.teal : THEME.colors.claudeOrange,
        }}
      />
    </div>
  </div>
);

const renderMainVisual = (
  tip: TipNode,
  spec: ReturnType<typeof getSceneSpec>,
): React.ReactNode => {
  if (tip.slug === "statusline") {
    return (
      <TerminalWindow
        status={{ model: "opus", context: 54, cost: "$1.42", tokens: "38k" }}
      >
        <TypingPrompt command={spec.prompt} />
        <CommandResult lines={spec.resultLines} />
        <StatusLineDemo />
      </TerminalWindow>
    );
  }

  if (tip.slug === "commit") {
    return <CommitSnapshotScene />;
  }

  if (tip.slug === "clear") {
    return <ClearContextScene />;
  }

  if (tip.slug === "claude-md" || spec.gauge) {
    return (
      <div style={{ display: "flex", gap: 26, alignItems: "center" }}>
        <TerminalWindow
          width={880}
          status={{ model: "sonnet", context: spec.gauge ?? 54, cost: "$0.92", tokens: "29k" }}
        >
          <TypingPrompt command={spec.prompt} />
          <CommandResult lines={spec.resultLines} />
        </TerminalWindow>
        <ContextGauge value={spec.gauge ?? 54} label="context" />
      </div>
    );
  }

  switch (tip.slug) {
    case "plan-mode":
    case "ask-questions":
      return <PlanModePanel />;
    case "specific-requests":
      return (
        <TerminalWindow>
          <TypingPrompt command={spec.prompt} />
          <CommandResult lines={spec.resultLines} />
        </TerminalWindow>
      );
    case "plan-reviewer":
      return <ContextBreakdown />;
    case "self-check":
      return <SelfCheckTodo />;
    case "esc-stop":
      return <EscStopCard />;
    case "double-esc":
      return <EscStopCard double />;
    case "hooks":
      return <HooksNotification />;
    case "screenshots":
      return <ScreenshotDropzone />;
    case "worktree":
      return <WorktreeParallel />;
    case "api-vs-mcp":
      return <ApiVsMcpCompare />;
    case "remote-control":
      return <RemoteControlQR />;
    case "thinking-budget":
      return <ThinkingBudgetCard />;
    case "agent-teams":
      return <AgentTeamsPanel />;
    case "skill-creator":
      return <SkillCreatorCard />;
    default:
      return (
        <TerminalWindow>
          <TypingPrompt command={spec.prompt} />
          <CommandResult lines={spec.resultLines} />
        </TerminalWindow>
      );
  }
};

const CueRail: React.FC<{ tip: TipNode }> = ({ tip }) => {
  const frame = useCurrentFrame();
  return (
    <div style={{ display: "flex", gap: 10, marginTop: 20, flexWrap: "wrap" }}>
      {tip.cues.slice(0, 6).map((cue, index) => {
        const opacity = interpolate(frame, [index * 10, index * 10 + 24], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        return (
          <div
            key={cue.id}
            style={{
              opacity,
              padding: "8px 11px",
              borderRadius: 7,
              background: cue.emphasis === "high" ? "rgba(217,119,87,0.12)" : "rgba(255,248,239,0.58)",
              border: `1px solid ${cue.emphasis === "high" ? THEME.colors.claudeOrange : THEME.colors.line}`,
              color: cue.emphasis === "high" ? THEME.colors.text : THEME.colors.mutedText,
              fontSize: 15,
              fontFamily: THEME.monoFamily,
            }}
          >
            {cue.kind}
          </div>
        );
      })}
    </div>
  );
};
