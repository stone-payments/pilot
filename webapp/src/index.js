import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import './style.css'

const App = () => (
  <div>
    <h1>Hello world</h1>
  </div>
)


ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
