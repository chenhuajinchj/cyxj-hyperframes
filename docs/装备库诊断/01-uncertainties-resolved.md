# 装备库诊断 · 01 · 不确定项核实

> ⚠️ **[2026-05-06 DNA 已修订（深蓝→暖米），本节为诊断历史，原文保留]** —— 文中"DNA 推荐午夜深蓝 #0a1124"是当时规则。最新规则：教程类底色用 `#F7F2EA` 暖米色，其他形态按主题选。

> 接续 `diagnosis.md` + `gaps.md`（在对话历史，未落盘）
> 时间：2026-05-05
> 范围：4 个 ❓ + 2 条小核实
> 状态：仅诊断，未动任何现有装备文件

---

## ❓1 · cyxj-new-video vs make-a-video — **谁会被触发？**

### 两份 frontmatter description 直引

**cyxj-new-video**（仓库根 `.claude/skills/`，✍️ 自写）：
> "中文 YouTube 教程视频的全生命周期助手——建工程、推参考、协助渲染、归档、判断是否抽模板。当用户说「新视频」「做视频」「做个视频」「做新视频」「片头」「new video」「做完了」「归档」「这条做好了」「抽成模板」时触发。覆盖从「有想法」到「成品归档进参考库」+「可选抽模板」的全流程。"

**make-a-video**（软链 → student-kit/，🏛️ HF 官方）：
> "Beginner-friendly end-to-end video creator for HyperFrames. Use when the user says 'make a video', 'create a video', 'new video', 'build a video', 'video from scratch', 'I want to make a video', 'help me create a video', or when someone who's never used HyperFrames before arrives with a concept, script, or rough idea and wants a finished MP4. Interviews the user in one pass, then builds the full video with mandatory preview and visual-verification gates."

### 三场景判断

| 场景 | cyxj 匹配 | make 匹配 | 大概率调 | 理由 |
|---|---|---|---|---|
| A "做新视频" | ✅ 精准（在触发词列表）| ✅ 强匹配（"new video"）| **cyxj-new-video** | 中文触发词更具体；make 是英文表述 |
| B "做 HF 视频" | ❌ 无 | ✅ 匹配（HyperFrames + beginner）| **make-a-video** | 隐含"新用户第一次做"含义 |
| C "做 19 招那种 tutorial" | ✅ 匹配（"教程视频"定位）| ⚠️ 弱匹配（仅"concept"）| **cyxj-new-video** | C 指定 tutorial 类型，cyxj 的 tutorial-8beat 模板对口 |

### 结论

**⚠️ 重叠抢先**

两个 skill 在 A 场景下 description 都强匹配 "new video / 新视频" 触发词。CC 会**优先调 cyxj-new-video**（中文语境 + 触发词更具体），但 make-a-video 在 B 场景下会**抢先**（cyxj 没有"HF 视频"触发词）。

风险点：用户说"做 HF 视频"时会调上游 make-a-video，跳过自写工作流（归档 / 抽模板等）。

---

## ❓2 · cyxj-add-block vs hyperframes-registry — **关系定性**

### 功能对比

| 维度 | cyxj-add-block（✍️ 自写）| hyperframes-registry（🏛️ HF）|
|---|---|---|
| 核心动作 | 从 catalog **推荐** + 装零件 | 解释 `hyperframes add` 命令用法 |
| 触发词 | 「加个零件」「装个 X」「加个转场」（用户需求驱动）| `hyperframes add` / block / component / hyperframes.json（CLI 术语驱动）|
| 读 catalog.json | ✅ 读本地 `参考库/catalog.json` | ❌ 指向远程 GitHub registry |
| 含场景推荐逻辑 | ✅ 6 种场景分类（transition/social/outro/data-viz 等）| ❌ 仅说明安装机制 |
| 含避坑 | ✅ components vs blocks / transitions 套装陷阱 / 重复检查 / catalog 刷新 | ❌ 仅技术细节 |
| 读参考工程 | ✅ 读 `参考库/INDEX.md` 给出"哪个工程用过该零件"| ❌ |
| 项目特定逻辑 | ✅ 读用户的 `index.html` beats、建议插入位置、工程归档补 INDEX | ❌ |

