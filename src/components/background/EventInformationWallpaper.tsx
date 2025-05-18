// src/components/background/GiftListWallpaper.tsx
import giftImage from "/src/assets/images/phone-event-information-wallpaper.png";

function EventInformationWallpaper() {
    return (
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${giftImage})` }}>
            {/* <div className="absolute top-47 left-0 right-0">
                <Header />
            </div> */}
        </div>
    );
}

export default EventInformationWallpaper;
