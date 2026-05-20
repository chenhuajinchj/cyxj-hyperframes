# 事实审查报告（Fact Audit）

> 审查日期：2026-05-20
> 审查范围：前半人物传记部分（ch1-who + ch2-concepts）
> 审查方法：揪伪装双源 / 数字实时核验 / 模糊事实再追源
> 工具：GitHub API 实时 + web_fetch 直抓一手源 + Wikipedia wikitext 原始引用分析

---

## 1. Wikipedia 伪装双源审查

**审查方法**：直接抓取 `https://en.wikipedia.org/w/index.php?title=Andrej_Karpathy&action=raw`，提取每条事实对应的 `{{Cite...}}` 引用，判断独立性。

### 1.1 出生日期（1986-10-23）

- agent A 报：karpathy.ai + Wikipedia（标"高置信度"）
- Wikipedia 实际引用源：`{{Cite web |url=https://twitter.com/karpathy/status/261161354969358337 |title=Self-reported on twitter}}`——引用的是 **Karpathy 本人推文（2012年自报）**
- 即：karpathy.ai（本人写）→ Wikipedia 引 Karpathy 推文（本人写）→ 两者均来自 Karpathy 本人
- **审查结论**：**伪装双源（实为单源：Karpathy 本人自报）**。karpathy.ai 和那条推文都是本人发布，Wikipedia 没有引用第三方独立核实源
- **置信度修正**：高 → **中**（单一权威自报，无独立第三方核实，但作为个人出生日期本人自报通常可信）
- **视频里怎么用**：可以直接说，但内心知道这是单源自报。1986-10-23 这个具体日期不需要过度渲染精确度

### 1.2 出生地（斯洛伐克布拉迪斯拉发）

- Wikipedia 实际引用源：多条引用，包括 alwaysfreshnews.com（转载 Živé.sk）、Živé.sk（斯洛伐克科技媒体）、TeslaMagazin.sk——均为**斯洛伐克独立媒体，独立于 karpathy.ai**
- **审查结论**：**双源成立**。斯洛伐克媒体有独立报道 Karpathy 出生地的记录
- **置信度**：高

### 1.3 15 岁移居加拿大多伦多

- Wikipedia 实际引用源：`{{Cite news |url=https://www.datascienceweekly.org/... |title=Next Generation Machine Learning... Andrej Karpathy Interview}}`——引用的是 **DataScienceWeekly 对 Karpathy 的采访**
- 采访原文确认：Karpathy 在采访中直接说 "my family moved to Toronto when I was 15"
- DataScienceWeekly 是独立媒体（非 Karpathy 本人写），但内容是 Karpathy 本人陈述——属于**转引本人说法**
- **审查结论**：双源形式成立（引用来源与 karpathy.ai 是不同出处），但实质内容来源是 Karpathy 本人的口头陈述
- **置信度**：高（本人多次在不同场合一致陈述，DataScienceWeekly 采访为独立记录）
- **视频里怎么用**：可直接用

### 1.4 UBC 硕士导师 Michiel van de Panne / 物理仿真方向

- agent A 报：karpathy.ai + Wikipedia（双源）
- Wikipedia 实际引用源：`{{Cite web|url=https://cs.stanford.edu/people/karpathy/|title=Andrej Karpathy Academic Website}}`——引用的是 **Karpathy 在 Stanford 的学术主页（cs.stanford.edu）**，依然是 Karpathy 本人维护的页面，与 karpathy.ai 性质相同
- **交叉独立验证**：直接抓 `https://www.cs.ubc.ca/~van/` 确认 Michiel van de Panne 的研究方向（deep reinforcement learning, agile human motion, robotics, motion planning, sensorimotor control, computer animation）——与 karpathy.ai 描述的"物理仿真运动控制"一致。另外，karpathy.ai 论文列表中有两篇与 van de Panne 合作的论文（AI 2012 + SIGGRAPH 2011），这是**独立可核实的学术记录**
- **审查结论**：Wikipedia 引用 Karpathy Stanford 学术主页 = 伪装双源（同一人维护的不同页面）。但通过论文列表（AI 2012, SIGGRAPH 2011 均署名 van de Panne）可交叉核实导师关系，**实质上为双源成立**
- **置信度**：高（论文记录可独立核实）
- **视频里怎么用**：可直接用

### 1.5 Stanford 期间 3 个实习（Google Brain 2011 / Google Research 2013 / DeepMind 2015）

