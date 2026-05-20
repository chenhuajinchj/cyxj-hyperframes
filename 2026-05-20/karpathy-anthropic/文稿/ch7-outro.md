# Ch7 — 收尾（30-45s）

---

## 衔接句（接 Ch6）

> 「猜完了。最后说一句结论——」

---

## 旁白（口播稿）

「我这两个月用 Claude Code 越来越觉得，model 之间的差异早就没那么重要了。重要的是你能不能把 wrapper 玩好。」

「Karpathy 加入 Anthropic 这件事，可能就是这个 thesis 的最强信号。」

「你怎么看？欢迎评论。下条想做什么——点个赞告诉我。」

---

## 视觉旁注汇总

| 时间点 | 口播内容 | 视觉 |
|---|---|---|
| 0:00 | "model 之间的差异早就没那么重要了" | 全屏暖米色底，Hero chrome 渐变大字从模糊 blur(14px) → 清晰，"wrapper 才是产品"大字砸下 |
| 0:08 | "把 wrapper 玩好" | "wrapper" 词用 Claude 橙渐变高亮，周围浮现 skills / memory / CLAUDE.md 等小标签，向外扩散后淡出 |
| 0:14 | "Karpathy 加入 Anthropic 这件事" | Karpathy 头像 + Anthropic logo 同时入场（中心对称），两者之间出现一条 Claude 橙连接线 |
| 0:20 | "最强信号" | 橙色 glow burst 从连接线中心向外扩散，画面短暂白闪 0.1s，定格 |
| 0:24 | "你怎么看？欢迎评论" | 底部评论气泡 icon 以 stagger 方式弹入（3 个气泡，0.12s 间隔） |
| 0:28 | "点个赞告诉我" | 点赞 icon + 订阅 icon 同时入场，Claude 橙底色 |
| 0:32 | （末帧停顿） | XCYJ logo 居中，画面保持 Claude 橙 + 暖米色，颗粒纹叠层可见 |

---

## 素材源

| 素材 | 来源 | 使用方式 |
|---|---|---|
| Karpathy 头像 | Karpathy 本人 X / GitHub 头像 | 圆形裁切，暗角处理 |
| Anthropic logo | `assets/logos/anthropic.svg`（若有）或 Anthropic 官网 | 与 Karpathy 头像并排，中间 Claude 橙连接线 |
| XCYJ logo | 本地 `assets/logos/` | 末帧居中显示 |
| 评论 / 点赞 / 订阅 icon | YouTube 品牌图标或自绘 SVG | stagger 弹入 |

---

## Metaphor 表

| 口播关键词 | 字面理解 | 语义扩展（视觉要做的） |
|---|---|---|
| "wrapper 才是产品" | 概念标签 | 大字本身不够——大字周围飞出 skills / memory / CLAUDE.md 标签，像行星围绕核心旋转，传递"外圈才是主角"的立体感 |
| "最强信号" | 隐喻 | 不做信号波形图（字幕翻译）——做 glow burst + 白闪，让观众在感官上"感受到"冲击，配合收束句节奏落拍 |
| "点个赞告诉我" | 互动引导 | 赞 icon 不是静止摆着——用弹跳动效（back.out 1.4），像真的在等你点，传递"你来决定下条"的参与感 |

---

## 时长估算

| 段落 | 字数（口播） | 估算时长 |
|---|---|---|
| 结论（两句话） | 约 55 字 | ~14s |
| 互动 hook | 约 20 字 | ~6s |
| 末帧停顿（无口播） | — | ~8s |
| 衔接句（"猜完了"） | 约 8 字 | ~3s |
| **合计** | **约 83 字 + 停顿** | **约 31s** |

> 估算依据：中文口播约 4 字/秒，末帧停顿是画面给观众喘息 + 点击互动按钮的时间，不压缩。
> 本章是全片最短章，30-45s 范围内，无需缩减。

---

## 视觉规格备注

- 底色：`#F7F2EA`（暖米色，DNA §1，全片不换）
- Hero 大字：chrome 渐变，米色底暖版 8-stop bookends（DNA §5）
- 强调色：Claude 橙 `#d97757`，本章贯穿（glow / 连接线 / icon 底色）
- 全屏四件套：网格 + 暗角 + 颗粒 + crosshair（DNA §3）
- 字体：Noto Sans SC（中文）/ Inter（英文副标签）（DNA §4）
- 动效：末帧各元素以 stagger 0.12-0.15s 入场，ease `back.out(1.4)`；glow burst 用 `expo.out`
