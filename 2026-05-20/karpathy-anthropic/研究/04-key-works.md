# Karpathy 代表作品表

> 数据采集时间：2026-05-20  
> Stars / 最近 commit 来源：GitHub API（实时，非训练数据回忆）  
> 置信度说明：高 = 多源一致权威 / 中 = 单源权威 / 低 = 推断

---

## 编程作品（GitHub）

### 1. nanoGPT

- **URL**: https://github.com/karpathy/nanoGPT
- **Stars**: 58.4k（GitHub API 实时）
- **最近 push**: 2025-11-12（Karpathy 在 README 更新注明"nanoGPT 已被 nanochat 取代，建议用 nanochat"）
- **一句话**: 用最简洁的代码训练 / 微调中等规模 GPT，全部逻辑就 train.py (~300行) + model.py (~300行)
- **视频可截图页面**:
  - README 顶部（标题 + 简介 + Nov 2025 deprecated 提示）
  - 文件树（`train.py` / `model.py` / `config/`）
  - README 内 baselines 表格（GPT-2 四个规格 loss 对比）
- **置信度**: 高

---

### 2. micrograd

- **URL**: https://github.com/karpathy/micrograd
- **Stars**: 15.9k（GitHub API 实时）
- **最近 push**: 2024-08-08（最后 commit 实际为 2020-04-18，push date 因 fork 同步有误差，commit 为 2020 年，repo 本身 frozen）
- **一句话**: ~150 行代码实现的最小自动微分引擎（标量反向传播 + 神经网络库），配套 Zero to Hero 第一讲
- **备注**: 这是 Karpathy 教学用的 "最小化 backprop 展示"，代码量极小但原理完整；最近 commit 日期 2020-04-18（历史冻结），不再更新
- **视频可截图页面**:
  - README：`gout.svg` 计算图可视化（每个节点显示数值 + 梯度，视觉效果好）
  - `moon_mlp.png`：决策边界图（2层神经网络分类结果）
  - 代码示例块（Value 对象链式运算 + `.backward()`）
- **置信度**: 高

---

### 3. makemore

- **URL**: https://github.com/karpathy/makemore
- **Stars**: 3.9k（GitHub API 实时）
- **最近 push**: 2024-06-04
- **一句话**: 字符级自回归语言模型，从 bigram 到 Transformer 全套实现，配套 Zero to Hero makemore 系列五讲
- **视频可截图页面**:
  - README：makemore 生成婴儿名字示例列表（`dontell / khylum / camatena ...`，视觉有趣）
  - 单文件 `makemore.py`（教学重点，1文件搞定）
- **置信度**: 高

---

### 4. llm.c

- **URL**: https://github.com/karpathy/llm.c
- **Stars**: 30.0k（GitHub API 实时）
- **最近 commit**: 2025-05-10（merge PR #801 fix test）；最近 push 2025-06-26
- **一句话**: 用纯 C / CUDA 训练 LLM，无 PyTorch 依赖，~1000行 C 代码实现 GPT-2 预训练，速度略超 PyTorch Nightly
- **备注**: 2024 年爆火项目，64 名贡献者，活跃社区；主文件 `train_gpt2.c` / `train_gpt2.cu`
- **视频可截图页面**:
  - 文件树（`.c` / `.cu` / Makefile / `dev/` / `scripts/`，纯 C 极简风格）
  - README 顶部（"LLMs in simple, pure C/CUDA with no need for 245MB of PyTorch"）
  - 64 contributors 头像墙（社区规模展示）
- **置信度**: 高

---

### 5. llama2.c

- **URL**: https://github.com/karpathy/llama2.c
- **Stars**: 19.5k（GitHub API 实时）
- **最近 push**: 2024-08-06
- **一句话**: 用 700 行 C 代码推理 Llama 2 模型，是 llm.c 的前身，Tiny Stories 数据集上可训练小型 LLM
- **视频可截图页面**:
  - `run.c`（700行纯 C 推理，教学性强）
  - README 中的模型表格（260K / 15M / 42M / 110M 参数对比 + val loss）
- **置信度**: 高

---

### 6. nanochat（最新旗舰项目）

