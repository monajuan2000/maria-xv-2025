// src/App.tsx

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WelcomeCard from "./components/main/WelcomeCard";
import CountdownComponentV1 from "./components/countdown/CountdownComponentV1";
import CountdownComponentV2 from "./components/countdown/CountdownComponentV2";
import MainContent from "./components/main/MainContent";
import BackgroundVideo from "./components/background/BackgroundVideo";
import backgroundVideo1 from "./assets/videos/phone-main-wallpaper1.mp4"
import backgroundVideo2 from "./assets/videos/phone-main-wallpaper2.mp4"
import LocationGoogleMap from "./components/locations/LocationGoogleMap";
import OpenStreetMapLeaflet from "./components/locations/OpenStreetMapLeaflet";

// import Slide1 from "./components/Slide1";
// import Slide2 from "./components/Slide2";
// Agrega más slides según lo necesites

const slideDurations = [
  10000, // 5 segundos para WelcomeCard
  10000, // 2 segundos para MainContent
  4000, // etc...
  3000,
  3000,
  4000,
  4000,
];

const slides = [
  <BackgroundVideo videoSrc={backgroundVideo1} />,
  <WelcomeCard />,
  < MainContent />,
  < CountdownComponentV1 />,
  < CountdownComponentV2 />,
  <LocationGoogleMap />,
  <OpenStreetMapLeaflet />,
]; // Puedes agregar hasta Slide15

function App() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const duration = slideDurations[index] || 3000; // fallback de 3s si no hay duración definida

    const timeout = setTimeout(() => {
      setIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
    }, duration);

    return () => clearTimeout(timeout);
  }, [index]); // 👈 se ejecuta cada vez que cambia el índice


  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      {/* 🎥 Fondo compartido persistente */}
      <div className="absolute inset-0 z-0">
        <BackgroundVideo videoSrc={backgroundVideo2} />
      </div>

      {/* 🎞 Slides por encima del fondo */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            className="w-full h-full"
          >
            {slides[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;