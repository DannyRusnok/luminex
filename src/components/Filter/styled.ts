import styled from 'styled-components';
import { luminexTheme } from '../../theme';

export const FilterWrapper = styled.section`
  border: 1px solid ${luminexTheme.colors.primary};
  border-radius: 4px;
  background-color: ${luminexTheme.colors.primaryLight};
`;

export const ToggleButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 16px 24px;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: ${luminexTheme.colors.primary};
`;

export const ArrowIcon = styled.span<{ $open: boolean }>`
  display: flex;
  transition: transform 0.2s;
  transform: rotate(${({ $open }) => ($open ? '0deg' : '180deg')});
`;

export const TagsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px 24px;
  justify-items: center;
  align-items: center;
  padding: 0 24px 28px 24px;

  @media (min-width: ${luminexTheme.breakpoints.mobile}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${luminexTheme.breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }
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
