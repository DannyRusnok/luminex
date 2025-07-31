import React, { useEffect, useState } from 'react';
import { sanityClient } from '../../sanityClient';
import { FilterWrapper, DropdownSelect } from './styled';

interface FilterProps {
  selectedTags: string[];
  onChange: (tags: string[]) => void;
}

export default function Filter({ selectedTags, onChange }: FilterProps) {
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    async function fetchTags() {
      const query = `*[_type == "imageAsset"]{tags}`;
      const data = await (sanityClient as any).fetch(query);
      const allTags: string[] = [];
      data.forEach((item: any) => {
        if (Array.isArray(item.tags)) {
          item.tags
            .filter((tag: string) => tag && tag.trim() !== '')
            .forEach((tag: string) => allTags.push(tag));
        }
      });
      const uniqueTags = Array.from(new Set(allTags));
      uniqueTags.sort((a, b) => a.localeCompare(b));
      setTags(uniqueTags);
    }
    fetchTags();
  }, []);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === '') {
      onChange([]);
    } else {
      onChange([value]);
    }
  };

  return (
    <FilterWrapper>
      <DropdownSelect value={selectedTags[0] || ''} onChange={handleSelectChange}>
        <option value="">All</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </DropdownSelect>
    </FilterWrapper>
  );
}
