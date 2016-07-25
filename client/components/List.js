import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class List extends Component {

	componentDidMount() {
    this.props.fetchLeads()
  }

  renderPosts(leads) {
    return leads.map((lead) => {
      return (
        <li key={lead.id}>
            <Link style={{color:'black'}} to={"leads/" + lead.id}>
              <h3>{lead.name}</h3>
            </Link>
            <p>{lead.email} || {lead.phone} || {lead.no_of_hours} hours</p>
        </li>
      )
    })
  }

  render() {

  	const { leads, loading, error } = this.props.leadsList;

    if(loading) {
      return <div><h2>Lead List</h2><h3>Loading...</h3></div>      
    } else if(error) {
      return <div><h2>Lead List</h2>Error: {error.message}</div>
    }

    return (
      <div>
      	<h2>Lead List</h2>
      	{this.renderPosts(leads)}
      </div>
   )
  }
}

export default List;