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
};

export const SecondEvent = Template.bind({});

SecondEvent.args = {
};



// storiesOf('Exercise/Components/Button', module)
//   .add('with text', () => (
//     <Button>My button</Button>
//   )).add('with some emoji', () => (
//     <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
//   )).add("with font-awesome", () => (
//     <Button>
//       <FontAwesomeIcon icon={faMapMarker} />
//     </Button>
//   )).add('with type', () => (
//     <Button type="dark">My button</Button>
//   )).add('with size', () => (
//     <Button size="sm">My button</Button>
//   ));

