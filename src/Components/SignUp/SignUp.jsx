import React, { useState } from 'react';
import { Card, Container, FloatingLabel, Form } from 'react-bootstrap';

const SignUp = () => {
    const [email, setEmail] = useState();
    const [passWord, setPassWord] = useState();
    const [confirmPassWord, setConfirmPassWord] = useState();
    
    const getUserEmail = (e) => {
        setEmail(e.target.value);
    }
    const getUserPassword = (e) => {
        setPassWord(e.target.value);
    }
    const getUserConfirmPassword = (e) => {
        setConfirmPassWord(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(passWord !== confirmPassWord){
            console.log("error");
        }
    };
  
    return (
        <section className='sign-up'>
            <Container style={{minHeight:'70vh'}} className='d-flex align-items-center justify-content-center'>
                <div className='w-100' style={{maxWidth:'600px'}}>
                    <Card className='p-4 shadow border-0'>
                        <Card.Body>
                            <Card.Title>
                                <h3 className="fw-bold">Create an account</h3>
                            </Card.Title>
                            <Form onSubmit={handleSubmit} className='my-5'>
                                 <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control onBlur={getUserEmail} type="email"  placeholder="name@example.com" />
                                </FloatingLabel>
                                
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="PassWord"
                                    className="mb-3"
                                >
                                    <Form.Control onBlur={getUserPassword} type="password"  placeholder="123456" />
                                </FloatingLabel> 

                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Confrim Passowrd"
                                    className="mb-3"
                                >
                                    <Form.Control onBlur={getUserConfirmPassword} type="password"  placeholder="123456" />
                                </FloatingLabel>

                                <input type="submit" value="Sign Up" className='w-100' /> 
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </section>
    );
};

export default SignUp;