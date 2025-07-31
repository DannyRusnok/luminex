import styled from 'styled-components';
import { luminexTheme } from '../../theme';

export const FilterWrapper = styled.section`
  border: 1px solid ${luminexTheme.colors.primary};
  border-radius: 4px;
  background-color: ${luminexTheme.colors.primaryLight};
  padding: 28px 24px;
  display: flex;
  justify-content: center;
`;

export const DropdownSelect = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid ${luminexTheme.colors.primary};
  border-radius: 4px;
  font-size: 18px;
`;
