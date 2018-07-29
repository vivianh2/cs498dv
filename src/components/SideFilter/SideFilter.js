import React, { Component } from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import '../../../node_modules/rc-slider/assets/index.css';
import '../../../node_modules/rc-tooltip/assets/bootstrap.css';

const marks = {
    0: {
        style: {
          color: '#ea4335',
        },
        label: <strong>0.0</strong>,
    },
    1: '1.0',
    2: '2.0',
    3: '3.0',
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



class SideFilter extends Component {

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
                            <div data-min-view={2} data-date-format="yyyy-mm-dd" className="input-group input-group-sm date datetimepicker">
                            <input size={16} type="text" defaultValue className="form-control" />
                            <div className="input-group-append">
                                <button className="btn btn-primary"><i className="icon-th mdi mdi-calendar" /></button>
                            </div>
                            </div>
                        </label>
                        </div>
                        <div className="form-group">
                        <label className="w-100">Destination
                            <div data-min-view={2} data-date-format="yyyy-mm-dd" className="input-group input-group-sm date datetimepicker">
                            <input size={16} type="text" defaultValue className="form-control" />
                            <div className="input-group-append">
                                <button className="btn btn-primary"><i className="icon-th mdi mdi-calendar" /></button>
                            </div>
                            </div>
                        </label>
                        </div>
                        <div className="form-group" style={{height:'60px'}}>
                        <label>GPA RANGE SELECTION</label>
                        <div style={style}>
                        <Range min={0} max={4} step={0.1} onChange={log} marks={marks} defaultValue={[1, 3]} tipFormatter={value => `${value}`} />
                        </div>
                        </div>
                        <div className="form-group">
                        <label>Payment method</label>
                        <ul className="be-option-buttons">
                            <li><a href="#" className="be-option-button"><i className="icon mdi mdi-favorite-outline" /><span>Credit Card</span></a></li>
                            <li><a href="#" className="be-option-button"><i className="icon mdi mdi-mood" /><span>Cash</span></a></li>
                        </ul>
                        </div>
                        <div className="form-group">
                        <label>Place</label>
                        <select className="select2 input-sm">
                            <optgroup label="Alaskan/Hawaiian Time Zone">
                            <option value="AK">Alaska</option>
                            <option value="HI">Hawaii</option>
                            </optgroup>
                            <optgroup label="Pacific Time Zone">
                            <option value="CA">California</option>
                            <option value="NV">Nevada</option>
                            <option value="OR">Oregon</option>
                            <option value="WA">Washington</option>
                            </optgroup>
                        </select>
                        </div>
                        <div className="form-group mb-3">
                        <label>Extras</label>
                        <div className="row mt-1">
                            <div className="col-6">
                            <label className="custom-control custom-checkbox w-100 mr-0">
                                <input type="checkbox" defaultChecked className="custom-control-input" /><span className="custom-control-label">First Class</span>
                            </label>
                            <label className="custom-control custom-checkbox w-100">
                                <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Bell boy</span>
                            </label>
                            <label className="custom-control custom-checkbox w-100">
                                <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Pillow</span>
                            </label>
                            </div>
                            <div className="col-6">
                            <label className="custom-control custom-checkbox w-100">
                                <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Lunch</span>
                            </label>
                            <label className="custom-control custom-checkbox w-100">
                                <input type="checkbox" className="custom-control-input" /><span className="custom-control-label">Wifi</span>
                            </label>
                            </div>
                        </div>
                        </div><a href="#" className="btn btn-lg btn-primary btn-block">Search</a>
                    </div>
                    </div>
                </div>
                </div>
            </aside>
        </div>
        )
    }
};

export default SideFilter;