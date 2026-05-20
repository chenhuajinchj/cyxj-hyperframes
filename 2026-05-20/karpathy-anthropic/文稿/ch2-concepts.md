# Ch2 — 火爆作品 + 概念（90-120s）

---

## 衔接句（接 Ch1）

> 「但他真正这两年出圈的，不只是这个履历——是他做的几个 repo，和提的几个词。」

---

## 旁白（口播稿）

「我数一下他这两年的几张牌——按时间倒着来，从最新的讲。」

---

**卡片 1 — nanochat**

「最近的一张：就在他加入 Anthropic 的**前一周**，也就是 5 月 5 号，他还在往 nanochat 里 commit。」

「这是他做的一个 LLM 全栈训练框架。从预训练、微调、强化学习到 UI 全链路，代码量极精简。你在它的 README 里能看到一张 leaderboard——同样的任务，从 168 小时压到了 1.65 小时。这个东西有 5 万 3 千多个 stars，还在涨。」

「它是 nanoGPT 的接班人，nanoGPT 的 README 里现在直接写：建议用 nanochat。但 nanoGPT 本身也有 5 万 8 千多个 stars——你就知道这个人的开源项目有多大影响力了。」

[视觉旁注 0:00-0:20 / 卡片 1 入场 + 翻面]

---

**卡片 2 — autoresearch**

「往前两个月，3 月 7 号。他放了一个叫 autoresearch 的 repo——」

「大概逻辑是这样的：你写一个 program.md，告诉 agent 你想优化什么；然后 agent 自己读代码、跑实验、看 loss 有没有改善，改善了就 git commit，不行就 git reset 回滚，再改，再跑——循环，人去睡觉。」

「这个东西**一个月涨了超过 1 万 6 千个 stars**，现在已经超过 8 万 stars。」

[视觉旁注 0:20-0:35 / 卡片 2 — 循环图动画：program.md → 跑实验 → 判断 → commit/reset → 重复]

---

**卡片 3 — LLM Wiki**

「4 月 4 号，他发了个 Gist——不是一个独立的 repo，是 GitHub 上的一个 Gist——叫 LLM Wiki。」

「核心想法是：现在大家都在用 RAG，每次查询重新去检索一遍。他说这有点浪费，不如建一个由 LLM 来持续维护的知识库：`raw/` 放原始资料，`wiki/` 放 LLM 合成之后的总结，schema 文件定结构。知识可以复利增长，不用每次都从零捡。这个 Gist 现在已经超过 5000 个 stars。」

[视觉旁注 0:35-0:47 / 卡片 3 — 文件树图：raw/ → 箭头 → wiki/ → 箭头 → schema，obsidian-graph 风格网状图]

---

**卡片 4 — context engineering**

「概念类再说两个。第一个：context engineering。」

「这个词**最早是 Shopify CEO Tobi Lutke 提出来的**，他在 2025 年 6 月发了一条推文用了这个词。Karpathy 看到之后转发，加了一段很长的注解——大意是说：prompt engineering 这个词让人以为就是给 AI 写个短指令，但真正在做工业级 LLM 应用的时候，核心在于把上下文窗口里的信息填对——什么放、怎么放、放在哪个位置，这才是一门精细的工程艺术。」

「Karpathy 这条转发之后，这个词一夜之间在圈内炸了。」

[视觉旁注 0:47-1:02 / 卡片 4 — "prompt engineering" 文字被划掉 → 替换成 "context engineering"（Claude 橙渐变），背景浮现 CLAUDE.md / skills/ 文件夹结构树]

---

**卡片 5 — vibe coding**

「最后这个词，是他自己造的——vibe coding，2025 年 2 月 2 号一条推文。」

「原话是：'give in to the vibes'——完全相信 AI 写的代码，人不看代码本身，只看效果。他后来在年终复盘里写，这条推文发出去的时候，他完全没想到它能走这么远。」

[视觉旁注 1:02-1:12 / 卡片 5 — 推文截图模拟卡（日期 2025-02-02），背面：一段模糊英文 prompt + AI 自动补全的代码动画，人物悠闲靠背，文字叠加 "just vibing"]

---

**收束论点**

「你看出门道没有？他这两年做的全部，**没有一件是去训练新 model 的**。全是在做：怎么让 model 用得更好。」

[视觉旁注 1:12-1:22 / 5 张卡片平铺展开，全部标题同时高亮；最后一帧画面定格，5 个名字下方统一出现同一句注释："怎么让 model 用得更好"]

---

## 衔接到 Ch3

> 「这恰好就是 Anthropic 这一年在做的事。」

---

## 视觉旁注汇总

