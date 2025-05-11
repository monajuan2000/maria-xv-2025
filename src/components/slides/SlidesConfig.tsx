// SlidesConfig.ts
import { ReactNode } from "react";

import WallpaperInitialCover from "../background/WallpaperInitialCover";
import wallpaperInitialCover1 from "../../assets/videos/wallpaper-initial-cover1.mp4";
import wallpaperInitialCover2 from "../../assets/videos/wallpaper-initial-cover2.mp4";
import CountdownComponentV1 from "../countdown/CountdownComponentV1";
import CountdownComponentV2 from "../countdown/CountdownComponentV2";
import LocationGoogleMap from "../locations/LocationGoogleMap";
// import OpenStreetMapLeaflet from "../locations/OpenStreetMapLeaflet";
// import GodparentInformation from "../main/GodparentInformation";
// import ParentInformation from "../main/ParentInformation";
import GiftListWallpaper from "../background/GiftListWallpaper";
import FinalWallpaper from "../background/FinalWallpaper";
import phoneFinalWallpaperVideo1 from "../../assets/videos/phone-final-wallpaper-video1.mp4";
import ImageCarousel from "../main/ImageCarousel";
import PersonalDescription from "../main/PersonalDescription";
import ParentsWallpaper from "../background/ParentsWallpaper";
import EventInformationWallpaper from "../background/EventInformationWallpaper";



const slides: ReactNode[] = [
  <WallpaperInitialCover videoSrc={wallpaperInitialCover1} />,
  <WallpaperInitialCover videoSrc={wallpaperInitialCover2} />,
  <ImageCarousel />,
  <PersonalDescription />,
  <ParentsWallpaper />,
  <EventInformationWallpaper />,
  <CountdownComponentV1 />,
  <CountdownComponentV2 />,
  <LocationGoogleMap />,
  <FinalWallpaper videoSrc={phoneFinalWallpaperVideo1} />,
  // <EventInformation />,
  // <ParentInformation />,
  // <GodparentInformation />,
  // <OpenStreetMapLeaflet />,
  <GiftListWallpaper />,
];

const slideDurations: number[] = [
  // 3000,
  // 3000,
  // 5000,
  // 3000,
  // 3000,
  // 3000,
  // 3000,
  // 3000,
  // 5000,
  // 5000,
  // 5000
];

export { slides, slideDurations };