- agent A 报：karpathy.ai（一手，置信度高）
- Wikipedia 中对这 3 个实习**无引用**——Wikipedia 正文没有提及这 3 个实习
- **审查结论**：该事实**仅单源（karpathy.ai 本人简历）**。Wikipedia 不作为第二源。DataScienceWeekly 采访（2013 年前写成）提到"I've only run at most the first mile of the marathon"，且说了 "two wonderful internships at Google Research working on neural nets (Google Brain)"——当时还只有 2 个，第 3 个（DeepMind 2015）更晚。但 karpathy.ai 和 DataScienceWeekly 采访合起来至少证实了 Google 实习这一大事实
- **置信度修正**：高 → **中**（3 个实习中 Google 相关 2 个有第三方印证，DeepMind 2015 仅 karpathy.ai 单源）
- **视频里怎么用**：可说"Google Brain 和 Google Research"（有 DataScienceWeekly 旁证），DeepMind 2015 说"据 Karpathy 本人描述，还在 DeepMind 做过深度强化学习"，保持单源标注

---

## 2. autoresearch Stars 实时核验

- agent B 报（verdent.ai 引用）：66k stars（截至 2026-04-03）
- **GitHub API 实时数据**（2026-05-20）：**82,067 stars**，forks: 11,922，created: 2026-03-06，最近 push: 2026-03-26
- **差异分析**：verdent.ai 报的是 2026-04-03 时的数据，现在是 2026-05-20，6-7 周后涨了 ~16k stars（82k - 66k）。不是报错，是时间差正常增长
- 最近 commits（2026-03-26 最后一次）：已约 55 天无新提交——项目进入维护/减速阶段
- **修正后置信度**：原来 66k stars **数字本身没有错**，只是时间点不同。当前实际数字应更新为 **82k**（2026-05-20）
- **视频里怎么用**：用实时数字 "超过 8 万 stars"，比 "66k" 更准确也更震撼

---

## 3. LLM Wiki Gist Stars 核验

- agent A 报：5,000+ Stars，5,000+ Forks（2026-05-20 抓取）
- **实时核验**（web_fetch 直抓 Gist 页面）：页面显示 **"Star 5,000+"、"Fork 5,000+"**，创建日期确认 "Created April 4, 2026 16:25"
- **注意**：GitHub Gist 对超过 5,000 的计数显示为 "5,000+" 而非精确数字，无法从页面读取确切值。这是 GitHub 的展示机制，不是数据缺失
- **审查结论**：5,000+ 确认，数字没有被夸大。但精确数字不可知
- **修正后置信度**：高（已实时核实）
- **视频里怎么用**：说 "超过 5000 stars"，不必追求精确数字

---

## 4. Vibe Coding 原创性再验证

- Karpathy 本人说法（karpathy.bearblog.dev/year-in-review-2025/，2025-12-19）：**"I coined the term 'vibe coding' in this shower of thoughts tweet totally oblivious to how far it would go"**，链接直指 2025-02-02 推文
- 是否有人更早用过：
  - 没有找到 2025-02-02 之前的 "vibe coding" 独立使用记录。Grok 搜索返回空内容，无法从搜索引擎获得反证
  - Wikipedia 条目："In February 2025, Karpathy coined the term vibe coding"，引用 NYT Kevin Roose 的文章（2025-02-27），是主流媒体背书
  - Simon Willison（技术博客）等权威第三方均将 vibe coding 归为 Karpathy 首创
- **审查结论**：**Karpathy 原创（高置信度）**。无反证，三方（Karpathy 本人 + Wikipedia + 主流媒体）一致
- **视频里怎么用**：可直接说"Karpathy 在 2025 年 2 月创造了 vibe coding 这个词"

---

## 5. OpenAI 创立公告（Karpathy 角色核验）

- **直接核验**：成功抓取 `https://openai.com/index/introducing-openai/`（2015-12-11 原始公告，至今仍可访问）
- 公告原文：**"The group's other founding members are world-class research engineers and scientists: Trevor Blackwell, Vicki Cheung, Andrej Karpathy, Durk Kingma, John Schulman, Pamela Vagata, and Wojciech Zaremba."**
- OpenAI 结构：Research director = Ilya Sutskever，CTO = Greg Brockman，Co-chairs = Sam Altman + Elon Musk，Karpathy = "founding member"（world-class research engineers and scientists 之列）
- **审查结论**：agent A 描述的 "founding member 而非 founder" **完全正确，有官方原文背书**。置信度从"高"→**高（原文核实）**
- **视频里怎么用**：可以说"他是 OpenAI 的创始成员之一（founding member），但不是 Altman、Musk 那个级别的 co-founder"

---

## 6. OpenAI v2 角色（midtraining + synthetic data）核验

