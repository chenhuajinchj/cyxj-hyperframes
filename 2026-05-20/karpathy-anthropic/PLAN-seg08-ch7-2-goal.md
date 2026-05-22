# PLAN-seg08-ch7-2-goal — 预测 2 · Goal 风格命令 · 从过程到状态

> 本段适用 §7（SRT 真源）/ §8（段内时间从 0）/ §10（SEGMENT_DURATION + tl.set 撑满）/ §11（cutaway）/ §12.a-b（preview 验过 + commit）/ §13（资料台账）。seg07→seg08 默认 hard cut（§9），SEC A 头部 1.6s 暗场缓冲消化字幕 339 末 → 340 起点之间的 1.4s 口播停顿。

- **段编号**：seg08（章别名 ch7-2）
- **段长**：**90.7s**（含 1.6s SEC A 头部 buffer + 89.1s 字幕内容，PLAN gate G1 决议）
- **全片位置**：16:06.166 → 17:36.866（≈ 字幕 340-372，含 340 桥接首条）
- **形态**：cutaway
- **真源**：`字幕/加入之后.srt` 第 340-372 条

---

## ✅ PLAN gate 决议候选（待用户确认）

### G1 段长 + 全片对齐

- seg08 段长 = **90.7s**（1.6 buffer + 89.1 字幕）
- seg08 `data-start` = 880.6 + 85.5 = **966.1s**（紧贴 seg07 末，hard cut）
- seg08 段内时间 1.6s = 全片 967.7s ≈ 16:07.7 ≈ 字幕 340 起点（00:16:07.666）✓
- 11 段总和同步校准：38+112+80+91+201+152+206.6+85.5+**90.7**+107+128 = **1191.8s**（seg09-10 旧估，待各自 PLAN SRT 校准）

> **PROJECT-STATE §3 表 seg08 旧估 97s → SRT 真源 90.7s，差 -6.3s**（旧表 16:00→17:37 = 97s 是约整误差；SRT 校准起点为字幕 340 起点 16:07.666）。

### G2 主比喻 — **「cc-window 终端 + destination card + 自动化路径」三件套**

整段叙事框架 = 「**从命令式到声明式**」的视觉化对比。cc-window 是 SEC B 和 SEC E 的主战场（演示 `/goal` 命令演进），destination card 是 seg08 主物件（贯穿 SEC B / E / F），motionPath 自动化路径是 SEC E 视觉锚。

**SEC F 是全段 chrome 大字唯一位**，金句钉位：

> **「从 做这一步 → 到 达成这状态」**

三件套贯穿：
- **cc-window**（复用 `templates/components/cc-window`）—— SEC B 第一次出场 `/goal "上线一个登录页面"`；SEC E 升级出场 `/goal "..." --deep-research`；**SEC F v1 改造为两终端对比**（见 §10）
- **destination card**（米色暖底 + Claude 橙 2px 边框 + 「目标：...」chrome 小字）—— SEC B 首次出场（与 cc-window 同框），SEC E 升级（含 Deep Research 标签）。**SEC F v1 改造后不出现**，destination 语义钩在右终端最后一行 `[ship] ✓ 目标达成` inline chip（见 §10）
- **自动化路径**（zigzag motionPath + 6 节点 + agent 立方体）—— SEC E 唯一位

### G3 真截图清单 — **4 张已就位** ✅

| 截图文件 | SEC | 用途 |
|---|---|---|
| `assets/screenshots/claude-code-goal-docs.png` ✅ | B | Claude Code `/goal` 官方 docs，含 v2.1.139 提示 + Usage 列表 |
| `assets/screenshots/codex-follow-goal.png` ✅ | C | OpenAI Codex「Follow a goal」官方页 + Starter prompt + Best for 列表 |
| `assets/screenshots/chatgpt-pro-research.png` ✅ | D 左 | 用户实际操作场景 + 右下「专业 5 分钟以上」模型 panel（**全图露 · 用户确认旧对话无隐私问题**）|
| `assets/screenshots/claude-research-menu.png` ✅ | D 右 | 用户 Claude.ai 菜单展开 + Research 选项可见 |

**双源验证强度**：4 张全部是 Anthropic / OpenAI 官方页 + 用户真实操作截图，可信度满分。**「用户实际使用截图 > 官方宣传图」是本段视觉信任度的杠杆**。

---

## 0. 本段的核心叙事

seg08 是**三个预测的第二个** —— 填上 seg06 SEC F 留下的「02」卡：**Goal 风格命令**。

- **主比喻**：从「写步骤」（命令式）→ 到「设目标」（声明式）。Codex 走得早，Claude Code 跟上，趋势明确。下一步 = 深度研究嵌进 GOAL → 自跑测试找 bug 直到上线。
- **关键论点（卡帕西原话方向）**：
  - ✅ Claude Code `/goal` 已经在做（v2.1.139）
  - ✅ Codex 走得早一些，A 社跟进（"接口逻辑太对了"）
  - ✅ 下一步可能延伸：Deep Research（GPT Pro）/ Research（Claude.ai）现有功能 → 嵌进 GOAL 命令 → 自主收集资料 / 对比来源 / debug / 跑测试 / 上线
  - **本质变化**：「从做这一步 → 到达成这一个状态」
- **callback seg06**：SEC A 开头「02」卡亮起（承接 seg06 SEC F cliffhanger）；SEC F 末「03」卡 hint 亮起（**不亮全 · 留给 seg09 自己开门**）
- **下一段连接**：SEC F 末 chrome 大字 hold → hard cut 到 seg09。**seg08 不做 outro fade**（§18）

---

## §13 资料台账

### 官方文档 / skill

- `hyperframes`：visual identity → end-state layout → GSAP timeline；scene-content 用 flex / grid 不靠 absolute（§14）；Layout Before Animation。
- `gsap`：position parameter `"<"` `">"`；`autoAlpha`；stagger；SVG path strokeDashoffset（destination card 边框描线入场用）；**MotionPathPlugin** 沿 path 运动（**SEC E agent 立方体走 6 节点路径**用，复用 seg07 实战写法）。
- `docs/HARD_CONSTRAINTS.md`：N9 selector / N15 字体硬编码 / N17 米色底 contrast / N18 段末禁 exit / N19 commit 节奏 / **§14 GSAP transform 覆盖 CSS translate**（destination card / agent 立方体居中要用 `xPercent: -50, yPercent: -50` 不用 CSS translate）。
- `MY_MOTION_NOTES.md §3` 撞击同帧合成（SEC F chrome 大字主峰用）；§4 teaser 不 spoiler（SEC F 末「03」卡不点开内容）。

### 事实复核（写 PLAN 前已查 ✅）

> 用户回复"这些在写逐字稿时已经判断过是真实的了"——所以本节只**列官方 URL** 作为视觉素材出处档案，不另跑核实。

| # | 事实 | 官方源 URL | 视觉用途 |
|---|---|---|---|
| 1 | Claude Code `/goal` 命令 v2.1.139 | https://code.claude.com/docs/en/goal | SEC B 截图 + 版本号 chip |
| 2 | OpenAI Codex「Follow a goal」 | https://developers.openai.com/codex/use-cases/follow-goals | SEC C 截图 + Starter prompt 引用 |
| 3 | ChatGPT Deep Research | https://openai.com/index/introducing-deep-research/ | SEC D 左 chip「Deep Research」官方名 |
| 4 | Claude.ai Research（multi-agent） | https://www.anthropic.com/engineering/multi-agent-research-system | SEC D 右 chip「Research」官方名 |

**HF 视觉里**：字幕中文术语「Goal 风格命令」「研究级智能体」「研究级探索」用作 chrome 小字 chip 标题；英文官方名「`/goal` command」「Deep Research」「Research」用作 chip 副标（**双语 chip = 增强真实感**）。

### 真实素材清单（**双层视觉规则继承 seg06 / seg07**）

> 卡顶 logo / chip = 第 1 层品牌识别 / 卡中真截图 = 第 2 层实物证据。本段全部 4 张真截图，**没有抽象情景演绎**（与 seg07 SEC C 会计 SOP 演绎不同）—— seg08 整段都是真实产品对比。

#### SEC B 现状（claude-code-goal-docs.png）

| 元素 | 资产 | 处理 |
|---|---|---|
| Claude Code docs 真截图 | `assets/screenshots/claude-code-goal-docs.png` ✅ | 标题「Keep Claude working toward a goal」+ v2.1.139 蓝色提示 + Usage 列表 |
| Claude logo | `assets/logos/claude.svg` | 卡顶 1.0× scale + chip「Claude Code · v2.1.139」|
| cc-window | `templates/components/cc-window` | 800×280px，显示 `> /goal "上线一个登录页面"` |
| destination card | 自建 HTML 卡 | 300×140px，米色暖底 + Claude 橙 2px 边框 + 「目标：上线一个登录页面」chrome 小字 |
| marker sweep | 工程内自建（复用 seg06 .a-marker-sweep CSS） | 划过截图标题 + Usage 第 1 条 |

