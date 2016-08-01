import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class CreateLead extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
     this.props.resetMe()
  }


  componentWillReceiveProps(nextProps) {
    if(nextProps.createLeadState.lead && !nextProps.createLeadState.error) {
      this.context.router.push('/')
    }
  }

  renderError(createLead) {
    if(createLead && createLead.error && createLead.error.message) {
      console.log('error', createLead.error)
      return (
        <div className="alert alert-danger">
          {createLead ? createLead.error.message : ''}
        </div>
      )
    } else {
      return <span></span>
    }
  }

  renderNursing() {
    return (
      <div>
        <div>
          <label className="control-label">No of hours*</label>
          <select className="form-control" {...this.props.fields.no_of_hours}>
            <option></option>
            <option value="12">12 hours</option>
            <option value="24">24 hours</option>
          </select>
          <div className="help-block">
            {this.props.fields.no_of_hours.touched ? this.props.fields.no_of_hours.error : ''}
          </div>
        </div>
      </div>
    )
  }

  renderEquipment() {

    return (
      <div>

      <div className={`form-group ${this.props.fields.deposits.touched && this.props.fields.deposits.invalid ? 'has-error' : ''}`}>
        <label className="control-label">Deposits*</label>
        <input type="text" className="form-control" {...this.props.fields.deposits}/>
        <div className="help-block">
          {this.props.fields.deposits.touched ? this.props.fields.deposits.error : ''}
        </div>
      </div>


      <div className={`form-group ${this.props.fields.rent_or_purchase && this.props.fields.rent_or_purchase ? 'has-error' : ''}`}>
        <label className="control-label">Rent or Purchase*</label>
        <select className="form-control" {...this.props.fields.rent_or_purchase}>
          <option></option>
          <option value="1">Rent</option>
          <option value="2">Purchase</option>
        </select>
        <div className="help-block">
          {this.props.fields.rent_or_purchase.touched ? this.props.fields.rent_or_purchase : ''}
        </div>
      </div>
      </div>
    )
  }

  render() {
    const {fields: {
      name, email, phone, city, services, 
      no_of_hours, deposits, rent_or_purchase
    }, handleSubmit, submitting, createLead, createLeadState } = this.props

    // console.log('createLeadState', this.createLeadState, asyncValidating)

    return (
      <div className="container">
        {this.renderError(createLeadState)}
        <h2>Create Lead</h2>

        <form onSubmit={handleSubmit(this.props.createLead.bind(this))}>
          
        <div className={`form-group ${name.touched && name.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Name*</label>
          <input type="text" className="form-control" {...name} />
          <div className="help-block">
            {name.touched ? name.error : ''}
          </div>
        </div>

        <div className={`form-group ${email.touched && email.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Email*</label>
          <input type="email" className="form-control" {...email} />
          <div className="help-block">
            {email.touched ? email.error : ''}
          </div>
        </div>

        <div className={`form-group ${phone.touched && phone.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Phone*</label>
          <input type="text" className="form-control" {...phone} />
          <div className="help-block">
            {phone.touched ? phone.error : ''}
          </div>
        </div>

        <div className={`form-group ${city.touched && city.invalid ? 'has-error' : ''}`}>
          <label className="control-label">City*</label>
          <select 
              name="city"
              className="form-control"
              {...city}>
              <option></option>
              <option value="1">Mumbai</option>
              <option value="2">Delhi</option>
            </select>
          <div className="help-block">
            {city.touched ? city.error : ''}
          </div>

        </div>

        <div className={`form-group ${services.touched && services.invalid ? 'has-error' : ''}`}>
          <label className="control-label">Services*</label>
          <select 
              name="city"
              className="form-control"
              {...services}>
              <option></option>
              <option value="1">Nursing</option>
              <option value="2">Equipment</option>
            </select>
          <div className="help-block">
            {services.touched ? services.error : ''}
          </div>
        </div>

      
        { services.value === '1' ? this.renderNursing() : ''}
        { services.value === '2' ? this.renderEquipment() : ''}

        <button type="submit" className="btn btn-primary pull-right"  disabled={submitting} >
        Submit
        </button>
        <Link to="/" ><span className="btn btn-warning right">Cancel</span></Link>
        </form>
      </div>
    )
  }
}

export default CreateLead
