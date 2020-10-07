import React from 'react';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import InternshipsPage from './pages/InternshipsPage';

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
