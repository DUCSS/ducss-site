import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';

const Homepage: React.FC = () => {
  return (
    <div className="text-center">
      <Jumbotron className="my-4 bg-ducss-dark text-white">
        <h1>Dublin University Computer Science Society</h1>
        <hr className="my-4 bg-ducss-primary" />
        <p className="lead">A community in Trinity College Dublin.</p>
      </Jumbotron>
      <h1>
        <span role="img" aria-label="Construction Sign">
          🚧
        </span>{' '}
        Under Construction{' '}
        <span role="img" aria-label="Construction Sign">
          🚧
        </span>
      </h1>
    </div>
  );
};

export default Homepage;
