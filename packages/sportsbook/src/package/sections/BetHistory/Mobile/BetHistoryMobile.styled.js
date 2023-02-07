import styled, { css } from 'styled-components';

export const Wrapper__styled = styled.div`
  width: 100%;
  height: calc(100% - 3.06rem);
  overflow-y: auto;
`;
export const Tabs__styled = styled.div`
  display: flex;
  background-color: var(--color-betslip-bg);
  //border: 2px solid var(--color-background);
`;
export const Tab__styled = styled.button`
  width: 100%;
  height: 2.25rem;
  font-size: 0.75rem;
  color: var(--color-text);
  background-color: var(--sb-dark-five);
  border: none;
  padding: 0;
  text-transform: capitalize;
  ${({ active }) =>
    active &&
    css`
      background-color: var(--sb-dark-four);
      color: var(--color-active);
    `}
`;

export const List__styled = styled.div``;
export const ShowMore__styled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--sb-light);
  text-transform: capitalize;
  background-color: var(--sb-dark-five);
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  border: none;
  margin: 0 auto 3rem;
`;

export const Item__styled = styled.div`
  margin-bottom: 0.5rem;
`;

export const Head__styled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.2rem;
  padding: 0 1rem;
  background-color: var(--color-second);
  font-size: 0.875rem;
  color: var(--color-active);
`;
export const HeadId__styled = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  text-transform: uppercase;
`;
export const HeadIdCircle__styled = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: var(--color-active);
  border-radius: 50%;
  margin-right: 0.5rem;
`;

export const HeadStatus__styled = styled.div`
  text-transform: capitalize;
`;
export const Body__styled = styled.div`
  background-color: var(--color-betslip-bg);
  padding: 0.25rem 1rem;
  font-size: 0.75rem;
`;
export const BodyRow__styled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-text);
  padding: 0.25rem 0;
  text-transform: capitalize;

  ${({ success }) =>
    success &&
    css`
      & > span:nth-child(2) {
        color: var(--color-increment);
      }
    `}
`;

export const Games__styled = styled.div``;

export const Game__styled = styled.div`
  color: var(--sb-light);
`;
export const GameHead__styled = styled.div`
  background-color: var(--color-second);
  font-size: 0.625rem;
  color: var(--color-text);
  padding: 0.25rem 1rem;
  text-align: center;
`;
export const GameBody__styled = styled(Body__styled)``;
export const GameStatusIcon__styled = styled.span`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const GameInfo__styled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const GameTeamIcon__styled = styled.svg`
  display: flex;
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  fill: white;
`;
export const GameTeams__styled = styled.div`
  flex-grow: 1;
`;
export const GameTeam__styled = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  flex-grow: 1;
`;
export const GameTeamScoreItem__styled = styled.span`
  display: inline-block;
  color: var(--sb-active-color);
  padding-right: 0.25rem;
  font-size: 0.875rem;
  font-weight: 700;
`;

export const GameTeamScore__styled = styled.span`
  display: flex;
  align-items: center;
`;

export const GameDate__styled = styled.div`
  font-size: 0.625rem;
`;

export const Collapse__styled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--sb-light);
  text-transform: capitalize;
  background-color: var(--color-inactive);
  padding: 0.5rem;
  font-size: 0.875rem;
`;
export const CollapseIcon__styled = styled.div`
  display: flex;
  margin-left: 0.5rem;
  svg {
    width: 0.75rem;
    height: 0.75rem;
    fill: var(--sb-light);
    transform: scaleY(-1);
    transition: var(--sb-transition);
  }

  ${({ active }) =>
    active &&
    css`
      svg {
        transform: scaleY(1);
      }
    `}
`;

export const Cashout__styled = styled.div`
  padding: 1rem 2rem;
  //background-color: var(--bx-gray4);
`;
export const CashoutButton__styled = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  height: calc(2.18rem + 2px);
  background-color: var(--color-active);
  border: none;
  color: var(--am-white);
  border-radius: 0.187rem;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;

  & > button {
    & > span {
      font-size: 0.875rem;
      text-transform: uppercase;
    }
  }
`;

export const Pagination__styled = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
`;

export const PaginationItem__styled = styled.button`
  padding: 0.25rem 2rem;
  border: none;
  background-color: var(--sb-dark-one);

  &:disabled {
    opacity: 0.7;
  }

  &:first-child {
    margin-right: 1rem;
  }
`;
