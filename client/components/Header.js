import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Header extends Component {
	static contextTypes = {
    router: PropTypes.object
  }

  render() {
    return (
      <div>
     	<h1>Lead Manager</h1>
     	  <Link to={"/"}>
          <button className="btn btn-danger">Home</button>
          <br/>
          <br/>
        </Link>
        <Link to={"/createLead"}>
          <button className="btn btn-primary">Add Lead</button>
        </Link>
      </div>
   )
  }
}

export default Header