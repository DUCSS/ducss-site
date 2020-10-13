import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import InternshipsPage from './pages/InternshipsPage';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/internships" component={InternshipsPage} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
