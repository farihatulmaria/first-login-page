import React, { useState } from 'react';
import { Button, Card, Container, FloatingLabel, Form } from 'react-bootstrap';
import './Login.css';
const Login = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
    return (
        <section className='login'>
            <Container style={{minHeight:'70vh'}} className='d-flex align-items-center justify-content-center'>
                <div className='w-100' style={{maxWidth:'500px'}}>
                    <Card className='px-3 py-2'>
                        <Card.Body>
                            <Card.Title> 
                                <h3 className='fw-bold'>Login</h3>
                            </Card.Title>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Username or Email"
                                    className="my-4">

                                    <Form.Control type="email" placeholder="name@example.com"  required />
                                    <Form.Control.Feedback type="invalid">Please add your user name or add your email</Form.Control.Feedback>
                                </FloatingLabel>

                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Password"
                                    className="my-4">
                                        
                                    <Form.Control type="password" placeholder="1234"  required />
                                    <Form.Control.Feedback type="invalid">Please add your password</Form.Control.Feedback>
                                </FloatingLabel>

                                <Button className='w-100' type="submit">Login</Button>

                                <p className='text-center py-3'>
                                    Don’t have an account? 
                                    <a href="/create-account" className='text-success'> Create an account</a>
                                </p>

                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </section>
    );
};

export default Login;