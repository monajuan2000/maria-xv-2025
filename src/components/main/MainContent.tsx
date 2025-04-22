function MainContent() {
    return (
        <section >
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 backdrop-blur-lg rounded-2xl shadow-lg">
                <div className="text-gray-800 font-serif text-lg leading-relaxed whitespace-pre-line">
                    <span className="font-bold text-xl block mb-4">Queridos amigos y familia,</span>

                    Es un honor para mí y mi familia compartir con ustedes un momento tan especial en mi vida.
                    Han sido años llenos de aprendizajes, risas y experiencias inolvidables, y ahora llega el
                    momento de celebrar un nuevo capítulo: <strong>mis 15 años</strong>.

                    Me encantaría contar con tu presencia en esta noche mágica, llena de alegría, amor y sorpresas.
                    Será una celebración única en la que disfrutaremos juntos de buena música, una cena especial y,
                    sobre todo, momentos inolvidables con las personas que más quiero.

                    💌 <strong className="block mt-4">Confirma tu asistencia</strong>{"\n"}
                    Para ayudarnos con la organización, te agradecería mucho si puedes confirmar tu asistencia lo antes posible.
                    Solo haz clic en el siguiente botón y envíame un mensaje por WhatsApp:


                    <strong className="block mt-4">🎁 Lista de regalos</strong>{"\n"}
                    Si deseas regalarme algo especial, he creado una pequeña lista de ideas que me encantaría recibir.
                    Puedes verla aquí: [Enlace a la lista de regalos]


                    {/* Lista de regalos */}
                    <div className="p-4 rounded-xl bg-transparent shadow-md border border-gray-200">
                        <h3 className="font-semibold text-rose-600">🎁 Lista de regalos</h3>
                        <a
                            href="https://enlace-a-tu-lista.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-rose-600 underline hover:text-rose-800"
                        >
                            Ver aquí
                        </a>
                    </div>

                    <span className="block mt-4">Espero verte en esta celebración tan especial. Gracias por ser parte de mi vida y por acompañarme en este día tan importante.</span>

                    <span className="block mt-4">¡Nos vemos pronto para celebrar juntos! 🎊</span>

                    <span className="block mt-4 text-right font-bold">Con cariño,<br />María Alejandra Amaya Díaz</span>
                </div>
            </div>
        </section>
    );
}

export default MainContent;
