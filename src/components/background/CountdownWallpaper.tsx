// src/components/background/GiftListWallpaper.tsx
import CountdownComponentV1 from "../countdown/CountdownComponentV1";
import giftImage from "/src/assets/images/phone-countdown-wallpaper.jpg";

function CountdownWallpaper() {
    return (
        <section
            className="relative w-full h-full flex items-end justify-center bg-cover bg-center"
        >
            <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{ backgroundImage: `url(${giftImage})` }}
            />
            <div className="relative z-10 mb-[-8%] sm:mb-[10%]">
                <CountdownComponentV1 />
            </div>
        </section>
    );
}



export default CountdownWallpaper;