#### SEC C 起源（codex-follow-goal.png）

| 元素 | 资产 | 处理 |
|---|---|---|
| Codex docs 真截图 | `assets/screenshots/codex-follow-goal.png` ✅ | 标题「Follow a goal」+ Starter prompt 模板 + Best for 三条 |
| OpenAI logo | `assets/logos/openai.svg` | **不灰化**（份量比 SEC D 左截图重，Claude 橙 2px 边框强调"领跑者"） + chip「Codex · 最早」 |
| Claude Code 小卡（对位） | 自建 HTML 卡 | 灰边框 + 灰文字 + chip「Claude Code · 跟进」（**视觉对比：左 Claude 橙边框 = 领跑，右灰边框 = 跟进**）|
| 箭头 | 自建 SVG | 米色暖深 → Claude 橙渐变箭头，从 Codex 卡指向 Claude Code 卡 |

#### SEC D 双区对位（chatgpt-pro-research.png + claude-research-menu.png）

| 元素 | 资产 | 处理 |
|---|---|---|
| ChatGPT 实际操作截图 | `assets/screenshots/chatgpt-pro-research.png` ✅ | **全图露**（用户确认旧对话无隐私问题）—— marker sweep 引导视线到右下「专业 5 分钟以上」选中的模型选择 panel |
| Claude 实际操作截图 | `assets/screenshots/claude-research-menu.png` ✅ | 全图露（菜单 + Research 高亮 + 右上 Opus 4.7 Adaptive 都是干净内容）|
| OpenAI logo | `assets/logos/openai.svg` | 左卡顶 1.2× scale + chip「OpenAI · ChatGPT Pro」|
| Anthropic logo | `assets/logos/anthropic.svg` | 右卡顶 1.2× scale + chip「Anthropic · Claude.ai」|
| 「=」符号 | 自建 SVG | chrome 小字 Claude 橙 60px，两区中央，表示"功能类似" |
| marker sweep | 复用 | 左卡划过「专业 5 分钟以上」panel；右卡划过「Research」菜单项 |

#### SEC E 预测（自建视觉，无截图）

| 元素 | 资产 | 处理 |
|---|---|---|
| destination card 升级版 | 自建 HTML 卡 | 升级 SEC B 的目标卡：「目标：找 bug 改到可上线」+ chip「Goal」+ chip「Deep Research」（Claude 橙背景）|
| cc-window 升级命令 | 复用 | `> /goal "找 bug 改到可上线" --deep-research`（v1 实现时可微调字符串）|
| 6 节点 motionPath 路径 | 自建 SVG path | zigzag 路径（米色暖深 dashed 2px）+ 6 节点圆点（米色暖底 + Claude 橙 1px 边框）|
| agent 立方体 | 自建 SVG（**复用 seg07 上下文包视觉 + 差异化**） | 60×60px 米色暖底 + Claude 橙 1px 边框 + **内部 Claude 橙 6×6px 小点 pulse 呼吸**（0.8s 周期 + scale 1.0↔1.4 + opacity 0.6↔1.0，全程不停 = "agent 在跑" 视觉信号）+ **走 motionPath 时拖 0.2s 短尾**（米色暖深 → Claude 橙渐变 trail，SVG `<path>` mask + opacity 0.4→0 跟随）|
| 6 节点标题 | chrome 小字 18px | ① research（资料）② compare（对比）③ report（出报告）④ debug ⑤ test（测试）⑥ ship（上线）|

#### SEC F 金句（destination card + 对比 layout）

| 元素 | 资产 | 处理 |
|---|---|---|
| chrome 大字 | text-effects token-stagger | **全段唯一位**：「从 做这一步 → 到 达成这状态」（米色底暖版 8-stop chrome 80px，token-stagger 0.08s + filter blur 14px→0 1.5s）|
| 左 fade out 列表 | 自建 HTML 列表（cc-window 风样式）| 命令式：`/run` / `/test` / `/debug` / `/lint` / `--interface api` / `--style strict` / `--lang typescript` 每条 strikethrough 划掉 stagger 0.3s |
| 右 destination card 升级 | 复用 SEC E 同款 | hold 在右半屏，agent 立方体抵达终点 + Claude 橙 halo |
| 「03」callback chip | 自建 HTML 卡 | seg06 SEC F 三空白卡的「03」缩略图，autoAlpha 0.3→0.6 + scale 1.0→1.2 hint **不点开内容**（留给 seg09）|

#### 全段 logo 索引

已就位：`claude.svg` / `openai.svg` / `anthropic.svg` / `claudecode.svg`（如缺要 ls 确认）。**不用**：Karpathy 头像 / Codex 单独 logo（用 openai.svg + chip "Codex" 即可）/ Gemini 等其他 logo。

#### **资产命名纪律**

- ✅ `assets/screenshots/claude-code-goal-docs.png`（用户已抓 + 重命名）
- ✅ `assets/screenshots/codex-follow-goal.png`（用户已抓 + 重命名）
- ✅ `assets/screenshots/chatgpt-pro-research.png`（用户已抓 + 重命名）
- ✅ `assets/screenshots/claude-research-menu.png`（用户已抓 + 重命名）

### 参考工程

- `compositions/seg07-shichang.html`：cc-window 一行命令 char-scramble 写法 + MotionPathPlugin agent 沿 path 飞行 + 双层视觉规则（卡顶 logo / 卡内截图）—— **SEC B / E cc-window + SEC E motionPath 6 节点都直接借鉴 seg07 写法**。
- `compositions/seg06-merge.html`：双区对位 layout + 桥接卡（SEC F 三空白卡）+ chrome 大字唯一位 + .a-marker-sweep CSS class—— **SEC D 双区对位 + SEC F「03」callback chip + chrome 大字 layout 直接借鉴 seg06**。
- `compositions/seg05-merge.html`：双 logo 左右对位（Karpathy + Anthropic）—— **SEC D 双区 OpenAI / Anthropic 对位结构** 借鉴。
- `compositions/seg03-momentum.html`：Ramp / Anthropic JV 真截图卡 layout —— **SEC B / C 真截图卡** layout 借鉴。

### 官方零件清单（templates/components/ 已抽）

| 零件 | 用途 | 用在哪 |
|---|---|---|
| `cc-window` | Claude Code 终端 UI | SEC B `> /goal "上线一个登录页面"` + SEC E `> /goal "..." --deep-research` |
| `xcyj-tokens` | DNA 颜色 / 字体 token | 全段 |
| `text-effects.char-scramble` | Matrix 字符解码 | SEC B / C / E cc-window 命令解码 + SEC D chip 标题 |
| `text-effects.token-stagger` | 字符级 stagger | SEC F chrome 大字主峰 |
| **marker-sweep（工程内自建）** | 高亮 marker | SEC B 截图 + SEC C 截图 + SEC D 双卡 + SEC F「03」hint。**不是 templates/components/ 零件**——复制 `compositions/seg06-merge.html` `.a-marker-sweep` CSS class（line 217-231）+ GSAP `tl.fromTo({left: '-100%'}, {left: '100%', duration: 1.4, ease: 'power2.inOut'})` 用法 |
| `spec-fill` | 逐行填充 | SEC B / C / D 副标说明 + SEC F 划掉列表 |

不用：`orbit-dots` / `pulse-bars` / `shake-error` / `text-effects.token-chunks`（避免与 seg04/06 重复）。

### 不用的 catalog

- `flowchart` / `data-chart`：seg08 SEC E 自建 6 节点 motionPath（**不用 catalog flowchart**：黄色 sticky-note 风 ≠ DNA 米色暖底；catalog 是 fork 起点不是参数化零件）
- `ui-3d-reveal`：候选过但不用（13s 透视 3D 抢戏，与本段 cc-window + 真截图 layout 不协调）
- `whip-pan` / `flash-through-white` / `cinematic-zoom`：seg07→seg08 / seg08→seg09 均默认 hard cut（§9）

---

## 1. 字幕条对应 + SEC 切分 + 节奏标签

> SRT 时间码已精确到毫秒。

| SEC | 字幕条 | 段内时间 | 段长 | 节奏 | 主题 |
|---|---|---|---:|---|---|
| A | 340-341 | 0.0-6.5s | 6.5 | **buffer→COOL→WARM** | 桥接：seg06「02」卡亮起 → Goal 风格命令入题 |
| B | 342-345 | 6.5-17.8s | 11.3 | **WARM** | Claude Code `/goal` 现状：cc-window + destination card + 真截图三件套首次同框 |
| C | 346-349 | 17.8-25.6s | 7.8 | **WARM** | 起源 Codex + A 社跟进，双卡对位（Claude 橙边框 vs 灰边框）|
| D | 350-359 | 25.6-53.0s | 27.4 | **GLOW · 段最长** | 上一步延伸：GPT Pro Deep Research ↔ Claude.ai Research，双区对位 + 两张真截图 + 「=」符号 |
| E | 360-366 | 53.0-72.5s | 19.5 | **HOT 1 · 预测** | 深度研究嵌进 GOAL → 6 节点自动化路径 + agent 沿 motionPath 走完整循环 |
| F | 367-372 | 72.5-90.7s | 18.2 | **HOT 2 主峰 · chrome 大字唯一位** | 本质变化金句 + 命令式 fade out vs 状态式 fade in + 桥接 seg09 「03」hint |

