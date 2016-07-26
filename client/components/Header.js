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
    	<button>Add Lead</button>
      </div>
   )
  }
}

export default Header