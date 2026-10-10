

import React from "react";

const CurvedDivider = () => {
  return (
    <div
      className="relative w-full z-20"
      style={{ height: "120px", marginTop: "-60px", pointerEvents: "none" }}
    >
      <svg
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Line gradient: red left → pink/purple right */}
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#a00000" />
            <stop offset="40%"  stopColor="#e50914" />
            <stop offset="70%"  stopColor="#c2185b" />
            <stop offset="100%" stopColor="#7b1fa2" />
          </linearGradient>

          {/* Bowl fill — subtle purple, original jesa */}
          <radialGradient id="bowlGrad" cx="50%" cy="0%" r="70%" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="#5b21b6" stopOpacity="0.45" />
            <stop offset="50%"  stopColor="#3730a3" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0"    />
          </radialGradient>

          {/* Soft glow on line */}
          <filter id="glow" x="-5%" y="-400%" width="110%" height="900%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Filled bowl — flatter curve, longer, sides start from edges */}
        <path
          d="M80,95 Q400,48 720,45 Q1040,48 1360,95 L1440,120 L0,120 Z"
          fill="url(#bowlGrad)"
        />

        {/* Glow halo */}
        <path
          d="M80,95 Q400,48 720,45 Q1040,48 1360,95"
          stroke="url(#lineGrad)"
          strokeWidth="3.5"
          fill="none"
          filter="url(#glow)"
          opacity="0.4"
        />

        {/* Sharp thin main line */}
        <path
          d="M80,95 Q400,48 720,45 Q1040,48 1360,95"
          stroke="url(#lineGrad)"
          strokeWidth="1.3"
          fill="none"
          opacity="1"
        />
      </svg>
    </div>
  );
};

export default CurvedDivider;