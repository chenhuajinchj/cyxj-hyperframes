# PROJECT-STATE — karpathy-anthropic 整片状态

> **新对话切过来必读这份文档**。先读本文件再动手任何工作。
> 本文件是项目状态单源，任何 PLAN / commit / 工程改动后都要同步更新这里。

---

## 1. 真源声明（不可变）

- **唯一权威真源**：`字幕/加入之后.srt`
  - 21:32 完整视频，450 条字幕，已嵌入时间码
  - 用户录完口播后从达芬奇导出的逐字稿
  - **任何视觉设计 / 文稿拆分 / 节奏规划都必须以这份字幕为锚**

- **已作废、不得引用**：曾经存在过的 `文稿/` 目录下所有 `*.md`（00-outline、ch0-ch7、全片合并稿）
  - 这些是**录前预备稿**，已被实际口播推翻
  - 实际录的口播 vs 录前预备：Ch2 简化、Ch6 拆 3 个预测、加了 Ch5 merge / Ch6 汇流等新结构
  - 2026-05-21 commit 已 git rm，git history 可查但不要复用其设计

- **仍有效的全片纪律**：
  - `STYLE_BRIEF.md` — DNA 红线 + 防带跑（保留）
  - `术语对照表.md` — 英文术语读法纪律（保留，已从 文稿/ 移到工程根）
  - `研究/01-05` — 事实研究（可作引语佐证，**不作视觉骨架来源**）
  - `图片用户收集/` + `assets/` — 用户原图 + logos / portraits / tweets
  - 仓库根 `MY_VISUAL_DNA.md` / `MY_MOTION_NOTES.md` / `docs/HARD_CONSTRAINTS.md`

---

## 2. 整片拓扑（方案 B · 19-tips 同款）

**一个 hyperframes 工程，所有章作为 sub-composition，一次 render 出整片 mp4。**

- `index.html` = 21:32 (1292s) root，1920×1080，30fps
- `compositions/ch{N}-*.html` = 每章 1 个 sub-composition
- 全局四件套（grid / vignette / grain / crosshair）+ DNA token 全片共享
- 达芬奇里只导入这 1 个整片 mp4 + 加你的口播 + 加你的字幕轨

**为什么不是 11 个独立工程**（前期走过的弯路）：
- token / 全局四件套 / 字体 fallback 不共享 → 章间有"重置感"
- 失去 hyperframes 内 shader transition 可能
- 没有"全片贯穿元素"的位置
- 19-tips 9 分钟 / 21 章已实战验证方案 B 拓扑

---

## 3. 11 段拆分表（字幕节奏定的，非旧 outline）

| 章 | 时间 | 字幕条 | 时长 | 主题 | 状态 | Commit |
|---|---|---|---|---|---|---|
| ch0 cold-open | 0:00-0:38 | 1-11 | 38s | OpenAI 创始成员→对手 + 数据反超 + 三连问 | 🟡 v2 完成待审计 | `e6e2f21` |
| ch1 人物 | 0:38-2:30 | 12-46 | 112s | Karpathy 是谁 / 李飞飞 / CS231N / 4 段履历 / Eureka | ⬜ todo | — |
| ch2 概念 | 2:30-3:50 | 47-71 | 80s | vibe coding + LLM Wiki = "让模型用得更好" | ⬜ todo | — |
| ch3 momentum | 3:50-5:21 | 72-103 | 91s | A 社采纳率 0.003%→7.94%→34.4% + 5.4 联手黑石/高盛 | ⬜ todo | — |
| ch4 wrapper | 5:21-8:42 | 104-176 | 200s | 套壳从贬义到产品 + 洋葱图 + 主持稿例子 | ⬜ todo | — |
| ch5 merge | 8:42-11:14 | 178-230 | 152s | 卡帕西用 Agent 训模型 + Anthropic 创始团队来自 OpenAI | ⬜ todo | — |
| ch6 汇流 | 11:14-14:00 | 231-309 | 167s | 三组对位（Wiki↔Memory / vibe↔CC / Eureka↔Academy）殊途同归 | ⬜ todo | — |
| ch7-1 预测 1 | 14:00-16:00 | 310-340 | 120s | 上下文集市（skill+工作流+评测打包） | ⬜ todo | — |
| ch7-2 预测 2 | 16:00-17:37 | 341-372 | 97s | Goal 风格命令（从"做这一步"到"达成这状态"） | ⬜ todo | — |
| ch7-3 预测 3 | 17:37-19:24 | 373-417 | 107s | 非开发者打包工具（自媒体人脑里的判断打包共享） | ⬜ todo | — |
| ch8 outro | 19:24-21:32 | 418-450 | 128s | 套壳是产品 + Antigravity 2.0 砍 IDE + 北京交流 | ⬜ todo | — |

**总时长**：1292s = 21:32 ✓

**状态图例**：⬜ todo / 🟡 进行中或待审计 / 🟢 完成 / 🔴 阻塞

---

## 4. 项目级硬约束

### 制作流程（每章必走）

