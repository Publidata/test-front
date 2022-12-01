import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button'
import Title from '../Title'
import Calandar from '../Calendar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

import css from "./index.module.scss";

class Pane extends Component {
  render() {
    return(
      <div className={` ${css.pane} ${this.props.type === "primary" ? css.primaryPane : css.secondaryPane} ${this.props.cover ? css.withCover : ''}`}>
        
        {
          this.props.cover ? 
          // First pane with image
          (
            <div className={css.cover} style={{ backgroundImage: "url(" + this.props.cover + ")" }}>
              <div className={css.cover_infos}>
                <div className={css.cover_infosTitle}>
                  <div className={css.cover_infosHeader}>
                    <Calandar type={"secondary"}></Calandar>
                    <Title types={"primary"}>{this.props.title}</Title>
                  </div>
                  <div className={css.cover_infosLocation} >
                    <FontAwesomeIcon icon={faMapMarker} size="md" color='#28a49a'/>
                    <Title types={"thirdly_italic"}>{this.props.secondaryTitle}</Title>
                  </div>
                </div>
                <div  className={css.cover_infosBtn}>
                  <Button arrow={true}></Button>
                </div>
              </div>
            </div>
          ) : 
          // Second pane without image
          ( 
            <div className={css.secondary}>
              <div className={css.secondary_calandar}>
                <Calandar></Calandar>
              </div>
              <div className={css.secondary_icon} style={this.props.emoji ==="bee" ? {paddingTop : "15px"} : {paddingTop : "0px"} }>
              {this.props.emoji === "bee" ? "🐝" : "🙆‍♀️" }
              </div>
              <div className={css.secondary_title}>
                <Title types={"secondary"}>{this.props.title}</Title>
                <div className={css.secondary_location} >
                    <FontAwesomeIcon icon={faMapMarker} size="md" color='#28a49a' style={{paddingRight: "10px"}}/>
                    <Title types={"thirdly"}>{this.props.secondaryTitle}</Title>
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

Pane.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  secondaryTitle: PropTypes.string,
  type: PropTypes.string
};

Pane.defaultProps = {
  title: "Default title"
};

export default Pane;