### cyxj-add-block 独有的 5 层独立价值

1. **场景分类识别** —— 把自然语言（「像 Y 那样的效果」）映射到 catalog tags
2. **本地 catalog + 参考工程库** —— 读本地实际用例而不是查官方 GitHub
3. **工程级集成** —— 告诉用户在 beats 哪个位置引入 + 给最小可粘贴代码
4. **归档流程钩子** —— 记录"本工程用了哪些零件"到 INDEX.md
5. **多个避坑提示** —— components 全局叠加、transitions 套装、重复检查、catalog 刷新

### 结论

**🔄 包装但加了价值应保留**

cyxj-add-block 不是 hyperframes-registry 的中文翻译版。它是为中文工程师的实际工作加了 5 层包装（场景识别 → 本地库查询 → 实例推荐 → timeline 集成 → 工程归档），是工作流封装而非简单翻译。

---

## ❓3 · MOTION_PHILOSOPHY vs MY_VISUAL_DNA — **逐节内容比对**

### 各自定位

- **MOTION_PHILOSOPHY**（🏛️ Nate / 软链上游）：Infinite 商业 promo 的普适美学纪律（均衡、节奏、色彩象征、高级感）
- **MY_VISUAL_DNA**（✍️ 小陈）：个人视频的"非妥协 DNA"（午夜深蓝、Claude 橙必现、三件套纹理、特定字体栈）

### 维度比对

| 维度 | MOTION 怎么说 | DNA 怎么说 | 关系 |
|---|---|---|---|
| 底色 / 背景 | ~90% 纯黑或近黑 `#000/#0a0a0a`；黑是"画布" | 午夜深蓝 `#0a1124`；纯黑 `#000000` 不允许 | ⚠️ **冲突** |
| 色彩数量 | ≤5 活跃色，每色有象征意义 | 同（Claude 橙必现 + 可调 hot 色 × 1 + 品牌色） | ✅ 互补 |
| Chrome 渐变 | 白→灰→亮白 `#fff→#999→#ccc`，0.04s stagger | 白→灰白 `#fff→#c8d3e0→#e8ecf2`（略暖）；hot "白→橙"`#fff→#d97757` | 🤝 互补有补充 |
| Halo 光晕 | 白光 `text-shadow: 0 0 20/40px rgba(255,255,255,0.6/0.3)` | PiP 配 Claude 橙 halo `rgba(217,119,87,.45/.55)`；其他不提 | 🤝 互补 |
| PiP 真人头 | 不提 | 圆角 36px + 内描边 + Claude 橙外发光（必须）| ✅ DNA 填空 |
| 全屏纹理 | 透视网格 + 十字叉 + vignette + 颗粒（4 层）| 透视网格 + vignette + 颗粒（3 层，缺十字叉）| 🤝 互补 |
| **字体栈** | 单 sans-serif；**每 beat 换不同 Google Fonts**（Instrument/Space Grotesk/Bebas 等）| 固定三件套 Noto Sans SC + Inter + JetBrains Mono；**禁止换** | ⚠️ **冲突** |
| **入场 stagger 粒度** | **单词级** 0.35s/word | **字符级** 0.06-0.08s/char（快 5-6 倍）| ⚠️ **冲突** |
| 入场 ease | 词语：expo.out 0.33s；通用：power3.out / power2.out | 卡片：back.out(1.4)；字：power3.out；线：expo.out | 🤝 互补（DNA 补 back.out）|
| 节奏密度 | 平均场景 1.5s；新元素每 0.3-0.6s；无 1s+ 死气 | 不提（遵循 MOTION）| ✅ 互补 |
| 转场类型 | light-streak whip + flash-through-white 默认 | flash-through-white / blur-zoom 默认 | 🤝 互补 |
| Hold 时长 | logo ~2s；CTA ~5s；章节 1-1.5s；每 7-8s 给 1s 静止 | 不提（遵循 MOTION）| ✅ 互补 |
| Grain opacity | 超淡 0.03-0.015（"难以察觉"）| 0.10-0.12 + blend-mode overlay（"明显降塑料感"）| 🤝 差 1 个数量级 |

