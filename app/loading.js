

import React from 'react';

export default function Loading() {
  return (
    <div className="flex z-9999 justify-center items-center h-screen bg-black">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
        <p className="text-white text-lg bg-black font-medium">Please Wait</p>
      </div>
    </div>
  );
}
