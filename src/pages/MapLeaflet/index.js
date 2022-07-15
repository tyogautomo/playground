/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import { Helmet } from 'react-helmet';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';

import Header from '../../modules/Header';
import pinImage from './assets/marker.png';
import { Container, GlobalStyles, Title, MapWrapper, Shadow, Coords, ResultTitle, ResultContainer, CurrentLocationBtn } from './styles';

const MapLeaflet = () => {
  const [selectedCoords, setSelectedCoords] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const onEnd = (coords) => {
    setSelectedCoords(coords);
  };

  return (
    <Container>
      <Helmet>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
          integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
          crossorigin="" />
        <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
          integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
          crossorigin=""></script>
      </Helmet>
      <Header>Map Leaflet</Header>
      <Title>Tentukan Titik Pengantaran</Title>

      {/* MAPS */}
      <MapWrapper>
        <GlobalStyles />
        <MapContainer center={[-6.200000, 106.816666]} zoom={16} scrollWheelZoom moveEnd={() => console.log('testsa')}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapMarker onEnd={onEnd} isDragging={isDragging} setDragging={setIsDragging} />
          <CurrentLocBtn />
        </MapContainer>
        <Shadow isDragging={isDragging} />
      </MapWrapper>

      {selectedCoords && (
        <ResultContainer>
          <ResultTitle>Koordinat:</ResultTitle>
          <Coords>{selectedCoords[0]} (latitude)</Coords>
          <Coords>{selectedCoords[1]} (longitude)</Coords>
        </ResultContainer>
      )}
    </Container>
  );
};

const MapMarker = ({ onEnd, setDragging, isDragging }) => {
  const [position, setPosition] = useState([-6.200000, 106.816666]);

  const myIcon = new L.Icon({
    iconUrl: pinImage,
    iconRetinaUrl: pinImage,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -40],
    className: isDragging ? 'leaflet-iconz-hover' : 'leaflet-iconz'
  });

  const map = useMapEvents({
    move: () => {
      const { lat, lng } = map.getCenter();
      setPosition([lat, lng]);
    },
    zoom: () => {
      const { lat, lng } = map.getCenter();
      setPosition([lat, lng]);
    },
    locationfound: (loc) => {
      const { latitude, longitude } = loc;
      const myPosition = [latitude, longitude];
      setPosition(myPosition);
      map.setView(loc.latlng, 16, true);
    },
    moveend: () => {
      const { lat, lng } = map.getCenter();
      onEnd([lat, lng]);
      setDragging(false);
    },
    movestart: () => {
      setDragging(true);
    },
  });

  useEffect(() => {
    map.locate();
  }, []);

  return (
    <Marker icon={myIcon} position={position}>
      <Popup>
        Titik lokasi pengantaran
      </Popup>
    </Marker>
  )
};

const CurrentLocBtn = () => {
  const map = useMap();

  const onClick = () => {
    map.locate();
  };

  return (
    <CurrentLocationBtn onClick={onClick}>Lokasi saat ini</CurrentLocationBtn>
  );
};

export { MapLeaflet };
