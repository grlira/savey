// @flow
import React from 'react';
import Ledger from '../../components/ledger';

type Props = {
  records: $ReadOnlyArray<reacordsTypes.Records>,
};

export default ({ records }: Props) => <Ledger records={records} />;