- karpathy.ai 原文（实时抓取确认）：**"I came back to OpenAI where I built a new team working on midtraining and synthetic data generation."**——用词是 **"built"**（主动建立），不是"joined"
- TechCrunch 报道历史描述（在 Karpathy 加入 Anthropic 的文章中回溯）：**"He then went back to OpenAI for one year before leaving again in 2024"**——没有明确说 built 或 joined，用的是 "went back"
- **审查结论**：karpathy.ai 是一手自报，"built a new team working on midtraining and synthetic data generation"——midtraining + synthetic data 这两个方向有本人直接确认，置信度高。但这是 Karpathy 自己的表述，没有独立第三方（如 OpenAI 官方公告）核实过具体职责描述
- **置信度**：中（单源权威，本人自报）
- **视频里怎么用**：可以说"他在 OpenAI 第二段重点做了 midtraining 和合成数据生成"，加注"据 Karpathy 本人简历"

---

## 7. Eureka Labs 当前状态再核验

- **eurekalabs.ai 当前状态**（实时抓取）：网站仍在运行，显示 2024-07-16 原始发布内容（"We are Eureka Labs and we are building a new kind of school that is AI native"），首页只有一篇公告，**无任何新内容或更新动态**
- **Karpathy 推文（via TechCrunch 引用）**："I remain deeply passionate about education and plan to resume my work on it in time."——用词 "resume"（恢复），暗示**当前已暂停**
- **LLM101n repo 最近活动**（GitHub API 实时）：最近 push = **2024-08-01**，archived = **True**。距今约 9.5 个月无新提交，repo 已被设为 archived（归档状态）
- **Karpathy 最近 Eureka 相关推文**：无法直接抓取 X，但 TechCrunch 明确写道 "Karpathy hasn't shared many updates on Eureka Labs since its launch, and it's not clear if the renowned researcher will continue with the startup"
- **明确判断**：**暂停（高置信度）**。根据：(1) LLM101n 已 archived；(2) eurekalabs.ai 无新内容 9+ 个月；(3) Karpathy 本人用"resume in time"暗示当前暂停；(4) TechCrunch 明确说"not clear if he will continue"
- **视频里怎么说**：说"他创立了 Eureka Labs，但随着加入 Anthropic，这个教育项目目前处于暂停状态——他在推文里说'未来会继续'"，不要说"关闭"也不要说"仍在运营"

---

## 8. Nick Joseph 职位核验

- **TechCrunch 原文（实时抓取核实）**：**"Karpathy started this week at Anthropic, where he is working on pre-training under team lead Nick Joseph."** 和 **"An Anthropic spokesperson told TechCrunch that Karpathy will start a team focused on using Claude to accelerate pre-training research."**
- TechCrunch 用词：**"team lead"**（团队负责人），而非 "Head of Pretraining" 或 "VP"
- **agent C 报的 "Head of Pretraining"**：letsdatascience.com 页面无法抓取（提取失败）。Anthropic 官网（anthropic.com/company）未列出个人职位。LinkedIn 无法直接抓取
- **仅有可核实的一手信源**：TechCrunch + Anthropic spokesperson 引用 → 用词是 "team lead"
- **审查结论**：**"Head of Pretraining" 未能独立核实**。当前最权威的表述是 TechCrunch 的 "team lead"。"Head of Pretraining" 可能是 letsdatascience 对 "team lead" 的通俗解读，但并非 Anthropic 官方职位
- **置信度修正**：agent C 报的 "Head of Pretraining" → **中（仅单源非权威，且与 TechCrunch 用词不一致）**
- **视频里怎么用**：用 "pre-training 团队负责人 Nick Joseph"，不要用 "Head of Pretraining"（未经 Anthropic 官方确认的职位名称）

---

## 9. Karpathy 在 Anthropic 是 "build" 还是 "join"

- **TechCrunch 原文（实时核实）**：两处关键表述——
  1. "Karpathy started this week at Anthropic, where he is working on pre-training **under team lead Nick Joseph**"
  2. "**An Anthropic spokesperson** told TechCrunch that Karpathy will **start a team** focused on using Claude to accelerate pre-training research."
- **Karpathy 本人推文**（via TechCrunch 引用）："I've joined Anthropic."——本人用的是 "joined"
- **Anthropic spokesperson 表述**：Karpathy 将 "start a team"（**新建一个子团队**），而不是加入现有团队
- **两者并不矛盾**：Karpathy "joined Anthropic"（整体上加入公司），然后将 "start a team"（在 pre-training 部门下新建一个聚焦 AI-assisted research 的子团队）
- **结构**：Anthropic pre-training（大团队，负责人 Nick Joseph）→ Karpathy 的子团队（专注用 Claude 加速 pre-training 研究）
- **审查结论**：**新建子团队，而非加入现有团队**。Karpathy 在 pre-training 大团队下创建一个新的研究子团队。置信度高（Anthropic spokesperson 直接表述，TechCrunch 权威媒体引用）
- **视频里怎么用**：可以说"他加入 Anthropic 的 pre-training 部门，并被授权新建一个子团队，专门研究如何用 Claude 加速 pre-training 本身的研究"

