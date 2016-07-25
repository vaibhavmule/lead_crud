import { combineReducers } from 'redux'
import {
  // get leads list
  FETCH_LEADS,
  FETCH_LEADS_FAILURE,
  FETCH_LEADS_SUCCESS,
  // get lead item
  FETCH_LEAD,
  FETCH_LEAD_FAILURE,
  FETCH_LEAD_SUCCESS
} from '../actions'

// Initial state
const INITIAL_STATE = {
  leadsList: {
    leads: [],
    error: 'null',
    loading: false
  },
  activeLead: { lead: null, error: null, loading: false }
}

// Leads reducers
function leads(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    // get leads list
    case FETCH_LEADS:
      return {...state, leadsList: { leads: [], error: null, loading: true } }
    case FETCH_LEADS_SUCCESS:
      return {...state, leadsList: { leads: action.payload.data, error: null, loading: false } }
    case FETCH_LEADS_FAILURE:
      error = action.payload.data || { message: action.payload.message }
      return {...state, leadsList: { leads: [], error: error, loading: false } }

    // get lead item
    case FETCH_LEAD:
      return {...state, activeLead: {...state.activePost, loading: true } }
    case FETCH_LEAD_SUCCESS:
      return {...state, activeLead: { lead: action.payload.data, error: null, loading: false } }
    case FETCH_LEAD_FAILURE:
      error = action.payload.data || { message: action.payload.message }
      return {...state, activeLead: { lead: null, error: error, loading: false } }
    default:
      return state
  }
}


const rootReducer = combineReducers({
  leads,
})

export default rootReducer
