# Claude 19 Tips Motion-only Render Report

## Output

- File: `out/claude-19-tips-motion-only.mp4`
- Rendered at: 2026-05-03
- Size: 52 MB

## Verified Media Properties

- Resolution: 1920x1080
- Frame rate: 30 fps
- Frames: 18535
- Video stream duration: 617.833 seconds
- Audio streams: none

## Source Boundaries

- Reference video remains a symlink only: `assets/reference/codex-ref.mp4`
- Final Remotion source does not import or render the reference video.
- Final Remotion source does not reference the old subtitle file.
- Timeline data was generated from `Subtitle 1_fixed.srt`.

## QA Commands

```bash
npm test
npm run lint
rg -n "Subtitle 1\\.srt|codex-ref|<Video|staticFile\\(|assets/reference|/Users/chenhuajin/Movies" src scripts package.json remotion.config.ts
ffprobe -v error -select_streams v:0 -show_entries stream=width,height,r_frame_rate,avg_frame_rate,nb_frames,duration -show_entries format=duration,size -of json out/claude-19-tips-motion-only.mp4
ffprobe -v error -select_streams a -show_entries stream=codec_type -of csv=p=0 out/claude-19-tips-motion-only.mp4
```
