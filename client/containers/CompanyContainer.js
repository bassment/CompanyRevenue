import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions/company';

import CompanyListView from './CompanyListView';
import CompanyForm from '../components/CompanyForm';
import Helmet from 'react-helmet';

class CompanyContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.addCompany = this.addCompany.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(Actions.fetchCompanies());
  }

  addCompany(name, earnings) {
    this.props.dispatch(Actions.addCompanyRequest({ name, earnings }));
  }

  render() {
    return (
      <div>
        <Helmet title="Company"/>
        <CompanyForm addCompany={this.addCompany} />
        <CompanyListView companies={this.props.companies}/>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    companies: store.companies,
  };
}

CompanyContainer.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    earnings: PropTypes.number.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(CompanyContainer);
