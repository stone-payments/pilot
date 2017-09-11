import React from 'react'
import {
  SingleDatePicker,
} from 'react-dates'
import {
  merge,
  omit,
} from 'ramda'
import classNames from 'classnames'
import clickOutside from 'react-onclickoutside'
import IconAngleLeft from 'react-icons/lib/fa/angle-left'
import IconAngleRight from 'react-icons/lib/fa/angle-right'

import moment from './moment'

import StateComponent from './StateComponent'
import ShowDate from './ShowDate'
import ControlButtons from './ControlButtons'

import './style.scss'


class DatePicker extends StateComponent {
  constructor (props) {
    super(props)
    this.onFocusChange = this.onFocusChange.bind(this)
    this.isDayBlocked = this.isDayBlocked.bind(this)
  }

  render () {
    const {
      date,
      focused,
    } = this.state

    const filteredProps = omit(
      [
        'onDateChange',
        'onFocusChange',
        'disableWeekends',
      ],
      this.props
    )

    const className = classNames('DatePicker', 'DatePicker_default')

    return (
      <div
        onClick={this.toggleOpen}
        role="button"
        tabIndex="0"
        style={{ display: 'inline-block' }}
      >
        <div
          className={className}
        >
          {focused && (
            <div className="DatePicker__pane">
              <ShowDate
                date={moment(date)}
              />
            </div>
          )}

          <SingleDatePicker
            {...merge(this.defaultProps, filteredProps)}
            onFocusChange={this.onFocusChange}
            isDayBlocked={this.isDayBlocked}
            focused={focused}
            date={date}
            numberOfMonths={1}
            onDateChange={this.onDateChange}
            renderCalendarInfo={() => (
              <ControlButtons
                focused={focused}
                onCancel={this.onClickCancelDates}
                onConfirm={this.onClickConfirmDates}
              />
            )}
          />
        </div>
      </div>
    )
  }
}

DatePicker.defaultProps = {
  hideKeyboardShortcutsPanel: true,
  navPrev: <IconAngleLeft />,
  navNext: <IconAngleRight />,
  keepOpenOnDateSelect: true,
  readOnly: true,
  displayFormat: 'DD/MMMM/YY',
  monthFormat: 'MMMM',
}

export default clickOutside(DatePicker)
