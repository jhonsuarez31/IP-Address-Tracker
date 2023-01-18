import React, { useState } from "react";
import { Header } from "./components/Header";
import { useFetch } from "./hooks/useFetch";
import { MapView } from "./components/MapView";
import { Card } from "./components/Card";

const API_KEY = import.meta.env.VITE_SOME_KEY
console.log(API_KEY)
export const AddressTrackerApp = () => {

  const [searchIP, setsearchIP] = useState("0");

  const [haveLine, setHaveLine] = useState(false)
  const onNewIP = (newIP) => {
    setsearchIP(newIP);
  };

  const { data, isLoading } = useFetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_Uu9f3xbpkQcDpTzDVzVOGIndcbT5h&ipAddress=${searchIP}`,
    []
  );
  return (
    <>  

      <Header onNewIP={(e) => onNewIP(e)} />
      
      {isLoading ? (
        <div>Cargando</div>
        
      ) : (
        <>
        <div className="card-conatiner">
          <Card title="IP ADDRESS" message={data.ip} haveLine  />
          <Card title="LOCATION" message={ [data.location.city,',', data.location.region] } haveLine />
          <Card title="TIME ZONE" message={`UTC ${data.location.timezone}`} haveLine />
          <Card title="I S P" message={data.isp} haveLine={false} />
        </div>
        <MapView lat= {data.location.lat} lng = {data.location.lng} />
        </>
      )}
    </>
  );
};
