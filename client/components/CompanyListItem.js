import styles from '../css/Company.css';

import React, {PropTypes} from 'react';
import { Link } from 'react-router';

class CompanyListItem extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      edit: false,
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.updateCompany = this.updateCompany.bind(this);
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      edit: !this.state.edit,
    });
  }

  updateCompany(e) {
    e.preventDefault();

    const nameRef = this.refs.name;
    const earningsRef = this.refs.earnings;
    if (nameRef.value && earningsRef.value) {
      this.props.onUpdate(nameRef.value, Number(earningsRef.value));
      this.setState({
        edit: !this.state.edit,
      });
    }
  }

  render() {
    const companyRow = (
      <tr>
        <td>{this.props.company.name}</td>
        <td>{this.props.company.earnings} $</td>
        <td>
          <button className={styles.deleteCompanyButton}
            onClick={this.props.onDelete}>
            Delete
          </button>
          <button className={styles.editCompanyButton}
            onClick={this.handleToggle}>
            Edit
          </button>
        </td>
        <td>{this.props.company.earnings} $</td>
      </tr>
    );

    const companyFormRow = (
      <tr>
        <td>
          <input type="text"
            defaultValue={this.props.company.name}
            ref="name" />
        </td>
        <td>
          <input
            type="text"
            defaultValue={this.props.company.earnings}
            ref="earnings" />
        </td>
        <td>
          <button className={styles.deleteCompanyButton}
            onClick={this.handleToggle}>
            Cancel
          </button>
          <button className={styles.editCompanyButton}
            onClick={this.updateCompany}>
            Save
          </button>
        </td>
      </tr>
    );

    return this.state.edit ? companyFormRow : companyRow;
  }
}

CompanyListItem.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    earnings: PropTypes.number.isRequired,
    children: this,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CompanyListItem;
