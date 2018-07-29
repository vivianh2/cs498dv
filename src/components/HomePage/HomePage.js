
import React, { Component } from 'react';

class HomePage extends Component {

    render() {
        return (
            <div className='be-wrapper'>
                <div className="page-head" style={{backgroundColor:'#EEE'}}>
                    <h1 className="page-head-tile text-center">
                        GPA Difference at UIUC
                    </h1>
                </div>
                <div className="main-content container-fluid">
                    <div className="row">

                        <div className="col-sm-12">
                            <h2>About this Visualization</h2> 
                            <p>"Pain is temporary, but GPA is forever."</p>
                            <p> It seems to happen all time that we are enrolled in a "hard" 
                                course. At the end of each semester, student struggles to find and register for the "easy course" with a
                                a nice professor that won't destroy their GPA. This visualization digs deep into the disparity of grades 
                                between different subjects and courses, using the hybrid approach of a <strong>Drill-Down Story </strong> 
                                to narrative the visual story of the GPA disparity at UIUC using the GPA dataset which can be found on Professor 
                                <a href="https://github.com/wadefagen/datasets/tree/master/gpa"> Wade Fagen's Github page</a>.
                            </p>
                            <p> The Drill-Down Story visualization structure presents a single overview and then allows the
                                user to choose among particular instances to reveal further details. 
                                For this visualization project, specifically, the first scence shows a GPA overview of all 
                                the subjects available at UIUC, and users get many options 
                                in that first scene to drill down and to follow a narrative as drilling down into the details 
                                of each subject, including the average GPA for each course under that subject, 
                                allowing the user to learn more about individual subject through mouse hovering and clicking. 
                                This structure puts more emphasis on the reader-driven approach, letting the user 
                                determine what should be told and when to be told next. 
                            </p>
                        </div>

                        <div className="col-sm-6">
                            <h3>Scenes</h3>
                                <p> The first scence shows a GPA overview of all the subjects available at UIUC, mainly distinguished by their colors, 
                                    in which subjects with significantly lower average grades have increasing blue hues, After that first scene, the user 
                                    can drill down to see the course average GPA under that subject. In each of these detailed scenes, the user can see 
                                    a consistent bubble chart. The intensity of the blue color for each subject or course indicates the different levels of 
                                    average GPA.</p>
                                <p>The reader can also get further information by hovering over subject or course bubble.  Mouse hovering produces a tooltip 
                                    showing the complete name and average GPA.</p>
                                <p>The scenes template provides a consistency so as user move from scene to scene, that scene is setting up the various 
                                    parameters that control the charts. So if the scene parameter changes state, then that's going to cause the average GPA
                                     parameter to change state. 
                                </p>
                        </div>
                        <div className="col-sm-6">
                            <h3>Annotations</h3>
                                <p>Various tooltips, labels and legend is used for messaging. Also there is summary information on the side bar providing further explaination and analysis. </p>
                            <h3>Parameters</h3>
                                <p>The main parameter is the average GPA on display. This parameter drives the color of each bubble. </p>
                            <h3>Triggers</h3>
                                <p>The main trigger is the selection of subject. The subject selection triggers specific courses bubbles to be loaded in the SVG chart.</p>
                            
                        </div>
                    

                    </div>
                </div>
            </div>

        );
    }
}

export default HomePage;