# PLAN-seg09-ch7-3-fei-kaifa-zhe — 预测 3 · 非开发者打包工具 · 脑中隐性知识 → 智能体上架

> 本段适用 §7（SRT 真源）/ §8（段内时间从 0）/ §10（SEGMENT_DURATION + tl.set 撑满）/ §11（cutaway）/ §12.a-b（preview 验过 + commit）/ §13（资料台账）。seg08→seg09 默认 hard cut（§9），SEC A 头部 0.5s 暗场缓冲消化字幕 372→373 之间的 0.5s 口播停顿。

- **段编号**：seg09（章别名 ch7-3）
- **段长**：**137.3s**（含 0.5s SEC A 头部 buffer + 136.8s 字幕内容，PLAN gate G1 待用户确认）
- **全片位置**：17:36.866 → 19:54.099（≈ 字幕 373-417）
- **形态**：cutaway
- **真源**：`字幕/加入之后.srt` 第 373-417 条

---

## ✅ PLAN gate 决议候选（待用户确认）

### G1 段长 + 全片对齐 — **旧估 107s → SRT 真源 137.3s（+30.3s）**

- seg09 段长 = **137.3s**（0.5 buffer + 136.8 字幕；按 SRT 字幕 373 起 17:36.833 → 字幕 417 末 19:54.099，跟 seg08 末 17:36.866 留 0.5s 暗场过渡）
- seg09 `data-start` = 966.1 + 90.7 = **1056.8s**（紧贴 seg08 末，hard cut）
- 11 段 SRT 校准总和（已知 8 段实测 + seg09 真源 + seg10 旧估）：
  38+112+80+91+201+152+206.6+85.5+90.7+**137.3**+128 = **1222.1s** ≈ 20:22.1
- **风险**：seg10 旧估 128s，但 SRT 字幕末是 21:35.000（字幕 450 末），seg10 真源应该是 21:35.000 - 19:54.099 = **101s 左右**（待 seg10 PLAN 时校准）。如果 seg10 实测 = 100s，全片真源总和 ≈ **1194s ≈ 19:54 + 100s ≈ 21:34** ✓ 跟字幕总长 21:35 对得上。
- **旧估 107s vs 真源 137.3s 差 30.3s 的原因**：旧 PROJECT-STATE §3 表用 17:37→19:24 = 107s 是基于"19:24 outro 起"的旧估，但 SRT 真源里 seg10 outro 起点其实是 **19:54**（字幕 418 起 19:54.366），所以 seg09 实际段长 = 19:54 - 17:37 = **137s** ✓ 跟真源对齐。

> **PROJECT-STATE §3 表 seg09 列等用户确认 G1 后回填**：107s → 137.3s（旧表 17:37→19:24 的 19:24 应订正为 19:54，是当年估算时把 outro 起点写错了）。

### G2 主比喻 — **「脑中想法 → 凝结成卡片 → 打包 → 上架 → 社区循环」四步流**

整段叙事框架 = 「**非开发者世界的隐性知识民主化**」。**视觉差异化硬约束**：

- **vs seg07（开发者 SOP 集市）**：seg07 是「有形 SOP 文档 → 立方体上架→单向下载」；seg09 是「**无形脑中想法 → 凝结卡片 → 双向社区循环**」。不重复立方体上架视觉。
- **vs seg08（cc-window 命令式→声明式）**：seg08 是工程师终端；seg09 是非开发者世界，**禁用 cc-window 作为主视觉**（仅 SEC E 反例位"CLAUDE.md 强人所难"一次性出现，写到一半 fade-out 后扔下）
- **vs seg06（双河汇流）**：MorphSVGPlugin 写法可复用，但 seg09 用作社区节点连线 morph（不是双河）

**SEC G 是全段 chrome 大字唯一位**，金句钉位（**callback seg06 SEC E**「让普通人 · 驾驭模型」首次出现，seg09 在此把它升级为更具体的）：

> **「真正的 · 人人都能 · 驾驭大模型」**

四步流视觉锚：
- **SEC E 脑中想法**（自媒体头像 + 思维气泡 + char-scramble 文字浮现）
- **SEC F 凝结打包**（3 步流程：描述 → 上传样本 → 教会 = 3 节点 motionPath，复用 seg08 写法但精简到 3 节点 + 包装盒最终汇聚）
- **SEC G 上架共享**（橙色边框知识卡 + 上架到社区网格 + orbit-dots 循环脉冲）
- **SEC G 末 / SEC H** chrome 大字唯一位 + 卡帕西使命 callback