合计：6.5 + 11.3 + 7.8 + 27.4 + 19.5 + 18.2 = **90.7s** ✓

SEC 之间 hard cut（§9）。**SEC F 末禁 exit fade**（§18，seg08 不是 outro）。

---

## 2. metaphor 表（语义扩展，禁字幕直译）

> 视觉跟语义走，不当字幕翻译。每条口播对应一个视觉 cue，空窗用过程视觉填，不 spoiler 下一句（MOTION_NOTES §4）。

| 口播 | 字幕 | SEC | 视觉语义扩展 |
|---|---|---|---|
| (1.6s 暗场缓冲) | — | A buffer | 屏幕承接 seg07 SEC D-3 hold 状态淡出（seg07 末 hard cut 进，seg08 头 1.6s 米色暖底 #F7F2EA 纯色 hold）|
| "就是然后第二个的话" | 340 | A 入 | 屏幕中央浮出 callback chip：seg06 SEC F 三空白卡的「02」**亮起 + scale 1.4×**（autoAlpha 0.4→1 + Claude 橙边框 1px→2px，1.2s ease-out）。「01」「03」缩到屏幕底（autoAlpha 0.3 + scale 0.6 退到背景）|
| "其实就是Goal风格的Goal命令的" | 341 | A 中 | 「02」卡内浮出 chrome 小字 `Goal 风格命令` + 英文副标 `goal-style commands`（米色底暖版渐变 36px，token-stagger 0.06s 1s 入场）。卡上方 chip "预测 2 · prediction 2"（Claude 橙背景 + 白字 18px，spec-fill 一行 0.6s）|
| "现在Claude Code不是有了一个新的命令吗" | 342 | B 入 | 屏幕 hard cut，「02」卡缩到屏幕底 1/4 当背景脉络。**屏幕主区切左右双区 layout**：左半屏入场 cc-window（800×280px，复用 templates/components/cc-window，char-scramble 解码 0.6s）显示 prompt `>`；右半屏入场真截图卡（claude-code-goal-docs.png 480×280px + 米色暖底 + 1px Claude 橙边框 + 卡顶 claude.svg + chip "Claude Code · v2.1.139"）|
| "叫做GOAL" | 343 | B 中-1 | cc-window 内继续解码出命令名：`> /goal`（char-scramble 0.6s）。右半截图卡内 **marker sweep Claude 橙划过标题"Keep Claude working toward a goal"**（1.4s power2.inOut）|
| "就是给这Agent一个目标" | 344 | B 中-2 | cc-window 内继续解码出完整命令：`> /goal "上线一个登录页面"`（char-scramble 0.6s）。屏幕右下浮出 **destination card 首次出场**（300×140px，米色暖底 + Claude 橙 2px 边框 + 标题 chrome 小字 `目标：上线一个登录页面` 28px + chip "Goal"）—— **seg08 主物件首次定义**，spring back.out 1.4 入场 1.2s |
| "让它一直工作到你说停" | 345 | B 末 | cc-window 下方浮出 spec-fill `· 工作到你说停 · until you say stop`（米色暖深 18px 1s spec-fill）。右半截图卡内 **第二道 marker sweep 划过 Usage 第 1 条「Migrating a module... compiles and tests pass」**（1.4s）。**SEC B hot moment**: cc-window + 真截图 + destination card 三件套同框 hold 2s |
| "然后这个命令其实最初是 Codex 那边做的" | 346 | C 入 | 屏幕 hard cut。SEC B 所有元素 autoAlpha → 0（0.8s），「02」卡保留缩在屏幕底。**屏幕主区切对位双卡 layout**：屏幕左半入场对位卡 600×360px（米色暖底 + **Claude 橙 2px 边框** = 领跑者信号），卡顶贴 `openai.svg` 1.2× scale + chip "Codex · 最早"。卡内贴 `codex-follow-goal.png` 真截图 460×260px（spring back.out 1.4 入场 1.2s）|
| "不是A社这边做的" | 347 | C 中-1 | 屏幕右半入场对位卡 480×320px（米色暖底 + **灰边框** 1px = 跟进者信号），卡顶贴 `claude.svg` 1.0× scale + chip "Claude Code · 跟进"（米色暖深 18px，**非 Claude 橙**——视觉对比强调"跟进而非领跑"）。卡内缩略图 = SEC B 用过的 claude-code-goal-docs.png 缩到 280×160px |
| "但是这个接口逻辑太对了" | 348 | C 中-2 | 两卡之间画**箭头** 入场（米色暖深 → Claude 橙渐变 SVG arrow，从 Codex 卡指向 Claude Code 卡，stagger 0.6s drawSVG 入场）。Codex 卡内 marker sweep 划过标题"Follow a goal"（Claude 橙 1.4s）|
| "所以大家都在跟进" | 349 | C 末 | 箭头下方 spec-fill `· 接口逻辑太对了，大家跟进 · all teams follow`（米色暖深 18px 1s）。SEC C 元素 hold 1s 进 SEC D（hard cut）|
| "那么我猜接下来会出现的是什么" | 350 | D 入 | 屏幕 hard cut。SEC C 所有元素 autoAlpha → 0（0.8s）。屏幕中央浮出 chrome 小字 `下一步会出现什么 · what's next`（米色底暖版渐变 36px，token-stagger 0.06s 1s 入场）+ chip "我的预测 · my prediction"（Claude 橙背景 18px）|
| "就是在他的上一步进行延伸" | 351 | D 中-1 | chrome 小字下方浮出**「在 Goal 之上」visual stub**：起点画一个 destination card 缩略图（SEC B 同款），路径向右延伸出一段 motionPath 实线 + 终点写 chrome 小字 `延伸 · extend`（米色暖深 28px）。**预告 SEC E 的 motionPath 视觉**|
| "我们知道GPT Pro模型" | 352 | D 中-2 入 | 屏幕 hard cut。中心元素全部 autoAlpha → 0（0.6s）。**屏幕主区切双区对位 layout**（参考 seg05 / seg06）：左半区入场 `openai.svg` 1.2× scale + chip "OpenAI · ChatGPT Pro" + 标题 chrome 小字 `GPT Pro 模型 · GPT Pro Model`（米色底暖版渐变 36px，token-stagger 0.06s 1s 入场）|
| "这个我不知道大家有没有在网页端用过" | 353 | D 中-2 续 | 左半区下方浮出真截图卡（chatgpt-pro-research.png 460×280px **全图**），米色暖底 + 1px 灰边框 + chip "实际操作 · real use"（米色暖深 18px）。spring back.out 1.4 入场 1.2s |
| "就是GPT它有一个Pro模型" | 354 | D 中-3 | 左截图内 marker sweep Claude 橙划过「专业 5 分钟以上」panel 区域（1.4s power2.inOut，v1 实现时按截图实际像素定位）|
| "它的官方名称叫做研究级智能体" | 355 | D 中-4 | 左半区截图下方浮出**官方名 chip**：「Deep Research」chrome 小字 28px Claude 橙渐变 + spec-fill 一行 `· 研究级智能体 · official name` 米色暖深 18px |
| "然后Claude的网页端也有一个研究级探索" | 356 | D 中-5 | **屏幕右半区入场**（与左半对位，stagger 0.4s）：`anthropic.svg` 1.2× scale + chip "Anthropic · Claude.ai" + 标题 chrome 小字 `研究级探索 · Research`（米色底暖版渐变 36px，token-stagger 0.06s 1s 入场）|
| "他们功能其实是类似的" | 357 | D 中-6 | 右半区下方浮出真截图卡（claude-research-menu.png 460×280px 全图 —— 菜单 + Research 高亮 + Opus 4.7 Adaptive 都干净），米色暖底 + 1px 灰边框 + chip "实际操作 · real use" + 右截图内 marker sweep Claude 橙划过菜单的「Research」选项（1.4s）。**两半区中央浮出「=」符号**（chrome 小字 Claude 橙渐变 80px，token-stagger 字符级入场 0.6s）—— 表示"功能类似" |
| "他们就是让智能体去自主收集资料" | 358 | D 末-1 | 两边截图下方各浮出 spec-fill 共享文本同步入场（1s spec-fill）：左卡 `· 自主收集资料 · autonomous research`、右卡 `· 自主对比来源 · cross-source comparison`（米色暖深 18px）|
| "然后对比来源" | 359 | D 末-2 | 中央「=」符号下方浮出统一 chip `Research`（chrome 小字 36px Claude 橙渐变，token-stagger 0.06s 1s）—— **统一指代两个产品的同名功能**。SEC D hold 1.5s 进 SEC E |
| "我觉得它后面可能会出现一些" | 360 | E 入 | 屏幕 hard cut。SEC D 所有元素 autoAlpha → 0（0.8s）。屏幕中央浮出 chrome 小字 `预测 · prediction`（米色底暖版渐变 28px 小字）+ chip "我猜的 · my guess"（米色暖深 18px，spec-fill 0.6s）|
| "这种深度研究的命令" | 361 | E 中-1 | 屏幕中央浮出 **destination card 升级版**（callback SEC B 同款，但内容升级）：「目标：找 bug 改到可上线」chrome 小字 36px Claude 橙 + chip "Goal" + chip "Deep Research"（Claude 橙背景 18px）|
| "直接就放在 goal这个命令的后面" | 362 | E 中-2 | destination card 下方浮出 cc-window 升级版（800×80px 居中底部，char-scramble 0.6s 解码）：`> /goal "找 bug 改到可上线" --deep-research`，光标闪烁。**callback SEC B cc-window 视觉一致性**|
| "就是让智能体自主去收集资料" | 363 | E 中-3 | cc-window 与 destination card 之间画 **6 节点自动化路径**入场：自建 SVG zigzag motionPath（米色暖深 dashed 2px，drawSVG 1.4s）。6 节点圆点 stagger 入场 0.3s 间隔：① **research**（资料）② **compare**（对比）③ **report**（出报告）④ **debug** ⑤ **test**（测试）⑥ **ship**（上线）。每节点旁标 chrome 小字 18px |
| "然后对比来源出报告 debug" | 364 | E 中-4 | **agent 立方体**（复用 seg07 上下文包外形 + 差异化：内部 Claude 橙小点 pulse 呼吸 + 0.2s 短尾跟随）从 cc-window 出发，沿 motionPath **走第 1-3 节点**（research → compare → report），MotionPathPlugin 控制 1.6s ease-in-out。每节点经过时立方体在节点上方停留 0.3s，节点亮起 Claude 橙 halo。**呼吸点全程不停**（pulse 0.8s 周期）|
| "然后自己跑测试" | 365 | E 中-5 | agent 立方体继续走**第 4-5 节点**（debug → test），1.2s ease-in-out。节点亮起同样 |
| "然后找 bug 一直改到可以上线" | 366 | E 末 | agent 立方体抵达**终点节点 ⑥ ship**（上线），节点画 destination card 缩略（callback SEC B destination card 视觉），Claude 橙 halo + scale 1.0→1.2 撞击微弹 0.4s（**SEC E hot moment**）。完整 6 节点自动化路径 + agent 抵达终点 hold 1s 进 SEC F |
| "他们的一个本质的变化" | 367 | F 入 | 屏幕 hard cut。SEC E 元素 fade 但保留 destination card + motionPath 缩到屏幕底 1/4 当背景脉络（scale 0.4 + translateY +320px 1s）。屏幕中央浮出 chrome 小字 `本质变化 · the essence`（米色底暖版渐变 36px 中字，token-stagger 0.06s 1s）|
| "就是从做这一步到达成这一个状态" | 368 | F 主峰 | **SEC F 第一个 hot moment / 全段 chrome 大字唯一位**：屏幕中央慢推 **chrome 大字 `从 做这一步 → 到 达成这状态`**（米色底暖版 8-stop chrome 80px，token-stagger 0.08s 字符级入场 + filter blur 14px→0，1.5s）+ 英文副标 `from "do this step" → to "reach this state"`（米色暖深 32px hold）。**这是 seg08 终极视觉锚**，hold 2s |
| "就是你不需要再去管它怎么做" | 369 | F 中-1 | chrome 大字下方浮出**对比 layout**：屏幕左半区入场命令式 fade out 列表（cc-window 风样式，米色暖深背景 + JetBrains Mono 字体），每条入场 stagger 0.3s 同时被划线 strikethrough（Claude 橙渐变 strike line）：`/run`、`/test`、`/debug`、`/lint` |
| "说什么接口" | 370 | F 中-2 | 左侧列表继续 stagger 入场被划：`--interface api` |
| "说什么风格 说什么编程语言" | 371 | F 中-3 | 左侧列表继续 stagger 入场被划：`--style strict`、`--lang typescript`。左侧全部划掉后 autoAlpha 0.3 退到背景 |
| "就是你只需要等待结果就行" | 372 | F 末 | 屏幕右半区浮出 **destination card 最终版** + agent 立方体抵达终点 + Claude 橙 halo（callback SEC E）+ chip "等待结果 · just wait"（米色暖深 18px）。**桥接 seg09**：屏幕底部「03」callback chip **autoAlpha 0.3→0.6 + scale 1.0→1.2 + Claude 橙边框 1px**（hint 亮但**不点开内容** —— 留给 seg09 自己开门 SEC A）。chrome 大字 + destination card + 「03」hint hold 1.5s **hard cut 到 seg09**（**禁 exit fade · §18**）|

