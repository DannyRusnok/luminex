import * as React from 'react';

export type HeartIconProps = {
  color?: string;
  filled?: boolean;
};

export const HeartIcon: React.FC<HeartIconProps> = ({ color = 'currentColor', filled = false }) => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    {filled ? (
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill={color}
      />
    ) : (
      <path
        d="M16.5 3c-1.74 0-3.41 0.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
    )}
  </svg>
);
