import React from "react";
import { MapContainer, TileLayer,  Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Marker } from 'react-leaflet/Marker'
export const MapView = ({lat,lng}) => {

  return (
    <>
     
        <MapContainer
          center={[lat, lng]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[lat, lng]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      
    </>
  );
};
