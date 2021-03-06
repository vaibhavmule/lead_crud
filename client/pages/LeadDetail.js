import React, { Component, PropTypes} from 'react'

import Header from '../components/Header'
import LeadDetailContainer from '../containers/LeadDetailContainer'


class LeadDetail extends Component {
  static contextTypes = {
    router: PropTypes.object
  }


  render() {
    return (
      <div>
      	<Header />
        <LeadDetailContainer id={this.props.params.id}/>
      </div>
    )
  }
}


export default LeadDetail