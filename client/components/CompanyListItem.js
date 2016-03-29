import styles from '../css/Company.css';

import React, {PropTypes} from 'react';
import { Link } from 'react-router';

class CompanyListItem extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      edit: false,
      add: false,
    };

    this.updateCompany = this.updateCompany.bind(this);
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
    const childFormRow = (
      <tr className={styles.childFormRow}>
        <td>
          <input
            type="text"
            placeholder="Child Name" />
        </td>
        <td>
          <input
            type="text"
            placeholder="Child Earnings" />
        </td>
        <td>
          <button className={styles.deleteCompanyButton}
            onClick={this.handleToggleChildRow}>
            Cancel
          </button>
          <button className={styles.editCompanyButton}>
            Save
          </button>
        </td>
        <td></td>
      </tr>
    );

    const companyRow = (
      <thead>
        <tr>
          <td>{this.props.company.name}</td>
          <td>{this.props.company.earnings} $</td>
          <td>
            { !this.state.add ?
              <span>
                <button className={styles.deleteCompanyButton}
                  onClick={this.props.onDelete}>
                  Delete
                </button>
                <button className={styles.editCompanyButton}
                  onClick={this.handleToggle}>
                  Edit
                </button>
                <button className={styles.addChildButton}
                  onClick={this.handleToggleChildRow}>
                  +
                </button>
              </span> :
              null
            }
          </td>
          <td>{this.props.company.earnings} $</td>
        </tr>
        { this.state.add ? childFormRow : null }
      </thead>
    );

    const companyFormRow = (
      <tbody>
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
          <td></td>
        </tr>
      </tbody>
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
