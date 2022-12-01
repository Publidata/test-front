import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";
import './adresse.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'



export const Adresse = ({ primary, place, icon }) => {
  const mode = primary ? 'primary' : 'secondary';
  return (
    <p className={['adresse', mode].join(' ')}>{icon}{place}</p>
  )
}


Adresse.propTypes = {
  primary: PropTypes.bool,
  place: PropTypes.string,
  icon: PropTypes.string,
};
Adresse.defaultProps = {
  primary: false,
  place: "Domaine de la Grange - la Prévôté",
  icon: <FontAwesomeIcon icon={faMapMarker} />,
};

export default Adresse;
