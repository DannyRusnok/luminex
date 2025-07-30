import React, { useEffect, useState } from 'react';
import { sanityClient } from '../../sanityClient';
import { FilterWrapper, CheckboxLabel } from './styled';

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

  const handleCheckboxChange = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onChange(selectedTags.filter((t) => t !== tag));
    } else {
      onChange([...selectedTags, tag]);
    }
  };

  return (
    <FilterWrapper>
      <TagsWrapper>
        {tags.map((tag) => (
          <CheckboxLabel key={tag}>
            <input
              type="checkbox"
              id={tag}
              name={tag}
              checked={selectedTags.includes(tag)}
              onChange={() => handleCheckboxChange(tag)}
            />
            <span>{tag}</span>
          </CheckboxLabel>
        ))}
      </TagsWrapper>
    </FilterWrapper>
  );
}
