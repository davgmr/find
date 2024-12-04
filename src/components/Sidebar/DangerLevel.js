import React from 'react';

const DangerLevel = ({ level }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <p className="text-sm">NÍVEL DE</p>
        <p className="font-bold">PERIGO:</p>
      </div>
      <div className="text-6xl font-bold" style={{ color: '#c40909' }}>
        {level}
      </div>
    </div>
  );
};

export default DangerLevel;