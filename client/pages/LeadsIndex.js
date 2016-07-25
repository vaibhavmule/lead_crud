import React, { Component } from 'react'
import List from '../containers/LeadListContainer'
import Header from '../components/Header'

class LeadsIndex extends Component {
  render() {
    return (
      <div>
      	<Header />
        <List />
      </div>
    )
  }
}


export default LeadsIndex