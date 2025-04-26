// import { useState } from "react";
// import SlideRenderer from "./components/slides/SlideRenderer";
// import SharedBackgroundVideo from "./components/background/SharedBackgroundVideo";
// import { slideDurations, slides } from "./components/slides/SlidesConfig";
// import videoBackground from "./assets/videos/shared-video.mp4";
// import NextSlideButton from "./components/slides/NextSlideButton";
// import useSlideTimer from "./hooks/useSlideTimer";

// const App = () => {
//   const [isPaused, setIsPaused] = useState(true); // empieza en pausa
//   const { index, next } = useSlideTimer(slides.length, slideDurations, !isPaused);

//   const handleNext = () => {
//     setIsPaused(true); // puedes pausar luego del clic si quieres detener el autoavance
//     next(); // avanza manualmente
//   };

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       <SharedBackgroundVideo videoSrc={videoBackground} />
//       <div className="absolute inset-0 z-0" />
//       <SlideRenderer index={index} slide={slides[index]} />

//       {index < slides.length - 1 && (
//         <NextSlideButton onClick={handleNext} />
//       )}
//     </div>
//   );
// };

import SlideRenderer from "./components/slides/SlideRenderer";
import SharedBackgroundVideo from "./components/background/SharedBackgroundVideo";
import useSlideTimer from "./hooks/useSlideTimer";
import { slides } from "./components/slides/SlidesConfig";
import videoBackground from "./assets/videos/shared-video.mp4";
import NextSlideButton from "./components/slides/NextSlideButton";

const App = () => {
  const { index, next } = useSlideTimer(slides.length);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <SharedBackgroundVideo videoSrc={videoBackground} />
      <div className="absolute inset-0 z-0" />
      <SlideRenderer index={index} slide={slides[index]} />

      {index < slides.length - 1 && (
        <NextSlideButton onClick={next} />
      )}
    </div>
  );
};

export default App;


