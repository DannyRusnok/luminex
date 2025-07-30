import * as React from 'react';
import Filter from '../Filter/Filter';
import Gallery from '../Gallery/Gallery';
import { PortfolioTitle, PortfolioWrapper } from './styled';

export const Portfolio = () => {
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  return (
    <PortfolioWrapper id="gallery">
      <PortfolioTitle>PORTFOLIO</PortfolioTitle>
      <Filter selectedTags={selectedTags} onChange={setSelectedTags} />
      <Gallery selectedTags={selectedTags} />
    </PortfolioWrapper>
  );
};
