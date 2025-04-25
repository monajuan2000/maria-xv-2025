// WallpaperInitialCover.tsx
type FinalWallpaperProps = {
    videoSrc: string;
};

const FinalWallpaper = ({ videoSrc }: FinalWallpaperProps) => {
    return (
        <video
            className="w-full h-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
        />
    );
};

export default FinalWallpaper;
