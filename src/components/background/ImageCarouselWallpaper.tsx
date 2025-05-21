// src/components/background/GiftListWallpaper.tsx
import ImageCarousel from "../main/ImageCarousel";
import giftImage from "/src/assets/images/phone-mainphrase-wallpaper.png";

function ImageCarouselWallpaper() {
    return (
        <section
            className="relative w-full h-full flex justify-center bg-cover bg-center"
        >
            <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{ backgroundImage: `url(${giftImage})` }}
            />
            <div className="mt-40 relative z-10 mb-[0%] sm:mb-[0%]">
                <ImageCarousel />
            </div>
        </section>
    );
}



export default ImageCarouselWallpaper;
