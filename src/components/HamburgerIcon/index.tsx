import React from 'react';

export type HamburgerIconProps = {
  color?: string;
};

export const HamburgerIcon: React.FC<HamburgerIconProps> = ({ color = 'currentColor' }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <line x1="8" y1="14" x2="40" y2="14" stroke={color} strokeWidth="4"/>
    <line x1="8" y1="24" x2="40" y2="24" stroke={color} strokeWidth="4"/>
    <line x1="8" y1="34" x2="40" y2="34" stroke={color} strokeWidth="4"/>
  </svg>
);
