import styled, { css } from 'styled-components';

export const MatchTracker__styled = styled.div`
  width: 100%;
  /* height: 100%; */

  ${props =>
    props.skeleton &&
    css`
      height: 12rem;
      border-radius: 0.375rem;
    `}
`;
