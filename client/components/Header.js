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
          <span>Home</span>
          <br/>
          <br/>
        </Link>
        <Link to={"/createLead"}>
          <button>Add Lead</button>
        </Link>

    	
      </div>
   )
  }
}

export default Header