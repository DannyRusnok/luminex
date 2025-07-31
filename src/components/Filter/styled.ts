import styled from 'styled-components';
import { luminexTheme } from '../../theme';

export const FilterWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px 24px;
  justify-items: center;
  align-items: center;
  border: 1px solid #9c27b0;
  border-radius: 4px;
  background-color: #f3e5f5;
  padding: 28px 24px 28px 24px;

  @media (min-width: ${luminexTheme.breakpoints.mobile}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${luminexTheme.breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FilterContainer = styled.div`
  width: 100%;
`;

export const ToggleButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${luminexTheme.colors.primary};
  color: ${luminexTheme.colors.white};
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 12px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  text-align: left;
  justify-content: flex-start;

  input[type='checkbox'] {
    width: 1.25em;
    height: 1.25em;
    accent-color: ${luminexTheme.colors.primary};
    border-radius: 5px;
    margin: 0;
    vertical-align: middle;
    transition: box-shadow 0.2s;
    box-shadow: 0 0 0 1.5px ${luminexTheme.colors.primaryLight};
    flex-shrink: 0;
  }
`;
