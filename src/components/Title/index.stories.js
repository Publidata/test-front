import React from 'react';
import { storiesOf } from "@storybook/react";

import Title from "./";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Exercise/Components/Title',
  component: Title,
};

const Template = (args) => <Title {...args}></Title>;

export const MainCardText = Template.bind({});
MainCardText.args = {
  text: 'Le Printemps des Jardiniers',
  textclass: 'mainText'
};

export const SubCardText = Template.bind({});
SubCardText.args = {
  text: '',
  textclass: 'subText'
};





// storiesOf('Exercise/Components/Title', module)
//   .add('default', () => (
//     <Title>Le printemps des Jardiniers</Title>
//   )).add('adresse', () => (
//     <Title>Domaine de la Grange - la Prévôté</Title>
//   ))