---

## 3. 视觉骨架（每 SEC 一段，重点说节奏）

### SEC A · 桥接「02」+ Goal 命令入题（0.0-6.5s · buffer→COOL→WARM）

**目的**：1.6s 暗场缓冲消化字幕 339 末 → 340 起点的 1.4s 口播停顿，然后 4.9s 内立题「Goal 风格命令」。**继承 seg06 SEC F**——seg06 末是 3 空白卡「01/02/03」+ seg07 已点亮「01」，seg08 SEC A 直接点亮「02」。

**节奏曲线**：1.6s buffer → 「02」卡亮起 → chrome 小字标题 + prediction 2 chip。

**实现**：
- 0-1.6s（buffer）：屏幕米色暖底 #F7F2EA 纯色 hold（**SEC A 不出现 SEC F 三空白卡的「02/01/03」三张卡，因为 seg06 SEC F 三卡已 commit 给「下一段开门时点亮」，seg07 已用「01」**）。这 1.6s 是字幕 340 起点前的口播停顿，HF 视觉给观众消化 seg07 结尾「A 社不跟也得跟」的时间
- 1.6-3.5s（「02」卡亮起 + callback seg06）：屏幕中央浮出 3 张缩略卡（「01/02/03」横排，每张 80×60px 米色暖底），但**「02」卡 autoAlpha 0.4→1 + scale 1.0→1.4 + Claude 橙边框 1px→2px**（1.2s ease-out），其他两卡 autoAlpha 0.3 + scale 0.6 缩到屏幕底（背景脉络）
- 3.5-6.5s（chrome 小字 + chip "预测 2"）：「02」卡内浮出 chrome 小字 `Goal 风格命令 · goal-style commands`（米色底暖版渐变 36px，token-stagger 0.06s 字符级入场 1s）。卡上方浮出 chip "预测 2 · prediction 2"（Claude 橙背景 + 白字 18px，spec-fill 一行 0.6s）。hold 1s 进 SEC B

**关键纪律**：
- SEC A 不出现 chrome 大字（本段 chrome 大字只给 SEC F 主峰）
- 「02」卡的视觉份量与 seg07 SEC A「01」卡保持一致 —— 视觉连续性
- 1.6s buffer 不能省 —— 字幕 340 起点 = 1.6s，提前出元素会跟口播错位

---

### SEC B · Claude Code `/goal` 现状 · 三件套首次同框（6.5-17.8s · WARM · 11.3s）

**目的**：在 11.3s 内把「Claude Code 有了 /goal 命令」这件事钉死。**三件套首次同框**：cc-window（命令）+ destination card（目标）+ 真截图（证据）。

**节奏曲线**：双区 layout 入场 → cc-window char-scramble 解码完整命令 → destination card spring 入场 → 真截图卡内双 marker sweep。

**实现**：
- 6.5-8s（双区 layout 入场）：「02」卡缩到屏幕底 1/4（scale 0.4 + translateY +320px 1s）。**屏幕主区切左右双区**：左半屏入场 cc-window（800×280px，居中偏左，复用 templates/components/cc-window）+ chip "Claude Code v2.1.139"；右半屏入场真截图卡（claude-code-goal-docs.png 480×280px，居中偏右，米色暖底 + 1px Claude 橙边框）+ 卡顶 claude.svg 1.0× scale + chip "Claude Code"。两区 stagger 0.4s 入场
- 8-9.5s（cc-window prompt + 截图第一道 marker sweep）：cc-window 内 char-scramble 0.6s 解码出 `> /goal`（蓝色光标闪烁 0.5s 周期）。右半截图卡内 **第一道 marker sweep Claude 橙划过标题"Keep Claude working toward a goal"**（1.4s power2.inOut）
- 9.5-12s（destination card 首次出场）：cc-window 内继续 char-scramble 解码完整命令：`> /goal "上线一个登录页面"`。屏幕**右下**浮出 destination card 首次出场（300×140px 米色暖底 + Claude 橙 2px 边框 + 标题 chrome 小字 `目标：上线一个登录页面` 28px + chip "Goal"，**spring back.out 1.4 入场 1.2s**）—— **seg08 主物件正式定义**
- 12-15s（spec-fill + 截图第二道 marker sweep）：cc-window 下方浮出 spec-fill `· 工作到你说停 · until you say stop`（米色暖深 18px，1s spec-fill）。右半截图卡内 **第二道 marker sweep 划过 Usage 列表第 1 条「Migrating a module to a new API until every call site compiles and tests pass」**（1.4s）
- 15-17.8s（hold 进 SEC C）：**SEC B hot moment**：cc-window + 真截图 + destination card 三件套同框 hold 2.8s **禁淡出**（hard cut 到 SEC C）

