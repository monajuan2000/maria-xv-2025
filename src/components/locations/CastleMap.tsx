import React from 'react';

interface CastleFrameProps {
    children: React.ReactNode;
}

const CastleFrame: React.FC<CastleFrameProps> = ({ children }) => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen p-6s scale-60">
            {/* Castillo */}
            <div className="relative w-[500px] h-[500px] bg-gray-200 border-[6px] border-gray-900 shadow-2xl rounded-b-md overflow-hidden">
                {/* Base */}
                <div className="absolute bottom-[-20px] left-0 w-full h-6 bg-gray-900 z-10 rounded-b-md" />

                {/* Torres laterales */}
                <div className="absolute -top-12 left-0 w-16 h-52 bg-gray-300 border-4 border-gray-900 rounded-t-md z-20 shadow-md">
                    {/* Techo triangular */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-0 h-0 
                        border-l-[16px] border-r-[16px] border-b-[24px] 
                        border-l-transparent border-r-transparent border-b-blue-600" />
                </div>
                <div className="absolute -top-12 right-0 w-16 h-52 bg-gray-300 border-4 border-gray-900 rounded-t-md z-20 shadow-md">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-0 h-0 
                        border-l-[16px] border-r-[16px] border-b-[24px] 
                        border-l-transparent border-r-transparent border-b-blue-600" />
                </div>

                {/* Muralla central */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-24 bg-gray-400 border-4 border-gray-900 rounded-t-md z-10 shadow-inner">
                    {/* Almenas */}
                    <div className="flex justify-between px-1 absolute top-0 left-0 right-0">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="w-4 h-4 bg-gray-900" />
                        ))}
                    </div>
                </div>

                {/* Contenido interior */}
                <div className="absolute top-28 bottom-24 left-6 right-6 bg-white border-2 border-gray-300 rounded-md p-2 shadow-inner z-0 overflow-hidden flex items-center justify-center">
                    {children}
                </div>

                {/* Puerta */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-24 bg-gray-500 border-[6px] border-gray-900 rounded-t-full z-20 shadow-md" />
            </div>

            {/* Botón externo */}
            {/* <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
                Entrar al castillo
            </button> */}
        </section>
    );
};

export default CastleFrame;
