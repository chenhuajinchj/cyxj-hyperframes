import { describe, expect, test } from "vitest";
import { SAFE_AREAS, THEME } from "./visualSystem";

describe("Claude warm visual system", () => {
  test("uses the required warm Claude palette", () => {
    expect(THEME.colors.background).toBe("#F7F2EA");
    expect(THEME.colors.surface).toBe("#EFE7DC");
    expect(THEME.colors.claudeOrange).toBe("#D97757");
    expect(THEME.colors.text).toBe("#2B2622");
    expect(THEME.colors.line).toBe("#D8CEC2");
    expect(THEME.colors.teal).toBe("#2F7D73");
  });

  test("reserves safe regions for later human overlay and subtitles", () => {
    expect(SAFE_AREAS.host.width).toBe(560);
    expect(SAFE_AREAS.host.right).toBe(96);
    expect(SAFE_AREAS.subtitle.bottom).toBe(70);
    expect(SAFE_AREAS.subtitle.height).toBe(170);
  });
});
