import shared from '../css/shared.css';

import React, {PropTypes} from 'react';
import { Link } from 'react-router';

function CompanyListItem(props) {
  return (
    <div className="single-company">
      <h3 className="company-title ">
        {props.company.name}
      </h3>
      <p className="company-earnings">{props.company.earnings}</p>
      <hr className="divider"/>
      { props.company.children ?
        props.company.children.map((child, i) => {
          return (
            <div key={i} className="info">
              <p>{child.name}</p>
              <p>{child.content}</p>
              <p>{child.title}</p>
              <hr className="divider"/>
            </div>
          );
        }) :
        null
      }
    </div>
  );
}

CompanyListItem.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    earnings: PropTypes.number.isRequired,
    children: this,
  }).isRequired,
};

export default CompanyListItem;
