// WallpaperInitialCover.tsx
type WallpaperInitialCoverProps = {
    videoSrc: string;
};

const WallpaperInitialCover = ({ videoSrc }: WallpaperInitialCoverProps) => {
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

export default WallpaperInitialCover;