### G3 真截图清单 — **6 张待用户截**（清单见对话 / 用户自截 ASCII 文件名）

| # | 截图文件 | SEC | 用途 | 状态 |
|---|---|---|---|---|
| 1 | `claude-cowork-hero.png` | C | Cowork 头屏（"handles tasks autonomously"）| ⬜ 等用户截 |
| 2 | `claude-cowork-knowledge-workers.png` | C | "Filling a gap for knowledge workers" 段（"non-technical teams"）| ⬜ 等用户截 |
| 3 | `karpathy-education-tweet.png` | B | 卡帕西 "deeply passionate about education" 推文 | ⬜ 等用户截 |
| 4 | `karpathy-eureka-mission.png` | G | Eureka Labs "easy for anyone to learn anything" 推文 | ⬜ 等用户截 |
| 5 | `zimeiti-creator-backstage.png` | E | 自媒体创作后台（小红书 / 蝉妈妈 / 用户自选）| ⬜ 等用户截 |
| 6（加分）| `claude-plugins-marketplace.png` | G/H | Claude Plugins 市场页（呼应"插件市场不就循环起来了"）| ⬜ 可选 |

**双源验证强度**：1-2 来自 Anthropic 官方 web_fetch 实抓；3-4 推文 URL TechCrunch + 官方推 hyperlink 双源确认；5 是用户实际操作场景；6 是 Anthropic claude.com 官方列表项。**事实可信度满分**。

---

## 0. 本段的核心叙事

seg09 是**三个预测的第三个（最有意思的猜测）** —— 填上 seg06 SEC F 留下的「03」卡。

- **主比喻**：从「**用 AI 干活**」（Claude Cowork 现状）→ 到「**把脑中隐性知识打包成 AI 让别人用**」（升级愿景）。再到「**社区循环 + 收费 + 人人驾驭**」（终态）。
- **关键论点**：
  - ✅ Claude Cowork 已经在做（非开发者桌面智能体，2026-01-12 发布）
  - ✅ 但鸡肋 / 只在"用 Claude 帮自己干活"层面
  - ✅ 下一步：让非开发者把脑中领域知识打包成智能体上架共享
  - ✅ 自媒体例子（选题爆 / 封面点击率）= 隐性知识在脑里，写 CLAUDE.md 强人所难
  - ✅ 打包工具 = 描述流程 + 上传样本 + 教会智能体什么叫好 = 3 步
  - ✅ 上架 / 共享 / 卖给同行 / 收费 → 插件市场循环社区
  - ✅ 卡帕西在 A 社推进这件事可能性最大（呼应使命 = callback seg01 Eureka + seg06 Academy）
  - ✅ 但承认是纯猜
- **callback 链条**（seg09 必须承接）：
  - **seg06 SEC F「03」卡** → seg09 **SEC A 第一秒就点亮 + halo + pulse**（视觉硬约束）
  - **seg06 SEC E「让普通人 · 驾驭模型」chrome 大字** → seg09 **SEC G 升级钉位为「真正的 · 人人都能 · 驾驭大模型」**
  - **seg01 SEC E Eureka 站点 + 履历列车** → seg09 **SEC G 卡帕西头像复用 + Eureka Labs 推文叠层**
- **下一段连接**：SEC H 末 chrome 大字 hold + 「03」卡 done state → hard cut 到 seg10。**seg09 不做 outro fade**（§18）

---

## §13 资料台账（已由两 agent 完成完整检索，详见 PLAN 末尾附录）

### 官方文档（精选）
- `gsap`：MotionPathPlugin（SEC F 3 节点 + SEC G 社区循环 motionPath）/ MorphSVGPlugin（SEC G 社区节点 morph）/ stagger / autoAlpha
- `hyperframes`：visual identity → layout before animation；GSAP transform 覆盖 CSS translate（§14）→ xPercent/yPercent: -50
- `MY_MOTION_NOTES.md §3 同帧合成`（SEC G 大字主峰）/ §4 不 spoiler（SEC H 不点开 seg10）

