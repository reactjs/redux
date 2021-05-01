import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Node from './nodes/Node'
import { store } from './app/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Node id={0}></Node>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
