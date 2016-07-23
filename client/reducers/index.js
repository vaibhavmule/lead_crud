import { combineReducers } from 'redux'
import {
  FETCH_LEADS,
  FETCH_LEADS_FAILURE,
  FETCH_LEADS_SUCCESS
} from '../actions'

// Initial state
const INITIAL_STATE = {
  leadsList: {
    leads: [],
    error: 'null',
    loading: false
  }
}

// Leads reducers
function leads(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case FETCH_LEADS:
      return {...state, leadsList: { leads: [], error: null, loading: true } }
    case FETCH_LEADS_SUCCESS:
      return {...state, leadsList: { leads: action.payload.data, error: null, loading: false } }
    case FETCH_LEADS_FAILURE:
      error = action.payload.data || { message: action.payload.message };
      return {...state, leadsList: { leads: [], error: error, loading: false } }
    default:
      return state
  }
}


// combine all reducers
const rootReducer = combineReducers({
  leads,
})

export default rootReducer
