import React from 'react';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import InternshipsPage from './pages/InternshipsPage';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <InternshipsPage />
    </div>
  );
};

export default App;
