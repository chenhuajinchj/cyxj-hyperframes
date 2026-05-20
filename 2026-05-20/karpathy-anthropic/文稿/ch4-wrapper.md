# ch4 — Wrapper 才是产品（90-120s）

---

## 1. 本章定位

**承接 ch3 衔接句**：「这就是 Karpathy 和 Anthropic 对上眼的关键——他们在同一个理念上，已经平行走了一年。」
**本章任务**：用"洋葱同心圆"把 wrapper 具象化，讲清楚"model 不是护城河，wrapper 才是产品"这个全片核心论点，插入小陈第一人称体感，再用 Karpathy 的 Anthropic 角色做论点落地的极致版本。
**论点**：Wrapper 才是产品。

---

## 2. 口播文稿

这个理念有个名字，叫 wrapper。

大多数人讨论 AI，还是从 model 出发：GPT-4o 好还是 Claude Opus 好，Gemini 2.5 上了哪个榜，benchmark 分数谁高。Model 当然重要，不是说它不重要——但如果你真的用过这些工具一段时间，你会开始注意到一件事：同一个 model，不同人用，结果差得离谱。

那个差距在哪里？在 wrapper。

什么叫 wrapper？把 model 放在中心——Claude 也好，GPT 也好，Gemini 也好——中心就是一个模型。然后往外一层一层套：Claude Code、Codex，这是 CLI 层；再外面是 Skills、Subagents，功能扩展层；再外面是 Hooks、MCP，事件和协议层；最外面是 Memory 和 CLAUDE.md，是你给 model 的"上下文环境"——它知道你是谁、你在做什么、你要的是什么样的结果。

这整个洋葱，从里到外，才是你真正在用的"产品"。

Model 不是护城河了。**Wrapper 才是产品。**

我自己用 Claude Code 两个月，最深的体感就是这个。model 每次升级，感觉就强一点点，像从 100 分提到 105 分。但是把 CLAUDE.md 写好、把 skill 配对、把 subagent 拆好，体感能强一倍——同一个 Claude，我用出来的效果比刚开始差不多能差两三个版本。你不是在等更好的 model，你是在学更好地用这个 model。同一个 Claude，会用和不会用差的不是一点。

这也是为什么 Karpathy 加入 Anthropic 这件事值得认真看一眼——不只是"大牛跳槽"的新闻。

他这次加入 Anthropic，**不是来训练新 model 的**。Anthropic 官方对 TechCrunch 说的是——他要在 pre-training 团队下，**组建一个新的子团队**，专门研究**用 Claude 加速 pre-training 研究**。

就是这一句话，绕了一个圈。用现在的 Claude——wrapper——帮训练下一代 Claude。

Model 帮 model 进化。Wrapper 思维落到极致，就长这个样子。

所以如果你把 Karpathy 这两年做的事，和 Anthropic 这一年做的事并排放——

---

## 3. 视觉旁注

| 时间点 | 口播内容 | 视觉动作 |
|---|---|---|
| `0s` | 「这个理念有个名字，叫 wrapper」 | 章节 Kicker 入场：Ch4 / WRAPPER，Claude 橙高亮「wrapper」一词 |
| `5s` | 「benchmark 分数谁高」 | 背景出现模糊的排行榜截图（低对比度处理），暗示"大家都在盯这个"——但随即淡出 |
| `18s` | 「在 wrapper」 | 「wrapper」字样砸下，Claude 橙，字符 stagger blur→clear |
| `22s` | 洋葱图展开开始 | SVG 同心圆从中心向外逐层 reveal，每层 stagger 0.3s：① Model 核心小球（暗灰色）② Claude Code / Codex（淡蓝）③ Skills / Subagents（中蓝）④ Hooks / MCP（深蓝）⑤ Memory / CLAUDE.md（Claude 橙 halo，最亮、最大一层） |
| `40s` | 「Model 不是护城河了。Wrapper 才是产品」 | 中心 Model 小球缩小变暗，外层橙色环扩大并发出 glow burst——视觉上"外层吞掉中心"，配 MOTION_NOTES §3 白闪+ripple |
| `50s` | 小陈视角开始 | 洋葱图保留，画面缩小到左三分之一，右侧出现"体感对比卡"：左卡「刚开始用」→ 右卡「CLAUDE.md 调好后」，数字强化差距感 |
| `78s` | 「组建一个新的子团队」 | 切换到结构图：Anthropic pre-training 大圆 → 内部 spawn 出 Karpathy 子团队小圆，配箭头"流向"动画 |
| `90s` | 「用现在的 Claude 帮训练下一代 Claude」 | 同心圆洋葱图重出：外层 wrapper 环发出光线"流入"中心 model 球——wrapper 反哺 model 的视觉隐喻，Claude 橙流光 |
| `100s` | 「Model 帮 model 进化」 | 单帧静止 hold：外层橙环 + 中心光球，简洁有力，衔接到 ch5 |

