import shared from '../css/shared.css';

import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

export default class CompanyTable extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Company"/>
          <section className={shared.section}>
            <h1>Companies</h1>
            <Link to="/"><button className={shared.homeButton}>Go Home</button></Link>
          </section>
      </div>
    );
  }
}
