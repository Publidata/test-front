import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";

import { Date } from '../Date';
import { Adresse } from '../Adresse';
import { Title } from "../Title";


export const Event = ({ emoji, title }) => {

  return (
    <div className={css.card}>
      <div className={css.card__container}>
        <span className={css.date__container}>
          <Date />
        </span>
        <span className={css.emoji}>{emoji}</span><div className={css.addr__container}><Title text={title} textclass="subText" />
          <Adresse primary="true" place="Domaine de la Grange - la Prévôté" />
        </div>


      </div>
    </div>
  )
};

Event.propTypes = {
  emoji: PropTypes.string,
  title: PropTypes.string,
};

Event.defaultProps = {
  emoji: '🐝',
};
