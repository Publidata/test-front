import React from 'react';
import { storiesOf } from "@storybook/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

import { Event } from ".";


export default {
  title: 'Exercise/Components/Event',
  component: Event,
};

const Template = (args) => <Event {...args}></Event>;

export const FirstEvent = Template.bind({});
FirstEvent.args = {
  emoji: '🐝',
  title: 'Conférence sur le frelon asiatique',
  url: 'https://www.savigny-le-temple.fr/content/attention-aux-frelons-asiatiques',
  day: "05",
  month: "03"
};

export const SecondEvent = Template.bind({});

SecondEvent.args = {
  emoji: '🙆',
  title: "L'entrepreneuriat au féminin",
  url: 'https://www.savigny-le-temple.fr/content/les-femmes-unies-senart-fus',
  day: "29",
  month: "03"
};
