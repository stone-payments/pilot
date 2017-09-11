import { Component } from 'react'
import { func, bool } from 'prop-types'
import {
  mergeAll,
  is,
  contains,
} from 'ramda'
import moment from './moment'

const WEEKENDS = [0, 6]

class StateComponent extends Component {
  constructor (props) {
    super(props)

    const now = moment()
    this.state = mergeAll([
      {
        date: now,
        previewsDate: now,
        focused: null,
      },
      props,
    ])

    this.onDateChange = this.onDateChange.bind(this)
    this.onFocusChange = this.onFocusChange.bind(this)
    this.onSingleFocusChange = this.onSingleFocusChange.bind(this)
    this.onClickCancelDates = this.onClickCancelDates.bind(this)
    this.onClickConfirmDates = this.onClickConfirmDates.bind(this)
    this.toggleOpen = this.toggleOpen.bind(this)
  }

  onDatesChange ({ startDate, endDate }) {
    this.setState({
      startDate: startDate || this.state.startDate,
      endDate: endDate || this.state.endDate,
    })
  }

  onDateChange (date) {
    this.setState({
      date,
    })
  }

  onFocusChange ({ focused }) {
    this.setState({
      focused,
    })

    this.props.onFocusChange({ focused })
  }

  onSingleFocusChange (isFocused) {
    if (isFocused === null) { return }

    if (is(Boolean, isFocused)) {
      this.setState({ focused: isFocused })
    } else {
      this.setState({ focusedInput: isFocused })
    }
  }

  onClickCancelDates () {
    console.log('happened')

    const {
      previewsDate,
    } = this.state

    this.setState({
      date: previewsDate,
      focused: false,
    })
  }

  onClickConfirmDates () {
    const {
      date,
    } = this.state

    this.setState({
      previewsDate: date,
      focused: false,
    })

    this.props.onDateChange(date)
  }

  onPeriodChange (period) {
    this.setState({
      focusedInput: period,
    })
  }

  onYearChange (event) {
    const {
      value,
    } = event.target

    const {
      date,
    } = this.state

    this.setState({
      date: date.year(value),
    })
  }

  isDayBlocked (day) {
    return this.props.disableWeekends && contains(day.day(), WEEKENDS)
  }

  handleClickOutside () {
    this.setState({
      focused: false,
    })

    this.onClickConfirmDates()
  }

  toggleOpen () {
    const {
      focused,
    } = this.state

    if (!focused) {
      this.setState({ focused: true })
    }
  }
}

StateComponent.propTypes = {
  onFocusChange: func,
  onDateChange: func,
  disableWeekends: bool,
}

StateComponent.defaultProps = {
  onFocusChange: null,
  onDateChange: null,
  disableWeekends: false,
}

export default StateComponent
