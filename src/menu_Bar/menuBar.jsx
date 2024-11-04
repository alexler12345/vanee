
import { Navbar, Nav, Container, Offcanvas} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './menuBar.css';
export function Menubar() {
 const expand = 'false';
  return (
    <Navbar key={expand} bg="dark" variant="dark" expand={expand} className="mb-3">
    <Container fluid>
     
      <Navbar.Brand href="#">
        <img
          src="/Vanee-truck/images/icon.png"
          alt="Logo"
          className="logo-img"
          style={{ maxHeight: '40px', marginRight: '10px' }}
        />
       
      </Navbar.Brand>

      {/* Toggle button for small screens (hamburger) */}
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

      {/* Offcanvas menu (side panel on smaller screens) */}
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
      >
       <OffcanvasMenu expand ={expand}/>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>

  );
}


function OffcanvasMenu({expand}) {
  
  return (
    <>
    <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            Menu
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#">Products</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="#">Booking</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            
          </Nav>
        </Offcanvas.Body>
   
    
  </>
  );
}