import styles from '../css/Company.css';

import React, {PropTypes} from 'react';
import { Link } from 'react-router';

function CompanyListItem(props) {
  return (
      <tr>
        <td>{props.company.name}</td>
        <td>{props.company.earnings} $</td>
        <td>
          <button className={styles.deleteCompanyButton}
            onClick={props.onDelete}>Delete
          </button>
        </td>
        <td></td>
      </tr>

        // { props.company.children ?
        //   props.company.children.map((child, i) => {
        //     return (
        //       <div key={i} className="info">
        //         <p>{child.name}</p>
        //         <p>{child.earnings}</p>
        //         <hr className="divider"/>
        //       </div>
        //     );
        //   }) :
        //   null
        // }
  );
}

CompanyListItem.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    earnings: PropTypes.number.isRequired,
    children: this,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CompanyListItem;
