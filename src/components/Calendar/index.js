import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";

class Calendar extends Component {
  render() {
    return(
     <div className={`${this.props.type === "secondary" ? css.calandar : css.calandarSecondary}`}>
        <p className={`${css.calandarday}`}>23</p>
        <p className={`${css.calandarmonth}`}>03</p>
     </div>
    )
  }
}

Calendar.propTypes = {
  type: PropTypes.string
};
Calendar.defaultProps = {};

export default Calendar;