### 参考工程（复用 / 不复用 / 差异化）
- **复用 seg08**：char-scramble 同款确定性 hash / motionPath 6 节点改 3 节点 / .chrome + .hot + .marker-sweep CSS / chip 样式（hot-solid / gray）
- **复用 seg07**：上下文包立方体 SVG 写法 → 改为「打包盒」视觉 + 立方体内 char-scramble 文字（自媒体判断浮现）
- **复用 seg06**：MorphSVGPlugin 双轨融合写法 → 改为单条社区循环 path morph；chrome 大字唯一位写法
- **复用 seg01**：karpathy 头像圆形 mask + role-chip 写法（SEC G 卡帕西头像出现）
- **不复用 seg08 cc-window 主视觉**（仅 SEC E 反例位"CLAUDE.md 强人所难"一次性出现）

### 零件复用
- **必用**：`xcyj-tokens` / `text-effects`（char-scramble + marker-sweep）
- **候选**：`orbit-dots`（SEC G 社区循环节点）/ `pulse-bars`（上架后下载脉冲）

### catalog 候选（fork 起点不是参数化零件）
- `ui-3d-reveal` ⭐ 候选：SEC F 打包盒 3D 透视入场（fork 改源码）
- `macos-notification` 候选：SEC G 社区下载通知（不强求）
- 其他 block：不用

---

## 1. SEC 切分（8 段 · 总长 137.3s · 字幕 373-417）

| SEC | 字幕条 | 起 (段内) | 段长 | 主题 | hot 词 | 关键视觉 |
|---|---|---|---|---|---|---|
| **A** | 373-375 + 0.5buffer | 0.0s | **9.7s** | 开场 + 「03」卡点亮 | 最有意思 | seg06「03」空白卡 fly-in → halo + scale 1.0→1.15 bounce + pulse；chrome 大字「非开发者的一个打包工具」副标 chip |
| **B** | 376-378 | 9.7s | **9.8s** | 卡帕西教育挂恋 | 挂恋 | karpathy 头像（复用 seg01）+ 教育推文真截图（左 60%）+ "I remain deeply passionate about education" 句 marker-sweep |
| **C** | 379-384 | 19.5s | **21.9s** | Claude Cowork 现状 + 鸡肋 | 鸡肋 | Cowork 头屏真截图（左 60%）+ "non-technical teams" marker-sweep + 右侧 cc-window 反例（写到一半 fade-out 表现"用 AI 帮自己干活"局限）+ hot-solid chip "鸡肋" |
| **D** | 385-389 | 41.4s | **14.4s** | 升级愿景 hot 大字 | 激进 | chrome 中字「下一步可能更加激进」+ hot 大字「**让非开发者把脑袋里的领域知识 · 经验打包成智能体让别人也能用**」（**非 chrome 大字唯一位，留给 SEC G**）+ "脑袋里" 高亮抽出动效 |
| **E** | 390-401 | 55.8s | **27.4s** | 自媒体例子 + 隐性知识 + 强人所难 | 强人所难 | 自媒体场景：avatar SVG + role-chip "做自媒体很久" + 思维气泡 char-scramble 浮现"什么选题会爆 / 什么封面点击率高"；自媒体后台真截图（右侧 t=68-72）；CLAUDE.md 反例 cc-window（写到一半 fade-out + 红 X 角标"强人所难"） |
| **F** | 402-406 | 83.2s | **16.7s** | 3 步打包流程 | 教会 | 包装盒 SVG（差异化 seg07 立方体）+ 3 节点 motionPath（描述流程 → 上传样本 → 教会智能体）+ elastic.out 落地微弹；末帧打包盒亮起 Claude 橙边框 |
| **G** | 407-409 | 99.9s | **8.9s** | 上架社区循环 | 循环 | 包装盒 → 上架到社区网格（6 tile 但差异化 seg07：tile 是知识卡片 + avatar + 评分星 + ¥ chip 收费）+ orbit-dots 循环脉冲连接 6 tile（双向循环 vs seg07 单向下载）+ Claude Plugins 真截图淡入右下角 |
| **H** | 410-415 | 108.8s | **23.1s** | 人人驾驭 + 卡帕西使命（**chrome 大字唯一位**） | 真正的 | chrome 大字唯一位「**真正的 · 人人都能 · 驾驭大模型**」（升级 seg06 SEC E"让普通人·驾驭模型"）+ karpathy 头像出现（复用 seg01）+ Eureka Labs 推文叠层 + "easy for anyone to learn anything" 引文 chip |
| **I** | 416-417 | 131.9s | **5.4s** | 纯猜 + 桥接 seg10 | (无新) | gray chip"纯猜的"+「01 / 02 / 03」三卡同框 done state（全部点亮）→ hard cut 到 seg10 |

