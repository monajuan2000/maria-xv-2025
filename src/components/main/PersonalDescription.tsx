// src/components/PersonalDescription.tsx
// import MisQuince from "../header/MisQuince";
import TextWithAnimation from "./TextWithAnimation";

const PersonalDescription = () => {
    const personalDescription = `
    Tal y como salido de un cuento de hadas,
                  el sueño del libro de cuentos finalmente 
                  se hace realidad.
                  Yo, Alejandra Amaya 
                  junto a mi familia requerimos el honor
                  de su presencia en mi fiesta de 15 años.
                  Con la bendición y el cuidado 
                  de mi familia expresare mis
                  sentimientos ante Dios al convertirme 
                  en toda una señorita.
                  `;
    const myBirthday = `
    Mis Quince Años
                  `;

    return (
        <div className="">

            <section className="mb-8">
                <span className="text-2lg font-bold text-slate-600">
                    <TextWithAnimation text={personalDescription} />
                </span>
            </section>

            <section className="flex justify-center">
                <h1 className="inline-block font-decorative text-4xl font-semibold text-gray-200 italic text-italic-custom relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0c0c0] via-[#e0e0e0] to-[#c0c0c0] bg-[length:200%_auto] animate-shimmer absolute inset-0">
                        <TextWithAnimation text={myBirthday} />
                    </span>
                    <span className="text-outline text-glow relative">
                        <TextWithAnimation text={myBirthday} />
                    </span>
                </h1>
            </section>

        </div>
    );

};

export default PersonalDescription;
