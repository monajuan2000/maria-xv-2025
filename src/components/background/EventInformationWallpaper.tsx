// src/components/background/GiftListWallpaper.tsx
import giftImage from "/src/assets/images/phone-event-information-wallpaper.png";

function EventInformationWallpaper() {
    return (
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${giftImage})` }}>

        </div>
    );
}

export default EventInformationWallpaper;
