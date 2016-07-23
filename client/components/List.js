import React, { Component, PropTypes } from 'react'


class List extends Component {

	componentWillMount() {
    this.props.fetchLeads()
  }

  renderPosts(leads) {
    return leads.map((post) => {
      return (
        <li key={lead.id}>
            <h3>{lead.name}</h3>
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