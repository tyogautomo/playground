/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import Header from '../../modules/Header';
import markerImage from './assets/marker.png';
import { Container, Title, MapWrapper, CustomMarker, CustomMarkerShadow, ResultContainer, ResultTitle, Coords, CurrentLocationBtn } from './styles';

const MapGoogle = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedCoords, setSelectedCoords] = useState(null);

  const map = useRef(null);

  const onDragEnd = (args) => {
    setSelectedCoords(args.center);
  };

  const onClickLocate = () => {
    if (map.current) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          map.current.panTo({ lat: latitude, lng: longitude });
          setSelectedCoords({ lat: latitude, lng: longitude });
        });
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    };
  };

  return (
    <Container>
      <Header>Map Google</Header>
      <Title>Tentukan Titik Pengantaran</Title>
      <MapWrapper>
        <Map
          map={map}
          onDragEnd={onDragEnd}
          setIsDragging={setIsDragging}
          setSelectedCoords={setSelectedCoords}
        >
        </Map>
        <CustomMarker src={markerImage} alt="marker" isDragging={isDragging} draggable={false} />
        <CustomMarkerShadow isDragging={isDragging} />
        <CurrentLocationBtn onClick={onClickLocate}>Lokasi saat ini</CurrentLocationBtn>
      </MapWrapper>
      {selectedCoords && (
        <ResultContainer>
          <ResultTitle>Koordinat:</ResultTitle>
          <Coords>{selectedCoords.lat} (latitude)</Coords>
          <Coords>{selectedCoords.lng} (longitude)</Coords>
        </ResultContainer>
      )}
    </Container>
  );
};

const Map = ({ map: mapRef, setIsDragging, onDragEnd: dragEnd, setSelectedCoords }) => {
  const [myLocation, setMyLocation] = useState({ lat: -6.200000, lng: 106.81666 });
  const { isLoaded, loadError } = useJsApiLoader({
    // fill this key
    googleMapsApiKey: '',
  });

  const map = useRef(null);

  useEffect(() => {
    getLocation();
  }, []);

  const onLoad = (instance) => {
    map.current = instance;
    mapRef.current = instance;
    const { center } = map.current;
    setSelectedCoords({ lat: center.lat(), lng: center.lng() });
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  const showPosition = (position) => {
    const { latitude, longitude } = position.coords;
    setMyLocation({ lat: latitude, lng: longitude });
    setSelectedCoords({ lat: latitude, lng: longitude });
  };

  const onDragEnd = (e) => {
    const lat = map.current.center.lat();
    const lng = map.current.center.lng();
    setIsDragging(false);
    dragEnd({
      center: { lat, lng },
    })
  }

  if (loadError) {
    return <div>Map cannot be loaded, SORRY!</div>
  }
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        width: '100%',
        height: '400px'
      }}
      options={{
        fullscreenControl: false,
      }}
      zoom={16}
      onLoad={onLoad}
      center={myLocation}
      onDragEnd={onDragEnd}
      clickableIcons={false}
      onDragStart={() => setIsDragging(true)}
    >
      { /* Child components, such as markers, info windows, etc. */}
      <>
        <div>AAAAA</div>
      </>
    </GoogleMap>
  ) : <div>Loading...</div>
};

export { MapGoogle };
