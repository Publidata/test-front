import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";
import './date.css';


export const Date = ({ primary }) => {
  const mode = primary ? 'primary' : 'secondary';
  return (
    <div className={['date', mode].join(' ')}><div className="day">23</div><div className="month">03</div></div>
  )
};

Date.propTypes = {
  primary: PropTypes.bool,
};

Date.defaultProps = {
  backgroundColor: null,
  size: "md",
  primary: false,
};
