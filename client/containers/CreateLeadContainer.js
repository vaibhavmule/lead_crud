import CreateLead from '../components/CreateLead';
import {
  // Create Lead
  createLead,
  createLeadSuccess,
  createLeadFailure,
  resetCreateLead,
  createLeadFromServer,

  // validate Lead fields
  validateLead,
  validateLeadSuccess,
  validateLeadFailure,
  resetLeadFields,
  validateLeadFromServer,
} from '../actions'
import {
  reduxForm
}
from 'redux-form'

// utils
function val(field, fieldName) {
  if (!field || field.trim() === '') {
    return 'Required'
  }
}

//Client side validation
function validate(values) {
  const errors = {}

  errors.name = val(values.name)
  errors.phone = val(values.phone)
  errors.email = val(values.email)
  errors.city = val(values.city)
  errors.services = val(values.services)

  if (values.services == 1) {
    errors.no_of_hours = val(values.no_of_hours)
  }

  if (values.services == 2) {
    errors.deposits = val(values.deposits)
    errors.rent_or_purchase = val(values.rent_or_purchase)
  }

  return errors
}


// const asyncValidate = (values, dispatch) => {

//   return new Promise((resolve, reject) => {
//     console.log('val', values)

//     validateLeadFromServer(values)
//       .then((res) => {
//         let data = response.payload.data
//         console.log('res', data, response)
//         if (response.payload.status != 200 || data.name || data.email) {
//           dispatch(validateLeadFieldsFailure(response.payload))
//           reject(data)
//         } else {
//           dispatch(validateLeadFieldsSuccess(response.payload))
//           resolve()
//         }
//         return res
//       })  

//     // dispatch(validateLeadFields(validateLeadFromServer(values)
//     //   .then((response) => {

//     //     let data = response.payload.data
//     //     console.log('res', data, response)
//     //     if (response.payload.status != 200 || data.name || data.email) {
//     //       dispatch(validateLeadFieldsFailure(response.payload))
//     //       reject(data)
//     //     } else {
//     //       dispatch(validateLeadFieldsSuccess(response.payload))
//     //       resolve()
//     //     }
//     //     return response
//     //   })))

//   })
// }


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
  // asyncValidate,
  // asyncBlurFields: ['name', 'email'],
  validate
}, mapStateToProps, mapDispatchToProps)(CreateLead)
