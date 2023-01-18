
import L from 'leaflet'
import { MapContainer, TileLayer,  Popup ,Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from '../assets/icon-location.svg'

const GetIcon = () =>{

  return L.icon( 
    {
    iconUrl: (icon),

  })
}


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
          <Marker position={[lat, lng]} icon={GetIcon()}>
            <Popup>
              La ubicacion es {lat} {lng}. <br /> .
            </Popup>
          </Marker>
        </MapContainer>
      
    </>
  );
};
