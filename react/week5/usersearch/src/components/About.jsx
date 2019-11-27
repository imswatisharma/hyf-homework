import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <>
                <Link to='/' className="arrow-back">&larr;</Link>
                <div className="align-center">
                    <h1>Github</h1>
                    
                </div>
            </>
        );
    }
}
export default About;