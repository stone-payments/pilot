import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'

import DatePicker from './index'

describe('DatePicker', () => {
  const onDateChange = jest.fn()
  const onFocusChange = jest.fn()

  const component = shallow(
    <DatePicker
      date={moment('12-14-2059')}
      onDateChange={onDateChange}
      onFocusChange={onFocusChange}
    />
  )

  it('should not show confirm button at first render', () => {
    const button = component
      .find('.DatePicker_confirmation__button')
      .exists()

    expect(button).toEqual(false)
  })
})
