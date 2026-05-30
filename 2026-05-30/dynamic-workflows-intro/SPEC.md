# 动态工作流 · 片头 — SPEC / 设计文档

> XCYJ × HyperFrames · 2026-05-30
> 本文是这条片头的**设计真源 + 建造圣经**。它同时充当 brainstorming 的 design doc 和本工程的 STYLE_BRIEF。
> 改方向先改本文，再动 compositions。建图表/上屏数字前回 §2 核实台账对一遍。

---

## 0. 一句话

给「Claude Opus 4.8 + 动态工作流」整条视频开头的 **1:48 口播片头**做 heavy 动态图形：**口播三态缩放**（满屏 ↔ 左缩+右面板 ↔ 大字接管）+ **官方真截图标注**（不手搓跑分图）+ **逐句对齐的真实数字台账**，HyperFrames **直出 4K 成片**。

---

## 1. 项目档案

| 项 | 值 |
|---|---|
| 形态 | 16:9 横屏 · 满屏口播 + overlay（host-overlay 直出，非 ProRes 叠层） |
| 时长 | 107.81s（严格对齐源素材，30fps） |
| 源素材 | `/Users/chenhuajin/Movies/视频导出/动态工作流/片头制作.mp4`（4K 3840×2160 · 30fps · 含人声 aac · 355MB） |
| slug | `dynamic-workflows-intro` |
| meta id | `xcyj-dynamic-workflows-intro` |
| 工程位置 | `2026-05-30/dynamic-workflows-intro/` |
| 设计坐标 | 1920×1080（render 时 `--resolution 4k` DPR 超采到 4K） |
| 交付 | HF 直出 mp4。**制作期 720p proxy 调效果 → 定稿换 4K 口播重渲 4K**。 |
| 音频 | 独立 `<audio src=源mp4>` 元素，HF 渲染直接出人声，**无需 post-mux** |

---

## 2. 核实台账（事实层 — 上屏前最后真源）★

**核实方式**：grok-search（grok-4.3-console + Tavily 2 源）+ Anthropic 官方原文 web_fetch + 官方真表 PNG 实读。三重交叉。

**官方源 URL**
```
Opus 4.8 公告   https://www.anthropic.com/news/claude-opus-4-8
动态工作流博客   https://claude.com/blog/introducing-dynamic-workflows-in-claude-code
系统卡(更深)     https://www.anthropic.com/claude-opus-4-8-system-card
```

**官方真表（全部 Terminus-2 harness，置信度：高/官方）**

