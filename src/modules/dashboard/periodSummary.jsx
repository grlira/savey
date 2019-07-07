// @flow
import React from 'react';
import Summary from '../../components/summary';
import * as recordsUtils from '../../models/records/utils';

type Props = {
  records: $ReadOnlyArray<recordsTypes.Records>,
  label: string,
  minDate: ?Date,
  maxDate: ?Date,
};

export default ({ records, minDate, maxDate, label }: Props) => {
  const applicableRecords = recordsUtils.getBetween(records, minDate, maxDate);
  return (
    <Summary
      total={recordsUtils.getTotal(applicableRecords)}
      label={label}
      dataPoints={recordsUtils.getRunningTotals(applicableRecords)}
    />
  );
};
