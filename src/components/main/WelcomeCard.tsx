function WelcomeCard() {
    return (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 backdrop-blur-lg rounded-2xl shadow-lg">
            {/* Imagen de portada */}
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg mb-6">
                <img
                    src="src/assets/images/aleja's-photo.png"
                    alt="Foto de María Alejandra"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Título */}
            <h1 className="font-vibes text-6xl text-blue-700 drop-shadow-md tracking-wide">
                Ariana
            </h1>


            {/* Texto de bienvenida */}
            <p className="mt-6 text-center text-gray-700 max-w-2xl text-base md:text-lg">
                Queridos amigos y familia, es un honor para mí compartir con ustedes este momento tan especial. Estoy muy feliz de celebrar junto a ustedes mis 15 años, un nuevo capítulo lleno de sueños, amor y alegría.
            </p>

            {/* Detalles del evento */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-8 mt-10 w-full max-w-2xl">
                {/* Evento */}
                <article className="p-4 rounded-xl bg-white/30 shadow-md border border-gray-200 backdrop-blur-sm">
                    <h3 className="font-semibold text-sky-600 mb-2">🎉 Evento</h3>
                    <p className="text-sm text-gray-700">
                        Martes 18 de mayo 2024 <br />
                        Barrio La Salina Calle 71 No. 93-05 <br />
                        6:00 PM
                    </p>
                </article>

                {/* Dress code */}
                <article className="p-4 rounded-xl bg-white/30 shadow-md border border-gray-200 backdrop-blur-sm">
                    <h3 className="font-semibold text-pink-600 mb-2">💃 Dress code</h3>
                    <p className="text-sm text-gray-700">
                        Ellas: Bellas 💄 <br />
                        Ellos: Elegantes 🤵 <br />
                        (Evitemos el color azul)
                    </p>
                </article>

                {/* Confirmar asistencia */}
                <div className="md:col-span-2">
                    <div className="bg-[#D6457A] p-4 rounded-xl text-white text-center shadow-md hover:brightness-110 transition">
                        <a
                            href="https://wa.me/123456789"
                            className="font-semibold text-lg hover:underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Confirmar Asistencia
                        </a>
                    </div>
                </div>
            </div>

            {/* Mensaje final */}
            <p className="mt-10 text-center text-gray-600 text-sm">
                ¡Espero verte pronto para celebrar juntos! <br />
                Con cariño, <strong>María Alejandra Amaya Díaz</strong>
            </p>
        </div>
    );
}

export default WelcomeCard;