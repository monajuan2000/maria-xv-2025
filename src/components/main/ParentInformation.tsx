import Header from "../header/Header";


function ParentInformation() {
    return (
        <section >
            <section className="">
                <span className="inline-block text-italic-custom italic font-sans text-xl font-semibold text-black-300">
                    Con amor y emoción,
                </span>
            </section>

            <br /><br />
            <section className="flex justify-center">
                <span className="text-2xl font-bold text-center text-pink-500 text-shadow-soft">
                    William Amaya Salamanca &
                </span>
            </section>
            <section className="flex justify-center">
                <span className="text-2xl font-bold text-center text-pink-500 text-shadow-soft">
                    Diana Carolina Díaz Peña
                </span>
            </section>
            <br /><br />
            <section className="flex">
                <span className="text-center inline-block italic text-italic-custom font-sans text-xl font-semibold text-black-300">
                    Te invitan a la fiesta de los
                    15 Años
                    de su amada
                </span>
            </section>
            <br /><br />
            <Header />
        </section>);
}

export default ParentInformation;