1. **只读字幕该章对应条数**，不读旧文稿
2. 写 `PLAN-ch{N}.md`：字幕条对应表 + 视觉骨架 + 组件复用
3. PLAN 跟用户对齐后才动工程
4. 写 `compositions/ch{N}-*.html`
5. 在 `index.html` 加挂载（`data-composition-src` + `data-start` + `data-duration`）
6. `npx hyperframes lint` 0 errors（73 warnings 误报可忽略，docs/HARD_CONSTRAINTS.md §9）
7. `npx hyperframes validate` 0 contrast warnings
8. preview 浏览器审 / 自审截图（用 `/api/projects/.../thumbnail/index.html?t=N` 端点）
9. 用户审 preview 通过 → **立即 commit**（不等整片完成）
10. 更新 PROJECT-STATE.md 表格状态 + commit hash

### 视觉约束（DNA 红线）

- 米色底 `#F7F2EA`，Claude 橙 `#d97757` 必现
- 米色底文字色降亮：橙→`#B5563D` 或 `#9A4634`、深红→`#8b3d28`、棕→`#5A4F46`（N17）
- chrome 大字 8-stop 渐变（米色暖版，hot 词 Claude 橙渐变）
- 字体硬编码 `"Noto Sans SC", "Inter", ...` 不用 CSS var（N15）
- 全局四件套不准移除
- 章末禁 exit 动画（N18，最后 ch8 outro 例外）
- 字幕轨**不在 hyperframes 里做**，用户在达芬奇加

### 翻车经验（必读）

完整版 `docs/HARD_CONSTRAINTS.md`。重点：
- N9 selector 必须 `[data-composition-id="X"]` 不用 `#X`（bundler strip wrapper）
- N13 `<img src="...svg">` + CSS color 不生效，要 inline svg 或 hardcode fill
- N14 GSAP transform 覆盖 CSS `translate(-50%,-50%)`，用 flex 居中或 `xPercent/yPercent: -50`
- N15 字体 var 编译丢失，硬编码字体名
- N17 米色底文字色 contrast 不够，用深色 variant
- N18 SEC/章末禁 exit 动画，最后一段例外
- N19 commit 节奏：一段 preview 通过 → 立即 commit

---

## 5. 工程目录速查

```
2026-05-20/karpathy-anthropic/
├── PROJECT-STATE.md            ← 本文件，新对话必读
├── 字幕/加入之后.srt           ← 真源，所有视觉的锚
├── STYLE_BRIEF.md              ← DNA 红线（全片有效）
├── 术语对照表.md               ← 英文术语读法（全片有效）
├── PLAN-cold-open.md           ← ch0 的 PLAN（已审计待补完）
├── meta.json + hyperframes.json
├── index.html                  ← 1292s root，挂载所有章
├── compositions/
│   ├── ch0-cold-open.html      ← 已做（含 5 SEC 内层 wrapper）
│   └── （ch1-ch8 待做）
├── assets/                     ← logos / portraits / tweets / xcyj-tokens.css
├── 图片用户收集/               ← 用户原图（hero + tweet）
├── 研究/                       ← 事实研究（不作视觉骨架来源）
├── debug-shots/                ← gitignore，preview 截图存这
└── renders/                    ← gitignore，渲染 mp4 存这
```

---

## 6. 新对话切过来操作清单

1. `Read PROJECT-STATE.md`（本文件）
2. `Read 字幕/加入之后.srt`（真源）
3. `Read STYLE_BRIEF.md` + `MY_VISUAL_DNA.md`（DNA）
4. `git log --oneline -15` 看 commit 历史
5. 看本文件第 3 节"状态"列，找最近一个 ⬜ todo 章节
6. **不要**读 git history 里 git rm 的 `文稿/*.md`（已作废）
7. 写 `PLAN-ch{N}.md` 基于字幕该章条数
8. 跟用户对齐 PLAN 后才动工程
9. 用 hyperframes thumbnail API 自审（`http://localhost:3002/api/projects/karpathy-anthropic/thumbnail/index.html?t=N`）
10. 用户审过 → commit → 更新本文件状态

---

## 7. 风险点 / 注意

- **ch7 一段太长拆 3**：原 14:00-19:24 是单个"3 个预测"段（5:24），按字幕自然停顿拆 ch7-1/2/3，每段 1.5-2 分钟
- **ch4 wrapper 最长**（200s）：洋葱图 + 主持稿例子 + 4 层结构，可能需要内部拆 scene
- **ch6 汇流是叙事高潮**（167s）：三组对位 + 殊途同归，视觉一致性要求最高
- **ch1 人物履历**（112s）：4 段履历 + Eureka，时间线列车 / 站点比喻是合理切入
- 全片有 11 个 sub-composition，HARD §9 提到 13 个会让 Chrome renderer 涨到 12GB —— preview 时注意，render 不会有这个问题

---

## 8. 修订日志

- **2026-05-21**：建立本文件。字幕作为真源拷入工程目录。旧 `文稿/` 全部 git rm（保留 git history 可查）。术语对照表从 文稿/ 移到工程根。
- ch0 已完成 v1（commit `fc45a93`，方案 A 拓扑）+ v2（commit `e6e2f21`，方案 B 拓扑，5 SEC 合并）。**v2 仍待审计**（字幕对位）。
