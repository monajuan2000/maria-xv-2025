// import Header from "../header/Header";
import giftImage from "/src/assets/images/phone-parents-wallpaper.png";

function ParentsWallpaper() {
    return (


        <section
            className="relative w-full h-full flex items-end justify-center bg-cover bg-center"
        >
            <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{ backgroundImage: `url(${giftImage})` }}
            />
            <div className="relative z-10 mb-[-8%] sm:mb-[10%]">

            </div>
        </section>
    );
}

export default ParentsWallpaper;
