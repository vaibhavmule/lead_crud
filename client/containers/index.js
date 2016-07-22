import { connect } from 'react-redux'
import {
  fetchLeads,
  fetchLeadsSuccess,
  fetchLeadsFailure
} from './../actions'

import List from '../components/List'


const mapStateToProps = (state) => {
  return state.leads.leadList
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchLeads: () => {
      dispatch(fetchLeads())
        .then(
          (response) => {
            !response.error ? dispatch(fetchLeadsSuccess(response.payload)) : dispatch(fetchLeadsFailure(response.payload));
          });
    }
  }
}

const LeadListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)


export default LeadListContainer
