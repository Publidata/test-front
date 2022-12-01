import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button'
import Title from '../Title'

// import css from "./index.module.scss";
import './pane.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Date } from "../Date";
import { Adresse } from "../Adresse";
import { Event } from "../Event";


export const Pane = ({ cover }) => {
  return (
    <div className="main">
      <div className="pane" style={{ background: "linear-gradient(to bottom, rgba(220, 220, 220, 0.1), rgba(86, 97, 90, 0.83)), url(" + cover + ")", backgroundSize: "cover" }}>
        <div className="container">
          <div className="left">
            <div className="leftContainer">
              <Date primary="true" />
              <Title textclass="mainText" text="Le Primtemps des Jardiniers" />
            </div>
            <Adresse />
          </div>
          <div className="right">
            <Button
              url="https://www.savigny-le-temple.fr/domaine-grange-prevote/printemps-jardiniers"
              primary="true"
              size="sm"
              label={<FontAwesomeIcon
                icon={faArrowRight} />}
            >
            </Button>
          </div>
        </div>
      </div>
      <Event emoji="🐝" title="Conférence sur le frelon asiatique" />
      <Event emoji="🙆" title="L'entrepreneuriat au féminin" />
    </div>
  );
};

Pane.propTypes = {
  cover: PropTypes.string,
};

Pane.defaultProps = {
};

export default Pane;
