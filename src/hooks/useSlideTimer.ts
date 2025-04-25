// useSlideTimer.ts
import { useState, useEffect } from "react";

const useSlideTimer = (slidesLength: number, durations: number[]) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const duration = durations[index] || 3000;

        // Se establece un setTimeout con la duración actual
        const timeout = setTimeout(() => {
            // Cambiar el índice basado en el anterior
            setIndex((prev) => (prev < slidesLength - 1 ? prev + 1 : 0));
        }, duration);

        // Limpiar el timeout al desmontarse o cambiar el índice
        return () => clearTimeout(timeout);
    }, [index, slidesLength, durations]);

    return index;
};

export default useSlideTimer;
