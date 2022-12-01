import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from "./index.module.scss";
import Pane from '../Pane'
import Img from "../Pane/gardener_cover.png";

class View extends Component {
  render() {
    return(
        <div>
            <Pane type={"primary"} cover={Img} title="Le Printemps Des Jardiniers" secondaryTitle="Domaine de la Grange - la Prévôté"/>
            <Pane  type={"secondary"} emoji={"bee"} secondaryTitle="Domaine de la Grange - la Prévôté" title="Conférence sur le frelon asiatique" />
            <Pane  type={"secondary"} secondaryTitle="Domaine de la Grange - la Prévôté" title="L'entrepreneuriat au féminin" />
        </div>
    )
  }
}


View.propTypes = {};
View.defaultProps = {};

export default View;