---
name: 本次会话改动 review 清单
description: 2026-05-06 装备库盘点第 2+3 批所有 commit 的文件级清单，照着打开 review 用
type: project
date: 2026-05-06
---

# 03 · 本次会话改动 review 清单

> 涵盖：第 2 批（A14/A7/A3/A13/A6/A11）+ 第 3 批（A8/A9/A10）+ 进度更新（d97a269）。
> commit 范围：`d4ab82b..HEAD`（10 commits，14 个文件，+1172/-79 行）。
>
> review 用法：每条 commit 列了"文件路径 + 性质 + 一句话改了啥"。性质标 🆕 = 新建 / ✏️ = 改动。直接打开你想 review 的文件即可。

---

## 总览

| Commit | Action | 性质 | 行数 |
|---|---|---|---|
| 3989cb9 | A14 README 改"四个模板" | ✏️ 1 文件 | +8 -4 |
| 0ee2ac3 | A7 CLAUDE.md 加 Claude/Codex 边界节 | ✏️ 1 文件 | +18 -1 |
| 6396cdb | A3 cyxj-new-video 加 URL 早分流 | ✏️ 1 文件 | +9 |
| 3852e45 | A13 INDEX 模板节加"对应 DNA 形态"列 | ✏️ 1 文件 | +6 -6 |
| 5edf40e | A6 三个老模板补 README | 🆕 3 文件 | +343 |
| 479d737 | A11 cyxj-new-video 加模板选择决策树 | ✏️ 1 文件 | +32 -6 |
| 0793253 | A8 硬约束单源化 | 🆕 1 + ✏️ 9 文件 | +153 -42 |
| 71cf183 | A9 零件回填脚本 + INDEX | 🆕 1 + ✏️ 1 文件 | +154 -6 |
| de03980 | A10 扫剩 35 页 catalog | ✏️ 1 文件 | +434 |
| d97a269 | 02-actions.md 标完成状态 | ✏️ 1 文件 | +20 -19 |

净增装备：**3 个新文件**（HARD_CONSTRAINTS / refresh-zero-usage / OFFICIAL_DOCS_VALUE_INDEX 是补扫）+ **3 个新 README** + **9 个文件改动**。

---

## 新建文件清单（先 review 这些）

| 路径 | 行数 | 干啥用 |
|---|---|---|
| [`docs/HARD_CONSTRAINTS.md`](../HARD_CONSTRAINTS.md) | 109 | **8 条硬约束的单源**。改任何一条只改这一处。 |
| [`docs/OFFICIAL_DOCS_VALUE_INDEX.md`](../OFFICIAL_DOCS_VALUE_INDEX.md) | 434 | 78 页官方文档的 ⭐ 分级（72/78 已扫，6 边缘跳过）。本次新增 35 行 catalog 评分。 |
| [`scripts/refresh-zero-usage.sh`](../../scripts/refresh-zero-usage.sh) | 123 | 自动扫 19 工程的 catalog 零件用量，回填 INDEX 第 141 节。 |
| [`templates/host-overlay/README.md`](../../templates/host-overlay/README.md) | 99 | host-overlay 模板的复用说明（适用场景 / 4 beat / 占位符 / 输出）。 |
| [`templates/host-overlay-alpha/README.md`](../../templates/host-overlay-alpha/README.md) | 138 | alpha 变体说明，含 **8 步达芬奇合成实操**。 |
| [`templates/demo-fullscreen/README.md`](../../templates/demo-fullscreen/README.md) | 108 | 7 beat 全屏叙事说明，含中文 Lottie 达芬奇 21 警示。 |

---

## 改动文件清单

### 1. 仓库根 4 个文件

| 文件 | 改了哪里 | commit |
|---|---|---|
| [`README.md`](../../README.md) | "三个模板" → "四个模板"（加 tutorial-8beat 行）+ "已知坑"节简表化指向 HARD_CONSTRAINTS | 3989cb9 + 0793253 |
| [`CLAUDE.md`](../../CLAUDE.md) | 加 "## Claude / Codex 边界" 节 + 模板树/速查表加 tutorial-8beat 和 components/cc-window + 硬约束节简表化 | 0ee2ac3 + 0793253 |
| [`AGENTS.md`](../../AGENTS.md) | 硬约束节简表化指向 HARD_CONSTRAINTS（边界节本来就在） | 0793253 |
| [`TEMPLATE_USAGE.md`](../../TEMPLATE_USAGE.md) | 常见坑节通用 4 条移走，留模板特有 2 条（typewriter selector 失效 + commit 工程 rsync） | 0793253 |

### 2. cyxj-new-video skill（核心入口）

文件：[`.claude/skills/cyxj-new-video/SKILL.md`](../../.claude/skills/cyxj-new-video/SKILL.md)

