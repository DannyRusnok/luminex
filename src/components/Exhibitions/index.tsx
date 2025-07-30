import React, { useEffect, useState } from 'react';
import {
  ExhibitionsSection,
  ExhibitionsTitle,
  ExhibitionsGrid,
  ExhibitionCard,
  ExhibitionImage,
  ExhibitionDate,
  ExhibitionDescription,
  ExhibitionAddress,
} from './styled';
import { sanityClient } from '../../sanityClient';

interface Exhibition {
  _id: string;
  name: string;
  description?: string;
  address?: string;
  dateOfExhibition?: string;
  photoUrl?: string;
}

export default function Exhibitions() {
  const [exhibitions, setExhibitions] = useState<Exhibition[]>([]);

  useEffect(() => {
    async function fetchExhibitions() {
      const query = `*[_type == "exhibition"]|order(dateOfExhibition desc){
        _id,
        name,
        description,
        address,
        dateOfExhibition,
        "photoUrl": photo.asset->url
      }`;
      const data = await (sanityClient as any).fetch(query);
      setExhibitions(data);
    }
    fetchExhibitions();
  }, []);

  return (
    <ExhibitionsSection id="exhibitions">
      <ExhibitionsTitle>VÝSTAVY</ExhibitionsTitle>
      <ExhibitionsGrid>
        {exhibitions.map((ex) => (
          <ExhibitionCard key={ex._id}>
            <h3>{ex.name}</h3>
            {ex.dateOfExhibition && (
              <ExhibitionDate>
                {new Date(ex.dateOfExhibition).toLocaleDateString('cs-CZ')}
              </ExhibitionDate>
            )}
            {ex.photoUrl && (
              <ExhibitionImage src={ex.photoUrl} alt={ex.name} loading="lazy" />
            )}
            {ex.description && (
              <ExhibitionDescription>{ex.description}</ExhibitionDescription>
            )}
            {ex.address && <ExhibitionAddress>{ex.address}</ExhibitionAddress>}
          </ExhibitionCard>
        ))}
      </ExhibitionsGrid>
    </ExhibitionsSection>
  );
}
