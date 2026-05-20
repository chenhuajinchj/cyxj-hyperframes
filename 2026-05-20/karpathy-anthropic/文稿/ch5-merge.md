# ch5-merge — 两个哲学的合并

> 时长目标：90-120s
> 接上：ch4 结尾「所以如果你把 Karpathy 这两年做的事，和 Anthropic 这一年做的事并排放——」
> 接下：「这条河汇了之后会流向哪？我猜 3 个方向——」

---

## metaphor 表

| 口播关键词 | 字面义 | 语义扩展（视觉做什么） |
|---|---|---|
| "两条已经汇流的河" | 河流 | 左右两条水流从屏幕两侧向中间流动，在屏幕中央碰撞成波纹，再合并向下流出 |
| "你的小数据成为护城河" | 数据 | 左河里 LLM Wiki 文件夹"流动"成右河里 Claude memory 文件，文件尾巴带着水花落入右侧 |
| "从 chat 到 employee" | 对话框变成人 | 对话气泡框渐变形变成一个小人轮廓站在终端前，背景出现无限滚动的 git commit log |
| "同一种用法" | 两个箭头重叠 | 左右两个半透明箭头向中间滑动，完全重叠变成一个橙色实心箭头，glow burst |
| "教育层" | 教室 | 普通人头像（非程序员）→ 头顶浮出 know-how 图标（账本、地图、镜头）→ 整体打包成一个 skill 卡片 |
| "两条河迟早会汇到一起" | 合流 | 合流中央点放大，出现 Karpathy 头像 + Anthropic logo 的叠加发光效果 |

---

## 口播正文

【接上一章过渡】

你会发现，这是两条已经汇流的河。

左边这条河，是 Karpathy 这两年一直在做的事。右边这条河，是 Anthropic 这一年一直在做的事。把它们并排放，你会发现——这不是巧合，是同一个方向。

我来说 4 对。

**第一对：LLM Wiki 和 Claude memory。**

Karpathy 的 LLM Wiki，核心想法很简单——把你自己的笔记、文档、SOP，分成 `raw/`、`wiki/`、schema 三层，让 agent 帮你持续整理成一个会生长的知识库。你自己的小数据，时间越长越有价值，换模型不带走，留在你这里。

Anthropic 在做什么？Claude 的项目 memory、skill 文件、CLAUDE.md——都是同一件事：把你的工作方式写死在上下文里，让 model 越来越懂你这个人。

合流点：**你的小数据成为护城河**。不是因为 model 锁死你，是因为你的上下文舍不得重来。

**第二对：autoresearch 和 /goal。**

Karpathy 的 autoresearch 是这样工作的：你写一个 `program.md`，说清楚目标，然后 agent 自己跑实验、改代码、提交、回滚，一直循环到指标达标。你人在睡觉，它在帮你做实验。

Claude Code 和 Codex 这边，也出了 /goal 这条命令——定义目标，让 agent 一直工作到你说停。**需要说清楚的一点：/goal 这个命令，最初是 Codex 团队的 Eric Traut 先做的，不是 Karpathy，也不是 Anthropic 原创。** 但 autoresearch 的逻辑和 /goal 的逻辑是一脉相承的——都是从"做这一步"变成"达成这个状态"。

合流点：**从 chat 到 employee**。你不再是在一问一答，你在交代任务，等收工汇报。

**第三对：vibe coding 和 Claude Code。**

vibe coding 是什么？就是用英语描述你要什么，AI 写代码，你坐在那边看、改方向、说感觉对不对。Karpathy 2025 年 2 月造了这个词，很多人觉得是玩笑——但是这两年用过 Claude Code 的人都知道，这就是日常工作流。

Claude Code 就是 vibe coding 最成熟的那个实现。你说，它做。

合流点：**同一种用法，只是终于有了像样的工具。**

**第四对：Eureka Labs 和 Anthropic 缺的最后一块。**

这一对是我觉得最有意思的。Karpathy 在加入 Anthropic 的推文里，专门写了一句话——"I remain deeply passionate about education"，还说"plan to resume my work on it in time"。注意是 resume，恢复——意思是现在暂停了。

Eureka Labs 目前是暂停状态：LLM101n 的 GitHub 仓库已经 archived，网站九个多月没更新。但这句话本身才是信号——他把教育这件事，作为加入 Anthropic 时的一个特别说明带进去了。

Anthropic 缺什么？他们有模型，有 Claude Code，有企业服务——但非开发者怎么用 Claude，这套东西还没有。Karpathy 最擅长的事，就是把复杂的 AI 系统讲得让普通人能用、能理解、能上手。

合流点：**教育层**。这一块，是 Karpathy 带过去的，不是 Anthropic 原本就有的。

---

所以我的感受是这样的：Karpathy 这两年所有的实验和教学，其实都在做一件事——**让普通人能驾驭 model**。Anthropic 这一年所有的产品，也在做这件事。两条河迟早会汇到一起，区别只是在哪家公司里。

---

【衔接到 ch6】

这条河汇了之后会流向哪？我猜 3 个方向——

---

## 视觉旁注（时间点对应画面）

| 时间点（参考） | 口播内容 | 画面动作 |
|---|---|---|
| 0s | hook 句 "两条已经汇流的河" | 左右双河流入，中央波纹碰撞，合流点 glow burst（MOTION_NOTES §3 同帧合成：白闪 + ripple + glow） |
| 8s | 第一对：LLM Wiki ↔ Claude memory | 左河标签：`raw/ wiki/ schema`；右河标签：`memory skill files CLAUDE.md`；LLM Wiki 文件夹"流"进右侧 Claude memory |
| 28s | 第二对：autoresearch ↔ /goal | 左河 autoresearch 循环图（program.md → 实验 → commit/reset）；右河 cc-window 显示 `/goal "fix the bug"`；中间出现 stagger 连线 |
| 50s | 讲 /goal 归属 Eric Traut | 画面焦点切到右河 /goal 标签，附小字注：`by Eric Traut / Codex CLI 0.128.0`，蓝色 hot 色 |
| 65s | 第三对：vibe coding ↔ Claude Code | 左河：英文口语 prompt 打字 + 代码冒出；右河：Claude Code logo；两者箭头重叠变橙色 |
| 82s | 第四对：Eureka Labs ↔ 教育层 | Eureka Labs logo（半透明，暗示暂停）；Karpathy 推文字幕条：「plan to resume my work on [education] in time」；右河出现普通人头像 + 脑袋里 know-how 图标 |
| 100s | 论点收束 | 双河完全合流，中央出现 Karpathy 头像 + Anthropic logo 叠加，Claude 橙 glow，屏幕中央大字：「两条河」 |
| 110s | 衔接句 | 画面推进向下游，波纹向前，切换到 ch6 |

---

## 制作注意

- **hot 色**：本章只用 Claude 橙 `#d97757` 作合流点 glow；/goal 归属标注用学术蓝 `#5BA9FF`（本视频章节 hot 色），区分"这个不是 Anthropic 原创"
- **Eureka Labs logo**：用半透明处理（opacity 0.5），视觉上呈现"暂停"状态，不用全明
- **Karpathy 推文字幕**：字幕条底部滑入，引用原文「I remain deeply passionate about education and plan to resume my work on it in time.」——用英文字幕条（字幕白底黑字），口播同步翻译
- **合流碰撞瞬间**：MOTION_NOTES §3 同帧合成模板——白闪 + ripple + glow burst ±0.05s 内
- **DNA 四件套**：网格 + 暗角 + 颗粒 + crosshair 全贯穿，不能漏
