import React from 'react';
import { format } from 'd3-format';
import {
  Legend,
  LegendLinear,
  LegendQuantile,
  LegendOrdinal,
  LegendSize,
  LegendThreshold,
} from '@vx/legend';
import {
  scaleQuantize,
  scaleLinear,
  scaleOrdinal,
  scaleThreshold,
} from '@vx/scale';

import {
  GlyphStar,
  GlyphWye,
  GlyphTriangle,
  GlyphDiamond,
} from '@vx/glyph';

const oneDecimalFormat = format('.1f');
const twoDecimalFormat = format('.2f');
const threshold = scaleThreshold({
    domain: [2.8, 3.1, 3.4, 3.7, 4.0],
    range: [
        'rgb(91, 118, 255)',
        'rgb(141, 184, 255)',
        'rgb(181, 238, 240)',
        'rgb(220, 255, 222)',
        'rgb(255, 255, 205)',
    ],
  });

  function LegendDemo({ title, children }) {
    return (
      <div className="legend">
        <div className="title">{title}</div>
        {children}
        <style jsx>{`
          .legend {
            line-height: 0.9em;
            color: #efefef;
            font-size: 10px;
            font-family: arial;
            padding: 10px 10px;
            float: left;
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 8px;
            margin: 5px 5px;
          }
          .title {
            font-size: 12px;
            margin-bottom: 10px;
            font-weight: 100;
          }
          .vx-legend-label{
              color: #888;
          }
        `}</style>
      </div>
    );
  }
  

  export default ({ width, height, margin }) => {
    if (width < 10) return null;
    return (
    <div className="chart">
        <rect x={0} y={0} width={width} height={height} rx={0} fill='white'/>
        <LegendDemo title="Legend">
            <LegendThreshold
            direction="column-reverse"
            itemDirection="row"
            labelMargin="2px 0 0 10px"
            shapeMargin="1px 0 0"
            scale={threshold}
            />
        </LegendDemo>
    </div>
    );
};