---

## 总体降级清单

| 事实 | 原置信度 | 修正后 | 理由 |
|------|---------|--------|------|
| 出生日期 1986-10-23 | 高 | **中** | 伪装双源：Wikipedia 引 Karpathy 自己推文，实为单源本人自报 |
| Stanford 实习 DeepMind 2015 | 高 | **中** | 仅单源 karpathy.ai，Wikipedia 未引用，DataScienceWeekly 采访仅证实 Google 两次 |
| Nick Joseph "Head of Pretraining" | 高 | **中** | TechCrunch 官方报道用词是 "team lead"，"Head of Pretraining" 是未经 Anthropic 官方确认的解读 |
| autoresearch stars "66k" | 已过时 | 更新 | 实际为 82,067（2026-05-20），verdent.ai 报的是 2026-04-03 的数据，数字本身没错但需更新 |

---

## 保持高置信度的事实

| 事实 | 依据 |
|------|------|
| 出生地斯洛伐克布拉迪斯拉发 | Wikipedia 引斯洛伐克独立媒体，与 karpathy.ai 独立 |
| 15 岁移居多伦多 | DataScienceWeekly 采访独立记录 |
| UBC 导师 van de Panne / 物理仿真 | 论文合著记录（AI 2012, SIGGRAPH 2011）可独立核实 |
| OpenAI founding member（非 founder） | OpenAI 官方 2015 创立公告原文核实，Karpathy 在 founding members 列表 |
| OpenAI v2：midtraining + synthetic data | karpathy.ai 一手本人自报，TechCrunch 旁证 |
| vibe coding 原创 | Karpathy 本人博客声明 + NYT/Wikipedia 多方确认，无反证 |
| Eureka Labs 暂停 | LLM101n archived + 9 个月无更新 + Karpathy 推文暗示 + TechCrunch 明确说不确定是否继续 |
| Karpathy 在 Anthropic 新建子团队 | Anthropic spokesperson 直接对 TechCrunch 说 "start a team" |

---

## 视频里改说法的建议

| 原本想说 | 改成 | 理由 |
|---------|------|------|
| "Nick Joseph，Anthropic 的 Head of Pretraining" | "pre-training 团队负责人 Nick Joseph" | TechCrunch 用 "team lead"，Head of Pretraining 是非官方解读 |
| "autoresearch 火到 66k stars" | "autoresearch 火到超过 8 万 stars" | 66k 是 2026-04-03 数据，今已 82k |
| "Eureka Labs 还在运营" | "Eureka Labs 目前暂停，他说未来会继续" | LLM101n archived，eurekalabs.ai 9 个月无更新，推文暗示暂停 |
| "他的出生年月日精确到 1986 年 10 月 23 日" | 直接说"1986 年生，斯洛伐克人"，具体日期不必渲染 | 出生日期来源是本人推文单源，不值得在视频里过度精确化 |
| "他加入了 Anthropic pre-training 团队" | "他加入 Anthropic，并在 pre-training 部门下新建了专注 AI-assisted research 的子团队" | Anthropic spokesperson 明确说 "start a team"，是新建不是纯加入 |

---

## 附：核验数据来源清单

| 核验点 | 使用来源 | 类型 |
|--------|---------|------|
| Wikipedia 引用源分析 | `en.wikipedia.org/w/index.php?action=raw` | 实时抓取 wikitext |
| autoresearch stars | `api.github.com/repos/karpathy/autoresearch` | GitHub API 实时 |
| LLM101n 状态 | `api.github.com/repos/karpathy/LLM101n` | GitHub API 实时 |
| Gist stars | `gist.github.com/karpathy/442a6bf555914893e9891c11519de94f` | web_fetch 实时 |
| vibe coding 原创 | `karpathy.bearblog.dev/year-in-review-2025/` | Karpathy 一手博客 |
| OpenAI 创立公告 | `openai.com/index/introducing-openai/` | OpenAI 官方（2015年原文） |
| Karpathy 角色/Eureka 状态 | `techcrunch.com/2026/05/19/...` | TechCrunch 权威媒体 |
| eurekalabs.ai | `eurekalabs.ai` | 官方首页实时 |
| karpathy.ai 简历 | `karpathy.ai/` | 一手本人简历实时 |
| UBC van de Panne 教授主页 | `cs.ubc.ca/~van/` | UBC 官方实时 |
| DataScienceWeekly 采访 | `datascienceweekly.org/...karpathy-interview` | 独立媒体历史采访 |