| 时间点 | 口播内容 | 视觉 |
|---|---|---|
| 0:00 | "前一周还在 commit" | nanochat 卡片从卡片栈抽出，翻面显示 README leaderboard（168h → 1.65h 对比行高亮） |
| 0:07 | "5 万 3 千多个 stars，还在涨" | 右上角数字 53.7k 用 Claude 橙渐变大字，下方"↑ 还在涨"弹出 |
| 0:13 | "nanoGPT 的接班人" | 两张卡片并排：左 nanoGPT（虚化 / deprecated 标记），右 nanochat（清晰 / 箭头指向） |
| 0:22 | "循环" | autoresearch 卡翻面，背面是循环箭头图：program.md → train → eval → commit/reset |
| 0:30 | "超过 8 万 stars" | 右上角 82k+ 数字以快速数字滚动方式出现，Claude 橙色 |
| 0:37 | "一个 Gist" | LLM Wiki 卡翻面，显示三段文件夹图（raw/ wiki/ schema），节点之间用连接线 |
| 0:48 | "Tobi Lutke 提出来的" | context engineering 卡正面：Tobi Lutke 名字先出现（暖米色底蓝色小标签），再出现 Karpathy 转发箭头 |
| 0:55 | "把上下文窗口里的信息填对" | 卡翻面：CLAUDE.md + skills/ + memory.md 文件树结构，每个文件节点逐一亮起 |
| 1:03 | "vibe coding" | vibe coding 卡正面大字以 blur-sharpen 动效入场，Claude 橙渐变 |
| 1:08 | "完全没想到它能走这么远" | 卡翻面：推文截图模拟卡（含 2025-02-02 日期），背面代码动画 + "just vibing" 文字 |
| 1:13 | "没有一件是去训练新 model 的" | 5 张卡片平铺，卡片中心同时浮现共同注脚 |
| 1:18 | "怎么让 model 用得更好" | Claude 橙大字渐变入场，画面停顿 2s |

---

## 素材源

| 素材 | 来源 | 截图/使用方式 |
|---|---|---|
| nanochat README leaderboard | `github.com/karpathy/nanochat` | 截图 README 中 leaderboard 表格（168h → 1.65h 对比行），后期圈出关键行 |
| nanochat 最新 commit 日期 | GitHub commit 列表 | 截图 commit 记录（2026-05-05 日期可见），画面文字叠加"前一周" |
| nanoGPT README deprecated 提示 | `github.com/karpathy/nanoGPT` | 截图 README 顶部 deprecated 提示段（2025-11 更新） |
| autoresearch README | `github.com/karpathy/autoresearch` | 截图 README 的 goal-loop 流程图段 |
| LLM Wiki Gist | `gist.github.com/karpathy/442a6bf555914893e9891c11519de94f` | 截图 Gist 文件树结构段（raw/ wiki/ schema 三段），注明"Created April 4, 2026" |
| vibe coding 推文 | x.com/karpathy/status/1886192184808149383 | 截图推文界面（含日期 2025-02-02）或模拟推文卡 |
| context engineering Simon Willison 记录 | simonwillison.net/2025/jun/27/context-engineering/ | 不截图，仅作研究依据；画面做模拟推文卡（标注 @tobi 先发 + @karpathy 转发） |

---

## Metaphor 表

| 口播关键词 | 字面理解 | 语义扩展（视觉要做的） |
|---|---|---|
| "前一周还在 commit" | 提交记录 | commit 日期 2026-05-05 叠加在卡片右上角，配 git log 风格小字"last commit 14 days ago"，传递"刚刚还在干"的紧迫感 |
| "168 小时 → 1.65 小时" | 数字对比 | leaderboard 两行，左右两列颜色对比（暗灰 vs Claude 橙），右侧数字用弹出动效强调 |
| "人去睡觉，AI 在循环" | 自动化 | 循环箭头图夜色背景（深蓝底），右下角小人物睡觉 icon，循环箭头用橙色持续旋转 |
| "超过 8 万 stars" | 热度数字 | 数字用快速滚动方式从 66000 滚到 82000+，最终定格"82k+"，传递"一直在涨"的动态感 |
| "知识复利增长" | 复利 | raw/ → wiki/ 路径图，wiki/ 节点下面"长出"更多分支节点，类似时间复利的树状生长动画 |
| "一夜之间在圈内炸了" | 爆发扩散 | context engineering 卡片从一个点向外扩散出很多小点（病毒传播 dot-spread 动画） |
| "give in to the vibes" | 放松/相信 | 代码从屏幕自动生成，人物剪影靠背放松，代码流动速度越来越快，人物纹丝不动 |
| "没有一件是去训练新 model" | 对比/空缺 | 5 张卡片平铺后，每张卡片底部出现同一行注脚，整体画面让观众直觉感受到"方向一致性" |

---

## 时长估算

| 段落 | 字数（口播） | 估算时长 |
|---|---|---|
| 开头 hook（"我数一下…"） | 约 20 字 | ~5s |
| 卡片 1 — nanochat | 约 110 字 | ~27s |
| 卡片 2 — autoresearch | 约 80 字 | ~20s |
| 卡片 3 — LLM Wiki | 约 80 字 | ~20s |
| 卡片 4 — context engineering | 约 120 字 | ~30s |
| 卡片 5 — vibe coding | 约 55 字 | ~14s |
| 收束论点 | 约 35 字 | ~9s |
| 衔接句 | 约 12 字 | ~4s |
| **合计** | **约 512 字** | **约 129s** |

> 估算依据：中文口播约 4 字/秒（正常语速），画面停顿 + stagger 入场额外约 5-10s。
> 若超 120s，优先压缩 context engineering 段落（精简注解内容，约可缩 8-10s），其次压缩 nanochat 第二段 nanoGPT 对比内容（约 6s）。
