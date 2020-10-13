import React from 'react';
import { Link } from 'react-router-dom';

import BootstrapNavbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import { ReactComponent as DucssLogo } from '../assets/logo_white.svg';

const Navbar: React.FC = () => {
  return (
    <BootstrapNavbar variant="dark" bg="dark">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          <DucssLogo width="75" height="auto" />
        </BootstrapNavbar.Brand>
        <Nav>
          <Nav.Item>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/internships">
              Internships
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
