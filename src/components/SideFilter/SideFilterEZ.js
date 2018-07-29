import React, { Component } from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import '../../../node_modules/rc-slider/assets/index.css';
import '../../../node_modules/rc-tooltip/assets/bootstrap.css';
import Dot from '../DataChart/Dot';
import  _data from '../Data/AllSub.json';
import Legend from '../DataChart/Legend';
const width = 1000, height = 800;



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
    constructor(props){
        super(props);
        this.changeSlider = this.changeSlider.bind(this);
        var data = JSON.parse(JSON.stringify(_data));
        for (var i = 0; i < data.length; i++) {
            data[i]['x'] = 40 + 70 * (i % 13);
            data[i]['y'] = 740 - (40 + 70 * Math.floor(i / 13));
            var c = data[i]['avg_gpa'] - 3.3;
            data[i]['rgb'] = "rgb(" + (160 + 150 * c) + ", " + (210 + 200 * c) + ", " + (250 - 70 * c) +")";
        }
        this.state = {data:data};
    }
    changeSlider(e) {
        var data = JSON.parse(JSON.stringify(_data));
        console.log(data);
        data = data.filter( dept => (dept.avg_gpa >= e[0] && dept.avg_gpa <= e[1]));
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            data[i]['x'] = 40 + 70 * (i % 13);
            data[i]['y'] = 740 - (40 + 70 * Math.floor(i / 13));
            var c = data[i]['avg_gpa'] - 3.3;
            data[i]['rgb'] = "rgb(" + (160 + 150 * c) + ", " + (210 + 200 * c) + ", " + (250 - 70 * c) +")";
        }
        this.setState({data:data});
    }

    render() {
        return (
            <div>
                <aside className="page-aside">
                    <div className="be-scroller">
                        <div className="aside-content">
                            <div className="content">
                                <div className="aside-header" style={{height:'200px'}}>
                                    <button data-target=".aside-nav" data-toggle="collapse" type="button" className="navbar-toggle"><span className="icon mdi mdi-caret-down" /></button><span className="title">Select Filter</span>
                                    <p className="description">Darker blue represents lower GPA. AKA harder subjects.</p>
                                </div>
                            </div>

                            <div className="aside-nav collapse">
                                <div className="content">
                                    <div className="form-group" style={{height:'200px'}}>
                                        <label>Feel free to move the slider on two side to narrow down the subjects within a specific GPA range.</label>
                                        <label>GPA RANGE SELECTION</label>
                                        <div style={style}>
                                            <Range min={2} max={4} step={0.1} onChange={this.changeSlider} marks={marks} defaultValue={[2.5, 4]} tipFormatter={value => `${value}`} />
                                        </div>
                                    </div>

                                    <g className="legend" style={{height:'100px'}} >
                                        <Legend />
                                        <br/>
                                        <br/>
                                     </g>
                                    {
                                    // <div className="form-group mb-3">
                                    //     <label>Select by Alphabet</label>
                                    //     <div className="row mt-1" >
                                    //         <div className="col-6" >
                                    //             {
                                    //                 letters.map( (c,i) => {
                                    //                     return (
                                    //                         <label className="custom-control custom-checkbox w-100">
                                    //                             <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">{c}</span>
                                    //                         </label>
                                    //                     );
                                    //                 })
                                    //             }
                                    //         </div>
                                    //         <div className="col-6">
                                    //             {
                                    //                 remains.map( (c,i) => {
                                    //                     return (
                                    //                         <label className="custom-control custom-checkbox w-100">
                                    //                             <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">{c}</span>
                                    //                         </label>
                                    //                     );
                                    //                 })
                                    //             }
                                    //         </div>
                                    //     </div>
                                    // </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                <div className="container-fluid">
                    <Dot width={width} height={height} data={this.state.data}/>
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
