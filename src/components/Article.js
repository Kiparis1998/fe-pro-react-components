import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, subtitle }) => {
  return (
    <li className="list__item">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </li>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Article;
