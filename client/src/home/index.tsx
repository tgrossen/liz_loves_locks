import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Main from './main'

let initializeMain = () => {
  render(
    <Provider store={store}>
      <Main />
    </Provider>,
    document.getElementById('app')
  )
}

window['initializeMain'] = initializeMain