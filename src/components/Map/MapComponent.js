import React from 'react';
import { MapContainer, TileLayer, Popup } from 'react-leaflet';
import CustomMarker from './CustomMarker';
import MarkerPopup from './MarkerPopup';

const MapComponent = ({ species, selectedSpecies, onSpeciesSelect }) => {
  return (
    <MapContainer
     center={[-2.5297, -44.3024]}
     zoom={11}
     className="h-[500px] w-full" 
     zoomControl={false}
     style={{ background: '#e5f2f9' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      
      {species.map((specie) => (
        <CustomMarker
          key={specie.id}
          position={[specie.location.lat, specie.location.lng]}
          selected={selectedSpecies?.id === specie.id}
          onClick={() => onSpeciesSelect(specie)}
        >
          <Popup>
            <MarkerPopup species={specie} />
          </Popup>
        </CustomMarker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;