**关键纪律**：
- destination card **首次出场必须用 spring back.out 1.4**—— 给观众"哦这是个新元素"的感知
- cc-window 命令字符串硬编码 `> /goal "上线一个登录页面"` —— **不要用 deactivate/template literal**（§1）
- 真截图卡用 `<img>` 标签 + `object-fit: contain`，不要 `background-image`
- marker sweep 两道间隔至少 2s，给观众消化时间
- 截图卡 Claude 橙边框 = SEC B 主信号 = "Claude Code 真的有这命令" 视觉强调

---

### SEC C · 起源 Codex + 跟进对比（17.8-25.6s · WARM · 7.8s）

**目的**：在 7.8s 内说清"Codex 走得早，Claude 跟进"。**视觉对比关键**：左卡 Claude 橙边框（领跑）vs 右卡灰边框（跟进）。

**节奏曲线**：双卡对位 layout 入场 → Codex 截图 spring → Claude Code 缩略卡对位 → 箭头 drawSVG → spec-fill。

**实现**：
- 17.8-18.6s（layout 切换）：SEC B 所有元素 autoAlpha → 0（0.8s），「02」卡保留缩在屏幕底
- 18.6-20.4s（左卡 Codex 入场）：屏幕**左半**入场对位卡 600×360px（米色暖底 + **Claude 橙 2px 边框** = 领跑者信号），卡顶贴 `openai.svg` 1.2× scale + chip "Codex · 最早"。**卡内贴 `codex-follow-goal.png` 真截图 460×260px**（spring back.out 1.4 入场 1.2s）
- 20.4-22s（右卡 Claude Code 对位）：屏幕**右半**入场对位卡 480×320px（米色暖底 + **灰边框** 1px = 跟进者信号），卡顶贴 `claude.svg` 1.0× scale + chip "Claude Code · 跟进"（米色暖深 18px，**非 Claude 橙**）。卡内缩略图 = SEC B 用过的 claude-code-goal-docs.png 缩到 280×160px
- 22-23.5s（箭头 + 标题 marker sweep）：两卡之间画**箭头** drawSVG 入场（米色暖深 → Claude 橙渐变 SVG arrow 长 80px，从 Codex 卡指向 Claude Code 卡，1.2s ease-in-out）。Codex 卡内 marker sweep Claude 橙划过标题"Follow a goal"（1.4s）
- 23.5-25.6s（spec-fill + hold）：箭头下方 spec-fill `· 接口逻辑太对了，大家跟进 · all teams follow`（米色暖深 18px，1s spec-fill）。SEC C 元素 hold 1s 进 SEC D（hard cut）

**关键纪律**：
- SEC C 左卡 Claude 橙 vs 右卡灰 = **唯一视觉对比信号**——v1 实现时边框颜色不能搞反
- Codex 卡内真截图必须是 codex-follow-goal.png（不用 codex-plugins.png——那张已 seg07 用过）
- 箭头从左指右 = 时间方向（最早 → 跟进），不能反向
- SEC C 不用 cc-window —— 让位给真截图卡 layout，避免视觉过密

---

### SEC D · 双区对位 · Deep Research ↔ Research（25.6-53.0s · GLOW 段最长 · 27.4s）

**目的**：在 27.4s 内做双区对位 —— ChatGPT Pro 的 Deep Research vs Claude.ai 的 Research。**这是段最长 SEC**，节奏要稳，不抢 SEC F 主峰。

**节奏曲线**：「下一步是什么」入题 → visual stub 预告 motionPath → 左区 GPT Pro 入场 → 截图 + marker sweep + Deep Research chip → 右区 Claude.ai 对位入场 → 截图 + marker sweep + Research chip → 「=」符号 → 双卡 spec-fill 同步。

**子幕拆分**：D-1 入题（25.6-30s, 4.4s）+ D-2 左区 GPT Pro（30-37s, 7s）+ D-3 右区 Claude.ai（37-44s, 7s）+ D-4 对位收束（44-53s, 9s）

#### D-1 · 入题 + 预告 motionPath（25.6-30s · 4.4s）

- 25.6-26.4s（layout 切换）：SEC C 所有元素 autoAlpha → 0（0.8s）
- 26.4-28.4s（chrome 小字 + chip "我的预测"）：屏幕中央浮出 chrome 小字 `下一步会出现什么 · what's next`（米色底暖版渐变 36px，token-stagger 0.06s 1s 入场）+ chip "我的预测 · my prediction"（Claude 橙背景 18px）
- 28.4-30s（visual stub 预告 motionPath）：chrome 小字下方浮出**「在 Goal 之上」visual stub**：起点画 destination card 缩略（SEC B 同款 100×60px），路径向右延伸一段 motionPath 实线（120px长，米色暖深 → Claude 橙渐变 drawSVG 1.2s）+ 终点画 chrome 小字 `延伸 · extend`（米色暖深 28px）。**预告 SEC E 视觉**

#### D-2 · 左区 GPT Pro Deep Research（30-37s · 7s）

- 30-30.6s（layout 切换）：D-1 元素全部 autoAlpha → 0（0.6s）。屏幕**主区切双区对位 layout**（参考 seg05 / seg06）
- 30.6-32.6s（左区 logo + 标题入场）：屏幕**左半区**入场 `openai.svg` 1.2× scale + chip "OpenAI · ChatGPT Pro" + 标题 chrome 小字 `GPT Pro 模型 · GPT Pro Model`（米色底暖版渐变 36px，token-stagger 0.06s 1s 入场）
- 32.6-34s（左截图 spring 入场）：左半区下方浮出真截图卡（chatgpt-pro-research.png 460×280px **全图**），米色暖底 + 1px 灰边框 + chip "实际操作 · real use"（米色暖深 18px）。spring back.out 1.4 入场 1.2s
- 34-35.4s（marker sweep）：左截图内 marker sweep Claude 橙划过「专业 5 分钟以上」panel 区域（1.4s power2.inOut，v1 实现时按截图实际像素定位）
- 35.4-37s（官方名 chip + spec-fill）：左半区截图下方浮出**官方名 chip**：「Deep Research」chrome 小字 28px Claude 橙渐变 + spec-fill 一行 `· 研究级智能体 · official name`（米色暖深 18px，1s spec-fill）

#### D-3 · 右区 Claude.ai Research（37-44s · 7s）

- 37-39s（右区 logo + 标题入场）：屏幕**右半区**入场（与左半对位，stagger 0.4s 整体延迟感）：`anthropic.svg` 1.2× scale + chip "Anthropic · Claude.ai" + 标题 chrome 小字 `研究级探索 · Research`（米色底暖版渐变 36px，token-stagger 0.06s 1s 入场）
- 39-40.4s（右截图 spring 入场）：右半区下方浮出真截图卡（claude-research-menu.png 460×280px **全图** —— 菜单 + Research 高亮 + Opus 4.7 Adaptive），米色暖底 + 1px 灰边框 + chip "实际操作 · real use"（米色暖深 18px）。spring back.out 1.4 入场 1.2s
- 40.4-42s（marker sweep）：右截图内 marker sweep Claude 橙划过菜单的「Research」选项（1.4s power2.inOut）
- 42-44s（官方名 chip + spec-fill）：右半区截图下方浮出官方名 chip：「Research」chrome 小字 28px Claude 橙渐变 + spec-fill 一行 `· 多 agent 自主研究 · multi-agent`（米色暖深 18px，1s spec-fill）

#### D-4 · 对位收束（44-53s · 9s）

- 44-46s（**「=」符号入场**）：两半区中央浮出「=」符号（chrome 小字 Claude 橙渐变 80px，token-stagger 字符级入场 0.6s + spring back.out 1.4 入场 1.2s）—— **表示"功能类似"，SEC D 视觉锚**
- 46-49s（双卡 spec-fill 同步）：两边截图下方各浮出 spec-fill 共享文本同步入场（1s spec-fill）：左卡 `· 自主收集资料 · autonomous research`、右卡 `· 自主对比来源 · cross-source comparison`（米色暖深 18px）
- 49-51s（统一 chip `Research` 浮现）：「=」符号下方浮出统一 chip `Research`（chrome 小字 36px Claude 橙渐变，token-stagger 0.06s 1s）—— **统一指代两个产品的同名功能 · SEC D hot moment**
- 51-53s（hold 进 SEC E）：双卡 + 「=」+ 统一 chip hold 2s **禁淡出**（hard cut 到 SEC E）

