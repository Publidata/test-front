import React from 'react';
import { storiesOf } from "@storybook/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

import { Date } from "./";


export default {
  title: 'Exercise/Components/Date',
  component: Date,
};

const Template = (args) => <Date {...args}></Date>;

export const PrimaryDate = Template.bind({});
PrimaryDate.args = {
  label: 'My date',
  primary: true,
};

export const SecondaryDate = Template.bind({});

SecondaryDate.args = {
  label: 'My secondary date',
  primary: false,
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

