import React from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <BSNavbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <BSNavbar.Brand as={Link} to="/">
          <i className="bi bi-code-slash me-2"></i>Edzaro Training
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/courses" className="mx-2">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <i className="bi bi-book me-1"></i>Courses
              </motion.div>
            </Nav.Link>
            <Nav.Link as={Link} to="/inside-program" className="mx-2">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <i className="bi bi-play-circle me-1"></i>Inside the Program
              </motion.div>
            </Nav.Link>
            <Nav.Link as={Link} to="/refer-friend" className="mx-2">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <i className="bi bi-share me-1"></i>Refer a Friend
              </motion.div>
            </Nav.Link>
            <Nav.Link as={Link} to="/career" className="mx-2">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <i className="bi bi-briefcase me-1"></i>Career
              </motion.div>
            </Nav.Link>
            <Nav.Link as={Link} to="/hire-edzaro" className="mx-2">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <i className="bi bi-people me-1"></i>Hire from Edzaro
              </motion.div>
            </Nav.Link>
            <Nav.Link as={Link} to="/platform" className="mx-2">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <i className="bi bi-laptop me-1"></i>Platform
              </motion.div>
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us" className="mx-2">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <i className="bi bi-info-circle me-1"></i>About Us
              </motion.div>
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;