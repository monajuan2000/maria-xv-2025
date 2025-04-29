export default function MisQuince() {
    return (
        <h1 className="relative inline-block font-decorative text-5xl font-semibold text-gray-200 italic text-italic-custom">
            {/* Primer Span - Efecto de brillo animado */}
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-[#c0c0c0] via-[#e0e0e0] to-[#c0c0c0] bg-[length:200%_auto] animate-shimmer">
                Mis Quince Años
            </span>

            {/* Segundo Span - Texto visible con contorno oscuro */}
            <span className="relative text-outline text-glow">Mis Quince Años</span>
        </h1>
    );
}
