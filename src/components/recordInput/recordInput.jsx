// @flow
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import NumberFormat from 'react-number-format';
import * as recordsTypes from '../../models/records/types';
import RecordBox from '../recordBox';

type Props = {|
  onAddRecord: (record: recordsTypes.Record) => void,
|};

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

export default ({ onAddRecord }: Props) => {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date().toISOString());

  return (
    <form
      action="/"
      method="POST"
      onSubmit={e => {
        e.preventDefault();
        onAddRecord({ amount: Number(amount), description, category, date });
        setAmount(0);
        setDescription('');
        setCategory('');
        setDate(new Date().toISOString());
      }}
    >
      <Input type="submit" style={{ display: 'none' }} /> {/* hack to enable submiting the form with enter */}
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
          value={date.substr(0, 10)} // date input demands yyyy-MM-DD
          onChange={event => setDate(event.target.value || new Date().toISOString())}
          type="date"
          margin="none"
        />
      </RecordBox>
    </form>
  );
};
