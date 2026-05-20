# Ch1 - 这个人是谁（目标 60-90s）

## 衔接（来自 Ch0）

「在回答这两个问题之前，先认识一下这个人。」（ch0 末句，ch1 直接接续）

---

## 旁白（中文口播稿）

他叫 Andrej Karpathy。如果你在 AI 圈，这个名字你肯定听过。如果你刚入门，我用一句话告诉你他是谁——

现代 AI 教学的 GOAT 之一，OpenAI 创始成员，特斯拉 AI 总监，离开，再回 OpenAI，再走，做了个 AI 教育公司，现在去了 Anthropic。

这人有意思就有意思在这个轨迹上。我们一站一站来看。

第一站：多伦多大学，2005 到 2009 年，念的是计算机科学加物理双学位。他在那里旁听了 Geoff Hinton 的课——就是那个后来拿诺贝尔奖的 Hinton。

第二站：英属哥伦比亚大学读硕士，2009 到 2011。方向是物理仿真——怎么让机器人靠机器学习学会走路、跑步那种。

第三站：Stanford 博士，2011 到 2015，导师是 Fei-Fei Li，做的是视觉和语言交叉的方向。期间在 Google Brain 和 Google Research 都实习过。

第四站：2015 年，OpenAI 成立，他是创始成员之一。注意，是创始成员——founding member，不是 Sam Altman 或者 Musk 那个级别的 co-founder，但他名字在 2015 年的创始公告里。这一段他还在 Stanford 同时开了一门课，CS231n，讲卷积网络，第一年 150 个学生，两年后 750 个。

第五站：2017 年 6 月，去了特斯拉，职位全称叫"Director of Artificial Intelligence and Autopilot Vision"，直接向马斯克汇报，做了五年多到 2022 年 7 月离开。

第六站：2023 年 2 月，他回了 OpenAI，做 midtraining 和合成数据生成，在那里又建了一个新团队。刚好一年，2024 年 2 月又走了。

第七站：2024 年 7 月，他宣布创立 Eureka Labs，想做 AI 教育——他原话说，"如果成功，让任何人都能学会任何东西"。但随着加入 Anthropic，这个项目目前是暂停状态。他说以后会继续做。

第八站：就是上周——2026 年 5 月 19 号，他加入了 Anthropic 的 pre-training 部门，在团队负责人 Nick Joseph 下面，Anthropic 还专门为他新建了一个子团队，专注研究怎么用 Claude 来加速 pre-training 本身的研究。

注意：他**两次**离开 OpenAI——第一次去了特斯拉，第二次去做教育。这本身就有戏。

但他真正这两年出圈的，不只是这个履历——是他做的几个 repo，和提的几个词。

---

## 视觉旁注（按口播节拍标时间点）

