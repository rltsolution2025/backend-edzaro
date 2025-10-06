import React from "react";
import { Navbar as BSNavbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation(); // 👉 gives current URL path

  const links = [
    { to: "/refer-friend", label: "Refer a Friend" },
    { to: "/career", label: "Career" },
    { to: "/hire-edzaro", label: "Hire from Edzaro" },
    { to: "/platform", label: "Platform" },
  ];

  return (
    <BSNavbar expand="lg" className="theme-navbar shadow-sm fixed-top">
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
              title="Program"
              id="program-dropdown"
              className={`fw-bold text-dark ${
                location.pathname.startsWith("/inside-program") ? "active-link" : ""
              }`}
            >
              <NavDropdown.Item as={Link} to="/inside-program/cloud-developer">
                AWS Cloud Developer
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/inside-program/ai-developer">
                AI Developer
              </NavDropdown.Item>
            </NavDropdown>

            {/* Loop Through Links */}
            {links.map((link, i) => (
              <Nav.Link
                as={Link}
                to={link.to}
                key={i}
                className={`mx-2 fw-bold text-dark nav-item-link ${
                  location.pathname === link.to ? "active-link" : ""
                }`}
              >
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  {link.label}
                </motion.div>
              </Nav.Link>
            ))}

            {/* Highlighted About Us */}
            <Nav.Link as={Link} to="/about-us" className="mx-2 nav-item-link">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className={`px-4 py-2 rounded-pill fw-semibold ${
                  location.pathname === "/about-us"
                    ? "bg-active-about text-white"
                    : "text-white"
                }`}
                style={{ backgroundColor: "#2e596dff" }}
              >
                About Us
              </motion.div>
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>

      {/* ✅ Custom Styles */}
      <style>{`
        .theme-navbar {
          background-color: #fff;
        }

        /* Elegant active underline */
        .nav-item-link.active-link {
          position: relative;
          color: #2e596d !important;
          font-weight: 600;
        }

        .nav-item-link.active-link::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: #2e596d;
          border-radius: 2px;
          transition: width 0.3s ease;
        }

        /* Active dropdown style */
        .dropdown-toggle.active-link {
          color: #2e596d !important;
          font-weight: 600;
          text-decoration: underline;
        }

        .bg-active-about {
          background-color: #1f3f4f !important;
        }
      `}</style>
    </BSNavbar>
  );
};

export default Navbar;
