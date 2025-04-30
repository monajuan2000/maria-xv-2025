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


// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { LatLngExpression } from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// export default function OpenStreetMapLeaflet() {
//     const center: LatLngExpression = [4.576945, -74.498091];

//     return (
//         <div
//             style={{
//                 width: '100vw',
//                 height: '100vh',
//                 margin: '0',
//                 padding: '0',
//                 position: 'relative',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//             }}
//         >
//             <div
//                 style={{
//                     width: '90vmin',
//                     height: '90vmin',
//                     borderRadius: '50%',
//                     overflow: 'hidden',
//                     border: '4px solid white',
//                 }}
//             >
//                 <MapContainer
//                     center={center}
//                     zoom={15}
//                     style={{ height: '100%', width: '100%' }}
//                     scrollWheelZoom={true}
//                     doubleClickZoom={true}
//                     dragging={true}
//                     zoomControl={true}
//                 >
//                     <TileLayer
//                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                         attribution='&copy; OpenStreetMap contributors'
//                     />
//                     <Marker position={center}>
//                         <Popup>Colombia</Popup>
//                     </Marker>
//                 </MapContainer>
//             </div>
//         </div>
//     );
// }
