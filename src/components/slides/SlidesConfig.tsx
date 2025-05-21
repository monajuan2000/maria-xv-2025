// SlidesConfig.ts
import { ReactNode } from "react";

import WallpaperInitialCover from "../background/WallpaperInitialCover";
import wallpaperInitialCover1 from "../../assets/videos/wallpaper-initial-cover1.mp4";
import wallpaperInitialCover2 from "../../assets/videos/wallpaper-initial-cover2.mp4";
import GiftListWallpaper from "../background/GiftListWallpaper";
import FinalWallpaper from "../background/FinalWallpaper";
import phoneFinalWallpaperVideo1 from "../../assets/videos/phone-final-wallpaper-video1.mp4";
import ParentsWallpaper from "../background/ParentsWallpaper";
import EventInformationWallpaper from "../background/EventInformationWallpaper";
import SalinaLocationGoogleMap from "../locations/SalinaLocationGoogleMap";
import ReligiousEventGoogleMap from "../locations/ReligiousEventGoogleMap";
import CountdownWallpaper from "../background/CountdownWallpaper";
import MainPhraseWallpaper from "../background/MainPhraseWallpaper";
import ImageCarouselWallpaper from "../background/ImageCarouselWallpaper";


const slides: ReactNode[] = [
  <WallpaperInitialCover videoSrc={wallpaperInitialCover1} />,
  <WallpaperInitialCover videoSrc={wallpaperInitialCover2} />,
  <ImageCarouselWallpaper />,
  <MainPhraseWallpaper />,
  <CountdownWallpaper />,
  <ParentsWallpaper />,
  <EventInformationWallpaper />,
  <ReligiousEventGoogleMap />,
  <SalinaLocationGoogleMap />,
  <FinalWallpaper videoSrc={phoneFinalWallpaperVideo1} />,
  <GiftListWallpaper />,

  // <CountdownComponentV2 />,
  // <EventInformation />,
  // <ParentInformation />,
  // <GodparentInformation />,
  // <OpenStreetMapLeaflet />,

];

const slideDurations: Record<number, number> = {
  1: 0,
  2: 7000,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 7000,
  11: 0,
};

export default slideDurations;


export { slides, slideDurations };



