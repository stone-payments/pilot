import { Component } from 'react'
import { func, bool, instanceOf } from 'prop-types'
import {
  mergeAll,
} from 'ramda'
import moment from './moment'

class StateComponent extends Component {
  constructor (props) {
    super(props)

    const {
      startDate,
    } = props
    const now = moment()
    this.state = mergeAll([
      {},
      {
        startDate: startDate ? moment(startDate) : now,
        endDate: moment('12-14-2059'),
        previewsStartDate: null,
        previewsEndDate: null,
        date: now,
        previewsDate: now,
        focusedInput: null,
      },
      props,
    ])

    this.onDatesChange = this.onDatesChange.bind(this)
    this.onDateChange = this.onDateChange.bind(this)
    this.onRangeFocusChange = this.onRangeFocusChange.bind(this)
    this.onFocusChange = this.onFocusChange.bind(this)
    this.onClickCancelDates = this.onClickCancelDates.bind(this)
    this.onClickConfirmDates = this.onClickConfirmDates.bind(this)
    this.onPeriodChange = this.onPeriodChange.bind(this)
    this.toggleOpen = this.toggleOpen.bind(this)
    this.onYearChange = this.onYearChange.bind(this)
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

  onRangeFocusChange (focusedInput) {
    this.setState({
      focusedInput,
    })

    this.props.onFocusChange({ focusedInput })
  }

  onFocusChange ({ focused }) {
    this.setState({
      focused,
    })

    this.props.onFocusChange({ focused })
  }

  onClickCancelDates () {
    const {
      previewsStartDate,
      previewsEndDate,
      previewsDate,
    } = this.state

    const {
      range,
    } = this.props

    if (range) {
      this.setState({
        startDate: previewsStartDate,
        endDate: previewsEndDate,
        focusedInput: null,
      })
    } else {
      this.setState({
        date: previewsDate,
        focused: false,
      })
    }
  }

  onClickConfirmDates () {
    const {
      startDate,
      endDate,
      date,
    } = this.state

    if (this.props.range) {
      this.setState({
        previewsStartDate: startDate,
        previewsEndDate: endDate,
        focusedInput: null,
      })

      this.props.onDatesChange({
        startDate,
        endDate,
      })
    } else {
      this.setState({
        previewsDate: date,
        focused: false,
      })

      this.props.onDateChange(date)
    }
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

  toggleOpen () {
    const {
      focused,
      focusedInput,
    } = this.state

    const {
      range,
    } = this.props

    if (range && !focusedInput) {
      this.setState({
        focusedInput: 'startDate',
      })
    }

    if (!range && !focused) {
      this.setState({ focused: true })
    }
  }
}

StateComponent.propTypes = {
  onFocusChange: func,
  onDatesChange: func,
  onDateChange: func,
  range: bool,
  startDate: instanceOf(moment),
}

StateComponent.defaultProps = {
  onFocusChange: null,
  onDatesChange: null,
  onDateChange: null,
  startDate: null,
  range: false,
}

export default StateComponent