- **URL**: https://github.com/karpathy/nanochat
- **Stars**: 53.7k（GitHub API 实时）
- **最近 commit**: 2026-05-05
- **一句话**: Karpathy 2025 年底发布的新旗舰——全栈 LLM 训练框架（预训练→SFT→RL→推理→ChatGPT-like UI），~$48 训练出 GPT-2 级别模型，含 autoresearch 功能
- **备注**: nanoGPT 的继任者，Karpathy 本人宣布"去 Anthropic 前最后一个大开源项目"；注意力力度极高（53.7k stars 仅 ~5个月），最近 leaderboard 记录到 2026-03-14
- **视频可截图页面**:
  - README leaderboard 表格（时间从 168小时→1.65小时的对比，视觉冲击强）
  - 文件树（`scripts/` 涵盖 base_train / chat_sft / chat_rl / chat_web）
  - README 顶部 nanochat logo + scaling laws 图
- **置信度**: 高

---

### 7. LLM101n（进行中课程）

- **URL**: https://github.com/karpathy/LLM101n
- **Stars**: 37.0k（GitHub API 实时）
- **最近 push**: 2024-08-01
- **一句话**: Karpathy 为 Eureka Labs 设计的配套课程 repo——从零构建 Storyteller LLM，Python + C + CUDA，目前仅 README + 大纲，课程本体尚在开发
- **备注**: repo 已设为 archived 状态（README 注明 "course does not yet exist, being developed by Eureka Labs"）；Eureka Labs 主站 eurekalabs.ai，无单独 EurekaLabsAI GitHub org 下的对应 repo（任务中提到的 `github.com/EurekaLabsAI` 搜索无此 org 的 LLM101n 版本，LLM101n 实际在 karpathy 个人账号下）
- **视频可截图页面**:
  - README 顶部大图（`llm101n.jpg`，课程 banner）
  - 课程大纲列表（Syllabus — 从 Bigram 到完整 Web App）
- **置信度**: 高（仅单源 GitHub，但内容一致且由 Karpathy 本人注明）

---

### 8. build-nanogpt（配套代码）

- **URL**: https://github.com/karpathy/build-nanogpt
- **Stars**: 待补（GitHub API 未专项查询）
- **最近 push**: 待补
- **一句话**: NN Zero to Hero 播放列表中"Let's reproduce GPT-2"视频的配套代码
- **置信度**: 中（web_map 拿到 repo 名，未专项抓取）

---

## 教学作品（YouTube + 课程网站）

### NN Zero to Hero（神经网络：从零到英雄）

- **课程主页**: https://karpathy.ai/zero-to-hero.html
- **YouTube 频道**: https://www.youtube.com/@AndrejKarpathy
- **播放列表参考 URL**: https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ（实际 URL 需用户自行核对，YouTube 未登录抓取受限）
- **视频数量**: 8 个（从 karpathy.ai/zero-to-hero.html 实时抓取确认）
- **内容概要**:
  1. micrograd：backpropagation 逐步推导（2h25m）
  2. makemore Part 1：bigram 语言模型 + torch.Tensor（1h57m）
  3. makemore Part 2：MLP（1h15m）
  4. makemore Part 3：Activations / Gradients / BatchNorm（1h55m）
  5. makemore Part 4：手动 backprop（1h55m）
  6. makemore Part 5：WaveNet 式深层网络（56m）
  7. Let's build GPT：从零构建 GPT（1h56m）
  8. Let's build the GPT Tokenizer：BPE tokenizer
- **视频可截图**: 各视频缩略图 / 播放列表封面
- **置信度**: 高（直接抓取 karpathy.ai 课程页面）

---

### CS231n（斯坦福深度学习课程）

- **课程网站**: https://cs231n.stanford.edu（Spring 2026 仍在运行，现任主讲为 Fei-Fei Li / Ehsan Adeli / Justin Johnson / Zane Durante / Tiange Luo）
- **课程 GitHub**: https://github.com/cs231n/cs231n.github.io
  - Stars: 10.9k（GitHub API 实时）
  - 最近 push: 2026-05-14（课程仍持续更新）
