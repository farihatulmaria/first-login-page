import React, { useState } from 'react';
import { Button, Card, Container, FloatingLabel, Form } from 'react-bootstrap';
import './Login.css';
const Login = () => {
    const [validated, setValidated] = useState(false);
/*     const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('')
    const getEmail = (e) => {
        setEmail(e.target.value);
    }
    const getPassword = (e) => {
        setPassword(e.target.value);
    } */
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);

/*       signInWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
          const user = userCredential.user;
          console.log(user);
          setError('')
      })
      .catch((error)=>{
        setError('Failed to login')
      }) */
      
    };
    
    return (
        <section className='login'>
            <Container style={{minHeight:'70vh'}} className='d-flex align-items-center justify-content-center'>
                <div className='w-100' style={{maxWidth:'600px'}}>
                    <Card className='px-3 py-2'>
                        <Card.Body>
                            <Card.Title> 
                                <h3 className='fw-bold'>Login</h3>
                            </Card.Title>
                            <Form noValidate validated={validated} onSubmit={handleSubmit} className='my-5'>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Username or Email"
                                    className="my-4">

                                    <Form.Control type="text" placeholder="name@example.com" required />
                                    <Form.Control.Feedback type="invalid">Please add your user name or add your email</Form.Control.Feedback>

                                </FloatingLabel>

                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Password"
                                    className="my-4">
                                        
                                    <Form.Control  type="password" placeholder="1234"  required />

                                    <Form.Control.Feedback type="invalid">Please add your password</Form.Control.Feedback>

                                </FloatingLabel>

                                <div className='d-flex align-items-center justify-content-between'>
                                    <Form.Check type="checkbox" label="Remember Me" />

                                    <a href="/create-account" className='text-success'> Forgot Password</a>
                                </div>

                            </Form>

                            <Button className='w-100 py-2 fs-4 rounded-0' type="submit">Login</Button>

                            <p className='text-center py-3 m-0'>
                                Don’t have an account? 
                                <a href="/create-account" className='text-success'> Create an account</a>
                            </p>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </section>
    );
};

export default Login;