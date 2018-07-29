import React, { Component } from "react";
import * as d3 from "d3";

// class Ball extends Component {
//     componentDidMount() {
//         this.d3Node = d3.select(ReactDOM.findDOMNode(this))
//           .datum(this.props.data)
//           .call(enterNode);
//       }
    
//       componentDidUpdate() {
//         this.d3Node.datum(this.props.data)
//           .call(updateNode);
//       }

//       render() {
//         return (
//           <g className='bubble'>
//             <circle/>
//             <text>{this.props.data.key}</text>
//           </g>
//         );
//       }
// }





class Ball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: this.props.key,
      x: this.props.x,
      y: this.props.y,
      rgb: this.props.rgb,
      subject: this.props.subject
    };
  }

  circleRef = React.createRef();

  componentDidMount() {
    this.d3Node = d3.select(ReactDOM.findDOMNode(this))
      .datum(this.props.data)
      .call(enterNode);
  }

  componentDidUpdate() {
    this.d3Node.datum(this.props.data)
      .call(updateNode);
  }

  render() {
    const { key } = this.state.key;
    const { x } = this.state.x;
    const { y } = this.state.y;
    const { rgb } = this.state.rgb;

    return <circle key={key} cx={x} cy={y} r={25} fill={rgb} />
           <text x={x} y={y} text-anchor="middle" alignment-baseline="middle">{d.subject +" " + d.avg_gpa}</text>

  }
}

export default Ball;
