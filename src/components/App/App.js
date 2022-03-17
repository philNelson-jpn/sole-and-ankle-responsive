import React from 'react';
import styled from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

import { QUERIES } from '../../constants';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  /* @media ${QUERIES.laptopAndSmaller}{
    background: hsl(0deg 20% 80%);
  }

  @media ${QUERIES.tabletAndSmaller}{
    background: hsl(0deg 10% 70%);
  }

  @media ${QUERIES.phoneAndSmaller}{
    background: hsl(0deg 5% 60%);
  } */
`;

export default App;
