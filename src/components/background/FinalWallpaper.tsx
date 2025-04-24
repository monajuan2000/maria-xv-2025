type BackgroundVideoProps = {
    videoSrc: string;
};

const BackgroundVideo = ({ videoSrc }: BackgroundVideoProps) => {
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

export default BackgroundVideo;