3 次连续修订，本次会话累计 +49 行 -7 行：

- **6396cdb**：阶段 A 顶部加 **A0. URL 输入早分流**（用户给 URL → 移交 /website-to-hyperframes 跑前 5 步再回流）
- **479d737**：A0 和 A1 之间加 **A0.5 模板选择决策树**（3 个 yes/no 分支覆盖 4 模板 + 9:16 早出口）+ A1 第 1 题选项重排（9:16 在最前作为早出口）
- **0793253**：硬约束 6 条简版 → 1 段链接到 docs/HARD_CONSTRAINTS.md（"严格遵守"那段）

### 3. 参考库 INDEX.md

文件：[`参考库/INDEX.md`](../../参考库/INDEX.md)

- **3852e45**：第 5 节模板表加"对应 DNA 形态"列（暖米色 vs 自由）
- **71cf183**：第 141 节"真实工程里用过哪些零件"从手动 4 行 → `<!-- AUTO:zero-usage -->` 标记 + 19 工程自动扫描结果（hyperframes-sizzle 用了 23 个零件）

### 4. tutorial-8beat README

文件：[`templates/tutorial-8beat/README.md`](../../templates/tutorial-8beat/README.md)

- **0793253**：第 66 行硬约束句尾加 HARD_CONSTRAINTS.md 链接（其他内容没动）

### 5. 装备库诊断本身

文件：[`docs/装备库诊断/02-actions.md`](./02-actions.md)

- **d97a269**：优先级总表加"状态"列，13 个 ✅ 标 commit hash，2 个 ⏳ 标被动等待

---

## 按"读哪种文档进入"分类

### 想 review 流程逻辑（skill 的决策能不能用）
1. [`.claude/skills/cyxj-new-video/SKILL.md`](../../.claude/skills/cyxj-new-video/SKILL.md) — 走一遍 A0 → A0.5 → A1 → A2 → A6（DNA 自检）
2. [`参考库/INDEX.md`](../../参考库/INDEX.md) 第 5 节模板表 + 第 141 节零件用量

### 想 review 模板 README 写得对不对
4 个并排打开看一致性：
- [`templates/tutorial-8beat/README.md`](../../templates/tutorial-8beat/README.md)（蓝本，本次只加链接）
- [`templates/host-overlay/README.md`](../../templates/host-overlay/README.md)（新写）
- [`templates/host-overlay-alpha/README.md`](../../templates/host-overlay-alpha/README.md)（新写，含达芬奇 8 步）
- [`templates/demo-fullscreen/README.md`](../../templates/demo-fullscreen/README.md)（新写）

### 想 review 硬约束单源化是否到位
1. [`docs/HARD_CONSTRAINTS.md`](../HARD_CONSTRAINTS.md) — 8 条权威源
2. 看 9 处链接全部指向它（CLAUDE.md / AGENTS.md / README.md / TEMPLATE_USAGE.md / SKILL.md / 4 个模板 README）

### 想 review 自动化脚本能不能用
1. [`scripts/refresh-zero-usage.sh`](../../scripts/refresh-zero-usage.sh) — 读懂逻辑
2. 跑：`bash scripts/refresh-zero-usage.sh`（不带 --write 只打印）→ 看结果对不对

### 想 review 文档评级是否合理
[`docs/OFFICIAL_DOCS_VALUE_INDEX.md`](../OFFICIAL_DOCS_VALUE_INDEX.md) — 4 个分级表（⭐⭐⭐ / ⭐⭐ / ⭐ / ✗），catalog 行 46 个

### 想看完整 commit 历史
```bash
git log --oneline d4ab82b..HEAD
git show 3989cb9   # 看任意单个 commit 的 diff
```

---

## 我没动的东西（用户 review 时常会问）

| 用户素材 | 状态 |
|---|---|
| `2026-05-03/...` 3 个工作区 | 未动（你的活跃工作） |
| `2026-05-04/claude-19-tips-hf/` | 未动（19-tips 视频在做中） |
| `参考图/` | 未动（你的参考素材） |
| `v3-cue*.png` 仓库根 5 张图 | 未动（建议挪到 19-tips 目录） |
| `docs/plans/` | 未动 |
| `hyperframes-student-kit/` | 上游软链，不能动（约束 #6） |
| `hyperframes-launches/` | 同上 |

`MY_VISUAL_DNA.md` / `MY_MOTION_NOTES.md` / `templates/components/cc-window/` —— 是上一会话（A1/A2 + 96eeb45 DNA 修订）做的，**本会话没动**。

---

## review 通过后

如果 review 没问题：
- 推到 GitHub：`git push origin feature/19-tips-hf-redo`
- 或开 PR 合到 main：`gh pr create`

如果发现问题：
- 单 commit revert：`git revert <hash>`
- 或局部修：直接编辑文件，新 commit 覆盖
