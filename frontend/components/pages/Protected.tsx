import React from 'react';
import {Link} from 'react-router-dom';

const Protected = () => {
  return (
    <div className="o-container">
      <h1>
       I'm protected
      </h1>
      <h2><Link to="/">Go back to homepage</Link></h2>
    </div>
  );
};

export default Protected;