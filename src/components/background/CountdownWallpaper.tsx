// src/components/background/GiftListWallpaper.tsx
import CountdownComponentV1 from "../countdown/CountdownComponentV1";
import giftImage from "/src/assets/images/phone-countdown-wallpaper.jpg";

function CountdownWallpaper() {
    return (
        <section
            className="w-full h-full flex items-end justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${giftImage})` }}
        >
            <div className="mb-[-8%] sm:mb-[10%]">
                <CountdownComponentV1 />
            </div>
        </section>
    );
}



export default CountdownWallpaper;
