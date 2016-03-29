import styles from '../css/Company.css';

import React, { PropTypes } from 'react';

import ChildFormRow from './ChildFormRow';

class CompanyRow extends React.Component {
  deleteChildCompany(child) {
    this.props.onChildDelete(child);
  }

  render() {
    let children;
    if (this.props.company.children.length !== 0) {
      children = this.props.company.children.map(child => (
        <tr key={child._id}>
          <td>
            <span className={styles.deepLevel}>Child of {this.props.company.name}: </span>
              {child.name}
           </td>
          <td>{child.earnings} $</td>
          <td>
            <button className={styles.deleteChildButton}
              onClick={this.deleteChildCompany.bind(this, child)}>
              Delete
            </button>
          </td>
          <td></td>
        </tr>
      ));
    } else {
      children = null;
    }

    return (
      <thead>
        <tr>
          <td><span className={styles.parentCompanyLabel}>{this.props.company.name}</span></td>
          <td>{this.props.company.earnings} $</td>
          <td>
            { !this.props.add ?
              <span>
                <button className={styles.deleteCompanyButton}
                  onClick={this.props.onDelete}>
                  Delete
                </button>
                <button className={styles.editCompanyButton}
                  onClick={this.props.onToggle}>
                  Edit
                </button>
                <button className={styles.addChildButton}
                  onClick={this.props.onChildToggle}>
                  +
                </button>
              </span> :
              null
            }
          </td>
          <td><span className={styles.total}>{this.props.company.earnings} $</span></td>
        </tr>
        {
          this.props.add ?
          <ChildFormRow
            onChildToggle={this.props.onChildToggle}
            onChildAdd={this.props.onChildAdd} /> :
          null
        }
        { children }
      </thead>
    );
  }
}

CompanyRow.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    earnings: PropTypes.number.isRequired,
    children: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  add: PropTypes.bool,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onChildToggle: PropTypes.func.isRequired,
  onChildAdd: PropTypes.func.isRequired,
  onChildDelete: PropTypes.func.isRequired,
};

export default CompanyRow;
