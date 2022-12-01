import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";

class Button extends Component {
  render() {
    return(
      <button className={`${css.btn} btn ${'btn-' + this.props.type} ${'btn-' + this.props.size} ${this.props.arrow ? css.btn_arrow : " "}`}>{this.props.children}</button>
    )
  }
}

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  arrow: PropTypes.bool
};

Button.defaultProps = {
  type: "primary",
  size: "md",
  arrow: false
};


export default Button;
