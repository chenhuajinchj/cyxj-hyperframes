# 文稿大纲 + 章节衔接句（main 写，给 4 个 agent 看的章节骨架）

> 目的：保证 4 个 agent 并行写出来的 7 章不会断裂。每章的 hook / 论点 / 关键事实 / 衔接 已经定好，agent 只展开中文表达 + metaphor 表 + 视觉旁注。
>
> **基调**：中文口语化，不像翻译腔，不卖弄。第一人称视角是"我"（小陈，Claude Code 重度用户）——可以在合适时机插入「我自己的体验」。**事实严格按 `研究/01-04 + 05-fact-audit.md` 不准编**。
>
> **每章口播时长**：参照下表，正负 10s 浮动允许。
>
> **总时长**：8 段口播加起来 ≈ 9-12 分钟（不含 stagger 缓冲）

---

## Ch0 - Cold Open（30-45s）

**Hook 第一句**（agent 必须这一句作开头）：

> 「2026 年 5 月 19 号，下午 3 点 05 分，Karpathy 发了一条推文。」

**画面强对照**：推文文字"I've joined Anthropic"砸下屏幕。

**反差点**（agent 展开）：
- Karpathy 是 OpenAI 创始成员（不是 founder）
- Anthropic 上个月刚反超 OpenAI（Ramp Index 34.4 vs 32.3，这是头条）
- 一个 OpenAI 创始成员，跑去刚反超 OpenAI 的对手

**大字 hook（口播说出口的同一帧大字砸下）**：
> 「为什么是 Anthropic？为什么是现在？」

**衔接到 Ch1**：
> 「在回答这两个问题之前，先认识一下这个人。」

---

## Ch1 - 这个人是谁（60-90s）

**Hook**：
> 「他叫 Andrej Karpathy。如果你在 AI 圈，这个名字你肯定听过。如果你刚入门，那我用一句话告诉你他是谁——」

**核心一句话定位**：
> 「现代 AI 教学的 GOAT 之一，OpenAI 的创始成员，特斯拉 AI 总监，回 OpenAI，又走，做了个 AI 教育公司，现在跑去 Anthropic。」

**8 站履历**（用时间线列车视觉走，agent 写出来一段段对应每个站）：

| # | 站点 | 时间 | 关键词 |
|---|---|---|---|
| 1 | 多伦多大学 | 2005-2009 | CS+物理双学位，旁听 Hinton 课程 |
| 2 | UBC 硕士 | 2009-2011 | 物理仿真，机器学习驱动机器人 |
| 3 | Stanford 博士 | 2011-2015 | 导师 Fei-Fei Li，CV+NLP 交叉 |
| 4 | OpenAI v1 | 2015-2017 | **创始成员**（不是 founder，是 founding member），同时在 Stanford 教 CS231n（150→750 学生） |
| 5 | Tesla | 2017-06 ~ 2022-07 | "Director of AI and Autopilot Vision"，直接向 Musk 汇报 |
| 6 | OpenAI v2 | 2023-02 ~ 2024-02 | midtraining + 合成数据，刚好一年又走 |
| 7 | Eureka Labs | 2024-07 ~ 现在**暂停** | AI 教育公司，首产品 LLM101n 课程 |
| 8 | Anthropic | 2026-05-19 | pre-training 团队，**新建子团队**研究 AI-assisted research |

**关键说法纪律**（审查后定的，agent 必须按这个）：
- ❌ 不说 "founder" → ✅ 说 "创始成员"
- ❌ 不说 Eureka 还在运营 → ✅ 说 "目前暂停"（他自己说 plan to resume in time）
- ❌ 不说出生具体日期 → ✅ 只说"出生在斯洛伐克"
- ❌ DeepMind 实习不展开（单源）→ ✅ 只说 Google 两次实习（如果讲到的话）

**callout 一句**（hook 强化）：
> 「注意，他**两次**离开 OpenAI——一次去特斯拉，一次去做教育。这本身就有戏。」

**衔接到 Ch2**：
> 「但他真正这两年出圈的，不只是这个履历——是他做的几个 repo，和提的几个词。」

---

## Ch2 - 火爆作品 + 概念（90-120s）

**Hook**：
> 「我数一下他这两年的几张牌——按时间倒着来。」

**5 张卡片栈**（agent 写每张卡片对应一段口播，按"最新→最早"逆序排，营造"刚刚还在 commit"的紧迫感）：

