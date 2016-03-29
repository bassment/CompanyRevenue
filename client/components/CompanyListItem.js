import styles from '../css/Company.css';

import React, {PropTypes} from 'react';
import CompanyFormRow from './CompanyFormRow';
import CompanyRow from './CompanyRow';

class CompanyListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      add: false,
    };

    this.updateCompany = this.updateCompany.bind(this);
    this.addChildCompany = this.addChildCompany.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleToggleChildRow = this.handleToggleChildRow.bind(this);
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      edit: !this.state.edit,
    });
  }

  handleToggleChildRow(e) {
    e.preventDefault();
    this.setState({
      add: !this.state.add,
    });
  }

  updateCompany(name, earnings) {
    this.props.onUpdate(name, earnings);
    this.setState({
      edit: !this.state.edit,
    });
  }

  addChildCompany(name, earnings) {
    this.props.onChildAdd(name, earnings);
    this.setState({
      add: !this.state.add,
    });
  }

  render() {
    return this.state.edit ?
      <CompanyFormRow
        company={this.props.company}
        onToggle={this.handleToggle}
        onUpdate={this.updateCompany} /> :
      <CompanyRow
        company={this.props.company}
        add={this.state.add}
        onDelete={this.props.onDelete}
        onToggle={this.handleToggle}
        onChildToggle={this.handleToggleChildRow}
        onChildAdd={this.addChildCompany} />;
  }
}

CompanyListItem.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    earnings: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onChildAdd: PropTypes.func.isRequired,
};

export default CompanyListItem;
