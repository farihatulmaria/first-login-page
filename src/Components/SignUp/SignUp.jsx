import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Card, Container, FloatingLabel, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase';

const SignUp = () => {
    const [email, setEmail] = useState();
    // const [firstName, setFirstName] = useState();
    // const [lastName, setLastName] = useState();
    const [passWord, setPassWord] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [confirmPassWord, setConfirmPassWord] = useState();
    const [createUserWithEmailAndPassword,] = useCreateUserWithEmailAndPassword(auth);
    

    // const getUserFirstName = (e) => {
    //     setFirstName(e.target.value);
    // }
    // const getUserLastName = (e) => {
    //     setLastName(e.target.value);
    // }

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
            setErrorMessage("Passwords Didn't Matched");
        }
        createUserWithEmailAndPassword(email,passWord);
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
                               {/*  <FloatingLabel
                                    controlId="floatingInput"
                                    label="First Name"
                                    className="mb-4"
                                >
                                    <Form.Control onBlur={getUserFirstName} type="text"  placeholder="name" />
                                </FloatingLabel>

                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Last Name"
                                    className="mb-4"
                                >
                                    <Form.Control onBlur={getUserLastName} type="text"  placeholder="name" />
                                </FloatingLabel> */}
                                
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-4"
                                >
                                    <Form.Control onBlur={getUserEmail} type="email"  placeholder="name@example.com" />
                                </FloatingLabel>
                                
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="PassWord"
                                    className="mb-4"
                                >
                                    <Form.Control onBlur={getUserPassword} type="password"  placeholder="123456" />
                                </FloatingLabel> 

                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Confirm Password"
                                    className="mb-4"
                                >
                                    <Form.Control onBlur={getUserConfirmPassword} type="password"  placeholder="123456" />
                                </FloatingLabel>

                                <input type="submit" value="Create An Account" className='w-100'/> 
                            </Form>
                            <p className='text-danger text-center fw-bold'>{errorMessage}</p>

                            <p className='text-center fw-normal'>Already Have An Account? <Link to={'/login'}>Login</Link></p>
                        </Card.Body>
                    </Card>
                    <p className='my-4 text-center or'>Or</p>
                    <div>
                        <Button className='provider w-100 my-2'> <FontAwesomeIcon icon={faFacebookF} className='facebook' /> Continue With Facebook</Button>

                        <Button className='provider w-100 my-2'> <FontAwesomeIcon icon={faGoogle} className='google' /> Continue With Google</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};
export default SignUp;