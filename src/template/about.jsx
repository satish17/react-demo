import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import './home.css';
function About(props) {

    
    return (
        <>
            <h1>About Page...</h1>
            <h4>{props.username}</h4>
            <h4>{props.password}</h4>
        </>
    );
}

export default About;
