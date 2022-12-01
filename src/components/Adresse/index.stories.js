import React from "react";

import { Adresse } from './'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Exercise/Components/Adresse',
  component: Adresse,
};

const Template = (args) => <Adresse {...args}><FontAwesomeIcon icon={faMapMarker} /> </Adresse>;

export const AdresseTextPrimary = Template.bind({});
AdresseTextPrimary.args = {
  place: 'Domaine de la Grange - la Prévôté',
  icon: <FontAwesomeIcon icon={faMapMarker} />,
  primary: true,
};

export const AdresseTextSecondary = Template.bind({});
AdresseTextSecondary.args = {
  place: 'Domaine de la Grange - la Prévôté',
  icon: <FontAwesomeIcon icon={faMapMarker} />,
  primary: false,
};