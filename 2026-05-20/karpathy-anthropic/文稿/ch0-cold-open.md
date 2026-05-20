# Ch0 - Cold Open（目标 30-45s）

## 衔接（来自上一章）

无（cold-open 是开头）

---

## 旁白（中文口播稿）

2026 年 5 月 19 号，下午 3 点 05 分，Karpathy 发了一条推文。

就一句话："Personal update: I've joined Anthropic."

就这十个字，把整个 AI 圈炸了。

因为这个人是谁——他是 OpenAI 的创始成员。而 Anthropic，上个月刚刚第一次反超了 OpenAI，在企业客户里占比 34.4% 对 32.3%。

一个 OpenAI 的创始成员，跑去了刚反超 OpenAI 的对手。

为什么是 Anthropic？为什么是现在？

在回答这两个问题之前，先认识一下这个人。

---

## 视觉旁注（按口播节拍标时间点）

- **0:00-0:03** — 黑屏，推文字符逐字打出"Personal update: I've joined Anthropic."，JetBrains Mono 字体，白字在暗底，字符 stagger 0.06s 逐个落下（砸击感，不是 fade）
- **0:03-0:10** — 推文卡从右侧以 `back.out(1.4)` 滑入屏幕中央，带 Karpathy 头像 + @karpathy + 蓝勾验证 + 时间戳"May 19, 2026 3:05 PM PT"；暖米色底 `#F7F2EA` 全屏铺开
- **0:10-0:20** — 左右两张标签卡 stagger 入场：左"OpenAI 创始成员 · 2015"（OpenAI logo 黑），右"Anthropic 34.4% ↑"（Anthropic logo + Claude 橙 `#d97757` halo）；两张卡之间一条细实线，线上"vs"字样
- **0:20-0:28** — 推文文字"散开"飘出（字符 blur 扩散），屏幕中央留下一个问号"？"字符，在橙色 glow 里碎裂成粒子；Chrome 渐变大字砸下：**"为什么是 Anthropic？为什么是现在？"**（米色底暖版 8-stop bookends）
- **0:28-0:38** — 大字维持 2 秒 → 缓慢 blur 退出；画外音同步说过渡句，屏幕渐暗，准备切入 ch1

---

## 素材源

- Karpathy 推文截图（2026-05-19 3:05 PM PT，链接：x.com/karpathy/status/2056753169888334312）
- Anthropic logo：`assets/logos/anthropic.svg`
- OpenAI logo：`assets/logos/openai.svg`
- Karpathy 头像：视频工程自存（非本库）

---

## metaphor 表（视觉 = 语义扩展，HARD_CONSTRAINTS §12）

| 口播关键词 | 字面理解 | 语义扩展（要做的） |
|---|---|---|
| "Karpathy 发了一条推文" | 推文截图放上去 | 字符逐字打出，每个字母像落锤砸下，不是淡入——强调"这件事砸到了行业" |
| "整个 AI 圈炸了" | 爆炸效果 | 推文卡片落定瞬间，屏幕微震（screen shake 0.1s） + 暖白闪 frame（MOTION_NOTES §3） |
| "为什么是 Anthropic" | 放个问号 | 推文文字"散开"飘走，只剩问号字符 → 橙色 glow 里碎裂成粒子——视觉在问"行业逻辑打破了" |
| "创始成员 vs 反超对手" | 两个 logo 并排 | 两张标签卡带方向感：左边 OpenAI 标签稍暗，右边 Anthropic 标签橙光更亮——视觉已经在"偏向"Anthropic |

---

## 时长估算

口播正文：约 **120 字**
按 200 字/分钟 normal pace：约 **36 秒**
含 stagger 缓冲 + 大字砸下停顿：约 **38-42 秒**（在 30-45s 范围内 ✅）
