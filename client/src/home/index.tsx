import * as React from 'react'
import { render } from 'react-dom'
import Main from './main'

let initializeMain = () => {
  render(
    <div>
      <Main />
    </div>,
    document.getElementById('app')
  )
}

window['initializeMain'] = initializeMain