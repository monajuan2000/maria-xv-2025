// hooks/useSlideTimer.ts
import { useState, useEffect, useCallback } from "react";

const useSlideTimer = (
    slidesLength: number,
    durations: Record<number, number>,
    autoAdvanceSlides: number[]
) => {
    const [index, setIndex] = useState(0);

    const next = useCallback(() => {
        setIndex((prev) => (prev < slidesLength - 1 ? prev + 1 : prev));
    }, [slidesLength]);

    useEffect(() => {
        if (!autoAdvanceSlides.includes(index)) return;

        const duration = durations[index] || 4000;
        const timer = setTimeout(() => {
            next();
        }, duration);

        return () => clearTimeout(timer);
    }, [index, durations, autoAdvanceSlides, next]);

    return { index, next };
};

export default useSlideTimer;
