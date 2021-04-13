import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SetX(props) {
  const classes = useStyles();

  const { setGetProduct } = props;
  const [product, setProduct] = React.useState('');

    const handleSelectChange = (event) => {
      setProduct(event.target.value);
      setGetProduct(event.target.value);
    };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '20vh' }}>
            SET A
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Product</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={product}
            onChange={handleSelectChange}
            fullWidth
            style={{width: '80%'}}
          >
            <MenuItem value={'Ten123'}>Ten123</MenuItem>
            <MenuItem value={'Twe456'}>Twe456</MenuItem>
            <MenuItem value={'Thi789'}>Thi789</MenuItem>
          </Select>
        </FormControl>
      </Container>
    </React.Fragment>
  );
}