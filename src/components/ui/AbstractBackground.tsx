"use client";

import React from 'react';

const AbstractBackground: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      <div
        className="absolute w-72 h-72 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-50 blur-3xl animate-pulse"
        aria-hidden="true"
      ></div>
      <div
        className="absolute w-72 h-72 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full opacity-50 blur-3xl animate-pulse delay-2000"
        style={{ top: '50%', left: '50%', transform: 'translate(-30%, -30%)' }}
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default AbstractBackground;
