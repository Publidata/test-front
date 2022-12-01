import React from 'react';
import { storiesOf } from "@storybook/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Title from "./";

storiesOf('Exercise/Components/Title', module)
  .add('default', () => (
    <Title>My title</Title>
  ))
  .add('primary title', () => (
    <Title types={"primary"}>My title primary</Title>
  ))
  .add('secondary title', () => (
    <Title types={"secondary"}>My title primary</Title>
  ))
  .add('thirdly title', () => (
    <Title types={"thirdly"}>My title primary</Title>
  ))
  .add('thirdly title italic', () => (
    <Title types={"thirdly_italic"}>My title primary</Title>
  ))

  