import React from 'react'
import {
  func,
  string,
  instanceOf,
} from 'prop-types'
import moment from 'moment'
import { is } from 'ramda'
import classnames from 'classnames'

const ShowDate = ({
  date,
  period,
  onPeriodChange,
}) => {
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
      </div>
      <div>
        <div className="Datepicker__ShowDate_day">{day}</div>
        <div className="Datepicker__ShowDate_week">{weekDay}</div>
      </div>
    </div>
  )
}

ShowDate.propTypes = {
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
