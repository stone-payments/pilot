import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import moment from 'moment'

import DatePicker from '../src/components/DatePicker'

const Article = ({ children }) => (
  <div>
    <h1>Hello World!</h1>
    {children}
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
)

storiesOf('DatePicker', module)
  .add('Escolha uma data', () => (
    <Article>
      <DatePicker
        onDateChange={action('onDateChange')}
        onFocusChange={action('onFocusChange')}
        enableOutsideDays
        monthFormat="MMMM"
        displayFormat="DD/MMMM/YY"
      />
    </Article>
  ))
  .add('DatePicker disabled', () => (
    <Article>
      <DatePicker
        disabled
        onDateChange={action('onDateChange')}
        onFocusChange={action('onFocusChange')}
        enableOutsideDays
        monthFormat="MMMM"
        displayFormat="DD/MMMM/YY"
      />
    </Article>
  ))
  .add('DatePicker required', () => (
    <Article>
      <DatePicker
        required
        onDateChange={action('onDateChange')}
        onFocusChange={action('onFocusChange')}
        enableOutsideDays
        monthFormat="MMMM"
        displayFormat="DD/MMMM/YY"
      />
    </Article>
  ))
  .add('DatePicker readOnly', () => (
    <Article>
      <DatePicker
        required
        onDateChange={action('onDateChange')}
        onFocusChange={action('onFocusChange')}
        enableOutsideDays
        monthFormat="MMMM"
        displayFormat="DD/MMMM/YY"
      />
    </Article>
  ))
  .add('DatePicker screenReaderInputMessage', () => (
    <Article>
      <DatePicker
        screenReaderInputMessage
        onDateChange={action('onDateChange')}
        onFocusChange={action('onFocusChange')}
        enableOutsideDays
        monthFormat="MMMM"
        displayFormat="DD/MMMM/YY"
      />
    </Article>
  ))
  .add('Escolha um periodo de datas', () => (
    <Article>
      <DatePicker
        range
        onDatesChange={action('onDatesChange')}
        onFocusChange={action('onFocusChange')}
      />
    </Article>
  ))
  .add('Dias desabilitados', () => (
    <Article>
      <div
        style={{
          display: 'flex',
        }}
      >
        <DatePicker
          onDateChange={action('onDateChange')}
          onFocusChange={action('onFocusChange')}
          disableWeekends
        />
      </div>
    </Article>
  ))
  .add('Periodo com dias desabilitados', () => (
    <Article>
      <DatePicker
        range
        onDatesChange={action('onDatesChange')}
        onFocusChange={action('onFocusChange')}
        disableWeekends
      />
    </Article>
  ))
