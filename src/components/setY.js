import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function SetY(props) {
    const { setGetData } = props;
    const [radioValue, setRadioValue] = React.useState('');

    const handleRadioChange = (event) => {
      setRadioValue(event.target.value);
      setGetData(true);
    };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#0fd', height: '20vh' }}>
            SET B
        </Typography>
        <FormControl component="fieldset">
            <RadioGroup aria-label="quiz" name="quiz" value={radioValue} onChange={handleRadioChange}>
            <FormControlLabel value="best" control={<Radio />} label="The best!" />
            <FormControlLabel value="worst" control={<Radio />} label="The worst." />
            </RadioGroup>
        </FormControl>
      </Container>
    </React.Fragment>
  );
}