import React, { Component, PropTypes } from 'react'

const List = ({ fetchLeads, leads, loading, error }) => {

  fetchLeads()
  
  if (loading){
    return <div><h1>Lead List</h1><h3>Loading....</h3></div>
  } else if (error) {
    return <div><h1>Lead List</h1><h3>Error: {error}</h3></div>
  }

  return (
    <div>
      <h1>Lead List</h1>
    </div>
  )
}


List.propTypes = {
  fetchLeads: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  leads: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired
}

List.defaultProps = {
  loading: true,
}

export default List