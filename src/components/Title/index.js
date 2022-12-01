import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";

class Title extends Component {
  render() {
    return(
      <h1 className={
        `${css.title} 
        ${this.props.types === 'primary' ? css.title_primary : this.props.types === 'secondary' ? css.title_secondary : this.props.types === 'thirdly' ? css.title_thirdly : this.props.types === 'thirdly_italic' ? css.title_thirdly_italic : "" }
        `}>{this.props.children}</h1>
    )
  }
}


Title.propTypes = {
  types: PropTypes.string,
};
Title.defaultProps = {};

export default Title;