---

## 4. Metaphor 表（HARD_CONSTRAINTS §12）

| 口播关键词 | 字面理解 | 语义扩展（视觉要做的） |
|---|---|---|
| 「wrapper」 | 包装/套壳 | 不画"一个盒子套着另一个盒子"，而是**洋葱同心圆**——有机的、有层次的、每层都有自己功能，最外层最亮（最有价值），而不是"内核最亮" |
| 「model 不是护城河了」 | 旧范式失效 | 中心球**缩小变暗**，同时外层扩大——不是消失，是"重量转移"，视觉本身在说"价值中心移动了" |
| 「体感能强一倍」 | 个人体验 | 体感对比卡用**同一个任务、两种配置下的输出质量**做前后对比，而非单纯文字"强一倍"——视觉承载的是"差距本身" |
| 「用现在的 Claude 帮训练下一代 Claude」 | 递归/自我提升 | 洋葱外层 wrapper 环向内**发出光线流入**中心 model 球，像"营养从外向内输送"——wrapper 不只是消费者，它也是生产者 |
| 「并排放」（衔接句）| 对比 | 画面分屏预示 ch5：左侧 Karpathy 时间线 / 右侧 Anthropic 产品线，两条线已在趋同——不出字幕，用视觉预告下章结构 |

---

## 5. 事实纪律自查

- ✅ **未说"Head of Pretraining"**——用"pre-training 团队负责人 Nick Joseph"（本章不需要提 Nick Joseph，仅提"pre-training 团队"即可）
- ✅ **未说"Karpathy 加入团队"**——用"组建一个新子团队"（Anthropic spokesperson 原话 "start a team"）
- ✅ 洋葱图层级按大纲：Claude Code / Codex / Skills / Subagents / Hooks / MCP / Memory / CLAUDE.md
- ✅ 小陈第一人称"我"仅在「我自己用 Claude Code 两个月」这一段使用
- ✅ ch4 其他段均用第三人称 Karpathy / Anthropic
- ✅ Karpathy 角色锚点：组建子团队 + 用 Claude 加速 pre-training 研究——完整体现
- ✅ 核心论点原句保留：「Model 不是护城河了。Wrapper 才是产品。」
- ✅ 衔接句按大纲原句：「所以如果你把 Karpathy 这两年做的事，和 Anthropic 这一年做的事并排放——」

---

## 6. 衔接句

**承接 ch3（重述）**：「这就是 Karpathy 和 Anthropic 对上眼的关键——他们在同一个理念上，已经平行走了一年。」
**过渡到 ch5**：「所以如果你把 Karpathy 这两年做的事，和 Anthropic 这一年做的事并排放——」

---

## 7. 时长估算

口播字数：约 **560 字**
普通口播语速约 4.5 字/秒（叙事节奏，非极速说话）
估算：560 ÷ 4.5 ≈ **124 秒**（约 2 分 4 秒）

目标区间 90-120s。可压缩方向：
1. 洋葱图层级可在视觉里展示，口播只说「外面套着 CLI 层、功能层、协议层、记忆层」，不逐一报名字（节省约 10-15s）
2. benchmark/排行榜那段可压缩至 1 句（节省约 8s）
3. 预计压缩后约 **100-110s**，落在目标区间内
