import React from 'react'
import ReactDOM from 'react-dom'
import Theme from './common/utils/theme'

import App from './app'

ReactDOM.render(
  <Theme>
      <App />
  </Theme>,
    document.getElementById('root')
  )