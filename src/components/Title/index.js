import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";
import './title.css'

export const Title = ({ text, textclass }) => {
  return (
    <h1 className={textclass}>{text}</h1>
  )
}


Title.propTypes = {
  text: PropTypes.string.isRequired,
  class: PropTypes.string
};
Title.defaultProps = {};

export default Title;
