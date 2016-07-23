import React, { Component, PropTypes } from 'react'

import Header from './Header'
import List from './../containers/LeadListContainer'

class App extends Component {

  render() {
    return (
      <div>
      	<Header />
      	<List />
      </div>
   )
  }
}

export default App;