import { combineReducers } from 'redux'
import {
  // get lead item
  CREATE_LEAD,
  CREATE_LEAD_FAILURE,
  CREATE_LEAD_SUCCESS,
  RESET_CREATE_LEAD,

  // get leads list
  FETCH_LEADS,
  FETCH_LEADS_FAILURE,
  FETCH_LEADS_SUCCESS,

  // get lead item
  FETCH_LEAD,
  FETCH_LEAD_FAILURE,
  FETCH_LEAD_SUCCESS,

  // delete lead item
  DELETE_LEAD,
  DELETE_LEAD_FAILURE,
  DELETE_LEAD_SUCCESS
} from '../actions'
import { reducer as formReducer } from 'redux-form'

// Initial state
const INITIAL_STATE = {
  leadsList: {
    leads: [],
    error: 'null',
    loading: false
  },
  activeLead: { lead: null, error: null, loading: false },
  createLead: { lead: null, error: null, loading: false },
  deletedPost: { lead: null, error: null, loading: false }
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

      // create lead
    case CREATE_LEAD:
      return {...state, createLead: {...state.createLead, loading: true } }
    case CREATE_LEAD_SUCCESS:
      return {...state, createLead: { lead: action.payload.data, error: null, loading: false } }
    case CREATE_LEAD_FAILURE:
      error = action.payload.data || { message: action.payload.message }
      return {...state, createLead: { lead: null, error: error, loading: false } }
    case RESET_CREATE_LEAD:
      return {...state,  createLead: { lead: null, error: null, loading: false }}

      // get lead item
    case FETCH_LEAD:
      return {...state, activeLead: {...state.activePost, loading: true } }
    case FETCH_LEAD_SUCCESS:
      return {...state, activeLead: { lead: action.payload.data, error: null, loading: false } }
    case FETCH_LEAD_FAILURE:
      error = action.payload.data || { message: action.payload.message }
      return {...state, activeLead: { lead: null, error: error, loading: false } }

      // get lead item
    case DELETE_LEAD:
      return {...state, deletedPost: {...state.deletedPost, loading: true } }
    case DELETE_LEAD_SUCCESS:
      return {...state, deletedPost: { lead: action.payload.data, error: null, loading: false } }
    case DELETE_LEAD_FAILURE:
      error = action.payload.data || { message: action.payload.message }
      return {...state, deletedPost: { lead: null, error: error, loading: false } }

      // default state
    default:
      return state
  }
}


const rootReducer = combineReducers({
  leads,
  form: formReducer
})

export default rootReducer
