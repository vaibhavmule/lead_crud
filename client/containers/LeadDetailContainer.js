import { connect } from 'react-redux'
import {
  // Fetch Lead
  fetchLead,
  fetchLeadSuccess,
  fetchLeadFailure,
  fetchLeadFromServer,

  // Fetch Lead
  deleteLead,
  deleteLeadSuccess,
  deleteLeadFailure,
  deleteLeadFromServer,
} from '../actions'

import LeadDetail from '../components/Detail';


const mapStateToProps = (state, ownProps) => {

  return {
    deleteLead: state.leads.deletedLead,
    activeLead: state.leads.activeLead,
    leadId: ownProps.id
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchLead: (id) => {

      dispatch(fetchLead(fetchLeadFromServer(id)
        .then((res) => {

          dispatch(fetchLeadSuccess(res))
          return res
        })
        .catch((err) => {

          dispatch(fetchLeadFailure(err))
          return err
        })))

    },
    deleteLead: () => {

      dispatch(deleteLead(deleteLeadFromServer(ownProps.id)
        .then((res) => {

          dispatch(deleteLeadSuccess(res))
          return res
        })
        .catch((err) => {

          dispatch(deleteLeadFailure(err))
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
