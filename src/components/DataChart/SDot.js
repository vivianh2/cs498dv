import React from 'react';
import { Group } from '@vx/group';
import { GlyphCircle } from '@vx/glyph';
import { GradientPinkRed } from '@vx/gradient';
import { scaleLinear } from '@vx/scale';
import { genRandomNormalPoints } from '@vx/mock-data';
import { withTooltip, Tooltip } from '@vx/tooltip';
import { Link } from 'react-router-dom';

let tooltipTimeout;


export default withTooltip(props => {
  const { width, height } = props;
  const points = props.data;
  const xMax = width;
  const yMax = height - 80;
  if (width < 10) return null;

  const xScale = scaleLinear({
    domain: [0, 1000],
    range: [0, xMax],
    clamp: true
  });
  const yScale = scaleLinear({
    domain: [0, 800],
    range: [yMax, 0],
    clamp: true
  });

  return (
    <div>
      <svg width={width} height={height} style={{display: 'block', margin:'auto'}}>
        <rect x={0} y={0} width={width} height={height} rx={0} fill='white'/>
        <Group onTouchStart={() => event => {
            if (tooltipTimeout) clearTimeout(tooltipTimeout);
            props.hideTooltip();
          }}
        >
          {
            points.map((d, i) => {
            return (
            <Link to={'/subject/'+d.subject}><g>
              <GlyphCircle
                id={i}
                className="dot"
                key={i}
                fill={d.rgb}
                left={xScale(d.x)}
                top={yScale(d.y)}
                size={3000}
                onMouseEnter={() => event => {
                  if (tooltipTimeout) clearTimeout(tooltipTimeout);
                  props.showTooltip({
                    tooltipLeft: xScale(d.x),
                    tooltipTop: yScale(d.y) + 20,
                    tooltipData: d
                  });
                }}
                onTouchStart={() => event => {
                  if (tooltipTimeout) clearTimeout(tooltipTimeout);
                  props.showTooltip({
                    tooltipLeft: xScale(d.x),
                    tooltipTop: yScale(d.y) - 30,
                    tooltipData: d
                  });
                }}
                onMouseLeave={() => event => {
                  tooltipTimeout = setTimeout(() => {
                    props.hideTooltip();
                  }, 300);
                }}
              />
                <text x={xScale(d.x)} y={yScale(d.y)} text-anchor="middle" alignment-baseline="middle"> {d.subject + d.number}</text>);
            </g>
            </Link>
            );
          })
        }

        </Group>
      </svg>
      {props.tooltipOpen &&
        <Tooltip left={props.tooltipLeft} top={props.tooltipTop}>
          <div>
            <strong>Course Title:</strong> {props.tooltipData.coursetitle}<br/>
            <strong>Average GPA:</strong> {(''+props.tooltipData.gpa).substr(0,4)}
          </div>
        </Tooltip>}
    </div>
  );


});



