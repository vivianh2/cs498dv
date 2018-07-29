import React, { Component } from 'react';
import SideFilterEZ from '../SideFilter/SideFilterEZ';
import SDot from '../DataChart/SDot';
import { processGPA } from '../Data/lib';
import { transformYearTerm , sortByNum ,sortByProf , calcGPA } from '../Data/lib';

const width = 1000, height = 800;

class AllCourses extends Component {

    constructor(props){
        super(props);
        this.course = this.props.match.params.course.toUpperCase();
        this.state = {data:[]};
    }


    componentDidMount(){
        console.log(this.course)
        var query = this.course.match(/([A-Z]+)/);
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
            return processGPA(res,'class')
        })
        .then(res => {
            return res.map( (iter) => {
                iter.gpa = calcGPA(iter);
                return iter;
            });
        })
        .then(res => {
                console.log(res.sort( sortByNum ));
                var data = res.sort( sortByNum );
                for (var i = 0; i < data.length; i++) {
                    data[i]['x'] = 40 + 100 * (i % 10);
                    data[i]['y'] = 740 - (40 + 100 * Math.floor(i / 10));
                    var c = data[i]['gpa'] - 3.3;
                    data[i]['rgb'] = "rgb(" + (160 + 150 * c) + ", " + (210 + 200 * c) + ", " + (250 - 70 * c) +")";
                }
                this.setState({data: data})
                })
        .catch(err => console.log(err))

    }

    render() {
        return (
            <div className="be-wrapper">
                <SDot width={width} height={height} data={this.state.data}/>
            </div>
        );
    }
}
//<Dot width={width} height={height} data={data}/>
export default AllCourses;






