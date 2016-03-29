import styles from '../css/Company.css';

import React, { PropTypes } from 'react';

class CompanyRow extends React.Component {
  constructor(props) {
    super(props);

    this.addChildCompany = this.addChildCompany.bind(this);
  }

  addChildCompany(e) {
    e.preventDefault();

    const nameRef = this.refs.name;
    const earningsRef = this.refs.earnings;

    if (nameRef.value && earningsRef.value) {
      this.props.onChildAdd(nameRef.value, Number(earningsRef.value));
      nameRef.value = earningsRef.value = '';
    }
  }

  render() {
    return (
      <tr className={styles.childFormRow}>
        <td>
          <input
            type="text"
            ref="name"
            placeholder="Child Name" />
        </td>
        <td>
          <input
            type="text"
            ref="earnings"
            placeholder="Child Earnings" />
        </td>
        <td>
          <button className={styles.deleteCompanyButton}
            onClick={this.props.onChildToggle}>
            Cancel
          </button>
          <button className={styles.editCompanyButton}
            onClick={this.addChildCompany}>
            Save
          </button>
        </td>
        <td></td>
      </tr>
    );
  }
}

CompanyRow.propTypes = {
  onChildToggle: PropTypes.func.isRequired,
  onChildAdd: PropTypes.func.isRequired,
};

export default CompanyRow;
