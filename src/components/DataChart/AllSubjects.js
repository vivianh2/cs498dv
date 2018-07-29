import React, { Component } from 'react';
import data from '../Data/AllSub.json';
import SideFilterEZ from '../SideFilter/SideFilterEZ';

const width = 1000,
      height = 780;


class AllSubjects extends Component{
    // constructor() {
    //     super();
    //     this.state = {
    //       subjectList: []
    //     };
    // }

    // componentWillMount() {
    //     axios.get('../Data/AllSub.json') // JSON File Path
    //     .then( response => {
    //         this.setState({
    //         subjectList: response.data
    //       });
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }

    render() {
        return (
            <div className="be-wrapper">
                <SideFilterEZ />
                <div className="container-fluid">
                    <svg width={width} height={height} className="chart" style={{display: 'block', margin:'auto'}}>
                        {
                            data.map((d, i) => {
                                var c = d.avg_gpa - 3.3;
                                var x = 40 + 70 * (i % 13);
                                var y = 40 + 70 * Math.floor(i / 13);
                                return (
                                    <g>
                                        <circle key={i} cx={x} cy={y}
                                                r={25} fill={"rgb(" + (160 + 150 * c) + ", " + (210 + 200 * c) + ", " + (250 - 70 * c)} />
                                        <text x={x} y={y} text-anchor="middle" alignment-baseline="middle">{d.subject +" " + d.avg_gpa}</text>
                                    </g>
                                );
                            })
                        }
                    </svg>
                </div>
            </div>

        );
    }
}

export default AllSubjects;


{/* <div>
<span>{d.subject}</span>
<span>{d.avg_gpa}</span>



<div id="display">
<script type="text/javascript">
    d3.json(dataFile, function(error, data) {
        data.forEach(function(d) {
        d.avg_gpa = +d.avg_gpa;
    });
    var svg = d3.select("#display")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 1040);
    var circles = svg.selectAll("g")
        .data(data)
        .enter()
        .append("g")
        .attr("transform", function(d, i) { return "translate(" + (40 + 80 * (i % 11)) + "," + (40 + 80 * Math.floor(i / 11)) + ")"; })
        .on("click", function(d, i) {
        // window.location = "/get_subject?subject=" + d.subject;
        // })
        // .on("mouseover", function(d, i) {
        // d3.select(this).style("cursor", "pointer").style("text-decoration", "underline");
        // })
        // .on("mouseout", function(d, i) {
        // d3.select(this).style("text-decoration", "none");
        // });

    circles.append("circle")
        .attr("r", 35)
        .attr("fill", function(d) {
        var c = d.avg_gpa - 3.3;
        return d3.rgb(202 + 90 * c, 140 + 160 * c, 192 - 20 * c);
        });

    circles.append("text")
        .text(function(d) {
        return d.subject;
        })
        .attr("fill", "black")
        .attr("dy", 5)
        .style("text-anchor", "middle");
        })
</script>
</div>  */}

