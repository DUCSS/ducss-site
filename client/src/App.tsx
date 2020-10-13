import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import InternshipsPage from './pages/InternshipsPage';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Homepage />
        <InternshipsPage />
      </Container>
    </>
  );
};

export default App;
