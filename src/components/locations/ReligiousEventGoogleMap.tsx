import ConfirmAttendanceButton from "../buttons/ConfirmAttendanceButton";
import Header from "../header/Header";
import CastleFrame from "./CastleMap";

export default function ReligiousEventGoogleMap() {
    return (
        <section className="mt-20">
            <Header />
            <br />

            <section className="flex justify-center">
                <span className="text-center inline-block italic text-italic-custom font-sans font-semibold text-black-300">
                    Recepción:
                </span>
            </section>

            <section className="flex justify-center">
                <p>
                    <span className="text-center inline-block italic text-italic-custom font-sans text-black-300">
                        Parroquia Madre Del Divino Niño,
                    </span>
                    <span className="block text-center ">Calle 75C No. 97-10.</span>
                    <span className="text-center block text-sm text-black-300">Hora: 16:00, 4pm</span>
                </p>

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

                <CastleFrame>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3664544724097!2d-74.11486652396562!3d4.706243895268782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b52a002c3a7%3A0xe6e91ac648e17e67!2sParroquia%20Madre%20Del%20Divino%20Ni%C3%B1o!5e0!3m2!1sen!2sco!4v1747428566713!5m2!1sen!2sco"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                </CastleFrame>
            </section>



            <section className="m-4 flex justify-center">
                <span className="text-2xl font-bold text-center text-pink-500 text-shadow-soft">
                    <ConfirmAttendanceButton />
                </span>
            </section>



        </section>
    );
}
