import TextWithAnimation from "../main/TextWithAnimation";

export default function Header() {
    const aleja = `Alejandra!`;
    return (
        <section className="flex justify-center" >
            <h1 className="inline-block font-decorative text-7xl font-semibold text-gray-100 italic text-italic-custom relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0c0c0] via-[#e0e0e0] to-[#c0c0c0] bg-[length:200%_auto] animate-shimmer absolute inset-0">
                    <TextWithAnimation text={aleja} animationTime={0.8} />
                </span>
                <span className="text-outline text-glow relative">
                    <TextWithAnimation text={aleja} animationTime={0.8} />
                </span>
            </h1>
        </section>
        //         <section className="flex justify-center">
        //     <h1 className="text-outline-gold inline-block font-decorative text-6xl font-semibold text-gray-200 italic text-italic-custom relative">
        //         <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0c0c0] via-[#e0e0e0] to-[#c0c0c0] bg-[length:200%_auto] animate-shimmer absolute inset-0">
        //             Alejandra!
        //         </span>
        //         <span className="text-outline text-glow relative">
        //             Alejandra!
        //         </span>
        //     </h1>
        // </section>

    );
}