import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({ href, children }) => {
  return (
    <li className="nav-list__item">
      <a href={href}>{children}</a>
    </li>
  );
};

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default NavItem;
