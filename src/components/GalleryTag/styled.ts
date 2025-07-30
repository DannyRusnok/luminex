import styled from 'styled-components';
import { luminexTheme } from '../../theme';

export const StyledGalleryTag = styled.span`
  background: ${luminexTheme.colors.primaryLight};
  color: ${luminexTheme.colors.primary};
  border-radius: 12px;
  padding: 4px 14px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-right: 0;
`;