**总和验证**：9.7 + 9.8 + 21.9 + 14.4 + 27.4 + 16.7 + 8.9 + 23.1 + 5.4 = **137.3s** ✓

**chrome 大字唯一位** = SEC H「真正的 · 人人都能 · 驾驭大模型」（SEC D hot 大字不算 chrome，是 hot 渐变升级版）。

**callback 视觉锚**：
- SEC A：seg06 SEC F「03」空白卡点亮（**硬约束**）
- SEC H：seg06 SEC E「让普通人·驾驭模型」chrome 升级；seg01 Eureka 站点头像复用
- SEC I：「01 / 02 / 03」三卡同框 done state（三个预测全部点亮，桥接 seg10）

---

## 2. 各 SEC 详细视觉设计

### SEC A（0.0 → 9.7s）开场 + 「03」卡点亮

**口播覆盖**：字幕 373-375「然后第三个就是非开发者的一个打包工具 / 这个是我自己觉得的卡帕西进入之后 / 最有意思的一个猜测」

**视觉骨架**：
1. **t=0.0-0.5**：暗场 buffer（seg08 末 hard cut 进来后的呼吸 0.5s）
2. **t=0.5-2.0**：seg06 SEC F 三空白卡「01 / 02 / 03」从底部 fly-in，「01」「02」已 done state（灰边框 + 灰打钩），「03」仍空白
3. **t=2.0-3.5**：「03」卡 halo + pulse + scale 1.0→1.15 bounce（elastic.out · 0.8s · finite repeat 1）+ Claude 橙边框激活
4. **t=3.5-7.0**：chrome 中字（不是大字 · 留给 SEC H）「**非开发者 · 的一个 · 打包工具**」标题层级 stagger 入场，字符 char-scramble 0.06s
5. **t=7.0-9.7**：副标 chip"最有意思的猜测" hot-solid 出现 + 句号停顿 hold

**关键技术点**：
- 「03」卡复用 seg06 SEC F line N-M 空白卡 layout（具体 line 待 lint 后查 seg06 文件）
- halo = SVG filter `feGaussianBlur` + Claude 橙 + animation pulse 1.2s yoyo（finite repeat 3）
- chrome 中字 = `.chrome` class（CSS 已在工程，复用 seg08 line 27-38 写法）

### SEC B（9.7 → 19.5s）卡帕西教育挂恋

**口播覆盖**：字幕 376-378「因为它在推文里面不是专门写了吗 / 在合适的时机重启教育这件事 / 说明其实它的心里还是带着挂恋的」

**视觉骨架**：
1. **t=0.0-2.0**：karpathy 头像（复用 seg01 line 待查）从右侧 fly-in，120×120px 圆形 mask
2. **t=2.0-5.5**：教育推文真截图（`karpathy-education-tweet.png`）左 60% 占位 fly-in；marker-sweep 划过 "I remain deeply passionate about education and plan to resume my work on it in time"
3. **t=5.5-9.8**：句子下方浮起翻译 chip"在合适的时机 · 重启教育"（hot-solid · 大号 24px）+ 头像旁出现"挂恋"hot 大字（不入 chrome）+ 心形 SVG 微脉动（不滥情，0.6 opacity）

**关键技术点**：
- 头像 + 推文截图同框：头像在右 25% 区，推文在左 55% 区，中央 marker-sweep 单条
- "挂恋" hot 大字 = `.hot` class + 60px

### SEC C（19.5 → 41.4s）Claude Cowork 现状 + 鸡肋

**口播覆盖**：字幕 379-384「A 社现在其实有了 Claude Cowork / 也就是给非开发者用的桌面智能体 / 但是用过的人都知道 / 就是它对于很多事情是特别鸡肋的 / 也不能说鸡肋吧 / 就是它还停留在非开发者用 Claude 帮自己干活这一个层面」

