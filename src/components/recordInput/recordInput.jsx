// @flow
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';
import RecordBox from '../recordBox';

function NumberFormatCustom(props: { inputRef: () => void, onChange: () => void }) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      fixedDecimalScale
      decimalScale={2}
    />
  );
}

export default () => {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date());

  return (
    <form
      action="/"
      method="POST"
      onSubmit={e => {
        e.preventDefault();
        console.log(e);
      }}
    >
      <RecordBox>
        <TextField
          id="amount"
          value={amount}
          onChange={event => setAmount(event.target.value)}
          margin="none"
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
        />
        <TextField
          id="description"
          value={description}
          onChange={event => setDescription(event.target.value)}
          type="text"
          margin="none"
          placeholder="Description"
        />
        <TextField
          id="category"
          value={category}
          onChange={event => setCategory(event.target.value)}
          type="text"
          margin="none"
          placeholder="Category"
        />
        <TextField
          id="date"
          value={date.toISOString().substr(0, 10)}
          onChange={event => setDate(new Date(event.target.value || new Date().toISOString()))}
          type="date"
          margin="none"
        />
      </RecordBox>
    </form>
  );
};
