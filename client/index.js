import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import App from './components/App'


const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
  	thunk,
  	loggerMiddleware
  )
)


render(
<Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')    
)