**视觉骨架**：
1. **t=0.0-3.0**：清场（B fade-out · seg-09 内部 fade 不算 §18 exit）→ Cowork 头屏真截图（`claude-cowork-hero.png`）左 55% 占位 fly-in；卡顶 Anthropic logo + chip "Claude Cowork · 2026-01-12 发布"
2. **t=3.0-7.0**：右侧浮起"非开发者用的桌面智能体" chrome 小字 + marker-sweep 划过头屏 "handles tasks autonomously"
3. **t=7.0-12.0**：截图切换到 `claude-cowork-knowledge-workers.png`（"Filling a gap for knowledge workers" 段，可见 "non-technical teams like Marketing and Data"）+ marker-sweep 划过 "non-technical teams"
4. **t=12.0-15.5**：hot-solid chip "鸡肋" pulse + scale 1.0→1.2（呼应字幕"但是用过的人都知道..."）+ 红 X 角标
5. **t=15.5-21.9**：右下角浮起 cc-window 反例（小尺寸 · 360×120px）显示 `> Claude Cowork 帮我整理一下今天的数据` → 输出 → fade-out 表示"停留在用 AI 干活"层面；左侧 chrome 中字"用 Claude 帮 · 自己干活"

**关键技术点**：
- 双截图切换：opacity 1→0 + opacity 0→1 同时（1s 交叉淡入）
- "鸡肋" 出现位置 = 截图右上角浮起，pulse 视觉强度高
- cc-window 反例 = 微缩 ver，与 seg08 cc-window 风格区分（更小 · 灰边框 · 不亮眼）

### SEC D（41.4 → 55.8s）升级愿景 hot 大字

**口播覆盖**：字幕 385-389「我觉得下一步的话可能会更加的激进 / 就是让非开发者把脑袋里面领域的知识 / 经验打包成智能体让别人也能用 / 就是这一个步骤的话 / 我不知道它会怎么去进行」

**视觉骨架**：
1. **t=0.0-1.5**：清场（C fade-out cc-window 反例和截图）；chrome 中字 fly-in"**下一步可能更加 · 激进**"
2. **t=1.5-7.0**：hot 大字（70px）"**让非开发者把脑袋里的 · 领域知识 · 经验打包成智能体让别人也能用**" stagger 字符入场（0.06s/char）
3. **t=7.0-10.5**：高亮"**脑袋里**"3 字，char-scramble + 抽出动效（向上飘出 + 雾化效果 filter blur 8px 0.4s）→ 浮起成 3 张小卡片占位（SEC E 会展开）
4. **t=10.5-14.4**：副标 chip"激进"hot-solid + Claude 橙 halo + hold

**关键技术点**：
- "脑袋里" 抽出动效 = 雾化 filter blur 0→8px → opacity 1→0；同时上方生成"💭"思维气泡 SVG（不是 emoji · 用 SVG）
- hot 大字 70px 不是 chrome 大字 100px+（留给 SEC H）

### SEC E（55.8 → 83.2s）自媒体例子 + 隐性知识 + 强人所难

**口播覆盖**：字幕 390-401「然后比如说几个简单的例子 / 就是做自媒体 / 有一些做得久的人他就特别的厉害 / 他知道什么样的选题会爆 / 然后什么样的封面让人点击率更高 对吧 / 但是这些东西是在他脑子里面的 / 不在任何的文档里面 / 这些人他也不是开发者 / 你让他们去写一个什么规范文档 / 写一个什么 CLAUDE.md 说实话是强人所难的 / 就是大部分的判断 / 他还是需要他自己脑子里面的一些经验」

**视觉骨架**：
1. **t=0.0-3.0**：clean transition（SEC D 雾化 3 卡片下沉）→ 中央浮起 avatar SVG（圆形 · 200×200px · 不用真人头像 · 自定义 cartoon-style，避免诱导观众联想真人）+ role-chip "做自媒体很久的人"
2. **t=3.0-9.0**：avatar 头顶生成 4 个思维气泡 SVG（云朵形 · 错位排布）。气泡内 char-scramble 文字渐出：
   - 气泡 1："什么 · 选题会爆"
   - 气泡 2："什么 · 封面点击率高"
   - 气泡 3："发文 · 黄金时段"
   - 气泡 4："标题 · 钩子模板"
3. **t=9.0-15.0**：右侧 fly-in 自媒体后台真截图（`zimeiti-creator-backstage.png`）；左侧 chrome 中字"这些东西 · 在他 · 脑子里"+ marker-sweep 划过气泡（强调内容是模糊的、非结构化的）
4. **t=15.0-22.0**：清场气泡 → 中央出现 cc-window 反例（780×220px · 一次性出现 vs seg08 cc-window 视觉差异化）显示：
   ```
   $ vim CLAUDE.md
   # 我的选题判断规则
   1. 标题要...
   2. 封面要...
   ```
   写到一半（字符打字 0.05s/char）后 fade-out + 红 X 角标"强人所难"
