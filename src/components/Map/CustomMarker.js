import React from 'react';
import { Marker } from 'react-leaflet';
import L from 'leaflet';

const createCustomIcon = (selected) => {
  return L.divIcon({
    className: 'custom-icon',
    html: `
      <div style="
        background-color: #f27b2a;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid white;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        transform: ${selected ? 'scale(1.2)' : 'scale(1)'};
        transition: transform 0.3s ease;
      ">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M22 9.5C22 10.5 21.8 11.4 21.5 12.2C21.1 13.1 20.6 13.9 19.9 14.6C19.2 15.3 18.4 15.8 17.5 16.2C16.7 16.5 15.8 16.7 14.8 16.7C13.9 16.7 13 16.5 12.2 16.2C11.4 15.9 10.6 15.4 9.9 14.7L2 22L9.3 14.1C10 14.8 10.8 15.3 11.6 15.6C12.4 15.9 13.3 16.1 14.3 16.1C15.3 16.1 16.2 15.9 17 15.6C17.8 15.3 18.6 14.8 19.3 14.1C20 13.4 20.5 12.6 20.8 11.8C21.1 11 21.3 10.1 21.3 9.1C21.3 8.1 21.1 7.2 20.8 6.4C20.5 5.6 20 4.8 19.3 4.1C18.6 3.4 17.8 2.9 17 2.6C16.2 2.3 15.3 2.1 14.3 2.1C13.3 2.1 12.4 2.3 11.6 2.6C10.8 2.9 10 3.4 9.3 4.1L2 11.8L9.9 4.1C10.6 3.4 11.4 2.9 12.2 2.6C13 2.3 13.9 2.1 14.8 2.1C15.8 2.1 16.7 2.3 17.5 2.6C18.4 3 19.2 3.5 19.9 4.2C20.6 4.9 21.1 5.7 21.5 6.6C21.8 7.4 22 8.3 22 9.5Z"/>
        </svg>
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 15]
  });
};

const CustomMarker = ({ position, selected, onClick }) => {
  return (
    <Marker
      position={position}
      icon={createCustomIcon(selected)}
      eventHandlers={{
        click: onClick
      }}
    />
  );
};

export default CustomMarker;