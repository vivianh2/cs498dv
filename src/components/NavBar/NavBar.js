
import React, { Component } from 'react';

class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark fixed-top be-top-header">
                <div className="container-fluid">
                    <div className="be-navbar-header">
                        <a href="/" className="navbar-brand navbar-text">About this Visualization</a>
                    </div>
                        <ul className="nav navbar-nav be-right-navbar" style={{flexFlow:'row wrap'}}>
                            <li><a href="/subject" className="nav-link active">GPA at UIUC</a></li>
                        </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;