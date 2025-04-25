// type SharedBackgroundVideoProps = {
//     videoSrc: string;
// };

const SharedBackgroundVideo = ({ videoSrc }: { videoSrc: string }) => {
    return (
        <video
            className="w-full h-full object-cover fixed inset-0 -z-10"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
        />
    );
};


export default SharedBackgroundVideo;
