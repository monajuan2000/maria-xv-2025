// src/components/background/GiftListWallpaper.tsx
import giftImage from "/src/assets/images/phone-parents-wallpaper.png";

function ParentsWallpaper() {
    return (
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${giftImage})` }}>

        </div>
    );
}

export default ParentsWallpaper;
