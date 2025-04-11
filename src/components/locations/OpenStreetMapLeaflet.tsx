import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet'; // Asegúrate de importar LatLngExpression
import 'leaflet/dist/leaflet.css';

export default function OpenStreetMapLeaflet() {
    const center: LatLngExpression = [4.576945, -74.498091]; // Coordenadas del centro

    return (
        <MapContainer
            center={center}
            zoom={13}
            style={{ height: '400px', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
            />
            <Marker position={center}>
                <Popup>
                    Sede Social La Salina <br /> Medellín, Colombia
                </Popup>
            </Marker>
        </MapContainer>
    );
}
