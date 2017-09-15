import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Grid from './pages/Grid'

import './style.css'

ReactDOM.render(
  <Grid />,
  document.getElementById('root')
)

registerServiceWorker()

