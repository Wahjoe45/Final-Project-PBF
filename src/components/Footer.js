import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = ()=>{
    return(
        <Navbar bg = "dark" variant = "dark">
      <Container>
        <Navbar.Brand href="#home">E-Bookers</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Copyright Alright Reserved: <a href="#login">2023</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );

}

export default Footer;