- **Karpathy 教学年份**: 2015–2016 年（Karpathy 在 Stanford 攻读博士 / Fei-Fei Li 课题组时担任主讲之一；2017 年加入 Tesla 后卸任，课程改由他人接棒）——此为推断，基于公开履历，仅单源
- **一句话**: Stanford 标志性深度学习课程（卷积神经网络 → 视觉识别），Karpathy 2015-2016 主讲期奠定其教学声誉
- **视频可截图页面**:
  - cs231n.stanford.edu 首页（Spring 2026 页面，课程 banner）
  - GitHub repo 文件树（notes / assignments 结构完整，持续更新）
- **置信度**: 中（Karpathy 主讲年份推断自公开履历，未找到独立的第二源交叉验证）

---

## 关键发现

### 最值得在视频里截图展示的 3 个 repo（按"火" + "代表性"排序）

1. **nanochat**（53.7k stars，2026-05-05 最近 commit）
   - 原因：Karpathy 在加入 Anthropic 前的最后一个大型开源项目，就是这周还在 commit，时效性最强；leaderboard 从 168h→1.65h 的视觉对比冲击力极大；截图点：README leaderboard 表格 + scaling laws 图

2. **nanoGPT**（58.4k stars，star 数最高）
   - 原因：Karpathy 最广为人知的 repo，star 数最高；README 的 Nov 2025 "deprecated" 提示配合 nanochat 一起用，形成"进化轨迹"叙事；截图点：README 顶部 + train.py / model.py 代码

3. **llm.c**（30.0k stars，2025 年爆火）
   - 原因：代表 Karpathy"极简主义 + 工程极致"风格，"无需 PyTorch，1000行 C"的口号易懂；截图点：文件树（一眼看出 .c 和 .cu 文件）+ README 第一行

---

## 额外项目（web_map 发现，未深挖）

| Repo | 说明 |
|---|---|
| `karpathy/build-nanogpt` | NN Zero to Hero GPT 复现配套代码 |
| `karpathy/lecun1989-repro` | 复现 LeCun 1989 年神经网络论文 |
| `karpathy/arxiv-sanity-lite` | arXiv 论文推荐工具 |
| `karpathy/llm-council` | 多模型议会式讨论实验 |
| `karpathy/reader3` | 2026 年新 repo，内容待补 |
| `karpathy/rendergit` | 2025-2026 年新 repo，内容待补 |

---

## 引用源清单

| 源 | 类型 | 用途 |
|---|---|---|
| `api.github.com/repos/karpathy/nanoGPT` | GitHub API（实时） | stars / push date |
| `api.github.com/repos/karpathy/micrograd` | GitHub API（实时） | stars / push date |
| `api.github.com/repos/karpathy/makemore` | GitHub API（实时） | stars / push date |
| `api.github.com/repos/karpathy/llm.c` | GitHub API（实时） | stars / push date |
| `api.github.com/repos/karpathy/llama2.c` | GitHub API（实时） | stars / push date |
| `api.github.com/repos/karpathy/nanochat` | GitHub API（实时） | stars / push date |
| `api.github.com/repos/karpathy/LLM101n` | GitHub API（实时） | stars / push date |
| `api.github.com/repos/cs231n/cs231n.github.io` | GitHub API（实时） | stars / push date |
| `github.com/karpathy/nanoGPT`（web fetch） | GitHub README | 内容 / 截图点 |
| `github.com/karpathy/micrograd`（web fetch） | GitHub README | 内容 / 截图点 |
| `github.com/karpathy/llm.c`（web fetch） | GitHub README | 内容 / 截图点 |
| `github.com/karpathy/nanochat`（web fetch） | GitHub README | 内容 / 截图点 |
| `github.com/karpathy/LLM101n`（web fetch） | GitHub README | 内容 / 截图点 |
| `karpathy.ai/zero-to-hero.html`（web fetch） | Karpathy 个人网站 | NN Zero to Hero 课程内容 / 视频列表 |
| `cs231n.stanford.edu`（web fetch） | Stanford 课程官网 | CS231n 现状 |
| `github.com/karpathy?tab=repositories`（web map） | GitHub 仓库列表 | 发现 nanochat / build-nanogpt 等新项目 |
