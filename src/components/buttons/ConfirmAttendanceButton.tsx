export default function ConfirmAttendanceButton() {
    return (
        <a
            // href="https://wa.me/573245769762?text=%C2%A1Hola!%20Confirmo%20mi%20asistencia%20a%20los%20XV%20de%20Mar%C3%ADa%20Alejandra.%20Mi%20nombre%20es%20%5BTu%20Nombre%5D%20y%20asistir%C3%A9%20con%20%5BCantidad%20de%20Acompa%C3%B1antes%5D.%20Gracias%20por%20la%20invitaci%C3%B3n%20y%20nos%20vemos%20pronto!"
            href="https://wa.me/573224653059?text=%C2%A1Hola!%20Confirmo%20mi%20asistencia%20a%20los%20XV%20de%20Mar%C3%ADa%20Alejandra.%20Mi%20nombre%20es%20%5BTu%20Nombre%5D%20y%20asistir%C3%A9%20con%20%5BCantidad%20de%20Acompa%C3%B1antes%5D.%20Gracias%20por%20la%20invitaci%C3%B3n%20y%20nos%20vemos%20pronto!"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group mt-8 px-6 py-3 rounded-2xl text-2xl font-bold text-center text-pink-300 text-shadow-soft border border-pink-300 transition-all duration-300 overflow-hidden hover:text-white hover:shadow-xl active:scale-95"
        >
            {/* Soft pink glowing overlay on hover */}
            <span className="absolute inset-0 bg-pink-300 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></span>

            {/* Blurred border glow effect */}
            <span className="absolute inset-0 border-2 border-pink-300 rounded-2xl group-hover:blur-md group-hover:opacity-30"></span>

            {/* Main link text */}
            <span className="relative z-10">CONFIRM VIA WHATSAPP</span>
        </a>
    );
}
