import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import css from "./index.module.scss";
import './button.css';

export const Button = ({ primary, backgroundColor, type, size, url, label, ...props }) => {
  const mode = primary ? 'btn-primary' : 'btn-secondary';
  return (
    <a href={url}>
      <button
        type="button"
        className={[`btn-${size}`, mode].join(' ')}
        style={backgroundColor && { backgroundColor }}
        {...props}
      >
        {label}
      </button>
    </a>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  url: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: null,
  size: "md"
};
