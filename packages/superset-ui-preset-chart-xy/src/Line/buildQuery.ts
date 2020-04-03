import { buildQueryContext } from '@superset-ui/query';
import ChartFormData from './ChartFormData';
import { lineEncoderFactory } from './Encoder';

export default function buildQuery(formData: ChartFormData) {
  const queryContext = buildQueryContext(formData);
  const { encoding } = formData;
  const encoder = lineEncoderFactory.create(encoding);

  queryContext.queries.forEach(query => {
    const q = query;
    q.groupby = encoder.getGroupBys();
    // Enforce time-series mode
    q.is_timeseries = true;
  });

  return queryContext;
}
