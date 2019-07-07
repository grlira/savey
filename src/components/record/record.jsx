// @flow
import React from 'react';
import LargeRecord from './largeRecord';
import SmallRecord from './smallRecord';

type Props = {|
  isSmall?: boolean,
  record: recordsTypes.Record,
|};

const Record = ({ isSmall, ...restProps }: Props) =>
  isSmall ? <SmallRecord {...restProps} /> : <LargeRecord {...restProps} />;

Record.defaultProps = {
  isSmall: false,
};

export default Record;
