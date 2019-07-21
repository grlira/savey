// @flow
import _ from 'lodash';
import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import { Pie } from '@vx/shape';
import { Group } from '@vx/group';
import * as recordsTypes from '../../models/records/types';
import * as recordsUtils from '../../models/records/utils';

type Props = {|
  records: $ReadOnlyArray<recordsTypes.Record>,
|};

const CategoryBreakdown = styled.div`
  width: 30rem;
  height: 30rem;
`;

const width = 480; // 30rem
const height = 480;

const radius = Math.min(width, height) / 3;
const centerY = height / 2;
const centerX = width / 2;

const getCategoryTotal = ({ categoryTotal }) => categoryTotal;

export default ({ records }: Props) => {
  const data = recordsUtils.getTotalsByCategory(records);
  return (
    <ThemeConsumer>
      {theme => (
        <CategoryBreakdown>
          <svg width={width} height={height}>
            <Group top={centerY} left={centerX}>
              <Pie
                data={_.values(data)}
                pieValue={getCategoryTotal}
                pieSortValues={(a, b) => (a < b ? 1 : -1)}
                outerRadius={radius}
              >
                {pie => {
                  return pie.arcs.map(arc => {
                    const [centroidX, centroidY] = pie.path.centroid(arc);
                    return (
                      <g key={`category-${arc.data.category}`}>
                        <path d={pie.path(arc)} fill={theme[arc.data.category]} />
                        {arc.data.percentage > 0.03 && (
                          <text
                            fill={theme.text}
                            textAnchor="middle"
                            x={centroidX * 2.5}
                            y={centroidY * 2.5}
                            dy=".33em"
                            fontSize={9}
                          >
                            {arc.data.category} ({arc.data.percentage.toFixed(2) * 100}%)
                          </text>
                        )}
                      </g>
                    );
                  });
                }}
              </Pie>
            </Group>
          </svg>
        </CategoryBreakdown>
      )}
    </ThemeConsumer>
  );
};
