import React, { Component } from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import '../../../node_modules/rc-slider/assets/index.css';
import '../../../node_modules/rc-tooltip/assets/bootstrap.css';
import Dot from '../DataChart/Dot';
import data from '../Data/AllSub.json';
const width = 1000, height = 800;

for (var i = 0; i < data.length; i++) { 
    data[i]['x'] = 40 + 70 * (i % 13);
    data[i]['y'] = 740 - (40 + 70 * Math.floor(i / 13));
    var c = data[i]['avg_gpa'] - 3.3;
    data[i]['rgb'] = "rgb(" + (160 + 150 * c) + ", " + (210 + 200 * c) + ", " + (250 - 70 * c) +")";
}
console.log(data);


const marks = {
    2: {
        style: {
          color: '#ea4335',
        },
        label: <strong>2.0</strong>,
    },
    2.5:'2.5',
    3: '3.0',
    3.5:'3.5',
    4: {
      style: {
        color: '#34a853',
      },
      label: <strong>4.0</strong>,
    },

};

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const style = { width: 235 };

var log = (value) => {
console.log(value);
}

var letters = "ABCDEFGHIJKLM".split("");
var remains ='NOPQRSTUVWXYZ'.split("");

class SideFilterEZ extends Component {

    render() {
        return (
        <div>
            <aside className="page-aside">
                <div className="be-scroller">
                <div className="aside-content">
                    <div className="content">
                    <div className="aside-header">
                        <button data-target=".aside-nav" data-toggle="collapse" type="button" className="navbar-toggle"><span className="icon mdi mdi-caret-down" /></button><span className="title">Select Filter</span>
                        <p className="description">Service description</p>
                    </div>
                    </div>
                    <div className="aside-nav collapse">
                    <div className="content">
                        <div className="form-group">
                        <label className="w-100">Origin
                            <div>

                            </div>
                        </label>
                        </div>
                        <div className="form-group" style={{height:'60px'}}>
                        <label>GPA RANGE SELECTION</label>
                        <div style={style}>
                        <Range min={2} max={4} step={0.1} onChange={log} marks={marks} defaultValue={[2.5, 4]} tipFormatter={value => `${value}`} />
                        </div>
                        </div>

                        <div className="form-group mb-3">
                        <label>Select by Alphabet</label>
                        <div className="row mt-1" >
                            <div className="col-6" >
                            {
                                        letters.map( (c,i) => {
                                            return (
                                                <label className="custom-control custom-checkbox w-100">
                                                    <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">{c}</span>
                                                </label>
                                            );
                                        })
                            }
                            </div>
                            <div className="col-6">
                            {
                                        remains.map( (c,i) => {
                                            return (
                                                <label className="custom-control custom-checkbox w-100">
                                                    <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">{c}</span>
                                                </label>
                                            );
                                        })
                            }
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </aside>

            <div className="container-fluid">
                    <Dot width={width} height={height} data={data}/>
            </div>
        </div>
        )
    }
};

export default SideFilterEZ;


// var width = 500,
// height = 400,
// margins = {top: 40, right: 50, bottom: 40, left: 50},
// legendClassName = "test-legend-class",
// legendPosition = 'left',
// legendOffset = 90,
// chartSeries = [
//   {
//     field: '2.8',
//     name: '2.8',
//     color: 'rgb(91, 118, 255)'
//   },
//   {
//     field: '3.1',
//     name: '3.1',
//     color: 'rgb(141, 184, 255)'
//   },
//   {
//     field: '3.4',
//     name: '3.4',
//     color: 'rgb(181, 238, 240)'
//   },
//   {
//     field: '3.7',
//     name: '3.7',
//     color: 'rgb(220, 255, 222)'
//   },
//   {
//     field: '4.0',
//     name: '4.0',
//     color: 'rgb(255, 255, 205)'
//   }
// ]