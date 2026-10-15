import React from 'react';

interface IslamicPatternProps {
  variant?: 'light' | 'dark' | 'subtle';
  opacity?: number;
  patternType?: 'star8' | 'girih' | 'arabesque';
  className?: string;
}

export const IslamicPattern: React.FC<IslamicPatternProps> = ({
  variant = 'light',
  opacity = 0.04,
  patternType = 'star8',
  className = '',
}) => {
  const strokeColor =
    variant === 'dark' ? '#D4AF37' : variant === 'subtle' ? '#0A3826' : '#C5A059';

  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id={`pattern-${patternType}-${variant}`}
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* 8-pointed Islamic Star Geometry */}
            <path
              d="M 40,10 L 47,25 L 62,18 L 55,33 L 70,40 L 55,47 L 62,62 L 47,55 L 40,70 L 33,55 L 18,62 L 25,47 L 10,40 L 25,33 L 18,18 L 33,25 Z"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1.2"
            />
            <circle cx="40" cy="40" r="14" fill="none" stroke={strokeColor} strokeWidth="0.8" />
            <circle cx="40" cy="40" r="6" fill="none" stroke={strokeColor} strokeWidth="0.6" />
            <path
              d="M 0,0 L 20,20 M 80,0 L 60,20 M 0,80 L 20,60 M 80,80 L 60,60"
              stroke={strokeColor}
              strokeWidth="0.8"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#pattern-${patternType}-${variant})`}
        />
      </svg>
    </div>
  );
};
