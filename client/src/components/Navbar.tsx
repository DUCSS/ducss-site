import React from 'react';

import BootstrapNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { ReactComponent as DucssLogo } from '../assets/logo_white.svg';

const Navbar: React.FC = () => {
  return (
    <BootstrapNavbar variant="dark" bg="dark">
      <BootstrapNavbar.Brand href="/">
        <DucssLogo width="75" height="auto" />
      </BootstrapNavbar.Brand>
      <Nav.Link href="/internships">Internships</Nav.Link>
    </BootstrapNavbar>
  );
};

export default Navbar;
