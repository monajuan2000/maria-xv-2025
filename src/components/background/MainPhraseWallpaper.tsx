import PersonalDescription from "../main/PersonalDescription";
import giftImage from "/src/assets/images/phone-mainphrase-wallpaper.png";

function MainPhraseWallpaper() {
    return (
        <section className="relative w-full h-full overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{ backgroundImage: `url(${giftImage})` }}
            />

            <div className="relative z-10 mt-60">
                <PersonalDescription />
            </div>
        </section>
    );
}

export default MainPhraseWallpaper;
