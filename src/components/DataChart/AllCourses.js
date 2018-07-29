import React, { Component } from 'react';
import SideFilterEZ from '../SideFilter/SideFilterEZ';
import * as d3 from 'd3';
import Dot from '../DataChart/Dot';
import { processGPA } from '../Data/lib';
import { transformYearTerm , sortYearTerm ,sortByProf , calcGPA } from '../Data/lib';

class AllCourses extends Component {
    
    constructor(props){
        super(props);
        this.course = this.props.match.params.course.toUpperCase();
        this.state = {data:null};
    }


    componentDidMount(){
        console.log(this.course)
        var query = this.course.match(/([A-Z]+)/);
        console.log(typeof(this.course))
        if(query == null){
            this.setState({'prompt': "No results found, Please make sure you entered a correct course and try again!"});
            return;
        }
        fetch('https://0-web-api.course-ly.com/api/'+'getGPAbyDept',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Requested-With': 'Course-ly-web'
            },
            body: JSON.stringify({
                dept: this.course
            })
        })
        .then(res => {
            var contentType = res.headers.get("content-type");
            if (res.status !== 200 || !contentType || !contentType.includes("application/json")) {
                throw new TypeError("failed to get data.");
            }
            return res.json();
        })
        .then(res => {
            this.setState({data : res})
            this.setState({'prompt': "Successfully fetched data. The results are shown in the Charts below."});
            this.changedMulti(res[0].instructor);
        })
        .catch(err => console.log(err));
        console.log(this.data);

    }

    render() {
        return (
            <div className="be-wrapper">
                {this.course}
            </div>
        );
    }
}
export default AllCourses;






