import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './home.css';

import About from './about';
function Home() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState(false);
    const [submit, setSubmit] = useState(false);

    const setPasswordvalue = (e) => {
            setPassword(e.target.value)
            
    }

    const styleb= {
        "background-color" : 'blue',
        'font-color' : 'white'
    }
    useEffect(() =>{

        if(password && password != "satish")
            setStatus(true)
    },[password])

    return (
        <>
            <h1>Home Page...</h1>
            { !submit && <Form>
                <div className='row ' style={styleb}>
                    <div className='col-sm-4'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className='cls' type="email" placeholder="" value={email} onChange={(e) =>setEmail(e.target.value)}/>
                        </Form.Group>
                    </div>
                     <div className='col-sm-4'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="" value={password} onChange={(e) =>setPasswordvalue(e)}/>
                        </Form.Group>
                    </div>

                    <h2>{status && "Incorrect Password"}</h2>
                    <Button variant="primary" onClick={() => setSubmit(true)}>Primary</Button>
                </div>

                  

            </Form>
}
            {submit && <About username={email} password={password}/>}
        </>
    );
}

export default Home;
