import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import DatePicker from './components/DatePicker'

import './style.css'

const App = () => (
  <div>
    <h1>Hello world</h1>
    <DatePicker
      onDatesChange={() => console.log('Date Changed')}
      onFocusChange={() => console.log('Focus Changed')}
    />
  </div>
)


ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
