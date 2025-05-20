// import Header from "../header/Header";
import giftImage from "/src/assets/images/phone-parents-wallpaper.png";

function ParentsWallpaper() {
    return (
        <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${giftImage})` }}
        >
            {/* <section className="absolute top-47 left-0 right-0">
                <ParentInformation />
            </section> */}

            {/* <div className="absolute bottom-35 left-0 right-0">
                <Header />
            </div> */}

        </div>
    );
}

export default ParentsWallpaper;
