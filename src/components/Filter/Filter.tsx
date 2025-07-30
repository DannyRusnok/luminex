import React, { useEffect, useState } from 'react';
import { sanityClient } from '../../sanityClient';
import { FilterWrapper, CheckboxLabel } from './styled';

export default function Filter() {
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
      setTags(uniqueTags);
    }
    fetchTags();
  }, []);

  return (
    <FilterWrapper>
      {tags.map((tag) => (
        <CheckboxLabel key={tag}>
          <input type="checkbox" id={tag} name={tag} />
          <span>#{tag}</span>
        </CheckboxLabel>
      ))}
    </FilterWrapper>
  );
}
