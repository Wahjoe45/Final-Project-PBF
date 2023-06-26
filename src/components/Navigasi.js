import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigasi = ()=>{
    return(
                <Navbar bg = "dark" variant = "dark" expand="lg" >
                <Container>
                <Navbar.Brand href="#">E-Bookers</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Daftar Tiket</Nav.Link>
                    <NavDropdown title="Layanan" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">FAQ</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Customer Service
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Comment
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#action6">Deskripsi Aplikasi</Nav.Link>
                    
                </Nav>
                    <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="primary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    );
}

export default Navigasi;