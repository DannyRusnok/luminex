import * as React from 'react';

export type ArrowUpIconProps = {
  color?: string;
};

export const ArrowUpIcon: React.FC<ArrowUpIconProps> = ({ color = 'currentColor' }) => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <polyline
      points="6 14 12 8 18 14"
      fill="none"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
