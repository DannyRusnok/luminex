import * as React from 'react';

export type ArrowUpIconProps = {
  color?: string;
};

export const ArrowUpIcon: React.FC<ArrowUpIconProps> = ({ color = 'currentColor' }) => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 4l-8 8h5v8h6v-8h5l-8-8z" fill={color} />
  </svg>
);
