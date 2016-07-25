import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import App from './components/App'
import routes from './routes'

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
  	<Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')    
)


