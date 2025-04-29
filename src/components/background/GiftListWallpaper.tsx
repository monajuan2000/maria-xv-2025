// src/components/background/GiftListWallpaper.tsx
import giftImage from "/src/assets/images/phone-last-wallpaper.jpg";

function GiftListWallpaper() {
    return (
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${giftImage})` }}>
            {/* Puedes añadir contenido aquí si quieres (como un mensaje final o botón) */}
        </div>
    );
}

export default GiftListWallpaper;
