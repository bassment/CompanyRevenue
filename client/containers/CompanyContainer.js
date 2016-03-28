import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions/company';

import CompanyListView from './CompanyListView';
import Helmet from 'react-helmet';

class CompanyContainer extends Component {
  componentDidMount() {
    this.props.dispatch(Actions.fetchCompanies());
  }

  render() {
    return (
      <div>
        <Helmet title="Company"/>
        {console.log(this.props.companies)}
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
