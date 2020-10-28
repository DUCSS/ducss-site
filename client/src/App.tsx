import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Homepage from './pages/Homepage';
import InternshipsPage from './pages/InternshipsPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/internships" exact component={InternshipsPage} />
          <Route path="*" status="404" component={NotFoundPage} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
