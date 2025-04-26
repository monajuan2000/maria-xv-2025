import Header from "../header/Header";

export default function LocationGoogleMap() {
    return (
        <div className="w-full h-[400px]">
            <Header />
            <span>Recepcion
                CLUB MOM ART
                PASAJE LXXXXXXX
                XXXXXXXXXXXX</span>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d438024.1620822586!2d-74.49809160931113!3d4.576945351412021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b500305e907%3A0x5fa67e144bb766b6!2sSede%20Social%20La%20Salina!5e0!3m2!1sen!2sco!4v1744346388810!5m2!1sen!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                //allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <span>CONFIRMAR ASiSTENCIA</span>
        </div>
    );
}
