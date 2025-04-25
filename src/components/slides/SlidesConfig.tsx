// SlidesConfig.ts
import { ReactNode } from "react";

import WallpaperInitialCover from "../background/WallpaperInitialCover";
import wallpaperInitialCover from "../../assets/videos/wallpaper-initial-cover.mp4";
import CountdownComponentV1 from "../countdown/CountdownComponentV1";
import CountdownComponentV2 from "../countdown/CountdownComponentV2";
import LocationGoogleMap from "../locations/LocationGoogleMap";
import OpenStreetMapLeaflet from "../locations/OpenStreetMapLeaflet";
import GiftListWallpaper from "../background/GiftListWallpaper";
import FinalWallpaper from "../background/FinalWallpaper";
import phoneFinalWallpaper from "../../assets/videos/phone-final-wallpaper.mp4";



const slides: ReactNode[] = [
  <WallpaperInitialCover videoSrc={wallpaperInitialCover} />,
  <CountdownComponentV1 />,
  <CountdownComponentV2 />,
  <LocationGoogleMap />,
  <OpenStreetMapLeaflet />,
  <GiftListWallpaper />,
  <FinalWallpaper videoSrc={phoneFinalWallpaper} />,
];

const slideDurations: number[] = [3000, 3000, 3000, 3000, 3000, 3000, 5000];

export { slides, slideDurations };