5. **t=22.0-27.4**：chrome 中字 hot "**强人所难**"hold + 副标"大部分判断 · 在脑子里"

**关键技术点**：
- avatar 用 SVG icon 不用真人头像（隐私 + 隐喻"任何非开发者"）
- 思维气泡 = SVG cloud-shape `<path>` 4 个，错位排布；内嵌 `<text>` + char-scramble
- cc-window 反例区分 seg08：尺寸更小、CSS 加灰滤镜 filter grayscale 0.3、不闪烁光标（vs seg08 闪烁）
- "vim CLAUDE.md" 是反讽 · 强化"开发者工具对非开发者的隔阂"

### SEC F（83.2 → 99.9s）3 步打包流程

**口播覆盖**：字幕 402-406「然后所以我觉得下一步可能会 / 推出一些更加简单的打包工具 / 就是让这些人可以更加自然的去描述流程 / 然后上传样本 / 让智能体就是教会智能体什么叫好」

**视觉骨架**：
1. **t=0.0-3.0**：clean transition → 中央 fly-in 包装盒 SVG（240×240px · 米色暖底 + Claude 橙边框 · **差异化 seg07 立方体**：seg07 是封闭立方体表示"打包文档"，seg09 是开口包装盒上盖打开表示"装入隐性知识"）
2. **t=3.0-12.0**：3 节点 motionPath（左→中→右 平行排布 · 不弯曲）：
   - 节点 1（左 t=3-6）："**描述流程**" + 自然语言对话气泡 SVG + char-scramble"我的选题判断流程是..."
   - 节点 2（中 t=6-9）："**上传样本**" + 文件 upload SVG 多张图（avatar 自媒体过去爆款封面 placeholder · 不用真截图）
   - 节点 3（右 t=9-12）："**教会智能体什么叫好**" + 训练循环 SVG + thumbs up/down 评分
3. **t=12.0-16.7**：3 节点同框完成 → 包装盒 + 3 节点连线 morph 收敛到包装盒（MorphSVGPlugin · 复用 seg06 写法）→ 包装盒"封箱"动画（盒盖关闭 · elastic.out 0.6s）→ 包装盒亮起 Claude 橙边框 + halo

**关键技术点**：
- 3 节点用 `<line>` 直线连接（不用 zigzag · 简化 seg08 6 节点）
- agent 立方体不再出现（seg08 已用过 · seg09 改为静态 3 步呈现）
- 包装盒收敛动画 = morph 3 节点 line → 收敛到盒子周长 + scale 0.3 收缩
- elastic.out 微弹复用 seg07 line 463-467 写法

### SEC G（99.9 → 108.8s）上架社区循环

**口播覆盖**：字幕 407-409「然后这个智能体还可以上架 / 可以共享可以卖给同行还可以收费 / 插件市场不就循环起来了吗 社区对吧」

**视觉骨架**：
1. **t=0.0-2.5**：包装盒（SEC F 末状态）→ 飞向中央上方"社区集市"区（motionPath 上升曲线 · 复用 seg07 line 待查写法但缩短 · 0.8s）
2. **t=2.5-6.0**：6 tile 网格 fly-in（**差异化 seg07**：tile 不是文档卡片，是知识卡片 + avatar icon + ⭐ 评分 + ¥ 收费 chip · 表示"非开发者世界"）。stagger 0.1s
3. **t=6.0-8.9**：orbit-dots 循环脉冲（复用 templates/components/orbit-dots 写法）连接 6 tile —— **双向**连线（vs seg07 单向上架→下载）+ 6 个 dot 沿椭圆 path 循环旋转表示"社区循环不停"+ Claude Plugins 真截图（`claude-plugins-marketplace.png`）淡入右下角占 25% 作 reality 证据

**关键技术点**：
- "双向" = 每条连线显示两个反向脉冲点同时跑（不是单向 · 体现"上架→下载 / 反馈→优化"双向）
- orbit-dots 椭圆 path 半径 = 300px，dot 大小 6px，循环周期 3s
- Claude Plugins 真截图作为"这个在 A 社已经初步实现"的现实背书

### SEC H（108.8 → 131.9s）chrome 大字唯一位 + 卡帕西使命 callback

