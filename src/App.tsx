import SlideRenderer from "./components/slides/SlideRenderer";
import SharedBackgroundVideo from "./components/background/SharedBackgroundVideo";
import useSlideTimer from "./hooks/useSlideTimer";

import { slideDurations, slides } from "./components/slides/SlidesConfig";
import videoBackground from "./assets/videos/shared-video.mp4";
import NextSlideButton from "./components/slides/NextSlideButton";

const App = () => {

  const autoAdvanceSlides = [1, slides.length - 2];
  const { index, next } = useSlideTimer(slides.length, slideDurations, autoAdvanceSlides);


  return (
    <div className="relative h-screen w-full overflow-hidden">
      <SharedBackgroundVideo videoSrc={videoBackground} />
      <div className="absolute inset-0 z-0" />
      <SlideRenderer index={index} slide={slides[index]} />

      {!autoAdvanceSlides.includes(index) && index < slides.length - 1 && (
        <NextSlideButton onClick={next} />
      )}


    </div>
  );
};

export default App;


