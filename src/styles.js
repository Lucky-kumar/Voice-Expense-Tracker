import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
  },
  mobile: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  main: {
    [theme.breakpoints.up('xs')]: {
      paddingBottom: '5%',
    },
  },
  last: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));