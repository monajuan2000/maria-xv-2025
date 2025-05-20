// src/components/background/MainPhraseWallpaper.tsx
import PersonalDescription from "../main/PersonalDescription";
import giftImage from "/src/assets/images/phone-mainphrase-wallpaper.jpg";

function MainPhraseWallpaper() {
    return (
        <section
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${giftImage})` }}
        >
            <div className="mt-60">
                <PersonalDescription />
            </div>
        </section>
    );
}



export default MainPhraseWallpaper;