**关键纪律**：
- SEC D 段最长 27.4s，但不出 chrome 大字 —— chrome 大字唯一位在 SEC F
- 双区严格对位 —— logo 大小 / chip 长度 / 截图卡尺寸 / spec-fill 行数都一致
- 左截图 chatgpt-pro-research.png 全图露 + marker sweep 引导视线到右下 panel
- 「=」符号是 SEC D 视觉锚 —— 80px Claude 橙渐变 token-stagger 入场 = 双区对位的视觉钉子
- SEC D 不用 cc-window —— 让位给真截图双区对位

---

### SEC E · 深度研究嵌进 GOAL · 6 节点自动化路径（53.0-72.5s · HOT 1 预测 · 19.5s）

**目的**：在 19.5s 内演绎"深度研究嵌进 GOAL 后的完整自动化循环"。**SEC E 是 seg08 的 motionPath 主战场**，agent 立方体沿 6 节点路径完整走一遍。

**节奏曲线**：destination card 升级 → cc-window 升级命令 → 6 节点 path drawSVG → agent 沿 path 走 → 抵达终点 destination card 缩略。

**实现**：
- 53-53.8s（layout 切换）：SEC D 所有元素 autoAlpha → 0（0.8s）
- 53.8-56s（chrome 小字 + chip "我猜的"）：屏幕中央浮出 chrome 小字 `预测 · prediction`（米色底暖版渐变 28px 小字，token-stagger 0.06s 1s 入场）+ chip "我猜的 · my guess"（米色暖深 18px，spec-fill 0.6s）
- 56-58s（**destination card 升级版入场**）：屏幕中央浮出 destination card 升级版（300×160px 米色暖底 + Claude 橙 2px 边框）：「目标：找 bug 改到可上线」chrome 小字 36px Claude 橙 + chip "Goal" + chip "Deep Research"（Claude 橙背景 18px）。spring back.out 1.4 入场 1.2s
- 58-60s（**cc-window 升级命令入场**）：destination card 下方浮出 cc-window 升级版（800×80px 居中底部，复用 templates/components/cc-window，char-scramble 0.6s 解码）：`> /goal "找 bug 改到可上线" --deep-research`（**v1 实现时可微调字符串**，重点是命令参数 `--deep-research` 这个虚构 flag）+ 光标闪烁。**callback SEC B cc-window 视觉一致性**
- 60-62s（**6 节点 path drawSVG 入场**）：cc-window 与 destination card 之间画 **6 节点 zigzag motionPath** drawSVG（米色暖深 dashed 2px，1.4s drawSVG）+ 6 节点圆点 stagger 入场 0.3s 间隔（每个节点圆点 16×16px 米色暖底 + Claude 橙 1px 边框）+ 节点旁标 chrome 小字 18px：① **research**（资料）② **compare**（对比）③ **report**（出报告）④ **debug** ⑤ **test**（测试）⑥ **ship**（上线）
- 62-65s（**agent 立方体走第 1-3 节点**）：**agent 立方体** 60×60px 米色暖底 + Claude 橙 1px 边框（**复用 seg07 上下文包外形 + 两项差异化**）：
  - **差异化 1 · 内部呼吸点**：立方体中央嵌 Claude 橙 6×6px 实心圆点，pulse 0.8s 周期（scale 1.0↔1.4 + opacity 0.6↔1.0，`yoyo: true, repeat: -1`），**SEC E 入场到 SEC F 末全程不停** = "agent 内核在跑" 视觉信号
  - **差异化 2 · 0.2s 短尾**：立方体走 motionPath 时尾部拖一条 trail（米色暖深 → Claude 橙渐变，SVG `<path>` clipPath mask + opacity 0.4→0 渐隐 0.2s 跟随），**强化"在运动"的速度感**
  
  agent 立方体从 cc-window 出发沿 motionPath 走第 1-3 节点（research → compare → report），MotionPathPlugin 控制 1.6s ease-in-out。每节点经过时立方体在节点上方停留 0.3s，节点亮起 Claude 橙 halo（box-shadow 0→16px Claude 橙）
- 65-68s（**agent 走第 4-5 节点**）：agent 立方体继续走第 4-5 节点（debug → test），1.2s ease-in-out。节点亮起同样
- 68-71s（**抵达 ⑥ ship 终点**）：agent 立方体抵达终点节点 ⑥ ship（上线）。终点节点画 destination card 缩略（callback SEC B destination card 视觉，100×60px 米色暖底 + Claude 橙 1px 边框）+ Claude 橙 halo（box-shadow 0→40px Claude 橙，0.8s）+ scale 1.0→1.2 撞击微弹 0.4s elastic.out（**SEC E hot moment / 撞击同帧合成 · MOTION_NOTES §3**）
- 71-72.5s（hold 进 SEC F）：完整 6 节点 path + agent 抵达终点 + destination card + cc-window 全部 hold 1.5s **禁淡出**（hard cut 到 SEC F）

**关键纪律**：
- SEC E motionPath 是**全段唯一**自动化路径 —— SEC F 不再用 motionPath（让位给 chrome 大字）
- agent 立方体视觉 = **复用 seg07 上下文包外形 + 两项差异化**（内部呼吸点 + 0.2s 短尾）—— 既保持"立方体"族类视觉延续（观众认得出与 seg07 同源），又让 seg08 立方体「在运行」属性可视化（呼吸点 + 短尾 = "agent 活着"）。**两项差异化是 SEC E 视觉签名，不可省**
- 6 节点 zigzag 路径要 SVG path 自建 —— 不要用 catalog flowchart（黄 sticky-note 风 ≠ DNA）
- 节点 halo 亮起要分批 —— 不是 agent 走过的节点同时亮起，而是经过哪个亮哪个（"agent 推进感"）
- 终点 ⑥ ship 节点的 destination card 缩略 = **callback SEC B 主物件**，闭合"目标→执行→抵达"完整循环
- 立方体 scale 撞击微弹 0.4s elastic.out 是 SEC E hot moment 视觉锚

---

### SEC F · 本质变化金句 + 桥接 seg09（72.5-90.7s · HOT 2 主峰 · 18.2s）

**目的**：在 18.2s 内爆发整段 chrome 大字主峰，把「从做这一步 → 到达成这状态」金句钉死，桥接 seg09。**SEC F 是 seg08 终极视觉锚**。

**节奏曲线**：SEC E 元素缩到背景 → chrome 小字「本质变化」→ **chrome 大字主峰** → 命令式 fade out 列表 vs 状态式 destination card 对比 → 「03」hint 亮起 → hard cut 进 seg09。

**实现**：
- 72.5-73.3s（layout 切换）：SEC E 元素 autoAlpha 0.6 + scale 0.4 + translateY +320px **缩到屏幕底 1/4 当背景脉络**（不全 autoAlpha 0，保留 destination card + motionPath + agent 立方体的视觉延续感）
- 73.3-75.3s（**chrome 小字 "本质变化"**）：屏幕中央浮出 chrome 小字 `本质变化 · the essence`（米色底暖版渐变 36px 中字，token-stagger 0.06s 1s 入场）
- 75.3-78s（**chrome 大字主峰 · 全段唯一位**）：屏幕中央慢推 **chrome 大字 `从 做这一步 → 到 达成这状态`**（**米色底暖版 8-stop chrome 80px**，token-stagger 0.08s 字符级入场 + filter blur 14px→0，1.5s）+ 英文副标 `from "do this step" → to "reach this state"`（米色暖深 32px，spec-fill 1s 入场）。**seg08 终极视觉锚**，hold 2s
- 78-82s（**对比 layout · 左 fade out 列表**）：chrome 大字下方浮出对比 layout。屏幕**左半区**入场命令式 fade out 列表（cc-window 风样式：米色暖深 #2B2622 背景 + JetBrains Mono 字体 + 米色暖底文字），每条入场 stagger 0.3s 同时被划线 strikethrough（Claude 橙渐变 strike line 从左到右 0.4s 划过）：
  - `> /run`
  - `> /test`
  - `> /debug`
  - `> /lint`
  - `--interface api`
  - `--style strict`
  - `--lang typescript`
  - 全部划掉后 autoAlpha 0.3 退到背景
- 82-86s（**右 destination card 最终版**）：屏幕**右半区**浮出 destination card 最终版（400×200px 米色暖底 + Claude 橙 2px 边框 + Claude 橙 halo 持续呼吸），内含：「目标：找 bug 改到可上线」chrome 小字 36px + chip "Goal" + chip "Deep Research" + **agent 立方体抵达** + chip "等待结果 · just wait"（米色暖深 18px）。**视觉对比**：左侧划掉的命令式列表 vs 右侧亮起的状态式 destination card —— **声明式取代命令式的视觉爆发**
- 86-89s（**「03」callback hint 亮起**）：屏幕底部浮出 callback chip：seg06 SEC F 三空白卡的「03」缩略图（80×60px 米色暖底，**autoAlpha 0.3→0.6 + scale 1.0→1.2 + Claude 橙边框 1px**，1.5s ease-out）+ chip "下一个预测..."（米色暖深 16px 小字，spec-fill 0.6s）。**hint 亮但不点开内容** —— 留给 seg09 自己开门 SEC A
- 89-90.7s（**hold 1.7s 进 seg09 hard cut**）：chrome 大字 + 左 fade out 列表 + 右 destination card + 「03」hint 全部 hold 1.7s → **hard cut 到 seg09**（**禁 exit fade · §18**）

