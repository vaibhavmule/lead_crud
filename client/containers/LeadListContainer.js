import axios from 'axios'

import { connect } from 'react-redux'
import { fetchLeads, fetchLeadsSuccess, fetchLeadsFailure, fetchLeadsFromServer } from '../actions';

import LeadsList from '../components/List';


const mapStateToProps = (state) => {
  return {
    leadsList: state.leads.leadsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLeads: () => {

      dispatch(fetchLeads(fetchLeadsFromServer()
        .then((res) => {
          // console.log(res)
          dispatch(fetchLeadsSuccess(res))
          return res
        })
        .catch((err) => {
          // console.log(err.message)
          dispatch(fetchLeadsFailure(err))
          return err
        })))

    }
  }
}


const LeadsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeadsList)

export default LeadsListContainer
