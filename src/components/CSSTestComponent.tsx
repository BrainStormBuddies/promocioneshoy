import React from 'react';

const CSSTestComponent = () => {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-4xl font-bold text-red-500">🔴 BASIC TAILWIND TEST</h1>
      <p className="text-blue-500 text-xl">If this text is BLUE and large, Tailwind is working!</p>

      {/* Very basic Tailwind test */}
      <div className="bg-red-500 text-white p-4 rounded">
        🔴 RED BACKGROUND - Basic Tailwind
      </div>

      <div className="bg-blue-500 text-white p-4 rounded">
        🔵 BLUE BACKGROUND - Basic Tailwind
      </div>

      <div className="bg-green-500 text-white p-4 rounded">
        🟢 GREEN BACKGROUND - Basic Tailwind
      </div>

      {/* Custom color test */}
      <div className="bg-primary text-primary-foreground p-4 rounded">
        🟢 CUSTOM PRIMARY COLOR (should be your green theme)
      </div>

      <div className="border-4 border-red-500 p-4">
        🔴 RED BORDER TEST
      </div>

      <div className="border border-gray-300 bg-white p-4 rounded">
        ✅ STANDARD BORDER TEST (using border-gray-300 instead of border-border)
      </div>

      {/* Grid test */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-yellow-400 p-2 text-center">Grid 1</div>
        <div className="bg-purple-400 p-2 text-center">Grid 2</div>
        <div className="bg-pink-400 p-2 text-center">Grid 3</div>
      </div>

      <div className="text-center mt-8">
        <p className="text-lg font-semibold">
          ✅ If you see colors above, Tailwind is working!
        </p>
        <p className="text-sm text-gray-600">
          ❌ If everything is black/white, Tailwind CSS is not loading
        </p>
      </div>
    </div>
  );
};

export default CSSTestComponent;
