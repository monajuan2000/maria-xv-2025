// src/components/background/BackgroundVideo.tsx
import './backgroundVideo.css'

type BackgroundVideoProps = {
    videoSrc: string;
};

function BackgroundVideo({ videoSrc }: BackgroundVideoProps) {
    return (
        <div className="absolute w-full h-full overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover brightness-105"
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support HTML5 videos.
            </video>
        </div>
    );
}

export default BackgroundVideo;
