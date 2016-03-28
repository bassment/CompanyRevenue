import { connect } from 'react-redux';
import CompanyView from '../components/CompanyView';

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

const Company = connect(
  mapStateToProps
)(CompanyView);

export default Company;