### 3 个直接冲突点

#### 冲突 1 · 底色

- **MOTION**: "~90% of every frame is black or near-black. Negative space is the design."
- **DNA**: "纯黑 `#000000` 不允许；午夜深蓝 `#0a1124` 推荐"

> 应以谁为准：商业 promo 跟 MOTION（黑）；XCYJ 个人系列跟 DNA（深蓝）

#### 冲突 2 · 字体栈管理

- **MOTION**: "Per-beat font discipline. Every beat uses a DIFFERENT Google-Fonts family"
- **DNA**: "不允许换：Noto Sans SC + Inter + JetBrains Mono。字体固定。"

> 应以谁为准：英文 promo 跟 MOTION；中英混合视频跟 DNA（中文不换字体更连贯）

#### 冲突 3 · 字符入场 stagger 粒度

- **MOTION**: 单词级 0.35s/word（英文自然单位）
- **DNA**: 字符级 0.06-0.08s/char（快 5-6 倍，支持中文）

> 应以谁为准：英文用 MOTION；中文用 DNA

### 结论

| 指标 | 值 |
|---|---|
| 直接冲突 | **3 个**（底色 / 字体 / stagger 粒度）|
| 有差异但兼容 | 1 个（grain opacity）|
| 完全互补 | 8 个 |
| 互补有补充 | 2 个 |

**整体判定**：定位清晰互补（MOTION = 普适纪律 / DNA = 个人偏好），不需合并。3 个冲突来自"商业 promo 英文" vs "个人教程中文"两条工程方向。

---

## ❓4 · CLAUDE.md ↔ AGENTS.md — **实际重复程度**

### diff 实测数据

| 指标 | 数 |
|---|---|
| CLAUDE.md 总行数 | 126 |
| AGENTS.md 总行数 | 145 |
| diff 输出行数 | 42 |
| 仅 CLAUDE.md 有 (`<`) | 5 行 |
| 仅 AGENTS.md 有 (`>`) | 24 行 |
| 共享内容 | ~121 行（CLAUDE.md 96%）|

### 重要反转

**AGENTS.md 不是 CLAUDE.md 的镜像，而是它的超集（+ Claude/Codex 边界规则）**。

**仅 AGENTS.md 有的关键内容**：
- 一节 "Claude / Codex 边界"（约 15 行）—— 明确两个 AI 的分工矩阵：读哪个指令、入哪个 skill 目录、改什么不改什么
- `.agents/skills/` 目录说明
- "用 Codex 而非 Claude Code" 的句式替换（4 处）

**仅 CLAUDE.md 有的关键内容**：
- 5 行（基本是"This file provides guidance to Claude Code..." 这类身份标识 + 数量描述差异）

我之前估"90%+ 重复"实测**接近 96% 内容相同**——但 AGENTS.md 反向多了"Claude/Codex 边界"这节，CLAUDE.md **缺**这节。

### 三个处理方案候选（仅列，不实施）

#### 方案 A · 一份原文 + 一份 symlink

- 把其中一个删了，做软链
- ❌ **不可行**：内容不对称（开头身份标识 + Codex 边界节都不同），同一份内容讲两个 AI 是矛盾的

#### 方案 B · 一份原文 + generator 脚本

- 写个 `scripts/sync-agent-docs.sh`：
  - 维护 `docs/SHARED.md`（共享部分）
  - 用 sed 替换占位符 `{AGENT_NAME}` / `{SKILL_DIR}` 生成 CLAUDE.md 和 AGENTS.md
- ✅ **可行**：内容单源，机械生成，不会漂移
- ⚠️ 代价：每次改文档要跑脚本；CI 钩子检查"两份文件是不是从 SHARED.md 同步"

#### 方案 C · 拆分共享 + 工具特定部分

