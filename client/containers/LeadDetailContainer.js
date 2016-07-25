import { connect } from 'react-redux'
import {
  // Fetch Lead
  fetchLead,
  fetchLeadSuccess,
  fetchLeadFailure,
  fetchLeadFromServer,
} from '../actions'

import LeadDetail from '../components/Detail';


const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps)
  return {
    activeLead: state.leads.activeLead,
    leadId: ownProps.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLead: (id) => {

      dispatch(fetchLead(fetchLeadFromServer(id)
        .then((res) => {
          console.log('res', res)
          dispatch(fetchLeadSuccess(res))
          return res
        })
        .catch((err) => {
          console.log('err', err)
          dispatch(fetchLeadFailure(err))
          return err
        })))

    }
  }
}

const LeadDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeadDetail)

export default LeadDetailContainer