**口播覆盖**：字幕 410-415「我觉得这才是真正的人人都能够使用大模型 / 不只是Claude / 我觉得我觉得各家公司应该都会这样子去做 / 并且我觉得卡帕西在A社推进这件事情的可能性是比谁都大的 / 因为他就是真正的是唯一一个长期的把让普通人能够 / 驾驭AI当做核心使命的一个人」

**视觉骨架**：
1. **t=0.0-3.0**：clean transition（SEC G orbit-dots 减速 fade）→ chrome 大字唯一位 fly-in（115px · stagger 0.07s/char）：

   > **真正的 · 人人都能 · 驾驭大模型**

   **callback seg06 SEC E**「让普通人·驾驭模型」—— 字号升级（seg06 是 100px · seg09 是 115px）；hot 词"人人都能"使用 .hot 渐变

2. **t=3.0-5.5**：chrome 大字 hold + 副标 chip"不只是 Claude · 各家都会这样做"
3. **t=5.5-13.0**：karpathy 头像（复用 seg01）从下方 fly-in（300×300px · 比 SEC B 大）+ Eureka Labs 推文真截图（`karpathy-eureka-mission.png`）右侧叠层；marker-sweep 划过 "easy for anyone to learn anything"
4. **t=13.0-19.0**：chrome 中字"**唯一一个 · 长期 · 把让普通人能够驾驭 AI · 当做核心使命的人**"stagger 入场；hot 词"唯一一个"+"使命" Claude 橙渐变
5. **t=19.0-23.1**：3 元素同框 hold（chrome 大字 + 头像 + Eureka 引文）→ Eureka 引文气泡向 chrome 大字方向飘升 1px（hint 这两件事的因果连接）

**关键技术点**：
- chrome 大字位置 = 顶部 1/3 区（避免与 karpathy 头像重叠）
- karpathy 头像复用 seg01 line 待查写法（feifei.jpg 同期素材库 · `assets/portraits/karpathy.png`）
- Eureka 引文不是引号叠层，而是推文真截图的可读复印件
- 同帧合成（MOTION_NOTES §3）：chrome 大字主峰 + 头像 + 推文，三个元素同框稳定 hold

### SEC I（131.9 → 137.3s）纯猜 + 桥接 seg10

**口播覆盖**：字幕 416-417「这一条其实说实话我没有什么把握 / 纯猜的」

**视觉骨架**：
1. **t=0.0-2.0**：clean transition（SEC H 三元素 fade）→ gray chip"纯猜的"（不是 hot · 表示自嘲 + 真诚）出现
2. **t=2.0-5.0**：seg06 SEC F「01 / 02 / 03」三卡再次出现（**全部 done state · 全部点亮**）→ 横向排布同框 hold
3. **t=5.0-5.4**：hard cut buffer → seg10

**关键技术点**：
- 三卡同框 done state = 复用 seg06 SEC F line 待查写法
- 不做 fade out（§18：段末禁 exit，仅最后段例外。seg09 不是最后段，hard cut 进 seg10）

---

## 3. 段长撑满写法（§10 强制）

```js
const SEGMENT_DURATION = 137.3;
// ... 段内 8 SEC timeline 动画 ...
tl.set({}, {}, SEGMENT_DURATION);
window.__timelines["seg09-fei-kaifa-zhe"] = tl;
```

---

## 4. 段命名约定（§8 强制）

- `compositions/seg09-fei-kaifa-zhe.html`（kebab-case · 非开发者拼音）
- root `data-composition-id="seg09-fei-kaifa-zhe"`
- 段内 GSAP timeline 从 0 起算
- 段 HTML 禁止出现全片时间码

---

## 5. 已知风险 + mitigations

1. **「03」卡 callback 视觉强度** —— SEC A 必须在前 3.5s 内点亮 + halo + pulse，否则观众感受不到 seg06 SEC F 伏笔回报。**Mitigation**：t=2.0-3.5 期间 pulse 重复 3 次 + halo opacity 0.6→1.0，强力强调
2. **SEC E avatar 用 SVG 不用真人** —— 防止观众联想到某个具体自媒体人。**Mitigation**：用 cartoon-style 圆形 SVG avatar，性别中性
3. **chrome 大字唯一位选 SEC H 而非 SEC D** —— 因为 SEC D 的"激进"是判断不是金句，SEC H 的"真正的人人都能驾驭大模型"才是 seg06 SEC E callback 链条的终点
4. **SEC F 包装盒视觉差异化 seg07 立方体** —— 用"上盖打开 + 装入隐性知识"vs seg07"封闭立方体打包结构化文档"。**Mitigation**：写 composition 前先看 seg07 line 1-100 立方体 SVG path，确认 seg09 包装盒 SVG path 不重复
5. **SEC G 6 tile 集市差异化 seg07** —— seg07 集市是 6 tile 网格（开发者插件市场），seg09 也是 6 tile 但**双向**循环 + 评分/收费 chip。**Mitigation**：写 SEC G 时打开 seg07 line 集市部分对比，确保两个视觉一眼能区分
6. **段长 137.3s 比 seg08 的 90.7s 长 50%** —— preview render 时间 + Chrome renderer 内存压力增加。**Mitigation**：preview tab 验完立即关闭 + 不开 second window

