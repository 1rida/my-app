"use client";

import React, { useRef } from 'react';

const Wave = () => {
  const waveRef = useRef(null);

  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-transparent">
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1280 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={waveRef}
          d="M0,160 Q320,0 640,160 T1280,160 V320 H0 Z" // Very deep static wave path
          fill="currentColor"
          className="text-orange-500" // Wave color orange-500
        ></path>
      </svg>
    </div>
  );
};

export default Wave;
