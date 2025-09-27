import React from "react";
import { Navbar as BSNavbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <BSNavbar bg="light" variant="light" expand="lg" className="shadow-sm">
      <Container>
        <BSNavbar.Brand as={Link} to="/">
          <i className="bi bi-code-slash me-2"></i>Edzaro Training
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            {/* Courses Link */}
            {/* <Nav.Link as={Link} to="/courses" className="mx-2 text-black">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                Courses
              </motion.div>
            </Nav.Link> */}

            {/* Inside the Program Dropdown */}
<NavDropdown
  title={
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="text-black">
      Program
    </motion.div>
  }
  id="inside-program-dropdown"
  className="mx-2 text-black"
>
  <NavDropdown.Item as={Link} to="/inside-program/ai-developer">
    AI Developer
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/inside-program/cloud-developer">
    Cloud Developer
  </NavDropdown.Item>
</NavDropdown>
            {/* Other Links */} 
            <Nav.Link as={Link} to="/refer-friend" className="mx-2 text-black">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                Refer a Friend
              </motion.div>
            </Nav.Link>

            <Nav.Link as={Link} to="/career" className="mx-2 text-black">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                Career
              </motion.div>
            </Nav.Link>

            <Nav.Link as={Link} to="/hire-edzaro" className="mx-2 text-black">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                Hire from Edzaro
              </motion.div>
            </Nav.Link>

            <Nav.Link as={Link} to="/platform" className="mx-2 text-black">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                Platform
              </motion.div>
            </Nav.Link>

            <Nav.Link as={Link} to="/about-us" className="mx-2 text-black bg-">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="bg-blue-1000  px-3 py-1 rounded">
                About Us
              </motion.div>
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
