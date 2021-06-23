import React from 'react';
import Main from '../Main';
import MenuList from '../MenuList';
import News from '../News';

import { Grid } from './styles';

const Layout: React.FC = () => {
  return (
    <Grid>
      <MenuList />
      <Main />
      <News />
    </Grid>
  );
};

export default Layout;
