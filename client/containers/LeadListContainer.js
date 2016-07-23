import { connect } from 'react-redux'
import { fetchLeads, fetchLeadsSuccess, fetchLeadsFailure } from '../actions';

import LeadsList from '../components/List';


const mapStateToProps = (state) => {
  // console.log(state.leads.leadsList)
  return {
    leadsList: state.leads.leadsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLeads: () => {
      dispatch()
      dispatch(fetchLeads()).then((response) => {
        !response.error ? dispatch(fetchLeadsSuccess(response.payload)) : dispatch(fetchLeadsFailure(response.payload));
      });
    }
  }
}


const LeadsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeadsList)

export default LeadsListContainer
