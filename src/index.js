import './web.config'
import 'react-app-polyfill/ie9'
import '@babel/polyfill'
import './assets/scss/main.scss'
import * as serviceWorker from './serviceWorker'
import React from 'react'
import { render } from 'react-snapshot'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app/App'

render(
  <Router>
    <App />
  </Router>,
  document.body
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
