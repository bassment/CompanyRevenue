import shared from '../css/shared.css';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions/company';

class CompanyForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.addCompany = this.addCompany.bind(this);
  }

  addCompany(e) {
    e.preventDefault();

    const nameRef = this.refs.name;
    const earningsRef = this.refs.earnings;
    if (nameRef.value && earningsRef.value) {
      this.props.addCompany(nameRef.value, Number(earningsRef.value));
      nameRef.value = earningsRef.value = '';
    }
  }

  render() {
    return (
      <div className="add-company">
        <form onSubmit={this.addCompany}>
          <input type="text" placeholder="Company Name" ref="name" />
          <input type="text" placeholder="Company Earnings" ref="earnings" />
          <button type="submit">Create Top Company</button>
        </form>
      </div>
    );
  }
}

CompanyForm.propTypes = {
  addCompany: PropTypes.func.isRequired,
};

export default connect()(CompanyForm);
