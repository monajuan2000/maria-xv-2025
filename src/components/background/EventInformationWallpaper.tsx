// src/components/background/GiftListWallpaper.tsx
import giftImage from "/src/assets/images/phone-event-information-wallpaper.png";

function EventInformationWallpaper() {
    return (
        <div className="w-full h-full bg-cover bg-center">
            {/* <div className="absolute top-47 left-0 right-0">
                <Header />
            </div> */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{ backgroundImage: `url(${giftImage})` }}
            />
        </div>
    );
}

export default EventInformationWallpaper;
