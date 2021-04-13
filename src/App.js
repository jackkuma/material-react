import React from 'react';

import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import SetX from './components/setX';
import SetY from './components/setY';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectArea, setSelectArea] = React.useState('X');
  const [getProduct, setGetProduct] = React.useState('');
  const [getData, setGetData] = React.useState(false);

  const handleClickOpen = (value) => {
    setOpen(true);
    setSelectArea(value);
    console.log(selectArea);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log('product:' + getProduct);
    console.log('data State:' + getData);
  };

  return (
    <React.Fragment>
    <div className={classes.root}>
      <Paper elevation={3}>
        <Typography gutterBottom variant="subtitle1">
          Line Chart
        </Typography>
      </Paper>
      <Paper elevation={3}>
        <Typography gutterBottom variant="subtitle1">
        Scotter Chart
        </Typography>
      </Paper>
      <Paper elevation={3}>
        <Typography gutterBottom variant="subtitle1">
        Box Plot
        </Typography>
      </Paper>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Button variant="outlined" color="primary" onClick={() => handleClickOpen('X')}>
            Open X dialog
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" color="primary" onClick={() => handleClickOpen('Y')}>
            Open Y dialog
          </Button>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          { selectArea === 'X' && <SetX setGetProduct={setGetProduct} /> }
          { selectArea === 'Y' && <SetY setGetData={setGetData} /> }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          { selectArea === 'X' && <Button onClick={() => setSelectArea('Y')}>Set Y</Button> }
          { selectArea === 'Y' && <Button onClick={() => setSelectArea('X')}>Set X</Button> }
          {
            (getProduct !== '' && getData) ? <Button onClick={handleSubmit}>Submit</Button> : ""
          }
        </DialogActions>
      </Dialog>
      </React.Fragment>
  );
}

export default App;
