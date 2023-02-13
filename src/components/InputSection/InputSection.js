import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@mui/material/TextField';

const InputSection = (props) => {
  const { coords, onCalculateClick } = props;

  const [areStartCoordinates, setAreStartCoordinates] = useState(false);
  const [startCoordinates, setStartCoordinates] = useState('');
  const [endCoordinates, setEndCoordinates] = useState('');

  useEffect(() => {
    if (areStartCoordinates) {
      setStartCoordinates(coords ?? '');
      setAreStartCoordinates(false);
    } else {
      setEndCoordinates(coords ?? '');
      setAreStartCoordinates(true);
    }
  }, [coords]);

  const onCalculate = () => {
    onCalculateClick([startCoordinates, endCoordinates]);
  };

  return (
    <Grid item xs={6}>
      <Grid
        container
        direction='column'
        alignItems='flex-start'
        justifyContent='flex-start'
      >
        <FormControl fullWidth>
          <TextField
            margin='dense'
            label='From'
            type='text'
            variant='standard'
            value={startCoordinates}
            onChange={(e) => {
              setStartCoordinates(e.target.value);
            }}
          />
          <TextField
            margin='dense'
            label='To'
            type='text'
            variant='standard'
            value={endCoordinates}
            onChange={(e) => {
              setEndCoordinates(e.target.value);
            }}
          />
          <Button variant='outlined' onClick={onCalculate}>
            Calculate Fuel
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default InputSection;
