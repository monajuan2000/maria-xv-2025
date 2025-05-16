import ConfirmAttendanceButton from "../buttons/ConfirmAttendanceButton";
import Header from "../header/Header";

export default function SalinaLocationGoogleMap() {
    return (
        <section >
            <Header />
            <br />

            <section className="flex justify-center">
                <span className="text-center inline-block italic text-italic-custom font-sans text-sm font-semibold text-black-300">
                    Recepcion:
                </span>
            </section>

            <section className="flex justify-center">

                <span className="text-center inline-block italic text-italic-custom font-sans text-sm text-black-300">
                    Sede social la Salina
                </span>
            </section>
            <br />
            <section

                style={{
                    width: '100vw',
                    height: '40vh',
                    margin: 0,
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        width: '90vmin',
                        height: '90vmin',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '4px solid white',
                    }}
                >

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.41354871314!2d-74.11504992396571!3d4.697993895277024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b500305e907%3A0x5fa67e144bb766b6!2sSede%20Social%20La%20Salina!5e0!3m2!1sen!2sco!4v1745978456664!5m2!1sen!2sco"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>


            <br />
            <section className="m-4 flex justify-center">
                <span className="text-2xl font-bold text-center text-pink-500 text-shadow-soft">
                    <ConfirmAttendanceButton />
                </span>
            </section>

        </section>
    );
}
