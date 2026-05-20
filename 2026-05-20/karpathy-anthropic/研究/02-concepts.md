# Karpathy 火爆概念出处表

> 研究日期：2026-05-20
> 用途：ch2-concepts 章节（90-120s）视觉素材锚点

---

## 1. Vibe Coding

- **首发**：2025-02-02 推文
- **推文 URL**：https://x.com/karpathy/status/1886192184808149383
- **原文摘要**："There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists."（完整原文见推文，Karpathy 自述该推文是"shower of thoughts tweet"）
- **Karpathy 自述**：2025 年终回顾博客（2025-12-19）写道 "I coined the term 'vibe coding' in [this shower of thoughts tweet](https://x.com/karpathy/status/1886192184808149383) totally oblivious to how far it would go"
- **置信度**：高（Karpathy 本人博客直接引用推文链接 + 多家第三方引用日期均为 2025-02-02）
- **源**：
  - [karpathy.bearblog.dev/year-in-review-2025/](https://karpathy.bearblog.dev/year-in-review-2025/)（Karpathy 本人博客，2025-12-19）
  - [dianawolftorres.substack.com](https://dianawolftorres.substack.com/p/the-wizard-behind-the-code-andrej)（引用 "@karpathy, X, 2 February 2025"）
  - LinkedIn 多条帖子（描述为 "Feb 2025 tweet about coding without looking at the code"）
- **可视化建议**：推文截图（含日期 2025-02-02）+ 一个模糊的英文 prompt 打字动画 → 代码自动冒出 → 人物悠闲靠背，文字叠加 "just vibing"

---

## 2. Context Engineering

- **首发**：Karpathy 的推文严格说是"加一 / 背书"，而非首创者
- **背景**：Shopify CEO Tobi Lutke 率先在推文（`twitter.com/tobi/status/1935533422589399127`，约 2025 年 6 月下旬）使用该词组；Karpathy 随即在 `twitter.com/karpathy/status/1937902205765607626` 点赞并深度扩展定义，使该词组病毒式扩散
- **Karpathy 推文原文（核心定义）**："+1 for 'context engineering' over 'prompt engineering'. People associate prompts with short task descriptions you'd give an LLM in your day-to-day use. When in every industrial-strength LLM app, context engineering is the delicate art and science of filling the context window with just the right information for the next step..."
- **Simon Willison 记录日期**：2025-06-27（simonwillison.net 博文标注 "Recently amplified by Andrej Karpathy"）
- **置信度**：高（Simon Willison 博文直接引用两条推文 URL + Nate 视频逐字稿印证）
  - **注意**：Karpathy 在 2025 年终回顾博客里用"context engineering"描述 Cursor 等 app 的核心技术（第 3 节），与其 6 月推文一致
- **源**：
  - [simonwillison.net/2025/jun/27/context-engineering/](https://simonwillison.net/2025/jun/27/context-engineering/)（双源：引用 Tobi Lutke + Karpathy 推文 URL）
  - Karpathy 推文 URL：`twitter.com/karpathy/status/1937902205765607626`（仅单源间接确认，未能直接抓取推文页）
- **可视化建议**：把 "prompt engineering" 划掉 → 换成 "context engineering"；背景显示 CLAUDE.md / AGENTS.md 文件夹结构

---

## 3. LLM Wiki

- **发布形式**：GitHub Gist（idea file），非独立 repo
- **Gist URL**：https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
- **Gist 文件名**：`llm-wiki.md`
- **创建日期**：2026-04-04 16:25（Gist 页面 "Created April 4, 2026" 直接显示）
- **Stars / Forks**：Gist 本身 5,000+ Stars，5,000+ Forks（2026-05-20 抓取）
- **首发推文**：2026-04-03（viral tweet "LLM Knowledge Bases"）→ 2026-04-04（follow-up tweet + Gist 发布）
  - antigravity.codes 引用 Karpathy 的跟推原文：「Wow, this tweet went very viral! I wanted share a possibly slightly improved version of the tweet in an 'idea file'...」
- **核心概念**：在 RAG（每次查询重新检索）之外，建立由 LLM 持续维护的"wiki"（`raw/` 原始源 + `wiki/` 合成知识库 + schema 文件），知识随时间复利增长
- **置信度**：高（Gist 页面直接显示创建时间 + 多源引用日期一致）
- **源**：
  - Gist 直接抓取（显示 "Created April 4, 2026"，Stars 5,000+）
  - [antigravity.codes/blog/karpathy-llm-wiki-idea-file](https://antigravity.codes/blog/karpathy-llm-wiki-idea-file)（引用首发推文为 Apr 3, 2026 + follow-up Apr 4, 2026）
  - [medium.com/@urvvil08/andrej-karpathys-llm-wiki](https://medium.com/@urvvil08/andrej-karpathys-llm-wiki-create-your-own-knowledge-base-8779014accd5)（教程，印证 Gist 内容）
- **可视化建议**：`raw/` 文件夹 → 箭头 → `wiki/` 页面网状图（Obsidian graph view 风格），配文字"知识复利，不是每次重新检索"

---

## 4. Auto-research（autoresearch）

- **GitHub Repo**：https://github.com/karpathy/autoresearch
- **发布日期**：2026-03-07（verdent.ai 记录，与 README 内 "@karpathy, March 2026" 一致）
- **Stars**：约 66,000+（截至 2026-04-03，verdent.ai 引用 GitHub Issues 数据）
- **最近 Commit**：36 commits（抓取时 commit 时间列未显示具体日期，GitHub 页面动态加载）
- **是什么**：给 AI agent（Claude Code / Codex）一个极简单 GPU LLM 训练代码（nanochat，核心文件 `train.py` ~630 行），agent 自主循环：读代码 → 提出修改 → 5 分钟训练 → 检查 `val_bpb` 指标是否改善 → 改善则 `git commit`，否则 `git reset` 回滚 → 重复。人类只写 `program.md` 然后去睡觉
- **背景推文**：README 内链接两条推文：`x.com/karpathy/status/2029701092347630069` 和 `x.com/karpathy/status/2031135152349524125`（未能直接抓取内容，仅单源）
- **置信度**：高（GitHub 直接抓取 README 内容 + verdent.ai 详细报道日期一致）
- **源**：
  - [github.com/karpathy/autoresearch](https://github.com/karpathy/autoresearch)（直接抓取，README 全文）
  - [verdent.ai/guides/what-is-autoresearch-karpathy](https://www.verdent.ai/guides/what-is-autoresearch-karpathy)（记录 March 7, 2026 发布 + 66K stars）
- **可视化建议**：循环图：`program.md` → agent 读代码 → 5min 训练 → 判断 → commit/reset → 重复，配"人在睡觉，AI 在实验"文字

---

## 5. /goal loops

- **是谁提出的**：**不是 Karpathy**，而是 Eric Traut（OpenAI Codex 团队）
- **首发**：Codex CLI v0.128.0 由 Eric Traut 设计并发布了 `/goal` 命令
- **Hermes /goal**：Hermes Agent 官方文档明确写道："`/goal` is Hermes' take on the Ralph loop pattern... was popularised and shipped in Codex CLI 0.128.0 by Eric Traut on OpenAI's Codex team. Our implementation is independent... but the idea is theirs. Credit where credit's due."
- **Claude Code /goal**：LinkedIn 帖子（Shubham Saboo）记录 "Codex shipped /goal a few weeks ago... Then Claude Code launched /goal yesterday"，表明 Claude Code 的 /goal 在 Codex 之后推出（约 2026 年中）
- **Karpathy 的 autoresearch 与 /goal 的关系**：Nate 视频逐字稿指出 "I'm not saying that Karpathy personally like invented this feature... auto research and /goal are kind of different things, but the pattern is clearly related"——两者都是"定义目标，让 agent 自主运行直到达成"的模式，autoresearch 是具体 ML 实验工具，/goal 是通用命令接口
- **置信度**：高（Hermes 官方文档直接引用 Eric Traut / Codex CLI 0.128.0 + Nate 视频逐字稿区分了两者）
- **源**：
  - [hermes-agent.nousresearch.com/docs/user-guide/features/goals](https://hermes-agent.nousresearch.com/docs/user-guide/features/goals)（官方文档，明确 attribution）
  - LinkedIn - Shubham Saboo（描述 Codex /goal → Claude Code /goal 时序）
  - Nate Herk 视频逐字稿（本项目素材）
- **可视化建议**：三个 CLI 界面并排：Codex `/goal`、Hermes `/goal`、Claude Code `/goal`，配文字"同一个模式，三个实现"；或展示 autoresearch 的 `program.md` → `/goal` 命令的演化箭头

---

## 6. CS231n

- **Stanford 课号**：CS231n：Convolutional Neural Networks for Visual Recognition
- **Karpathy 教学年份**：2015、2016、2017（Karpathy 设计并担任主讲 instructor，2017 年后由其他 Stanford 教师延续）
- **学生规模增长**：150（2015）→ 330（2016）→ 750（2017）
- **课程页面**：http://cs231n.stanford.edu/（主页）；https://cs231n.stanford.edu/2016/（2016 年存档）
- **Karpathy 说法**（karpathy.ai）："I designed and was the primary instructor for the first deep learning class Stanford - CS 231n"
- **置信度**：高（karpathy.ai 本人主页 + Stanford 课程存档页 双源）
- **源**：
  - [karpathy.ai/](https://karpathy.ai/)（本人主页，直接描述 2015–2017 教学数据）
  - [cs231n.stanford.edu/2016/](https://cs231n.stanford.edu/2016/)（Stanford 官方 2016 年课程存档）

---

## 7. LLM 101N

- **全名**：LLM101n: Let's build a Storyteller
- **归属**：Eureka Labs（Karpathy 2024 年创办的 AI 教育公司）
- **GitHub**：https://github.com/karpathy/LLM101n
- **状态**：⚠️ 仍在开发中，尚未正式发布。README 明确写道："NOTE: this course does not yet exist. It is currently being developed by Eureka Labs. Until it is ready I am archiving this repo."
- **定位**：本科级别课程，从基础到构建一个完整 Storyteller AI（含 LLM），全程用 Python / C / CUDA，零 CS 前置要求
- **Eureka Labs 成立发布时间**：2024 年（LinkedIn 记录 Karpathy 宣布成立 Eureka Labs + LLM101n 作为首个产品）
- **Commits**：3 commits（仓库极早期状态）
- **置信度**：高（GitHub 直接抓取 + LinkedIn 关于 Eureka Labs 成立的报道）
- **源**：
  - [github.com/karpathy/LLM101n](https://github.com/karpathy/LLM101n)（直接抓取 README）
  - LinkedIn - Lior Alex（记录 Eureka Labs 发布声明）

---

## 8. Neural Networks: Zero to Hero

- **YouTube 播放列表**：https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ
- **课程主页**：https://karpathy.ai/zero-to-hero.html
- **首发时间**：约 2022 年（Brian Sigafoos 的学习笔记发布于 2022-11-22，描述为"Andrej Karpathy lecture series: Neural Networks: Zero to Hero"）
- **内容**：从零构建神经网络——从反向传播、makemore（字符语言模型），到 GPT（from scratch in code）；Karpathy 本人频道 @AndrejKarpathy
- **YouTube 频道**：https://www.youtube.com/@AndrejKarpathy
- **置信度**：高（karpathy.ai 本人主页列出播放列表 + 多来源引用一致）
- **源**：
  - [karpathy.ai/zero-to-hero.html](https://karpathy.ai/zero-to-hero.html)（本人课程主页）
  - [karpathy.ai/](https://karpathy.ai/)（主页列出 YouTube 频道和播放列表）
  - [briansigafoos.com/neural-networks-karpathy/](https://briansigafoos.com/neural-networks-karpathy/)（2022-11-22 学习笔记，印证首发年份）

---

## 引用源清单

| # | URL | 来源类型 | 核心贡献 |
|---|-----|---------|---------|
| 1 | karpathy.bearblog.dev/year-in-review-2025/ | Karpathy 本人博客 | Vibe coding 首发推文 URL 确认；context engineering 概念引用 |
| 2 | x.com/karpathy/status/1886192184808149383 | 原始推文（直链，未能直接抓取） | Vibe coding 首发 |
| 3 | simonwillison.net/2025/jun/27/context-engineering/ | 技术博客 | Context engineering 双推文 URL（Tobi Lutke + Karpathy） |
| 4 | gist.github.com/karpathy/442a6bf555914893e9891c11519de94f | Karpathy Gist（直接抓取） | LLM Wiki 创建日期 2026-04-04，Stars 5,000+，全文内容 |
| 5 | antigravity.codes/blog/karpathy-llm-wiki-idea-file | 技术博客 | LLM Wiki 首发推文日期（Apr 3, 2026 + Apr 4, 2026） |
| 6 | github.com/karpathy/autoresearch | GitHub repo（直接抓取） | autoresearch README 全文；推文链接 |
| 7 | verdent.ai/guides/what-is-autoresearch-karpathy | 技术指南 | autoresearch 发布日期 2026-03-07，66K stars |
| 8 | hermes-agent.nousresearch.com/docs/.../goals | Hermes 官方文档 | /goal 归属 Eric Traut / Codex CLI 0.128.0 |
| 9 | karpathy.ai/ | Karpathy 本人主页（直接抓取） | CS231n 年份数据；NN Zero to Hero 播放列表 |
| 10 | cs231n.stanford.edu/2016/ | Stanford 官方课程页 | CS231n 2016 年存档 |
| 11 | github.com/karpathy/LLM101n | GitHub repo（直接抓取） | LLM101n 状态（开发中）、定位 |
| 12 | karpathy.ai/zero-to-hero.html | Karpathy 本人课程主页 | NN Zero to Hero 播放列表 URL |
| 13 | Nate Herk 视频逐字稿 | 本项目研究素材 | 5 个概念的引述框架 + /goal 与 autoresearch 关系辨析 |

---

## 关键不确定项

| 概念 | 不确定内容 | 处理方式 |
|------|-----------|---------|
| Context engineering | Karpathy 推文确切发布时间（Simon Willison 记录为 2025-06-27 前后，推文 ID 1937902205765607626 间接推算日期约 2025-06-24 左右，未能直接验证） | 标注"仅单源间接推算" |
| autoresearch | autoresearch 推文直链（两条 tweet URL 在 README 中列出但无法直接抓取 X.com） | 以 verdent.ai 报道的 2026-03-07 为基准，标注"仅单源" |
| /goal | Claude Code /goal 确切上线日期未查到官方 changelog | 以 LinkedIn 帖子描述的"Codex 先，Claude Code 后"为参考 |
| LLM101n | 发布时间（仅记录为"2024 年成立 Eureka Labs"，LLM101n 仍未正式发布） | 标注状态"开发中，未发布" |
