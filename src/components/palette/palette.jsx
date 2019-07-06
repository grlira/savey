import _ from 'lodash';
import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';

const Pallette = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 5rem);
  grid-tempalte-rows: auto;
  grid-gap: 1rem;
`;

const ColorCard = styled.div`
  height: 6rem;
`;

const ColorSquare = styled.div`
  height: 5rem;
  background-color: ${props => props.color};
`;

const ColorKey = styled.div`
  font-size: 0.625rem;
  text-wrap: word;
`;

export default () => (
  <ThemeConsumer>
    {theme => (
      <Pallette>
        {_.map(theme, (color, key) => (
          <ColorCard>
            <ColorKey>{key}</ColorKey>
            <ColorSquare color={color} />
          </ColorCard>
        ))}
      </Pallette>
    )}
  </ThemeConsumer>
);
