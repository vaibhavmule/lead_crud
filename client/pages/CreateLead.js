import React, { Component, PropTypes} from 'react'

import Header from '../components/Header'
import CreateLeadContainer from '../containers/CreateLeadContainer'


class LeadDetail extends Component {
  static contextTypes = {
    router: PropTypes.object
  }


  render() {
    return (
      <div>
      	<Header />
        <CreateLeadContainer />
      </div>
    )
  }
}


export default LeadDetail