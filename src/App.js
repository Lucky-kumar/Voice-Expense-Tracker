import React from 'react'
import { Grid } from '@material-ui/core';
import { PushToTalkButton,PushToTalkButtonContainer } from '@speechly/react-ui';
import Details from './components/Details/Details';
import Main from './components/Main/Main';

import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    
    return (
      <div>
        <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
          <Grid item sm={12} lg={4} className={classes.mobile}>
            <Details title="Income" />
          </Grid>
          <Grid item sm={12} lg={3} className={classes.main}>
            <Main />
          </Grid>
          <Grid item sm={12} lg={4} className={classes.desktop}>
            <Details title="Income" />
          </Grid>
          <Grid item sm={12} lg={4} className={classes.last}>
            <Details title="Expense" />
          </Grid>
          <PushToTalkButtonContainer>
            <PushToTalkButton />
          </PushToTalkButtonContainer>
        </Grid>
      </div>
    );
}

export default App