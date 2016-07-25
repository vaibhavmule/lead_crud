import React, { Component } from 'react'

import Header from '../components/Header'
import Detail from '../containers/LeadDetailContainer'


class LeadDetail extends Component {
  render() {
    return (
      <div>
      	<Header />
        <Detail />
      </div>
    )
  }
}


export default LeadDetail