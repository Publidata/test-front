import React from 'react';
import { storiesOf } from "@storybook/react";

import Calendar from "./";

storiesOf('Exercise/Components/Calendar', module)
  .add('default', () => (
    <Calendar></Calendar>
  ))
  .add('secondary', () => (
    <Calendar type={"secondary"}></Calendar>
  ));
