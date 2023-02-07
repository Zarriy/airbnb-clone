import { useState, useMemo } from "react";
import Map, { Marker } from "react-map-gl";
import { getCenter } from "geolib";
import { MapPinIcon } from "@heroicons/react/24/outline";

export default function Mapp({ searchResults }) {
  const coordinates = searchResults.map((item) => ({
    longitude: item.long,
    latitude: item.lat,
  }));

  const markers = useMemo(
    () =>
      coordinates.map((cord) => (
        <Marker
          key={cord.longitude}
          longitude={cord.longitude}
          latitude={cord.latitude}
        >
          <MapPinIcon className="h-5" />
        </Marker>
      )),
    [coordinates]
  );

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 8,
  });

  return (
    <Map
      mapStyle="mapbox://styles/sulem/cldts8kdp003301qmemce6p41"
      mapboxAccessToken={process.env.mapBox_key}
      style={{ width: 600, height: 600 }}
      initialViewState={viewport}
      onMove={(evt) => setViewport(evt.viewState)}
    ></Map>
  );
}