| 榜单 | Opus 4.8 | Opus 4.7 | GPT-5.5 | Gemini 3.1 Pro |
|---|---|---|---|---|
| Agentic coding (SWE-Bench Pro) | **69.2** | 64.3 | 58.6 | 54.2 |
| Agentic **terminal** coding (Terminal-Bench 2.1) | 74.6 | 66.1 | **78.2** | 70.3 |
| Multidisciplinary reasoning (Humanity's Last Exam) | **49.8** / **57.9** | 46.9/54.7 | 41.4/52.2 | 44.4/51.4 |
| Agentic computer use (OSWorld-Verified) | **83.4** | 82.8 | 78.7 | 76.2 |
| Knowledge work (GDPval-AA) | **1890** | 1753 | 1769 | 1314 |
| Agentic financial analysis (Finance Agent v2) | **53.9** | 51.5 | 51.8 | 43.0 |

**脚注**：所有模型 Terminal-Bench 用 Terminus-2 public harness 报分；**GPT-5.5 用 Codex CLI harness 的分是 83.4%**。

### ★★ 83.4% 双胞胎陷阱（上屏铁律）

官方材料里 **83.4% 出现两次，是两个不同的东西**：
- **Opus 4.8 的 OSWorld 电脑操作 = 83.4%**（在主表里，是 Opus 4.8 的强项）
- **GPT-5.5 的 Terminal-Bench / Codex CLI harness = 83.4%**（只在脚注里）

口播说的"GPT-5.5 特定环境 83.4%"= **脚注那个**。铁律：
1. 第 6 拍给 GPT-5.5 标 83.4% → 来源=脚注，标签必须写全 **「GPT-5.5 · Terminal-Bench · Codex CLI harness」**，配 `openai.svg`。
2. **绝不高亮主表里那个 83.4 单元格**（那是 Opus 4.8 的电脑操作分，配错=权威性翻车）。
3. 第 5 拍高亮 terminal 行时，GPT-5.5 那格圈的是 **78.2**（表内数字），不是 83.4。

### 其它已钉死事实
- 发布日：**2026-05-28**，Opus 4.8 与动态工作流同日发布（官方）。
- 价格：与 4.7 **不变**，$5/M 入 · $25/M 出（fast mode $10/$50）（官方原文 "same price"）。
- 动态工作流是什么：研究预览，Claude 自己写编排脚本，单 session 内跑**数十到数百个并行 subagent**，结果经独立/对抗校验收敛后才回报。面向**超大规模问题**（整库迁移、安全审计、bug 猎杀）。Max/Team/Enterprise + API/Bedrock/Vertex/Foundry。开 `ultracode` 或让 Claude "create a workflow"。
- vs Agent Teams：动态工作流 = **一个 session 内的编排式 subagent + 内建校验**；Agent Teams = **多个独立完整 session 点对点协作**。（第 1 拍只抛"区别是什么"，**不剧透答案**。）

> 口播逐句与真表**完全对得上**：多项超 4.7 ✅ / terminal 这项 GPT-5.5 领先 ✅ / 能动性 Opus 4.8 强 ✅ / 价格不变 ✅ / 83.4% ✅。

---

## 3. 视觉架构

### DNA gate 自检（5 条全 yes 才放行）
- **Q1 底色** ✅ 暖米 `#F7F2EA`（右侧内容面板）；口播视频区是真人实拍（深色工作室），形成暖米 vs 深色对比。禁纯黑/亮灰当面板底。
- **Q2 Claude 橙 `#d97757`** ✅ 处处：口播缩成框时的 halo、spec 卡 prompt 符号、83.4 计数辉光、hero hot 词、橙色高亮 marker。
- **Q3 四件套纹理** ✅ 透视网格 + 暗角 + 颗粒 + crosshair 闪烁，铺在右侧面板区（每个 sub-comp 顶部画，§3 米色底参数）。
- **Q4 字体** ✅ Noto Sans SC + Inter + JetBrains Mono。
- **Q5 chrome 渐变 hero + 橙 halo** ✅ "动态工作流"用米色底 8-stop 灰 chrome（中文 hero 不包 char span，§5 互斥）；口播框 halo 用 Claude 橙。

### 配色纪律
- **主**：Claude 橙 `#d97757`（Opus / 自家 / 强调）
- **对手冷色**：GPT-5.5 / OpenAI 用中性冷调 `#2F7D73`（terminal teal）或 slate，**与橙拉开**，让"自家 vs 对手"一眼分。Gemini（若出现）灰。
- 单拍 ≤ 3 hot 色（守 MOTION_PHILOSOPHY）。

### 口播三态
| 态 | 用在 | 实现 |
|---|---|---|
| **满屏 FULL** 1920×1080 | 纯讲话、hero 时刻底 | `#face-wrapper` = FULL |
| **左缩 LEFT** ≈ 760×约900 圆角 docked left | 所有要展示内容的拍（2–6） | wrapper tween 到 LEFT，加 `.pip`（圆角36+橙 halo），右侧让出面板 |
| **大字接管** | 拍 0/7 hero 落版 | 面板层盖上，hero chrome 大字；口播可在左继续 |

### 构图安全区
口播**正脸居中**，overlay **不盖脸**：内容只在右侧面板 / 缩框后让出的区域 / 下方字幕带 / 上角 logo。满屏态时大字走上方安全带（参考 claude-edit-intro：hero 在顶 ~300px band）。

---

## 4. 技术架构（从 `videos/2026-05-09-claude-edit-intro/` fork）

**host-reframe 真实现（已验证可渲）**：
- `#face-wrapper` 是**纯 div**（absolute, 1920×1080, `overflow:hidden`, `transform-origin:0 0`）→ **GSAP 只动 wrapper，绝不动 `<video>`**（动 video 尺寸会冻帧，HARD_CONSTRAINTS / claude-edit-intro 注释）。
- `<video id="face-video" muted playsinline>` 在 wrapper 内：`left:50%; height:100%; width:auto; translateX(-50%)` 居中。wrapper 缩小 → `overflow:hidden` 自动把横画面裁进小窗。
- `.pip` class = `border-radius:36px` + drop shadow + `0 0 60px rgba(217,119,87,.25)` 橙 halo + z-index 提升。缩放时 `onStart` 加 class。
- `<audio src=源mp4 data-volume=1>` 独立元素 → HF 渲染输出人声。video 设 `muted`。
- 主时间线 `gsap.timeline({paused:true})`，wrapper 模式 `FULL`/`LEFT` 对象，`mainTl.to('#face-wrapper', {...LEFT, ease:'power3.inOut'}, T)`。结尾 pad anchor `mainTl.to({},{duration:107.81},0)`（Law #11）。
- 每拍一个 `compositions/NN-xxx.html` sub-composition（`data-composition-src`），内部选择器一律 `[data-composition-id="X"]`（§9，禁 `#X`）。

**proxy → 4K 流程**：
1. `ffmpeg -i 源.mp4 -vf scale=-2:720 -an proxy-720.mp4` 当制作期 `assets/face.mp4`（去音轨，音频走单独 audio 元素指向带音的源）。
   - 注：音频元素需指向**带音轨**的文件；proxy 期可让 audio 指向单独抽出的 `assets/face-audio.m4a`（`ffmpeg -i 源 -vn -c:a aac face-audio.m4a`），video 指向无音 proxy。定稿同理换 4K video，audio 不变。
2. 调效果全程 720p，`render --quality draft` 快验。
3. 定稿：`assets/face.mp4` 换成 4K（`scale=-2:2160` 或直接用源），`render --resolution 4k --quality high` 出 4K 成片。

**渲染命令（定稿）**
```bash
npx hyperframes render --resolution 4k --quality high --format mp4 --output renders/dynamic-workflows-intro-4k.mp4
```

---

## 5. 八拍分镜（口播逐句 + 状态 + 内容 + 子 cue 秒数 + 素材 + 比喻）

> 秒数来自 whisper-cli large-v3 转写（`/tmp/pt-transcript.srt`）。视觉 cue 卡在对应口播帧，**不提前剧透下一句**（MOTION_NOTES §4）。

### 拍 0 · Hook（0–10.48）满屏→左缩
口播：0.0「Claude Code 这次更新的 Dynamic Workflow」/ 2.96「随 Opus 4.8 一起发布的重要更新」/ 7.36「我这次模型更新以来最期待的功能」
- 0–1.5 满屏口播；说到 "Dynamic Workflow" wrapper 滑/缩到左（power3.inOut）。
- 2.5–4 右侧 HERO 落版：chrome 大字「动态工作流 / Dynamic Workflows」+ `claudecode.svg`。
- 2.96 胶囊「随 Opus 4.8 · 2026.05.28 发布」。
- 7.4 「最期待的功能」强调标。
- 0.5–4 频道角标（`yt-lower-third` fork）然后退。
- 比喻：标题即承诺，钩子先立。

### 拍 1 · 悬念（10.48–14.42）左缩
口播：10.48「我特别想知道它和 Agent Teams 的区别是什么」
- VS 卡：`Dynamic Workflows ⚔ Agent Teams`，13.5 问号 `?` 砸入。**只抛悬念，答案不剧透**（答案见 §2，但本片头不展开）。

### 拍 2 · 一天体感（14.42–38.00）左缩 ★长拍内部多 cue
口播：14.42「持续使用了一天之后」/ 18.42「Opus 4.8 比 4.7 更适合长时间任务」/ 23.16「更适合智能体」/ 25.12「更适合融入真实工作流」/ 28.70「不太适合聊天了」/ 31.60「不会再稳稳顺着你了」/ 33.44「仁者见智」/ 34.92「我反而更喜欢」
- 15 kicker「用了一天 · 体感」。
- 20 / 23.2 / 25.2 三连 bullet 逐条砸入（↑长时间任务 / ↑智能体 / ↑真实工作流），back.out 落地微弹 + stagger。
- 28.7 toggle 翻 OFF「闲聊」（一个开关从亮到灭）。
- 33.5 chip「仁者见智」；35 「我更喜欢」盖章。
- 比喻：三个"更适合"= 三级台阶往上；聊天=被关掉的开关。

### 拍 3 · 更新速览（38.00–47.02）左缩
口播：38.0「简短过一下更新」/ 41.02「模型 ID 变成 Claude Opus 4.8」/ 44.22「价格和 4.7 不变」
- 38.5 kicker「更新速览」。
- 41 spec 卡（`cc-window` fork 终端风）：`model: claude-opus-4-8`（mono，橙 prompt 符号）。
- 44.2 价格徽标「= Opus 4.7 不变 · $5 / $25 每百万 token」。
- 比喻：换了引擎，票价没变。

### 拍 4 · 跑分总览（47.02–58.60）左缩 · 官方真表
口播：47.02「在官方的榜单里面」/ 49.04「Opus 4.8 多项超过 4.7」/ 52.24「尤其 Agentic Coding」/ 53.72「长上下文」/ 55.20「工具调用和复杂推理」/ 57.10「不是所有榜单都第一」
- 47.5 **官方真表 PNG 框入**（卡片 + 橙描边，参考图 host-left/content-right 比例）。
- 49–52 Claude 橙 marker 扫过 **Opus 4.8 整列**。
- 52.2 高亮 Agentic coding 行（69.2）。54–57 扫 reasoning / computer-use / knowledge 行（Opus 4.8 领先项）。
  - ⚠️ 表里**没有**独立"长上下文"行；口播说"长上下文"时不要编一个单元格，扫"Opus 4.8 全面领先"的整体即可（诚实）。
- 57.1 caveat「但非项项第一」，高亮移到 terminal 行（Opus 4.8 不第一）做拍 5 引子。
- 比喻：一张成绩单，自家这列基本满堂红。

### 拍 5 · terminal-bench 对比（58.60–70.46）左缩 · 表内放大
口播：59.12「有一项 terminal bench」/ 60.66「虽然比 4.7 高」/ 63.10「依旧没有 GPT-5.5 厉害」/ 65.32「实际代码工作还是不如 GPT-5.5」
- 59.1 放大「Agentic terminal coding / Terminal-Bench 2.1」**那一行**。
- 61 高亮 Opus 4.8 **74.6** > Opus 4.7 **66.1**（橙，自家进步）。
- 63 圈出 GPT-5.5 **78.2**（冷色，对手领先）—— **是 78.2 不是 83.4**。
- 65–70 hold，`claude.svg` vs `openai.svg` 对位。
- 比喻：自家跳了一级，但这一项擂台对手还站在更高台阶。

### 拍 6 · 83.4% + 结论（70.46–88.50）左缩
口播：70.46「官方博客详细写明了」/ 73.88「GPT-5.5 在特定环境下」/ 75.76「能达到 83.4%」/ 77.86「Opus 4.8 在能动性上」/ 80.32「比 Codex + GPT-5.5 强」/ 83.12「专注于写代码这领域」/ 86.22「GPT-5.5 还是最能打」
- 71 切到脚注式 callout（离开主表，避开陷阱）。
- 74 标签「特定环境 = Codex CLI harness」。
- 76–78 **大数字 count-up → 83.4%**（`apple-money-count` 计数 fork / MOTION_NOTES §3 cue7），辉光橙，标全「GPT-5.5 · Terminal-Bench · Codex CLI harness」。**不碰主表那个 83.4**。
- 78–86 双轴结论卡：① 能动性 Agentic → **Opus 4.8 赢**（橙）/ ② 纯写代码 Coding → **GPT-5.5 赢**（冷）。86.2 盖章。
- 比喻：两把尺子各有冠军，别用一把尺子量全部。

### 拍 7 · 转正题 / 引出动态工作流（88.50–107.81）左缩→满屏
口播：89.52「跑分到此为止」/ 90.46「真正让我感兴趣的是」/ 93.82「叫做动态工作流」/ 95.0「官方叫 Dynamic Workflows」/ 97.50「让 Claude 啃超大规模的问题」/ 101.28「精心编排你的小型任务」/ 104.76「下面来看怎么用」
- 89.5 右侧 blur/dissolve 擦除（**不硬切**，DNA 反例 8；用 `transitions-blur` / `flash-through-white`）。
- 90.5 口播回中/放大。
- 94 HERO「动态工作流」再现；95 英文副标「Dynamic Workflows」。
- 97.5 chip①「啃超大规模问题」+ **官方 react-to-solid 运行图框入**（`/tmp/dw-diagram.png`，35 agents 并行）。
- 101.3 chip②「精心编排小任务」。
- 105 箭头「↓ 看怎么用」引向正片演示。**不解释功能细节**（那是正片）。
- 比喻：跑分翻篇，正主登场，门推开一条缝。

---

## 6. 素材台账

| 素材 | 状态 | 用途 |
|---|---|---|
| 口播源 4K | ✅ `~/Movies/视频导出/动态工作流/片头制作.mp4` | 定稿 |
| 口播 proxy 720p | ⬜ ffmpeg 生成 → `assets/face.mp4` | 制作期 |
| 口播音频 | ⬜ ffmpeg 抽 → `assets/face-audio.m4a` | 全程人声 |
| 官方跑分表 PNG | ✅ 已下载 `/tmp/opus48-benchmark-table.png`（2600×1392 官方） | 拍 4/5 |
| 动态工作流运行图 | ✅ 已下载 `/tmp/dw-diagram.png`（2048×619 官方） | 拍 7 |
| logos | ✅ `assets/logos/`：`claudecode.svg`/`claude.svg`/`openai.svg`/`codex.svg` | 全片 |
| 源 URL | ✅ 见 §2 | 复核 |

> 真实素材禁 HTML mock（memory `feedback-real-screenshots-not-mocks`）：跑分/运行图一律用上面官方真图，不手搓。

---

## 7. [BLOCKING-REUSE] 复用扫描结果（4 处）

| 要做的 | 复用源 | 处置 |
|---|---|---|
| 口播图层 + 三态缩放 + 音频 + 主时间线骨架 | `videos/2026-05-09-claude-edit-intro/index.html`（face-wrapper 模式）+ `05-pip.html` | **fork 骨架** |
| 动态字幕 / 逐句高亮 | `claude-edit-intro/03-karaoke-captions.html` | fork |
| 图表 / split MG | `claude-edit-intro/04-mg-and-charts.html` · catalog `data-chart`（本片优先用真表，data-chart 仅 fallback） | 参考 |
| 计数 83.4% | catalog `apple-money-count` · MOTION_NOTES §3 cue7 token-counter | fork 计数逻辑 |
| spec 卡（model id 终端风） | `templates/components/cc-window/` | 装/ fork |
| 章节 kicker chip | `videos/2026-05-04-claude-19-tips/`（第 NN 招 chip） | fork |
| 截图框 + 橙 marker 高亮 | `templates/components/text-effects/` + catalog `shimmer-sweep` | fork marker |
| 频道角标 | catalog `yt-lower-third` | 装/ fork |
| 拍间转场（非硬切） | catalog `transitions-blur` / `flash-through-white` · 19-tips 已有同名 html | 复用 |
| 四件套纹理 | `MY_VISUAL_DNA §3` 米色底参数 | 每 sub-comp 顶部画 |

> 写每个 composition 前，再按 PROJECT-STATE §4.7 把该拍的复用结论填进 PLAN，找不到才手写；手写 > 80 行 = 大概率漏扫。

---

## 8. 风险 / 硬约束命中

**HARD_CONSTRAINTS**
- §1 GSAP selector 永远硬编码 `[data-composition-id="X"] .child`，禁 template literal。
- §2 复制 beat 后全局换 id（CSS class + GSAP selector 两处）。
- §9 sub-comp 内禁 `#X .child`，用 `[data-composition-id="X"]`。
- §14 GSAP transform 覆盖 CSS translate → 缩放居中用 `xPercent/yPercent`（见 MOTION_NOTES §1）。
- §18 转场即退场仅 final scene 例外；拍间用 blur/flash 非硬切（DNA 反例 8）。
- §5 中文转写已走 whisper-cli（不用 hyperframes transcribe）。✅ 已完成。

**MOTION_NOTES**
- §1 任何被 GSAP 动 x/y/scale 的元素（含口播 wrapper、卡片）用 `xPercent:-50,yPercent:-50` 或 flex 居中。
- §2 `fromTo` 起点≠0 且初始靠 CSS → 加 `immediateRender:false`。
- §3 拍 1 问号砸入 / 拍 2 bullet 落地可用撞击同帧合成（白闪+shake 适度，别过）。
- §4 不剧透：拍 1 不给 Agent Teams 答案；hero 标题在口播说"动态工作流"前不全亮。
- §5 SVG filter（wavy/grain）id 按拍命名空间，禁全局撞名。

**性能（§10/§11）**
- 4K 口播进 HF 渲染吃内存（renderer 可涨到 12GB）：制作期一律 720p proxy；4K 只在定稿一次性渲。
- `onUpdate` 里禁每帧 `getElementById` / new closure（计数器缓存 DOM 引用）。
- 渲完关浏览器 tab，不只 kill server。

---

## 9. 制作顺序（高层；细节交 writing-plans 拆 PLAN-segNN）

1. **proxy 准备**：ffmpeg 生成 720p 无音 `assets/face.mp4` + 抽 `assets/face-audio.m4a`；官方 2 张图 + logos 入 `assets/`。
2. **骨架**：fork claude-edit-intro index.html → 改 meta id / title / 8 个 sub-comp 占位 / face-wrapper FULL↔LEFT 模式 / 总时长 107.81 / audio 元素。lint 过。
3. **逐拍 build**：拍 0 → 7，每拍写 composition → `preview` 浏览器 scrub 人眼审 → 用户点头 → 下一拍（preview-only 验证，禁 playwright/单帧当验证）。每拍过即 commit。
4. **全片 review**：`lint` + `validate` + `inspect` + 全程 preview。
5. **定稿 4K**：换 4K face 资产 → `render --resolution 4k --quality high` → 检查人声同步。
6. **归档**：`mv` 进 `videos/2026-05-30-dynamic-workflows-intro/`，更新 `docs/REFERENCE_INDEX.md`；回填 DNA §7 PiP halo 实战结果。

---

## 待办 / 开放项
- [ ] 拍 2「不会再稳稳顺着你」这句的视觉（toggle 之外要不要加一个"哄"的小动作）— build 时定。
- [ ] 拍间转场具体选哪个 shader — sample 一个看 preview 再定。
- [ ] 定稿是否也出一版 1080p（YouTube 双投）— 渲 4K 后顺手 downscale 即可。
