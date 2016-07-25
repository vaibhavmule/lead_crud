import React, { Component, PropTypes } from 'react'

import Header from './Header'
import List from './../containers/LeadListContainer'

class App extends Component {

  render() {
    return (
      <div>
      	{this.props.children}
      </div>
   )
  }
}

export default App;