import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const libraries = ["places"];

const Map = () => {
  const center = {
    lat: 23.8103,
    lng: 90.4125,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
    libraries,
    version: "weekly",
  });

  return (
    <div className="py-5" style={{ height: "100%", width: "100%" }}>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={9}
          options={{
            fullscreenControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControlOptions: false,
            zoomControl: true,
          }}
        >
          <Marker position={center} draggable />
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
