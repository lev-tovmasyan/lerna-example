import styled, { css } from 'styled-components';

export const MenuCountry__styled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const MenuCountryList__styled = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const MenuCountryItem__styled = styled.li`
  width: 100%;
  cursor: pointer;
  //background-color: var(--color-betslip-bg);
  background-color: var(--color-third);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #515151;
    `}
`;

export const MenuCountryInner__styled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--color-betslip-bg);
  border-bottom: 1px solid var(--color-background-dark);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      border-bottom: 1px solid #bbbbbb;
      background-color: rgb(81, 81, 81);
    `}
`;

export const MenuCountrySelect__styled = styled.div`
  width: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuCountryCheckbox__styled = styled.div`
  padding: 0.25rem;
  width: 1.75rem;
  height: 1.75rem;
  flex-shrink: 0;
`;

export const MenuCountryInfo__styled = styled.div`
  width: ${props => (props.isSingleEvent ? '100%' : 'calc(100% - 3.2rem)')};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuCountryButton__styled = styled.button`
  padding: ${props =>
    props.isSingleEvent ? '0.5rem' : '0.5rem 0.5rem 0.5rem 0'};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export const MenuCountryIcon__styled = styled.span`
  margin-right: 0.5rem;
  width: 1.19rem;
  height: 1.19rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
`;

export const MenuCountryImg__styled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const MenuCountryText__styled = styled.span`
  //display: flex;
  //align-items: center;
  //justify-content: flex-start;
  //flex-grow: 1;
  //flex-wrap: nowrap;
  //white-space: nowrap;
  //overflow: hidden;
  //text-overflow: ellipsis;
  //text-transform: capitalize;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-text);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      font-weight: 400;
    `}
`;
