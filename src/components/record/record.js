// @flow
import React from 'react';
import styled from 'styled-components';

const Record = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: red;
`;

export default ({ date, description, category, ammount }) => (
  <Record>
    {date}
    <br />
    {description}
    <br />
    {category}
    <br />
    {ammount}
    <br />
  </Record>
);
