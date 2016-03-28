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
            <h1>Welcome!</h1>
            <Link to="/company">
              <button
                className={styles.button}>
                Company!
              </button>
            </Link>
          </section>
      </div>
    );
  }
}