---

## 6. 截图获取 SOP（给用户）

详见对话内截图清单（6 张 · 4 张必须 · 1 张挑选 · 1 张加分）。**用户截好后存到 `assets/screenshots/` · 文件名按 ASCII 严格命名**（不能含中文 / 空格）。

写 composition 前 lint 会检测截图存在性。**用户没截全前**：

- SEC B 推文 / SEC C Cowork 头屏 缺图 → SEC B/C 无法做 → 整段无法 preview
- SEC E 自媒体后台 / SEC H Eureka 推文 缺图 → 对应 SEC 用占位灰框 + "等待截图"chip 先做骨架

**建议优先级**：截图 1+2（Cowork） > 3+4（卡帕西推文） > 5（自媒体后台） > 6（plugins 加分）

---

## §13 资料台账（附录）

> 完整版由两 agent 完成，详见对话历史。本节只列 seg09 实战会用的写法清单。

### 复用 seg07-shichang.html（line 待查）
- 包装盒 SVG 写法（不复用立方体，改为上盖打开）
- motionPath 写法（3 节点直线，不复用 zigzag 6 节点）
- chrome / hot / marker-sweep CSS 全套复用
- 集市 6 tile 网格 layout（差异化：tile 内容改为知识卡片 + avatar + ⭐ + ¥）

### 复用 seg08-goal.html（line 待查）
- char-scramble 确定性 hash 写法（seed = ((step+1) * 2654435761 + i * 374761393) >>> 0）
- chip 样式（hot-solid / gray / hot）
- destination card 边框描线 strokeDashoffset 写法（SEC F 包装盒"封箱"用）

### 复用 seg06-merge.html（line 待查）
- 三空白卡「01/02/03」layout（SEC A 点亮 + SEC I done state 同框）
- MorphSVGPlugin 写法（SEC F 3 节点 → 包装盒收敛）
- chrome 大字唯一位写法（SEC H）

### 复用 seg01-renwu.html（line 待查）
- karpathy 头像圆形 mask 写法（SEC B + SEC H）

### 引用零件
- `templates/components/orbit-dots/`（SEC G 社区循环节点）
- `templates/components/text-effects/`（char-scramble + marker-sweep）
- `templates/components/xcyj-tokens/`（DNA 颜色字体）

### catalog 候选（fork 起点，写 composition 时决定是否真用）
- `ui-3d-reveal`：SEC F 包装盒 3D 透视入场？（待写时定）
- `macos-notification`：SEC G 社区下载通知？（待写时定）

---

## 7. PLAN gate 待用户确认（动工程前）

- [ ] **G1 段长**：确认 137.3s（旧估 +30.3s · 起因 PROJECT-STATE §3 表 19:24 应订正为 19:54）
- [ ] **G2 主比喻**：「脑中 → 凝结 → 打包 → 上架 → 社区循环」四步流（差异化 seg07 单向上架）
- [ ] **G3 截图清单**：6 张待截（必须 4 + 挑选 1 + 加分 1）。优先级：Cowork × 2 > 卡帕西推文 × 2 > 自媒体后台 × 1 > Claude Plugins × 1
- [ ] **callback 视觉锚**：seg06 SEC F「03」卡点亮（SEC A）+ seg06 SEC E chrome 大字升级（SEC H）+ seg01 karpathy 头像复用（SEC B/H）
- [ ] **chrome 大字唯一位选 SEC H**（不是 SEC D 的"激进"）
- [ ] **PROJECT-STATE.md §3 表回填**：seg09 旧估 107s → SRT 真源 137.3s

用户确认后开始写 `compositions/seg09-fei-kaifa-zhe.html`。
