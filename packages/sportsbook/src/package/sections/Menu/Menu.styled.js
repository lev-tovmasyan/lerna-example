import styled, { css } from 'styled-components';

export const Menu__styled = styled.div`
  width: 100%;
  border-radius: 0.375rem;
  background-color: var(--color-active-contrast);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      border-radius: 0;
      @media screen and (max-width: 1024px) {
        margin-top: 0;
      }
    `}
`;

export const MenuHead__styled = styled.div`
  padding: 0.75rem;
  width: 100%;
  font-size: 1.125rem;
  font-weight: 800;
  color: var(--color-active);
  white-space: nowrap;
  text-align: start;
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-background-dark);

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      background-color: #e8b116;
      color: #000000;
      font-weight: 700;
      font-size: 1rem;
      border-bottom: none;
    `}
`;

export const MenuBody__styled = styled.div`
  width: 100%;
`;

export const MenuSportList__styled = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const MenuOpenSvg__styled = styled.svg`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  fill: var(--color-sport-icon);
`;

export const MenuLive__styled = styled.span`
  margin-right: 0.5rem;
  padding: 0.2rem 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1rem;
  font-size: 0.69rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-active-contrast);
  background-color: var(--color-active);
  border-radius: 3.125rem;
  line-height: 0;

  ${props =>
    props.theme.mode === 'starsBet' &&
    css`
      padding: 0 0.25rem;
      background: red;
      border-radius: 2px;
      color: #ffffff;
      font-weight: 500;
    `}
`;

export const MenuCenter__styled = styled.span`
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  text-align: left;
  flex-shrink: 0;
`;

export const MenuLeft__styled = styled(MenuCenter__styled)`
  flex-grow: 1;
  flex-shrink: 1;
  padding-right: 0.25rem;
`;

export const MenuOpenIcon__styled = styled(({ ...props }) => (
  <span {...props} />
))`
  width: 0.875rem;
  height: 0.875rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transform: rotate(${props => (props.open ? '180deg' : '0')});
  transition: 0.2s;
  flex-shrink: 0;
`;
