import styles from '../css/Company.css';

import React, { PropTypes } from 'react';
import ChildFormRow from './ChildFormRow';

function CompanyRow(props) {
  return (
    <thead>
      <tr>
        <td>{props.company.name}</td>
        <td>{props.company.earnings} $</td>
        <td>
          { !props.add ?
            <span>
              <button className={styles.deleteCompanyButton}
                onClick={props.onDelete}>
                Delete
              </button>
              <button className={styles.editCompanyButton}
                onClick={props.onToggle}>
                Edit
              </button>
              <button className={styles.addChildButton}
                onClick={props.onChildToggle}>
                +
              </button>
            </span> :
            null
          }
        </td>
        <td>{props.company.earnings} $</td>
      </tr>
      {
        props.add ?
        <ChildFormRow
          onChildToggle={props.onChildToggle}
          onChildAdd={props.onChildAdd} /> :
        null
      }
    </thead>
  );
}

CompanyRow.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    earnings: PropTypes.number.isRequired,
  }).isRequired,
  add: PropTypes.bool,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onChildToggle: PropTypes.func.isRequired,
  onChildAdd: PropTypes.func.isRequired,
};

export default CompanyRow;
