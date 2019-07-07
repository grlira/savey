// @flow
import React from 'react';
import NumberFormat from 'react-number-format';

type Props = {|
  value: number,
  RenderText: React.Component<{|
    value: number,
  |}>,
|};

export default ({ value, RenderText }: Props) => (
  <NumberFormat
    value={value}
    displayType="text"
    decimalScale={Math.abs(value) > 999999 ? 0 : 2} // don't show decimals above 1M
    fixedDecimalScale
    thousandSeparator
    renderText={formattedValue => <RenderText value={value}>{formattedValue}</RenderText>}
  />
);
