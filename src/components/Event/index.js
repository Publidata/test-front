import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";

import { Date } from '../Date';
import { Adresse } from '../Adresse';
import { Title } from "../Title";


export const Event = ({ emoji, title, url, day, month }) => {

  return (
    <a href={url}>
      <div className={css.card}>
        <div className={css.card__container}>
          <span className={css.date__container}>
            <Date day={day} month={month} />
          </span>
          <span className={css.emoji}>{emoji}</span>
          <div className={css.addr__container}>
            <Title text={title} textclass="subText" />
            <Adresse primary="true" place="Domaine de la Grange - la Prévôté" />
          </div>
        </div>
      </div>
    </a>
  )
};

Event.propTypes = {
  emoji: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  day: PropTypes.string,
  month: PropTypes.string
};

Event.defaultProps = {
  emoji: '🐝',
};