**关键纪律**：
- SEC F chrome 大字唯一位 —— SEC A/B/C/D/E 全部不准出 chrome 大字 80px 级
- 对比 layout：左 fade out 命令式 vs 右亮起 destination card —— **视觉对比是 SEC F 核心信号**，不能搞反方向
- 划掉的命令字符串可以微调（v1 实现），但语义保持"过程导向"
- 「03」hint **不点开内容** —— autoAlpha 0.6 + 缩略图 hint，不出 chrome 小字标题
- destination card 最终版的 Claude 橙 halo 呼吸 = 状态式"持续亮着"的视觉锚
- SEC F 末禁 exit fade —— seg08 不是 outro，hard cut 到 seg09

---

## 4. index.html 挂载

在 seg07 后追加：

```html
<!-- seg08 ch7-2 预测 2 · Goal 风格命令 · 从过程到状态 (16:06.166-17:36.866, 字幕 340-372) -->
<div
  class="clip"
  id="seg08-goal"
  data-composition-id="seg08-goal"
  data-composition-src="compositions/seg08-goal.html"
  data-start="966.1"
  data-duration="90.7"
  data-track-index="1"
  data-width="1920"
  data-height="1080"
></div>
```

- `data-start="966.1"`：38+112+80+91+201+152+206.6+85.5 = **966.1s** ✓（紧贴 seg07 末 hard cut）
- `data-duration="90.7"`：1.6s SEC A buffer + 89.1s 字幕内容（SRT 真源校准）
- 段内时间 1.6s = 全片 967.7s ≈ 字幕 340 起点（00:16:07.666）✓
- 段内时间 90.7s = 全片 1056.8s = **seg09 data-start 起点**（字幕 372 末 17:36.799）

---

## 5. 实现红线

- `SEGMENT_DURATION = 90.7`；段末 `tl.set({}, {}, SEGMENT_DURATION)` 撑满
- CSS selector 全部 `[data-composition-id="seg08-goal"] ...`，禁用 `#seg08-goal`（§9 bundler strip）
- GSAP selector 硬编码字符串，禁 template literal（§1）
- 字体硬编码 `"Noto Sans SC", "Inter", sans-serif` / `"JetBrains Mono", monospace`（§15）
- 米色底正文色：`#5A4F46` / `#8b3d28` / `#B5563D`（§17）
- 真截图 `<img>` 标签，不要 `background-image`
- SEC 切换用 `tl.set('.sec-x', { autoAlpha: 0 }, T)` + 下一 SEC 入场，**禁 SEC 退场动画**
- **chrome 大字全段只允许 1 次**：SEC F 主峰 `从 做这一步 → 到 达成这状态`。其余 chrome 用小字（SEC A 标题 36px / SEC D 标题 36px / SEC D 统一 chip 36px / SEC E destination 36px / SEC F 副标 32px / SEC F 中字 36px）
- **段末 SEC F 禁 exit fade**（§18，seg08 不是 outro）。chrome 大字 + destination card + 「03」hint hold 静止 hard cut 到 seg09
- **MorphSVGPlugin 不需要本段**（SEC E 用 MotionPathPlugin 即可，不做 morph）
- **MotionPathPlugin 复用 seg07 引入**：`index.html` line 11 已含 CDN script tag，composition 顶部 `gsap.registerPlugin(MotionPathPlugin)` 即可
- **DrawSVGPlugin 必须引入**（不接受 stroke-dasharray 手写替代 —— DrawSVGPlugin 是 GSAP 官方专为 SVG path drawing 设计的 plugin，2025-04 起与 MorphSVG / MotionPath 同批免费；首尾边界比 stroke-dasharray 更精确，与 motionPath 配合更顺）：在 `index.html` line 11 MotionPath 后追加：
  ```html
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/DrawSVGPlugin.min.js"></script>
  ```
  composition 顶部 `gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin)`。**用在**：SEC C 箭头入场（22-23.5s）+ SEC D-1 visual stub 路径入场（28.4-30s）+ SEC E 6 节点 motionPath 路径入场（60-62s）共 3 处
- destination card / agent 立方体居中用 GSAP `xPercent: -50, yPercent: -50`（不用 CSS translate，§14 GSAP transform 覆盖 CSS translate）
- 真截图 SEC D 左（chatgpt-pro-research.png）**全图露** —— 用户确认旧对话无隐私问题；marker sweep 引导视线到右下 panel
- **「02」callback 卡的视觉份量必须与 seg07 SEC A「01」卡一致**（视觉连续性命脉）—— 缩略图样式、Claude 橙边框宽度、scale 比例、token-stagger 入场粒度全部继承 seg06 SEC F 三空白卡原写法 + seg07 SEC A「01」点亮写法。**v1 写 composition 前必须 grep `compositions/seg06-merge.html` SEC F 三空白卡 + `compositions/seg07-shichang.html` SEC A「01」点亮，直接抄写法**，禁自行设计
- agent 立方体视觉 = **复用 seg07 上下文包外形（米色暖底 + Claude 橙 1px 边框）+ 两项差异化签名**（内部 Claude 橙 6×6px 小点 pulse 0.8s 周期全程不停 + 走 motionPath 时 0.2s 短尾跟随）—— **视觉一致性纪律 + 差异化签名同时成立**，缺一不可
- 6 节点 motionPath SVG path 自建，**不用 catalog flowchart**

---

## 6. preview 验证点

- `npx hyperframes lint` 0 errors
- `npx hyperframes validate` 0 contrast warnings
- `npx hyperframes inspect --samples 15` 0 overflow
- preview scrub 验证（绝对全片时间码 = 966.1 + 段内时间）：
  - `t=966.5`：SEC A buffer，米色暖底纯色 hold（字幕 340 还未起）
  - `t=968`：SEC A「02」卡亮起 + scale 1.4
  - `t=970`：SEC A chrome 小字 `Goal 风格命令` + chip "预测 2"
  - `t=973`：SEC B 起，双区 layout + cc-window prompt + 截图卡入场
  - `t=975`：SEC B cc-window `> /goal` + 截图 marker sweep 划过标题
  - `t=978`：SEC B destination card spring 入场 + cc-window 完整命令 `> /goal "上线一个登录页面"`
  - `t=982`：SEC B 三件套同框 hold
  - `t=985`：SEC C 起，双卡对位 + Codex 截图 spring
  - `t=988`：SEC C 箭头 drawSVG 入场 + Codex 标题 marker sweep
  - `t=991`：SEC C 末，spec-fill `接口逻辑太对了`
  - `t=994`：SEC D 起，chrome 小字 `下一步会出现什么` + visual stub
  - `t=998`：SEC D-2 左区 GPT Pro 入场 + chatgpt-pro-research.png spring（全图）
  - `t=1003`：SEC D-2 末，chip `Deep Research` + spec-fill `研究级智能体`
  - `t=1005`：SEC D-3 右区 Claude.ai 入场 + claude-research-menu.png spring
  - `t=1010`：SEC D-3 marker sweep 划过 Research 菜单项
  - `t=1014`：SEC D-4「=」符号入场（chrome 小字 Claude 橙 80px）
  - `t=1017`：SEC D-4 双卡 spec-fill 同步
  - `t=1019`：SEC D-4 末，统一 chip `Research` 浮现
  - `t=1022`：SEC E 起，chrome 小字 `预测` + chip "我猜的"
  - `t=1025`：SEC E destination card 升级版 spring（`目标：找 bug 改到可上线`）
  - `t=1028`：SEC E cc-window `> /goal "..." --deep-research`
  - `t=1030`：SEC E 6 节点 path drawSVG 入场
  - `t=1033`：SEC E agent 立方体走第 1-3 节点
  - `t=1037`：SEC E agent 立方体走第 4-5 节点
  - `t=1039`：**SEC E hot moment**：agent 抵达 ⑥ ship 终点 + Claude 橙 halo + 撞击微弹
  - `t=1041`：SEC F 起，SEC E 元素缩到屏幕底背景
  - `t=1043`：SEC F chrome 小字 `本质变化`
  - `t=1046`：**SEC F chrome 大字 `从 做这一步 → 到 达成这状态` 慢推**（**全段终极 hot moment**）
  - `t=1050`：SEC F 左 fade out 列表 stagger 划掉
  - `t=1054`：SEC F 右 destination card 最终版 + agent 抵达 + Claude 橙 halo 呼吸
  - `t=1057`：SEC F「03」callback hint 亮起
  - `t=1056.8`：seg09 第一帧应接上，seg08 无 exit fade

