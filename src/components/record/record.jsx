// @flow
import React from 'react';
import ThickRecord from './thickRecord';
import ThinRecord from './thinRecord';

type Props = {|
  isThin?: boolean,
  record: recordsTypes.Record,
|};

const Record = ({ isThin, ...restProps }: Props) =>
  isThin ? <ThinRecord {...restProps} /> : <ThickRecord {...restProps} />;

Record.defaultProps = {
  isThin: false,
};

export default Record;
