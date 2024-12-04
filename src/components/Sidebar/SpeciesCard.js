const SpeciesCard = ({ species }) => {
    if (!species) return null;
  
    return (
        <div className="species-card">
        <div className="species-card-header">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: '#c40909' }}>
                    1
                </div>
                <h2 className="text-lg font-bold text-white">LITORAL DE {species.regionName}</h2>
            </div>
        </div>

    <div className="species-card-content">
  
        {/* Conteúdo principal */}
        <div className="p-4 space-y-3"> {/* Reduzido de space-y-4 para space-y-3 */}
          {/* Nome da espécie */}
          <div>
            <h3 className="text-xl font-bold text-white">{species.name}</h3>
            <p className="text-sm italic text-white/80">{species.latinName}</p>
            <p className="text-sm font-bold" style={{ color: '#c40909' }}>VENENOSO</p>
          </div>
  
          {/* Imagem */}
          <div className="bg-white/10 rounded-lg p-2">
            <img 
              src={species.imagePath} 
              alt={species.name}
              className="w-full h-32 object-cover rounded"
            />
          </div>
  
          {/* Descrição */}
          <p className="text-sm text-white/90">
            {species.description}
          </p>
  
          {/* O que fazer */}
          <div>
            <h4 className="text-sm font-bold text-white mb-2">O que fazer ?</h4>
            <ul className="space-y-2">
              {species.steps.map((step, index) => (
                <li 
                  key={index} 
                  className="p-2 rounded text-sm" // Reduzido padding
                  style={{ backgroundColor: '#c40909' }}
                >
                  {step}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Nível de Perigo */}
          <div className="flex justify-between items-center py-2">
            <div>
              <p className="text-xs text-white/80">NÍVEL DE</p>
              <p className="text-sm font-bold text-white">PERIGO:</p>
            </div>
            <div 
              className="text-5xl font-bold" // Reduzido de text-6xl
              style={{ color: '#c40909' }}
            >
              {species.dangerLevel}
            </div>
          </div>
  
          {/* Unidades de Saúde */}
          <div>
            <h4 className="text-sm font-bold text-white mb-1">UNIDADES DE SAÚDE PRÓXIMAS:</h4>
            <div className="bg-white/10 rounded p-1 h-24"> {/* Reduzida altura */}
              <img 
                src={species.healthUnitsMap}
                alt="Mapa de Unidades de Saúde"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
    </div>

    </div>
    );
  };

export default SpeciesCard;