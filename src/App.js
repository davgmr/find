import React, { useState } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import { Mail, Instagram } from 'lucide-react';
import MapComponent from './components/Map/MapComponent';
import SpeciesCard from './components/Sidebar/SpeciesCard';
import { speciesData } from './data/speciesData';
import './styles/custom.css';

const InvasiveSpeciesMap = () => {
 const [selectedSpecies, setSelectedSpecies] = useState(null);

 const handleSpeciesSelect = (species) => {
   setSelectedSpecies(species);
 };

 return (
  <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#224880' }}>
    {/* Header */}
    <header className="border-b border-opacity-20 border-white">
      <div className="container mx-auto px-4 py-3 flex items-center">
        <button 
          className="text-white px-6 py-2 rounded-md flex items-center mr-8"
          style={{ backgroundColor: '#f27b2a' }}
        >
          <span className="mr-2">🌎</span> TRANSLATE
        </button>

        <img 
          src="/images/logos/Findlogo.png" 
          alt="Logo" 
          className="h-24 mr-16" // Increased from h-16 to h-24
        />
        
        <nav className="hidden lg:flex flex-1 justify-center space-x-8">
          <button className="text-white hover:opacity-80">NOS CONHEÇA AGORA</button>
          <button className="text-white hover:opacity-80">O QUE É A FLL</button>
          <button className="text-white hover:opacity-80">MONTE O FIND</button>
          <button className="text-white hover:opacity-80">SEJA UM APOIADOR</button>
        </nav>
        
        <button 
          className="text-white px-6 py-2 rounded-md"
          style={{ backgroundColor: '#f27b2a' }}
        >
          CONTATO
        </button>
      </div>
    </header>

    {/* Main Content */}
    <main 
      className="flex-1 px-4 py-3"
      style={{ 
        backgroundImage: "url('/images/backgrounds/ocean-waves.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto">
        <div className="text-white mb-2">
          <h1 className="text-4xl font-bold">ESPÉCIES INVASORAS LOCALIZADAS</h1>
          <p className="text-xl">Litoral Maranhense - São Luis</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '500px' }}>
          <MapComponent 
            species={speciesData}
            selectedSpecies={selectedSpecies}
            onSpeciesSelect={handleSpeciesSelect}
          />
        </div>

  <div className="lg:w-[400px]">
    <SpeciesCard species={selectedSpecies || speciesData[0]} />
  </div>
</div>
      </div>
    </main>

    {/* Footer */}
    <footer className="border-t border-opacity-20 border-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center text-white">
          <Mail className="w-5 h-5 mr-2" />
          <span>Gipsydangersesi@gmail.com</span>
        </div>
        
        <div className="flex space-x-6"> {/* Increased space between logos */}
          {/* Logos dos parceiros - increased size from w-12 h-12 to w-20 h-20 */}
          <img src="/images/logos/partner1.png" alt="Parceiro 1" className="w-20 h-20" />
          <img src="/images/logos/partner2.png" alt="Parceiro 2" className="w-20 h-20" />
          <img src="/images/logos/partner3.png" alt="Parceiro 3" className="w-20 h-20" />
          <img src="/images/logos/partner4.png" alt="Parceiro 4" className="w-20 h-20" />
        </div>

        <div className="text-white">
          <Instagram className="w-6 h-6" />
        </div>
      </div>
    </footer>
  </div>
);
};

export default InvasiveSpeciesMap;