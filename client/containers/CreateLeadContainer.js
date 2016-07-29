import CreateLead from '../components/CreateLead';
import {
  // Create Lead
  createLead,
  createLeadSuccess,
  createLeadFailure,
  resetCreateLead,
  createLeadFromServer,
} from '../actions'
import {
  reduxForm
}
from 'redux-form'

// utils
function val(field, fieldName) {
  if (!field || field.trim() === '') {
    return 'Enter a ' + fieldName
  }
}

//Client side validation
function validate(values) {
  const errors = {}

  errors.name = val(values.name, 'Name')
  errors.phone = val(values.phone, 'Phone')
  errors.email = val(values.email, 'Email')
  errors.city = val(values.city, 'City')
  errors.services = val(values.services, 'Services')

  if (values.services == 1) {
    errors.no_of_hours = val(values.no_of_hours, 'No of hours')
  }
  
  if (values.services == 2) {
    errors.deposits = val(values.deposits, 'Deposits')
    errors.rent_or_purchase = val(values.rent_or_purchase, 'Rent or Purchase')
  }
  return errors
}

const mapStateToProps = (state) => {

  return {
    createLeadState: state.leads.createLead
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    createLead: (values) => {

      dispatch(createLead(createLeadFromServer(values)
        .then((res) => {

          dispatch(createLeadSuccess(res))
          return res
        })
        .catch((err) => {

          dispatch(createLeadFailure(err))
          return err
        })))
    },
    resetMe: () => {
      dispatch(resetCreateLead())
    }
  }
}

export default reduxForm({
  form: 'CreateLead',
  fields: ['name', 'email', 'phone', 'city', 'services', 'no_of_hours', 'deposits', 'rent_or_purchase'],
  validate
}, mapStateToProps, mapDispatchToProps)(CreateLead)
