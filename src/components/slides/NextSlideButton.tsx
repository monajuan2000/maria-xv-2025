import { FC } from "react";

interface NextSlideButtonProps {
    onClick: () => void;
}

const NextSlideButton: FC<NextSlideButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute bottom-6 right-6 z-20 bg-white/80 text-black px-4 py-2 rounded-2xl font-semibold shadow-lg hover:bg-white transition"
        >
            Siguiente
        </button>
    );
};

export default NextSlideButton;
