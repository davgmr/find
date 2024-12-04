import React from 'react';
import './MarkerPopup.css';

const MarkerPopup = ({ species }) => {
  return (
    <div className="custom-popup">
      <div className="popup-image-container">
        <img 
          src={species.imagePath} 
          alt={species.name} 
          className="popup-image"
        />
      </div>
      <div className="popup-content">
        <h3>{species.name}</h3>
        <p className="danger-tag">
          {species.isVenomous && 'VENENOSO'}
        </p>
        <p className="region">{species.regionName}</p>
      </div>
    </div>
  );
};

export default MarkerPopup;