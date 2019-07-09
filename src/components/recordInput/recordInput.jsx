// @flow
import React from 'react';
import ThickRecordInput from './thickRecordInput';
import ThinRecordInput from './thinRecordInput';

type Props = {|
  isThin?: boolean,
  recordInput: recordInputsTypes.RecordInput,
|};

const RecordInput = ({ isThin, ...restProps }: Props) =>
  isThin ? <ThinRecordInput {...restProps} /> : <ThickRecordInput {...restProps} />;

RecordInput.defaultProps = {
  isThin: false,
};

export default RecordInput;
