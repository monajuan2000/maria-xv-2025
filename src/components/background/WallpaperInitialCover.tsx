// WallpaperInitialCover.tsx
type WallpaperInitialCoverProps = {
    videoSrc: string;
};

const WallpaperInitialCover = ({ videoSrc }: WallpaperInitialCoverProps) => {
    return (
        <video
            className="opacity-80 w-full h-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
        />
    );
};

export default WallpaperInitialCover;
