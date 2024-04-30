import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import userImage from '../../image/user.png';
import './Header.css';
const Header = () => {
    let navigate = useNavigate();
    const [user] = useAuthState(auth);
    return (
        <header>
            <Navbar className='py-4' expand="lg">
                <Container>
                    <Navbar.Brand href="/" className='fw-bold'>APARTMENT HUNT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        {/* <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/service">Service</Nav.Link>
                        <Nav.Link href="/concerns">Concerns</Nav.Link>
                        <Nav.Link href="/event">Event</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>*/}
                        <NavDropdown id="basic-nav-dropdown">
                            <img className='user-img' src={user?.photoURL ? user?.photoURL : userImage} alt="" />
                            <NavDropdown.Divider />
                            <p>{user?.email}</p>
                        </NavDropdown>
                        {
                            user?.uid ? <img className='user-img' src={user?.photoURL ? user?.photoURL : userImage} alt="" />
                            :
                            <Button onClick={()=> navigate('login')} className='px-4 py-2' variant='primary'>login</Button>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;