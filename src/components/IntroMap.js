
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";
export default function IntroMap({ introitem }) {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.MAP_API_KEY,

  });


  if (!isLoaded) return <div>Loading...</div>;
  return <Map ltt={introitem} />;
}

function Map({ ltt }) {
  const a = ltt;
  
  switch (a) {
    case 1: {
      var center = {
        lat: 23.55,
          lng: 119.6,
      }
      break; 
    }
    case 2: {
      center = {
        lat: 23.55,
          lng: 119.6,
      }
      break;
    }
    case 3: {
      center = {
        lat: 22.65,
          lng: 121.45,
      }
      break;
    }
    case 4: {
      center = {
        lat: 22.65,
          lng: 121.45,
      }
      break;
    }
    case 5: {
      center = {
        lat: 22.34,
          lng: 120.35,
      }
      break;
    }
    case 6: {
      center = {
        lat: 22.34,
        lng: 120.35,
      }
      break;
    }
    case 7: {
      center = {
        lat: 22.04,
          lng: 121.5,
      }
      break;
    }
    case 8: {
      center = {
        lat: 22.04,
        lng: 121.5,
      }
      break;
    }
    default: {
      break;
    }
  }
  return (
    <div>
      <GoogleMap zoom={13.2} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
      </GoogleMap>
    </div>

  );
}