- 共享部分写 `docs/HYPERFRAMES_WORKBENCH.md`（仓库结构 / 工作流 / 硬约束 / 维护节奏）
- `CLAUDE.md` 极简，只剩 Claude 专属部分（5-10 行）+ 引用 `@docs/HYPERFRAMES_WORKBENCH.md`
- `AGENTS.md` 同样极简，只剩 Codex 专属 + 同样引用
- ✅ **可行**：用 CLAUDE.md / AGENTS.md 的"include"机制（如果 Codex / Claude 都支持文件引用）
- ⚠️ 待确认：Codex 的 AGENTS.md 是否支持 `@<path>` 形式 include 共享文档

### 现状反推

AGENTS.md 多出来的"Claude / Codex 边界"那一节其实**也应该在 CLAUDE.md 里**——因为 Claude 也要知道"不要改 .agents/skills/"。当前 CLAUDE.md 缺这节是个实际漏洞。

---

## 小核实 1 · tutorial-8beat 是否在 INDEX.md

**结论**：✅ **已包含**，不漏。

证据（grep `参考库/INDEX.md`）：
- 第 203 行："## 五、模板（仓库根 `templates/`，4 个）"
- 第 212 行：tutorial-8beat 完整描述（"8 beat 教程，hook → pain-list → ... → outro，含 face FULL→PiP→FULL 时序..."）
- 第 216 行："⭐ tutorial-8beat 配套资产"

INDEX.md 数量描述与现实一致（4 个模板）。我之前在 diagnosis.md 标的"❓ 是否漏列"——**虚惊**。

---

## 小核实 2 · OFFICIAL_DOCS_VALUE_INDEX 行号一致性

**结论**：✅ **6/6 全部对得上**。

挑了 3 条最高价值（对应复盘 P1 / P2 / P6+P7）：

| # | INDEX 引用 | 镜像实际位置 | 对得上 |
|---|---|---|---|
| 1 | `prompting.md` 第 109 行 "Timing shorthand: fast/medium/slow" | `docs/hyperframes-official/guides/prompting.md` 第 114 行 | ✅ |
| 2 | `prompting.md` 第 110 行 "Caption Tone 表格" | 同上 第 120-126 行 | ✅ |
| 3 | `data-attributes.md` 第 230 行 "data-start='intro + 2'" | `concepts/data-attributes.md` 第 62-66 行 | ✅ |
| 4 | `cli.md` 第 301 行 "tts (Kokoro-82M)" | `packages/cli.md` 第 318-360 行 | ✅ |
| 5 | `cli.md` 第 302 行 "capture 抓视觉 token" | `packages/cli.md` 第 365-396 行 | ✅ |
| 6 | `cli.md` 第 303 行 "inspect 逐帧扫描溢出" | `packages/cli.md` 第 478-517 行 | ✅ |

INDEX 的 5-04 写作时间和镜像 5-03 同步时间几乎对齐，行号引用零漂移。

---

## 总结

| ❓ | 结论 | 含义 |
|---|---|---|
| **❓1** | ⚠️ 重叠抢先 | "做 HF 视频" 会调 make-a-video（跳过自写工作流），需消歧 |
| **❓2** | 🔄 包装但加了价值应保留 | cyxj-add-block 加了 5 层独立价值（场景识别/本地库/集成/归档/避坑） |
| **❓3** | 互补但 3 个具体冲突 | 底色 / 字体栈 / stagger 粒度——需要项目级声明优先级 |
| **❓4** | 96% 重复，但 AGENTS.md 反向是超集 | CLAUDE.md 缺"Claude/Codex 边界"节；建议方案 B 或 C |
| **小核实 1** | ✅ tutorial-8beat 在 INDEX | 不漏 |
| **小核实 2** | ✅ 行号 6/6 对得上 | INDEX 与 5-3 镜像同步零漂移 |

**关键反转**：
- ❓4：AGENTS.md 不是 CLAUDE.md 的复制品，是它的超集 → CLAUDE.md 反而该补 Codex 边界节
- 小核实 1：上次诊断的"❓ 是否漏列"是虚惊