| 卡 | 内容 | 关键事实 | 重要措辞纪律 |
|---|---|---|---|
| 1 | **nanochat** | 53.7k stars，最新 commit **2026-05-05**（**加入 Anthropic 前一周还在改**），nanoGPT 的接班人，leaderboard "168 小时 → 1.65 小时" | 时效 hook，"前一周"要点出来 |
| 2 | **autoresearch** | 2026-03-07 发布，**82k+ stars**（一个月涨 16k），给 agent 自主训练循环：写 program.md，agent 自己跑实验 → commit / reset → 重复 | 数字必说"超过 8 万 stars"，热度作论据 |
| 3 | **LLM Wiki** | 2026-04-04 Gist，5k+ stars，提出 raw/ + wiki/ + schema 三段结构，知识复利不重新检索 | 说"一个 Gist"（不是 repo） |
| 4 | **context engineering** | 词是 **Shopify CEO Tobi Lutke 先提的**（2025-06），Karpathy 2025-06 转发并深度定义后才病毒扩散 | **必须先归功 Tobi Lutke**，再说 Karpathy 让它火。这是审查纪律 |
| 5 | **vibe coding** | 2025-02-02 推文，**Karpathy 原创**，"give in to the vibes" | 这条可以直说 Karpathy 造的词 |

**论点收束**（agent 写过渡前的核心一句）：
> 「你看出门道没有？他这两年做的全部，**没有一件是去训练新 model 的**。全是在做：怎么让 model 用得更好。」

**衔接到 Ch3**：
> 「这恰好就是 Anthropic 这一年在做的事。」

---

## Ch3 - Anthropic 的势头（60-90s）

**Hook**：
> 「先看一个数据。」

**事实段**（按时间线讲）：

- 2023 年 6 月：Anthropic 占企业 AI 采纳 **0.03%**
- 2025 年 4 月：**7.94%**
- 2026 年 4 月：**34.44%**，**首次超过 OpenAI 的 32.3%**
- 报告：Ramp AI Index，作者 Ara Kharazian（Ramp Lead Economist），覆盖 5 万家美国企业
- 注意（这点 Nate 提到了我们也提）：是 Ramp 客户群，不是全市场——**避免被网友扒**

**第二个事实**（2026-05-04 公告）：
- Anthropic 联合 **Blackstone + Hellman & Friedman（注意拼写：双 L）+ Goldman Sachs** 创办企业 AI 服务公司
- 外加 5 个投资方：General Atlantic / Leonard Green / Apollo / GIC / Sequoia
- 目标客户：community banks / 中型制造商 / 区域医疗
- Anthropic CFO Krishna Rao 引语可作画面字幕："Enterprise demand for Claude is significantly outpacing any single delivery model."

**论点**（agent 收束）：
> 「Anthropic 不只是在出 model，是在出一整套**怎么用 model**的方法。」

**衔接到 Ch4**：
> 「这就是 Karpathy 和 Anthropic 对上眼的关键——他们在同一个理念上，已经平行走了一年。」

---

## Ch4 - Wrapper 才是产品（90-120s）

**Hook**：
> 「这个理念有个名字，叫 wrapper。」

**重定义 wrapper**（agent 这里需要列清楚，建议视觉是洋葱图）：

```
中心：model（GPT / Claude / Gemini）
外层：
  Claude Code / Codex（CLI）
  Skills / Subagents（功能扩展）
  Hooks / MCP（事件 / 协议）
  Memory / CLAUDE.md（上下文）
```

**核心论点**：
> 「同一个 model，包在不同 wrapper 里，体验完全不一样。」

**关键 1 句**（这是中心论点）：
> 「Model 不是护城河了。Wrapper 才是产品。」

**小陈视角插入**（这一段口播必须用第一人称"我"）：
> 「我自己用 Claude Code 两个月最深的体感就是这个——model 每次升级感觉就强一点，但是把 CLAUDE.md 写好、把 skill 配对、把 subagent 拆好，体感能强一倍。同一个 Claude，会用和不会用差的不是一点。」

**Karpathy 角色锚点**（这是 Ch4 → Ch5 的核心连接，agent 必须强调）：
> 「Karpathy 这次加入 Anthropic，**他不是来训练新 model 的**。Anthropic 官方原话是——他要在 pre-training 团队下『**组建一个新子团队**』，专门研究『**用 Claude 加速 pre-training 研究**』。换句话说：用现在的 Claude（wrapper），帮训练下一代 Claude。这就是 wrapper 思维落到极致。」

**衔接到 Ch5**：
> 「所以如果你把 Karpathy 这两年做的事，和 Anthropic 这一年做的事并排放——」

---

## Ch5 - 两个哲学的合并（90-120s）

