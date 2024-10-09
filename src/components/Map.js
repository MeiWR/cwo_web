import React from "react";
import { MapContainer, Marker, Popup, TileLayer,} from "react-leaflet";

export default function Map() {
  return (
    <MapContainer center={[49.1785, 16.5687]} zoom={14} scrollWheelZoom={false} dragging={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        
      />
      <Marker position={[49.1785, 16.5687]}>
        <Popup>
            Fakulta sportovních studií MU
        </Popup>
      </Marker>
    </MapContainer>
  );
}