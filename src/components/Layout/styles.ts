import styled from 'styled-components';

// ML - Menu List
// MA - Main
// NW - News

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 71px auto 440px;
  grid-template-rows: 46px auto 52px;

  grid-template-areas:
    'ML MA NW'
    'ML MA NW';

  height: 100vh;
`;