---

## 7. 不做的事（防漂移清单）

- ❌ chrome 大字不超过 1 次（SEC F 主峰 `从 做这一步 → 到 达成这状态`），避免抢全段终极 hot moment
- ❌ SEC F 不做 exit 动画 / 不淡出 / 不切到 seg09 的"过场"（hard cut）
- ❌ 不在 SEC A/B/C/D/E 任何位置出 chrome 大字（80px 级）
- ❌ 不混用蓝色 / 紫色 / 绿色 hot 色 —— DNA 红线 hot 色每 beat 只一个，全段 Claude 橙 + 米色暖底
- ❌ destination card / agent 立方体的视觉 **不要花哨**——米色暖底 + Claude 橙边框 + 简单 chip，抢眼会拖累整段节奏
- ❌ SEC C 左卡 Claude 橙 vs 右卡灰 = 唯一对比信号，**不能搞反方向**
- ❌ SEC E 6 节点路径用自建 SVG path，**不用 catalog flowchart**（黄 sticky-note ≠ DNA）
- ❌ cc-window 命令字符串硬编码，不用 template literal（§1）
- ❌ 不预告 seg09 / seg10 内容 —— SEC F「03」hint **不点开内容**（留给 seg09 自己开门）
- ❌ agent 立方体走 motionPath 时**不要同时点亮所有节点** —— 经过哪个亮哪个（"agent 推进感"）
- ❌ SEC D 不抢 SEC F 主峰 —— SEC D 段最长 27.4s 但全程 chrome 小字 + chip，不出大字

---

## 8. 待办（写 v1 前必须做）

1. ✅ **4 张真截图就位** —— `assets/screenshots/claude-code-goal-docs.png` / `codex-follow-goal.png` / `chatgpt-pro-research.png` / `claude-research-menu.png`（用户已抓 + 重命名 + 08/ 已删）
2. ✅ **assets/logos/{claude,openai,anthropic}.svg 3 个都在**
3. ✅ **MotionPathPlugin 已引入**（index.html line 11，seg07 已添加）—— composition 顶部 `gsap.registerPlugin(MotionPathPlugin)` 即可
4. ✅ **DrawSVGPlugin 已决定引入**（官方 plugin · 2025-04 起免费 · 首尾边界精确）—— v1 时在 `index.html` line 11 MotionPath 后追加 CDN script tag + composition 顶部 `gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin)`
5. ✅ **marker-sweep 复用 seg06/seg07 写法** —— 复制 .a-marker-sweep CSS class + GSAP fromTo 用法
6. ⚠️ **agent 立方体 SVG path + 两项差异化待 v1 实现**：
   - 立方体外形 → grep `compositions/seg07-shichang.html` 找上下文包立方体 SVG path 直接复用（保持族类一致）
   - 内部呼吸点 → 自建 SVG circle 嵌在立方体中央 + GSAP `yoyo: true, repeat: -1` pulse 写法（0.8s 周期，全程不停）
   - 0.2s 短尾 → SVG `<path>` clipPath mask + opacity 0.4→0 渐隐跟随 motionPath（v1 实现时确认 SVG mask 方式 vs canvas trail 方式哪种更顺）
7. ⚠️ **6 节点 zigzag motionPath SVG path 待 v1 实现** —— 自建 SVG path 形状，6 节点位置：① research ② compare ③ report ④ debug ⑤ test ⑥ ship 间距均匀分布在 1200px 宽路径上
8. ⚠️ **「02」callback 卡 grep 双源（v1 前必做）** —— grep `compositions/seg06-merge.html` SEC F 三空白卡 layout + grep `compositions/seg07-shichang.html` SEC A「01」点亮写法，直接抄；**禁自行设计**（实现红线已写）

---

## 9. PROJECT-STATE 回填 todo（PLAN 通过 + v1 验过后）

- §3 表 seg08 行段长更新：97s → **90.7s**（含 1.6 buffer）
- §3 表 seg08 起点更新：16:00 → **16:06.166**（紧贴 seg07 末），字幕条 340-372
- §3 表 seg08 终点更新：17:37 → **17:36.866**
- §3 表 seg08 状态：⬜ todo → 🟢 完成 + commit hash
- §3 注更新：**seg08 −6.3s** + 11 段总和（前 8 段 SRT 校准合计 = 38+112+80+91+201+152+206.6+85.5+90.7 = 1056.8s，待 seg09-10 PLAN SRT 校准）
- §8 修订日志加一条：`2026-05-22 seg08 PLAN 完成，段长 90.7s（1.6 buffer + 89.1 字幕），G2 主比喻 cc-window 三件套 + 自动化路径，G3 4 张真截图用户已抓 + 重命名 + 08/ 已删`

---

## 10. v1 实施时调整（SEC F 改造）

**触发**：v1 preview 用户审 t=1042s 截图后反馈「下方两个卡片要换成终端：一个手动一步步、一个自主循环快跑」。原 SEC F 设计的「左 fade-out 命令列表 vs 右 destination card」是静态对比，视觉张力弱；改造后是**「慢/手动」vs「快/自主」的动态对比**，直接呼应字幕"你不需要再去管它怎么做"→"只需要等待结果"。

### 改造内容

**删除**：
- `.f-cmds` 左 fade-out 命令列表（含 `.f-cmd-line` / `.f-cmd-strike` / `.f-cmds-title`）
- `.f-destination` 右 destination card 最终版（含 chips / title / cube-row）

**新增**：
- `.f-imp-term`（左终端，灰边框）：标题 `imperative · 过程导向`，7s 内只跑 3 条命令 + 2 个 `[waiting...]` + 卡在游标闪烁。命令字符串硬编码：
  ```
  > /research --topic "auth jwt"
  [ waiting for your next command... ]
  > /debug --line 87
  error: missing token expiry
  > /test --module auth
  [ paused — agent needs your guidance ]
  >  ▎ (cursor blink)
  ```
- `.f-auto-term`（右终端，Claude 橙边框 + halo）：标题 `declarative · 状态导向`，7s 内 1 条 init + 14 条 log line（stagger 0.32s）。内容：
  ```
  > /goal "找 bug 改到可上线" --deep-research
  [research] fetching jwt docs...
  [research] comparing 3 sources
  [research] cross-checking RFC 7519
  [report] drafted issue analysis
  [debug] exception on auth.py:87
  [debug] applying token expiry fix
  [test] running pytest suite
  [test] 24 passed, 1 failed
  [debug] revising retry loop
  [test] running pytest suite
  [test] 25 passed
  [build] bundle ready
  [ship] PR opened: #142
  [ship] ✓ ready to ship  [目标达成]  ← chip 嵌入
  ```
- 最后一行 `f-auto-final` 加 Claude 橙 box-shadow halo + 呼吸 yoyo 1 次

### 视觉对比强度

- **左 7s 出 3 行命令 + 2 行 wait** 对比 **右 7s 出 14 行 log = 约 5× 行密度**
- **左终止于「游标闪烁卡住」** 对比 **右终止于「✓ 目标达成 + Claude 橙 halo」**
- 字幕"你不需要再去管它怎么做"→ 右终端自主刷屏；"只需要等待结果"→ 左终端卡在等输入

### 尺寸与位置（v1 实测后调整）

- 两终端：top=410, width=660, height=580, left=100 / right=100
- 左终端 border 1px rgba(247,242,234,0.12)，右终端 border 1px rgba(217,119,87,0.50) + 外发光 halo
- 字号：command 19px / log 16px / line-height 1.55（适配 14 行 + init 不溢出）

### destination card 在 SEC F 的去向

不再以独立 card 出场；语义钩在右终端最后一行 `[ship] ✓ ready to ship` 的 inline chip `目标达成`（米色暖底 + Claude 橙 1px 边框 + 浅橙文字）。**保留 SEC B / SEC E 的 destination card 视觉积累，SEC F 用更强对比的两终端爆发收束**。

### chrome 大字主峰位置

不变（屏幕上方 200px）。两终端占下方 410-990px 区域，「03」hint 在 bottom 80px = 1000px 区域，无遮挡。

### 段长不变

90.7s（1.6 buffer + 89.1 字幕）。SEC F 内部时间分配重排（见 GSAP timeline 78.0-90.7s 部分），不影响段长 / `data-start` / `data-duration`。

### 验证状态

- lint：0 errors（1040 warnings 全部为既有误报，与 SEC F 改造无关）
- validate：seg08 段内时间无 contrast 问题；t=129.2 / 387.6 等段外时间的 contrast warnings 是 headless 在 SEC F 元素不可见时检测背景误算（米色父背景上的米色文字 = 1.0x:1），跟 seg07 d-better 1.23:1 同性质，已知误报
- inspect：seg08 自身 0 overflow
- preview：用户 2026-05-22 审过通过
