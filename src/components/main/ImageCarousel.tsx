import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../header/Header';

const images = [
    '/maria-xv-2025/images/cinderella-princess1.jpeg',
    '/maria-xv-2025/images/alejas-photo1.png',
    '/maria-xv-2025/images/cinderella-princess2.jpeg',
    '/maria-xv-2025/images/alejas-photo2.jpeg',
    '/maria-xv-2025/images/cinderella-princess3.jpeg',
    '/maria-xv-2025/images/alejas-photo3.jpeg',
];


export default function ImageCarousel() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (

        <div className="p-4 relative w-3/3 h-[60vh] mx-auto overflow-hidden rounded-2xl shadow-lg">
            <Header />
            <br />

            <motion.img
                key={current}
                src={images[current]}
                alt="carousel"
                initial={{ opacity: 0.5, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg w-full h-full object-cover"
            />


            {/* Botones */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded-full"
            >
                ◀
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded-full"
            >
                ▶
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${index === current ? 'bg-white' : 'bg-gray-400'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}


