import React from 'react'
import {
  func,
  string,
  instanceOf,
} from 'prop-types'
import moment from 'moment'
import { is } from 'ramda'
import classnames from 'classnames'
import shortid from 'shortid'

import IconAngleBottom from 'react-icons/lib/fa/angle-down'

const constantLabelId = shortid.generate()

const availableYears = [
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020,
  2021,
  2022,
  2023,
  2024,
  2025,
  2026,
  2027,
  2028,
  2029,
  2030,
]

const ShowDate = ({
  date,
  period,
  onPeriodChange,
  onYearChange,
}) => {
  const year = date.year()
  const day = `${date.format('DD')} de ${date.format('MMMM')}`
  const weekDay = date.format('dddd')
  const phrases = {
    start: 'Início:',
    end: 'Fim:',
  }

  const classname = classnames({
    Datepicker__ShowDate_period: true,
    [period]: is(String, period),
  })

  return (
    <div className="Datepicker__ShowDate">
      <div
        className="Datepicker__ShowDate_year"
        role="button"
        tabIndex="0"
        onClick={() => onPeriodChange && onPeriodChange(period)}
      >
        {period && (
          <div
            className={classname}
          >
            {phrases[period]}

          </div>
        )}
        <label
          className="Datepicker__ShowDate_year_block"
          htmlFor={constantLabelId}
        >
          {year}
          <IconAngleBottom />

          <select
            id={constantLabelId}
            onChange={onYearChange}
            className="Datepicker__year"
          >
            {availableYears.map(itemYear => (
              <option
                key={itemYear}
                value={itemYear}
              >
                {itemYear}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <div className="Datepicker__ShowDate_day">{day}</div>
        <div className="Datepicker__ShowDate_week">{weekDay}</div>
      </div>
    </div>
  )
}

ShowDate.propTypes = {
  onYearChange: func.isRequired,
  date: instanceOf(moment),
  period: string,
  onPeriodChange: func,
}

ShowDate.defaultProps = {
  date: null,
  period: null,
  onPeriodChange: null,
}

export default ShowDate
