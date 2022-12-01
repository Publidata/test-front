import React from 'react';
import { storiesOf } from "@storybook/react";

import Pane from "./";
import Img from "./gardener_cover.png";

storiesOf('Exercise/Components/Pane', module)
  .add('default', () => (
    <Pane />
  )).add('with cover pane', () => (
    <Pane type={"primary"} cover={Img} title="Le Printemps Des Jardiniers" secondaryTitle="Domaine de la Grange - la Prévôté"/>
  )).add('secondary pane', () => (
    <Pane  type={"secondary"} secondaryTitle="Domaine de la Grange - la Prévôté" title="Conférence sur le frelon asiatique" />
  ));
