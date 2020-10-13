import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Homepage from './pages/Homepage';
import InternshipsPage from './pages/InternshipsPage';
import Navbar from './components/Navbar';
import NotFoundPage from './pages/NotFoundPage';

import 'bootstrap/dist/css/bootstrap.min.css';

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
    </Router>
  );
};

export default App;
