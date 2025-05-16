export default function Header() {
    return (
        // <h1 className="mt-8 text-7xl font-bold text-center text-pink-300 text-shadow-soft">
        //     {/* Welcome to María Alejandra's XV Birthday! */}
        //     Alejandra!
        // </h1>

        // <h1 className="mt-8 text-5xl font-bold text-center text-slate-600 text-shadow-soft italic">
        //     Alejandra!
        // </h1>

        <section className="flex justify-center">
            <h1 className="text-outline-gold inline-block font-decorative text-6xl font-semibold text-gray-200 italic text-italic-custom relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0c0c0] via-[#e0e0e0] to-[#c0c0c0] bg-[length:200%_auto] animate-shimmer absolute inset-0">
                    Alejandra!
                </span>
                <span className="text-outline text-glow relative">
                    Alejandra!
                </span>
            </h1>
        </section>

    );
}