// src/components/PersonalDescription.tsx
import MisQuince from "../header/MisQuince";
// import TextWithAnimation from "./TextWithAnimation";

const PersonalDescription = () => {
    const text = `Tal y como salido de un cuento de hadas,
                el sueño del libro de cuentos finalmente 
                    se hace realidad.
                    Yo, Alejandra Amaya junto a mi familia 
                    requerimos el honor
                    de su presencia en mi fiesta de 15 años.
                    Con la bendición y el cuidado de mi familia 
                    expresare mis
                    sentimientos ante Dios al convertirme en toda 
                    una señorita.`;

    return (
        <div >
            <section className="flex justify-center">
                <span className="m-4 text-2xl text-center font-bold text-pink-300 text-shadow-soft">
                    {text}
                </span>
            </section>
            <br />
            {/* <section>
                <TextWithAnimation text={text} />
            </section> */}
            <section className="flex justify-center">
                <MisQuince />
            </section>

        </div>

    );
};

export default PersonalDescription;
