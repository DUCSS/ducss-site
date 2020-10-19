import React from 'react';
import { NavLink } from 'react-router-dom';

import BootstrapNavbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import { ReactComponent as DucssLogo } from '../assets/logo_white.svg';

import './Navbar.scss';

const Navbar: React.FC = () => {
  return (
    <BootstrapNavbar fixed="top" variant="dark" bg="ducss-dark">
      <Container>
        <BootstrapNavbar.Brand as={NavLink} to="/">
          <DucssLogo width="75" height="auto" />
        </BootstrapNavbar.Brand>
        <Nav>
          <Nav.Item>
            <Nav.Link
              as={NavLink}
              to="/"
              exact
              activeClassName="navbar--active"
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={NavLink}
              to="/internships"
              activeClassName="navbar--active"
            >
              Internships
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
