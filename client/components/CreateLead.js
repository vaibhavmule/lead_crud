import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class CreateLead extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  renderError(createLead) {
    if(createLead && createLead.error && createLead.error.message) {
      return (
        <div className="alert alert-danger">
          {createLead ? createLead.error.message : ''}
        </div>
      )
    } else {
      return <span></span>
    }
  }

  render() {
    const { createLead } = this.props

    return (
      <div className="container">
        {this.renderError(createLead)}
        <h2>Create Lead</h2>
        <form>
          <p>Name</p>
          <input type="text" ref="name"/>
          <br />
          <p>Email</p>
          <input type="email" ref="email"/>
          <br />
          <p>Phone</p>
          <input type="text" ref="phone"/>
          <br />
          <p>City</p>
          <select>
            <option value="1">Mumbai</option>
            <option value="2">Delhi</option>
          </select>
          <br />
          <p>Services</p>
          <select>
            <option value="1">Nursing</option>
            <option value="2">Equipment</option>
          </select>
          <br />
          <p>No of hours</p>
          <select>
            <option value="12">12 hours</option>
            <option value="24">24 hours</option>
          </select>
          <br />
          <p>Deposit</p>
          <input type="text" ref="deposit"/>
          <br />
          <p>Rent or Purchase</p>
          <select>
            <option value="1">Rent</option>
            <option value="2">Purchase</option>
          </select>
        </form>
        <br />
        <br />
        <button>Submit</button>
      </div>

    )
  }
}

export default CreateLead
