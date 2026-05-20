# ch6-predictions — 3 个预测

> 时长目标：90-120s
> 接上：ch5 结尾「这条河汇了之后会流向哪？我猜 3 个方向——」
> 接下：「猜完了。最后说一句结论——」

---

## metaphor 表

| 口播关键词 | 字面义 | 语义扩展（视觉做什么） |
|---|---|---|
| "3 张占卜卡" | 塔罗牌 | 3 张大卡正面朝下横排，stagger 0.4s 依次翻面，每张翻面带金色 glow burst |
| "Context App Store" | App Store | 卡片背面是 skill 图标的网格（icon grid），每个 tile 有标题和一行描述，鼠标悬停 tile 放大 |
| "context bundle" | 打包 | 散落的文件图标（SOP.md、template.html、workflow.json）向中心聚合，合并成一个 tile 图标 |
| "/goal 命令家族" | 命令行 | cc-window 里 5 行命令逐行打字显示，行前图标不同（放大镜/bug/箭头/闪电/锤子）|
| "从做这一步到达成这个状态" | 箭头变成旗帜 | 屏幕上"→ do step"字样消散，"⚑ reach goal"字样从下往上弹出 |
| "教育层" | 脑袋→agent | 普通人头像→头顶浮出领域知识图标（账本、地图、镜头）→图标打包压缩成 skill agent 卡片，卡片滑入 App Store grid |

---

## 口播正文

【接上一章过渡】

先说清楚，这是猜——不是 Anthropic 的路线图，我也没有内部消息。但顺着前面这条逻辑往下推，应该往这 3 个方向走。

---

**预测一：Context App Store。**

我猜 Anthropic 会做一个"上下文市场"——但不只是 prompt 市场，不是那种"买一个写营销文案的 prompt 模板"，那种东西不值钱。

我说的是更深的东西：skills + workflows + project memories + 评测循环，打包成一个"context bundle"，放进一个市场里，让人按需接入。

举个具体例子：一家会计事务所，把他们的月结流程、审计 SOP、常见错误模式，全部打包进一个 bundle 上架——另一家小公司的财务直接接进来，Claude 就知道怎么帮他跑月结，而不是从零开始解释流程。或者销售团队的对话模板、设计师的品牌风格指引——都可以变成可复用、可订阅的上下文。

Anthropic 已经在做 Skills 这条路了，往集市的方向延伸是顺理成章的。

---

**预测二：/goal 风格的命令家族。**

现在 Claude Code 有 /goal，但我猜这只是开头。

这里先说清楚归属——**/goal 这个命令，最初是 OpenAI Codex 团队的 Eric Traut 做的，Codex CLI 0.128.0 发布的，不是 Karpathy，也不是 Anthropic 的原创**。但这个接口逻辑太对了，所以大家都在跟进。

接下来我猜会出现的：/research——让 agent 自主搜集资料、对比来源、出报告；/debug——给 agent 一个 bug 描述，它自己跑测试、找根因、改到绿灯；/migrate——告诉 agent "帮我把这个代码库从 v1 迁到 v2"，它去啃文档、改代码、跑测试、提 PR；还有各种垂直领域专属的 agent loop——法律助手一直读合同直到风险点全标出来，医疗助手一直查文献直到诊断方向收敛。

接口的根本变化只有一个：从"做这一步"，变成"达成这个状态"。你不再管它怎么做，你只管它做完没有。

---

**预测三：教育层。**

这是我觉得最有趣的一个猜测，也是延伸最远的一个。但我有理由猜。

Karpathy 加入 Anthropic 的推文里专门写了一句——「I remain deeply passionate about education and plan to resume my work on it in time.」他把教育放进来了，而且说"resume"，说明这事在他心里没有结束，只是暂停在那里。Eureka Labs 目前是暂停的——LLM101n 仓库已 archived，网站快一年没更新——但他没有说放弃。

所以我猜 Eureka Labs 的那条线，会在 Anthropic 内部以某种形式重生。不一定叫同一个名字，但方向应该是：**让非开发者，把他们脑袋里的领域 know-how，打包成 agent**。

举个例子：会计师懂月结流程，这个知识目前在他脑袋里，或者散落在他的 Excel 批注和微信消息里。地产经纪懂客户接待 SOP，这个知识在他的经验和直觉里。YouTuber 懂什么选题有流量、什么切入点让人看下去，这些在他脑子里，不在任何文档里。

