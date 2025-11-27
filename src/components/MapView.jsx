import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Vite-friendly imports for marker icons
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl
});

export default function MapView(){
  const position = [16.44, 80.62];

  return (
    <section id="map" className="py-5 bg-dark">
      <div className="container">
        <h2 className="text-center mb-4 text-light">Interactive Map</h2>
        <div id="map-container">
          <MapContainer center={position} zoom={13} style={{height:'450px', borderRadius:15}}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>KL University - Nearby Homestay Available</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
