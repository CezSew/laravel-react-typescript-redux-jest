import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../parts/Header';

const Protected = () => {
  return (
    <React.Fragment>
      <Header/>
      <div className="o-container">
        <section className="o-page-content">
            <h1 className="o-h1">
              I'm protected
            </h1>
            <p>Only logged in users can see this page!</p>
            <h2><Link to="/">Go back to homepage</Link></h2>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Protected;