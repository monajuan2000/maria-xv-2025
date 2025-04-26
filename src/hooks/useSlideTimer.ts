// // hooks/useSlideTimer.ts
// import { useState, useEffect, useCallback } from "react";

// const useSlideTimer = (
//     slidesLength: number,
//     durations: number[],
//     isPaused: boolean
// ) => {
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         if (isPaused) return;

//         const duration = durations[index] || 3000;

//         const timeout = setTimeout(() => {
//             setIndex((prev) => (prev < slidesLength - 1 ? prev + 1 : prev));
//         }, duration);

//         return () => clearTimeout(timeout);
//     }, [index, slidesLength, durations, isPaused]);

//     const next = useCallback(() => {
//         setIndex((prev) => (prev < slidesLength - 1 ? prev + 1 : prev));
//     }, [slidesLength]);

//     return { index, next };
// };

// export default useSlideTimer;


// hooks/useSlideTimer.ts
import { useState, useCallback } from "react";

const useSlideTimer = (slidesLength: number) => {
    const [index, setIndex] = useState(0);

    const next = useCallback(() => {
        setIndex((prev) => (prev < slidesLength - 1 ? prev + 1 : prev));
    }, [slidesLength]);

    return { index, next };
};

export default useSlideTimer;
