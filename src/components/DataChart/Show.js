import React from "react";
import Ball from "./Ball";
import * as d3 from "d3";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};



class Show extends React.Component {
    width = 1000;
    height = 780;
    force = d3.layout.force().size([width, height]);

    enterNode = (selection) => {
                    selection.select('circle')
                    .attr("r", (d) => d.size)
                    .call(force.drag);

                    selection.select('text')
                    .attr("x", (d) => d.size + 5)
                    .attr("dy", ".35em");
                };

    updateNode = (selection) => {
        selection.attr("transform", (d) => "translate(" + d.x + "," + d.y + ")");
    };

    updateGraph = (selection) => {
        selection.selectAll('.bubble')
        .call(updateNode);
    };

    componentDidMount() {
        this.d3Graph = d3.select(ReactDOM.findDOMNode(this));
        force.on('tick', () => {
          this.d3Graph.call(updateGraph);
        });
    }

    render() {
    const { ballLeft } = this.state;
    return (
        <div style={styles}>
        <h1>D3 transitions in React 16.3 {"\u2728"}</h1>
        <p>Click the ball 👇</p>
        <svg style={{ width: "300", height: "100px" }} onClick={this.ballJump}>
            <Ball x={ballLeft ? 15 : 300} />
        </svg>
        </div>
    );
    }
}


  
    componentDidUpdate() {
      // we should actually clone the nodes and links
      // since we're not supposed to directly mutate
      // props passed in from parent, and d3's force function
      // mutates the nodes and links array directly
      // we're bypassing that here for sake of brevity in example
      force.nodes(this.props.nodes).links(this.props.links);
      
      // start force calculations after
      // React has taken care of enter/exit of elements
      force.start();
    },
  
    render() {
      // use React to draw all the nodes, d3 calculates the x and y
      var nodes = _.map(this.props.nodes, (node) => {
        return (<Node data={node} key={node.key} />);
      });
      var links = _.map(this.props.links, (link) => {
        return (<Link key={link.key} data={link} />);
      });
  
      return (
        <svg width={width} height={height}>
          <g>
            {links}
            {nodes}
          </g>
        </svg>
      );
    }
  });




export default Show;
