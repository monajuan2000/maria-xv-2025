// App.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SharedBackgroundVideo from "./components/background/SharedBackgroundVideo";
import WallpaperInitialCover from "./components/background/WallpaperInitialCover";
import videoBackground from "./assets/videos/shared-video.mp4";
import wallpaperInitialCover from "./assets/videos/wallpaper-initial-cover.mp4";
import phoneFinalWallpaper from "./assets/videos/phone-final-wallpaper.mp4";
import CountdownComponentV1 from "./components/countdown/CountdownComponentV1";
import CountdownComponentV2 from "./components/countdown/CountdownComponentV2";
import LocationGoogleMap from "./components/locations/LocationGoogleMap";
import OpenStreetMapLeaflet from "./components/locations/OpenStreetMapLeaflet";
import GiftListWallpaper from "./components/background/GiftListWallpaper";
import FinalWallpaper from "./components/background/FinalWallpaper";


// Duraciones personalizadas por slide
const slideDurations = [5000, 3000, 3000, 4000, 4000, 5000, 3000, 4000];
// const testVideo = "https://www.w3schools.com/html/mov_bbb.mp4";

// Lista de componentes a mostrar
const slides = [
  <WallpaperInitialCover videoSrc={wallpaperInitialCover} />,
  <CountdownComponentV1 />,
  <CountdownComponentV1 />,
  <CountdownComponentV2 />,
  <LocationGoogleMap />,
  <OpenStreetMapLeaflet />,
  <GiftListWallpaper />,
  <FinalWallpaper videoSrc={phoneFinalWallpaper} />,
];

const App = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const duration = slideDurations[index] || 3000;
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
    }, duration);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 🎥 Video único compartido */}
      <div className="fixed inset-0 -z-10 pointer-events-none">

        {/* <BackgroundVideo videoSrc={testVideo} videoBackground/> */}

        <SharedBackgroundVideo videoSrc={videoBackground} />
      </div>

      {/* Capa oscura opcional */}
      <div className="absolute inset-0  z-0" />

      {/* Componente animado actual */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
            className="w-full h-full flex items-center justify-center"
          >
            {slides[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;


