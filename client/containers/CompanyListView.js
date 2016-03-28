import React, { PropTypes } from 'react';
import CompanyListItem from '../components/CompanyListItem';
import { connect } from 'react-redux';
import * as Actions from '../actions/company';

function CompanyListView(props) {
  return (
    <div className="listView">
      {
        props.companies.map((company, i) => (
          <CompanyListItem company={company} key={i}
            onDelete={function handleDelete() {
              if (confirm('Do you want to delete this post')) { // eslint-disable-line
                props.dispatch(Actions.deletePostRequest(company));
              }
            }} />
        ))
      }
    </div>
  );
}

CompanyListView.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    earnings: PropTypes.number.isRequired,
    children: this,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(CompanyListView);