这些人不是开发者，让他们写 CLAUDE.md 是强人所难。但如果有一套足够简单的"打包工具"，让他们用自然语言描述流程、上传样本、教 agent 什么是"好"——然后这个 agent 可以上架、可以共享、可以给同行用——这才是真正的"每个人都能用 Claude"。

这一条我猜是最没把握的，但也是最想看到的。

---

猜完了。最后说一句结论——

---

## 视觉旁注（时间点对应画面）

| 时间点（参考） | 口播内容 | 画面动作 |
|---|---|---|
| 0s | hook 句 + "先说清楚这是猜" | 3 张卡片正面朝下横排入场，stagger 进来；右上角小字「不是路线图，这是猜」|
| 10s | 预测一开始 | 第 1 张卡翻面（0.4s，glow burst）：卡面标题「Context App Store」+ icon grid 示意 |
| 12s | "不只是 prompt 市场" | "prompt 市场"字样被划掉（Claude 橙斜划），下方浮出 skills/workflows/memories 三行 |
| 22s | 会计 SOP / 销售模板例子 | icon grid 里 tile 逐一出现：会计 SOP（账本图标）、销售对话（气泡图标）、品牌指引（调色盘图标），每个 tile 配一行简短描述文字 |
| 40s | 预测二开始 | 第 2 张卡翻面：卡面标题「/goal 命令家族」+ cc-window |
| 42s | 说清 /goal 归属 Eric Traut | 卡片左上角出现小 badge：`/goal by Eric Traut · Codex CLI 0.128.0`，蓝色 hot 色，stagger 入场 |
| 50s | 列出命令家族 | cc-window 逐行打字：`/research 搜集资料直到覆盖充分`、`/debug 找到根因直到测试通过`、`/migrate 迁移完成直到 CI 绿灯`、`/legal 标出风险直到合同审完`、`/goal ...（更多）` |
| 65s | "从做这一步到达成这个状态" | 屏幕底部文字"→ do step"淡出，"⚑ reach goal"字样从下弹出，Claude 橙 glow |
| 75s | 预测三开始 | 第 3 张卡翻面：卡面标题「教育层」+ 普通人头像 → agent 图标 |
| 77s | 引用 Karpathy 推文 | 推文字幕条从底部滑入：「plan to resume my work on [education] in time」，英文字幕条白底，口播同步中文 |
| 85s | 会计师 / 地产经纪 / YouTuber 例子 | 三个人物图标水平排开，每人头顶浮出领域知识图标（账本 / 地图 / 镜头），图标按 stagger 打包压缩成 skill agent 卡片，卡片依次滑入 App Store grid |
| 100s | "最没把握但最想看到的" | 第 3 张卡边框虚线闪烁（表示"最不确定"），但卡片本身最大，最亮 |
| 110s | 衔接句 "猜完了" | 3 张卡片同时 fold back，屏幕淡到黑，切到 ch7 |

---

## 制作注意

- **每张卡翻面用 stagger 0.4s 间隔**，不要同时翻
- **预测一视觉**：skill icon grid 用实际图标（账本、气泡、调色盘）而非占位色块——具体图标可从 assets/ 取或用 emoji 替代
- **预测二视觉**：cc-window 里每行命令字体用 `JetBrains Mono`，行前图标区分：放大镜 / bug icon / 箭头 / 法律天平 / 旗帜
- **/goal 归属标注**：badge 用蓝色 `#5BA9FF`，字号小（12px），位置卡左上角，不遮主标题
- **预测三视觉**：教育层人物图标用线稿风格（非照片），头顶知识图标用 Claude 橙 glow 包围，打包动画 ease: `back.out(1.4)`
- **第 3 张卡"不确定"效果**：边框用虚线或轻微抖动，但卡片尺寸比前两张大 10%（最重要的猜测 = 最大的卡）
- **DNA 四件套**：网格 + 暗角 + 颗粒 + crosshair 全贯穿
- **主观色彩控制**：每个预测开头均有"我猜"/"应该会"口头前置，视觉上不要出现"Anthropic 将会..."这样的确定性大字——改成"？"或"如果"问号风格
