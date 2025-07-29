import * as React from 'react';

export type CloseIconProps = {
  color?: string;
};

export const CloseIcon: React.FC<CloseIconProps> = ({ color = 'currentColor' }) => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <line x1="12" y1="12" x2="36" y2="36" stroke={color} strokeWidth="4" />
      <line x1="36" y1="12" x2="12" y2="36" stroke={color} strokeWidth="4" />
    </svg>
  );
};
