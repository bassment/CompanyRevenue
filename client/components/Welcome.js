import shared from '../css/shared.css';
import styles from '../css/Welcome.css';

import React from 'react';
import {Link} from 'react-router';
import Helmet from 'react-helmet';

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Eliftech"/>
          <section className={shared.section}>
            <h1>Hi! For this project I've used: </h1>
            <h3>NodeJS, Mongoose, React, </h3>
            <h3>Webpack, React-Router, Redux, </h3>
            <h3>MongoLab and Css-Modules</h3>
            <h5>Company application</h5>
            <Link to="/company">
              <button
                className={styles.button}>
                Click Me!
              </button>
            </Link>
          </section>
      </div>
    );
  }
}
