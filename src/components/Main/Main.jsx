import React,{useContext} from 'react';
import { Card, CardHeader, Typography, Grid, Divider, CardContent } from '@material-ui/core';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import { ExpenseTrackerContext } from '../../context/context';
import InfoCard from '../InfoCard';

const Main = () => {
    const classes = useStyles();
    const {balance} = useContext(ExpenseTrackerContext);

    return (
        <Card className={classes.root}>
            <CardHeader title="Ask Money" style={{ color: '#3993DD' }} />
            <CardContent>
                <Typography align='center' variant='h4' style={{ marginBottom: '20px', color: '#FF499E', fontWeight: 'bold' }} >Expense Tracker</Typography>

                <Typography align='center' variant='h5' >Total Balance ${balance}</Typography>
                <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px' }} >
                   <InfoCard/>
                </Typography>
                <Divider className={classes.divider} />
                <Form />
            </CardContent>
            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                       <List/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main