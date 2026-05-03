import "./index.css";
import { Composition } from "remotion";
import { Claude19TipsVideo } from "./Composition";
import { VIDEO_META } from "./data/timeline.generated";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Claude19Tips"
        component={Claude19TipsVideo}
        durationInFrames={VIDEO_META.durationInFrames}
        fps={VIDEO_META.fps}
        width={VIDEO_META.width}
        height={VIDEO_META.height}
      />
    </>
  );
};
