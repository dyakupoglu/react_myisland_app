import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import Header from './components/Header/Header';
import Places from './components/Places/Places';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + './assets/background.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Places />
    </div>
  );
}

export default App;
