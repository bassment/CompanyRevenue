import styles from '../css/Company.css';

import React, { PropTypes } from 'react';

class CompanyFormRow extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(e) {
    e.preventDefault();

    const nameRef = this.refs.name;
    const earningsRef = this.refs.earnings;
    if (nameRef.value && earningsRef.value) {
      this.props.onUpdate(nameRef.value, Number(earningsRef.value));
    }
  }

  render() {
    return (
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
              onClick={this.props.onToggle}>
              Cancel
            </button>
            <button className={styles.editCompanyButton}
              onClick={this.handleUpdate}>
              Save
            </button>
          </td>
          <td></td>
        </tr>
      </tbody>
    );
  }
}

CompanyFormRow.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    earnings: PropTypes.number.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CompanyFormRow;
