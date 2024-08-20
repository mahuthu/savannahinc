// src/components/UniqueSVG.js
import React from 'react';

const UniqueSVG = ({ svgData, fillColor }) => {
  // Generate unique IDs
  const uniqueId = `unique-${Math.random().toString(36).substr(2, 9)}`;
  const maskId = `mask-${uniqueId}`;
  const patternId = `pattern-${uniqueId}`;
  const imageId = `image-${uniqueId}`;

  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <mask
        id={maskId}
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
      >
        <rect width="48" height="48" fill={`url(#${patternId})`} />
      </mask>
      <g mask={`url(#${maskId})`}>
        <rect width="48" height="48" fill={fillColor} />
      </g>
      <defs>
        <pattern
          id={patternId}
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref={`#${imageId}`} transform="scale(0.00195312)" />
        </pattern>
        <image
          id={imageId}
          width="512"
          height="512"
          xlinkHref={svgData}
        />
      </defs>
    </svg>
  );
};

export default UniqueSVG;