**Hook**：
> 「你会发现，这是两条已经汇流的河。」

**双河并排**（agent 写成对比，视觉是左右双河汇合）：

| 左河 - Karpathy 工作 | 右河 - Anthropic 产品 | 合流点 |
|---|---|---|
| LLM Wiki（raw + wiki + schema） | Claude 项目 memory + skill 文件 | "你的小数据成为护城河" |
| autoresearch（goal → agent loop） | Claude Code /goal（虽然 /goal 是 Codex 先出的，但思路一脉相承） | "从 chat 到 employee" |
| vibe coding（用英语描述，AI 写代码） | Claude Code（你说，它做） | 同一种用法 |
| Eureka Labs 教育热情（"deeply passionate about education"——他推文里写的） | Anthropic 缺的最后一块——非开发者怎么用 Claude | "教育层" |

**论点**（agent 收束）：
> 「Karpathy 这两年所有的实验和教学，其实都在做一件事——**让普通人能驾驭 model**。Anthropic 这一年所有的产品，也在做这件事。两条河迟早会汇到一起，区别只是在哪家公司里。」

**衔接到 Ch6**：
> 「这条河汇了之后会流向哪？我猜 3 个方向——」

---

## Ch6 - 3 个预测（90-120s）

**Hook**：
> 「先说清楚，这是猜——不是 Anthropic 的路线图，我也没有内部消息。但顺着前面这条逻辑往下推，应该往这 3 个方向走。」

（这一章可以借 Nate 的 3 个预测但中文化 + 加自己看法。本章是允许带主观色彩的"事件解读"部分。）

**预测 1：Context App Store**
- 不只是 prompt 市场，是 **skills + workflows + project memories + 评测 loop** 的集市
- Anthropic 已经在做 Skills 这条路，往集市方向走是顺理成章
- 例子：会计 SOP、销售对话模板、设计师品牌指引——都可以打包成"context bundle"上架

**预测 2：/goal 风格的命令家族**
- 现在 /goal 只是开始（注意：/goal 是 Codex 团队 Eric Traut 先出的，不是 Karpathy 也不是 Anthropic 原创——这点必须说清）
- 接下来会出：/research、/debug、/migrate、垂直领域专家 loop
- 接口变化：从"做这一步"变成"达成这个状态"

**预测 3：教育层**
- 让非开发者把**领域 know-how** 打包成 agent
- 例子：会计师懂月结流程、地产经纪懂客户接待 SOP、YouTuber 懂选题—— 这些价值都在脑子里，不在 docs 里
- Karpathy 推文里特意写"plan to resume my work on [education] in time"——这一条最可能是 **Eureka Labs 在 Anthropic 内部重生**

**衔接到 Ch7**：
> 「猜完了。最后说一句结论——」

---

## Ch7 - 收尾（30-45s）

**结论一句**（小陈第一人称）：
> 「我这两个月用 Claude Code 越来越觉得，model 之间的差异早就没那么重要了。重要的是你能不能把 wrapper 玩好。Karpathy 加入 Anthropic 这件事，可能就是这个 thesis 的最强信号。」

**互动 hook**：
> 「你怎么看？欢迎评论。下条想做什么——点个赞告诉我。」

**末尾静帧**：Claude 橙 + outro 大字 + XCYJ logo

---

## 给 4 个 agent 的共同纪律

**每个 agent 必须遵守**：

1. **中文口语化**：避免翻译腔（"作为...""它/他的""通过/被...""的事实是..."这种英文直译要去掉）。**像跟朋友讲事一样**。
2. **第一人称"我"**：仅在 Ch4 / Ch6 / Ch7 用，其他章用"他"（Karpathy）/"Anthropic"，不滥用第一人称
3. **事实严守阶段 2.5 审查后修正**：归属错了视频会被扒，特别 ⚠️：
   - context engineering 是 **Tobi Lutke 提的**，Karpathy 转发
   - /goal 是 **Eric Traut/Codex 先出的**
   - Karpathy 是 **founding member 非 founder**
   - Eureka Labs 是**暂停**
   - autoresearch 是 **82k stars**（不是 66k）
   - Nick Joseph 是 **pre-training 团队负责人**（不说 Head of Pretraining）
4. **不要每句一段**：自然分段，按"一个完整意思一段"
5. **每段口播末尾**含 [视觉旁注]：3-5 个时间点对应什么画面
6. **每段口播开头**含本章对应衔接句（接上一章的"过渡到本章"的话）
7. **不准编年份/数字/职位**
8. **章末必须有过渡句**，承接到下一章（已在本大纲钉好）
