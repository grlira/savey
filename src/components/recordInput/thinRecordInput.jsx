// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';

const RecordInput = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-rows: 2rem;
  grid-template-columns: 8rem auto 6rem 6rem;

  width: 30rem;
  height: 3rem;

  background-color: ${props => props.theme.paperBackground};
  box-shadow: 0px 0px 5px 0px ${props => props.theme.paperAccent};
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 1rem;
`;

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
    <RecordInput>
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
        placeholder="description"
      />
      <TextField
        id="category"
        value={category}
        onChange={event => setCategory(event.target.value)}
        type="text"
        margin="none"
        placeholder="category"
      />
      <TextField
        id="date"
        value={date.toISOString().substr(0, 10)}
        onChange={event => setDate(new Date(event.target.value || new Date().toISOString()))}
        type="date"
        margin="none"
      />
    </RecordInput>
  );
};
