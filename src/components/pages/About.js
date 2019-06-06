import React from 'react';


const About = (props) => {
    return (
        <div>
            <h1 className="display-4 mb-3">About <span className="text-danger">{props.branding}</span></h1>
            <p className="lead">This is the about page</p>
            <p className="text-secondary">Version 1.0.0</p>
        </div>
    )
}

export default About;
