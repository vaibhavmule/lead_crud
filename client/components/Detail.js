import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Detail extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
  	console.log('this.props', this.props)
    this.props.fetchLead(this.props.leadId)
  }

  render() {
    const { lead, loading, error } = this.props.activeLead

    if(loading) {
      return <div><h2>Lead List</h2><h3>Loading...</h3></div>      
    } else if(error) {
      return <div><h2>Lead List</h2>Error: {error.message}</div>
    } else if(!lead) {
      return <span />
    }

    return (
      <div className="container">
        <h3>{lead.name}</h3>
      </div>
    )
  }
}

export default Detail
