import React from "react";
import { Navbar as BSNavbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
<BSNavbar
  expand="lg"
  className="theme-navbar shadow-sm"
>
  <Container>
    {/* Brand */}
    <BSNavbar.Brand as={Link} to="/" className="fw-bold text-dark">
      RLT Edzaro
    </BSNavbar.Brand>

    <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
    <BSNavbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto align-items-center">

        {/* Program Dropdown */}
        <NavDropdown
          title={
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="text-dark">
              Program
            </motion.div>
          }
          id="inside-program-dropdown"
          className="mx-2 text-dark"
        >
          <NavDropdown.Item as={Link} to="/inside-program/ai-developer">
            AI Developer
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/inside-program/cloud-developer">
            Cloud Developer
          </NavDropdown.Item>
        </NavDropdown>

        {/* Other Links */}
        {[
          { to: "/refer-friend", label: "Refer a Friend" },
          { to: "/career", label: "Career" },
          { to: "/hire-edzaro", label: "Hire from Edzaro" },
          { to: "/platform", label: "Platform" },
        ].map((link, i) => (
          <Nav.Link as={Link} to={link.to} key={i} className="mx-2 text-dark">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              {link.label}
            </motion.div>
          </Nav.Link>
        ))}

        {/* Highlighted About Us */}
        <Nav.Link as={Link} to="/about-us" className="mx-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="bg-primary text-white px-3 py-1 rounded"
          >
            About Us
          </motion.div>
        </Nav.Link>
      </Nav>
    </BSNavbar.Collapse>
  </Container>

  {/* CSS */}
  <style>{`
    .theme-navbar {
      background-color: #ffffffff; /* matching your theme */
    }
  `}</style>
</BSNavbar>


  );
};

export default Navbar;
