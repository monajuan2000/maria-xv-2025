// components/slides/SlideRenderer.tsx
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideRendererProps {
    index: number;
    slide: ReactNode;
}

const SlideRenderer = ({ index, slide }: SlideRendererProps) => {
    return (
        <div className="relative z-10 w-full h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="w-full h-full flex items-center justify-center"
                >
                    {slide}
                </motion.div>
            </AnimatePresence>
        </div>

    );
};

export default SlideRenderer;
