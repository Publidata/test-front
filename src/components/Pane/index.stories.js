import React from 'react';
import { storiesOf } from "@storybook/react";

import Pane from ".";
import Img from "./gardener_cover.png";


export default {
  title: 'Exercise/Components/Pane',
  component: Pane,
}

const Template = (args) => <Pane {...args} />;

export const Default = Template.bind({});
Default.args = {
}

export const WithCover = Template.bind({});
WithCover.args = {
  cover: Img,
  title: "Le Printemps des Jardiniers",
};









// storiesOf('Exercise/Components/Pane', module)
//   .add('default', () => (
//     <Pane />
//   )).add('with cover', () => (
//     <Pane cover={Img} title="Le printemps des jardiniers" />
//   ))