- **0:00-0:08** — Karpathy 头像居中浮入（blur-to-sharp，`filter: blur(14px) → 0`），头像下方大字 stagger 打出："Andrej Karpathy"（Inter 字体，暖米色底），章节 Kicker 从左上角滑入："Ch1 · 这个人是谁"
- **0:08-0:18** — 一句话定位大字砸下（chrome 渐变）："OpenAI 创始成员 · 特斯拉 AI 总监 · AI 教育先锋"，三段用竖线隔开，逐段 stagger 0.08s 出现
- **0:18-0:38** — 水平时间线从左向右展开（1700px，8 站），Karpathy 头像小 icon 从左端出发，沿轨道滑向第一站；每站亮起顺序：**1. 多伦多大学**（UofT logo 占位）年份标"2005-2009" + 关键词"Hinton 课 · CS+物理"
- **0:38-0:50** — 头像滑向**2. UBC**（UBC logo 占位），标"2009-2011" + 关键词"物理仿真 · 机器人运动控制"；随即滑向**3. Stanford**（Stanford 红色 logo），标"2011-2015" + "Fei-Fei Li · CV+NLP"，"Stanford"字用 hot 色蓝 `#5BA9FF`
- **0:50-1:05** — 头像滑向**4. OpenAI v1**（OpenAI logo 黑），标"2015-2017"；关键词"创始成员 · CS231n 150→750"；画面同时浮出一张小卡：OpenAI 2015 创立公告截图，光圈圈出"Andrej Karpathy"名字（强化"founding member 非 founder"）
- **1:05-1:18** — 头像滑向**5. Tesla**（Tesla logo 红），标"2017-2022 · 5年"，时间线在 Tesla 段落加宽一倍（压缩 5 年感），关键词"Director of AI · Autopilot Vision · 向马斯克汇报"
- **1:18-1:28** — 头像折返滑向**6. OpenAI v2**（OpenAI logo），标"2023-2024 · 一年整"，关键词"midtraining · 合成数据 · 又建新团队"；时间线这一段比 Tesla 段明显短——视觉上呼应"只待了一年"
- **1:28-1:38** — 头像滑向**7. Eureka Labs**（Eureka Labs logo 占位），标"2024-07 ~ 暂停"；logo 带一个细灰色"⏸ 暂停"角标，关键词"AI 教育 · LLM101n · 目前暂停"，不用"关闭"字样
- **1:38-1:50** — 头像滑向**8. Anthropic**（Anthropic logo + Claude 橙 halo），标"2026-05-19"；这一站最大、最亮，logo 带 Claude 橙 glow；关键词"pre-training · 新建子团队 · AI-assisted research"
- **1:50-2:00** — 全局时间线停住，章末 callout 大字浮出："两次离开 OpenAI"（文字本身静止），然后淡出 → 过渡句口播同步："但他真正这两年出圈的……"，画面开始 blur 退场，准备切入 ch2

---

## 素材源

- 多伦多大学 logo（待补，`assets/logos/` 中无）
- UBC logo（待补）
- Stanford 红底 logo（待补）
- OpenAI logo：`assets/logos/openai.svg`
- Tesla logo（待补）
- Eureka Labs logo（待补）
- Anthropic logo：`assets/logos/anthropic.svg`
- Karpathy 头像（各视频工程自存）
- OpenAI 2015 创立公告截图（来源：openai.com/index/introducing-openai/ 页面，标注用）

---

## metaphor 表（视觉 = 语义扩展，HARD_CONSTRAINTS §12）

| 口播关键词 | 字面理解 | 语义扩展（要做的） |
|---|---|---|
| "一站一站来看" | 列清单 | 水平轨道时间线，头像小 icon 真的在"坐车"从左到右经过每一站，不是列表展开 |
| "OpenAI 创始成员" | 文字标签 | 创立公告截图浮出，光圈圈出 Karpathy 的名字——证据先行，不是告诉观众，是让观众自己看到 |
| "Tesla 五年" | 数字 5 | 时间线 Tesla 段在视觉上比其他段宽 2-3 倍，"时间被拉伸"——五年厚重感落在形状上，不落在数字上 |
| "又走了" / "一年整" | 时间短 | OpenAI v2 段时间线明显短，头像来了又迅速滑走，视觉上对比 Tesla 那段的"厚"，自然读出"没待多久" |
| "Eureka 暂停" | 停止符号 | Eureka 站 logo 带灰色 ⏸ 角标，不用红叉不用灰底——暂停是中间态，视觉语气要像"休假"不像"倒闭" |
| "Anthropic 新建子团队" | 加入公司 | Anthropic 站最大、橙光最亮——头像到了这站，从"坐车"变成"站起来，在站台上建了个新据点"；关键词卡里出现一个新的小方块 = 子团队 |

---

## 时长估算

口播正文：约 **310 字**
按 200 字/分钟 normal pace：约 **93 秒**
含时间线动效节拍停顿 + stagger 缓冲：约 **85-95 秒**（在 60-90s 范围内，略超上限约 5 秒）

> **注**：若要压回 90s 以内，可压缩以下段落：UBC 硕士段（可简化为一句带过）；OpenAI v1 Stanford 课细节（"150→750 学生"可改为"开了 CS231n"即止）。核心 8 站保留，数字细节适度省略。
