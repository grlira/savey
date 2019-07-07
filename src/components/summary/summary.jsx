// @flow
import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Sparklines, SparklinesCurve } from 'react-sparklines';
import Ammount from '../ammount';

type Props = {|
  total: number,
  label: string,
  dataPoints: $ReadOnlyArray<number>,
|};

const Summary = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-rows: 6rem 2rem;
  grid-template-columns: 5fr 3fr;

  width: 25rem;
  height: 9.5rem;
  padding: 0.5rem;

  background-color: ${props => props.theme.paperBackground};
  box-shadow: 0px 0px 5px 0px ${props => props.theme.paperAccent};
  border-radius: 5px;
`;

const Total = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1;

  line-height: 6rem;
  font-size: 4.55rem;
  text-align: left;
  color: ${props => (props.value > 0 ? props.theme.positive : props.theme.negative)};
`;

const Label = styled.div`
  grid-column: 1;
  grid-row: 2;

  line-height: 2rem;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 600;
`;

const Sparkline = styled.div`
  grid-column: 2;
  grid-row: 2;

  line-height: 3rem;
`;

export default ({ total, label, dataPoints }: Props) => {
  const theme = useContext(ThemeContext);
  const sparklineColor = dataPoints[dataPoints.length - 1] > dataPoints[0] ? theme.positive : theme.negative;

  return (
    <Summary>
      <Ammount value={total} RenderText={Total} />
      <Label>{label}</Label>
      <Sparkline>
        <Sparklines data={dataPoints}>
          <SparklinesCurve color={sparklineColor} style={{ fill: sparklineColor, strokeWidth: 4, fillOpacity: 0.25 }} />
        </Sparklines>
      </Sparkline>
    </Summary>
  );
};
