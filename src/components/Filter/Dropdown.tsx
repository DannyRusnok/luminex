import React, { useState } from 'react';
import Filter from './Filter';
import { DropdownWrapper, ToggleButton } from './styled';

interface DropdownProps {
  selectedTags: string[];
  onChange: (tags: string[]) => void;
}

export default function Dropdown({ selectedTags, onChange }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownWrapper>
      <ToggleButton onClick={() => setOpen((o) => !o)}>
        {open ? 'Hide Filters' : 'Show Filters'}
      </ToggleButton>
      {open && <Filter selectedTags={selectedTags} onChange={onChange} />}
    </DropdownWrapper>
  );
}
