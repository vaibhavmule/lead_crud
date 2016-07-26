import React, { Component, PropTypes} from 'react'

import Header from '../components/Header'
import LeadDetailContainer from '../containers/LeadDetailContainer'


class LeadDetail extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onDeleteClick() {
    console.log('dd')
    this.props.deletePost(this.props.params.id)
      .then(() => { this.context.router.push('/') })
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