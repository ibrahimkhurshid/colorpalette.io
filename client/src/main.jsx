import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [colors, setColors] = useState(['#FF5733', '#33FF57', '#3357FF', '#F333FF']);

  const generatePalette = () => {
    // Placeholder logic for random generation
    const newColors = Array(4).fill('').map(() => '#' + Math.floor(Math.random()*16777215).toString(16));
    setColors(newColors);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">colorpalette.io</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 w-full max-w-4xl">
        {colors.map((color, index) => (
          <div 
            key={index}
            className="h-48 rounded-lg shadow-md flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
            style={{ backgroundColor: color }}
            onClick={() => navigator.clipboard.writeText(color)}
          >
            <span className="bg-white px-2 py-1 rounded text-sm font-mono shadow-sm">{color}</span>
          </div>
        ))}
      </div>

      <button 
        onClick={generatePalette}
        className="px-6 py-3 bg-black text-white rounded-full font-semibold shadow-lg hover:bg-gray-800 transition-colors"
      >
        Generate New Palette
      </button>
      
      <p className="mt-4 text-gray-500">Click a color to copy hex code</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
