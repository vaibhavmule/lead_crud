import { connect } from 'react-redux'
import {
  // Fetch Lead
  createLead,
  createLeadSuccess,
  createLeadFailure,
  createLeadFromServer,
} from '../actions'

import CreateLead from '../components/CreateLead';


const mapStateToProps = (state) => {

  return {
    createLead: state.leads.createLead
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createLead: (props) => {

      dispatch(createLead(createLeadFromServer(props)
        .then((res) => {

          dispatch(createLeadSuccess(res))
          return res
        })
        .catch((err) => {

          dispatch(createLeadFailure(err))
          return err
        })))
    }
  }
}

const CreateLeadContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateLead)

export default CreateLeadContainer
