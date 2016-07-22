import { combineReducers } from 'redux'
import {
  FETCH_LEADS,
  FETCH_LEADS_FAILURE,
  FETCH_LEADS_SUCCESS,
  RESET_LEADS
} from '../actions'

// Initial state
const INITIAL_STATE = {
  leadList: {
    leads: [],
    error: 'null',
    loading: false
  }
}

// Leads reducers
function leads(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_LEADS:
      return Object.assign({}, state, {
        error: null,
        loading: true
      })
    case FETCH_LEADS_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
      })
    case FETCH_LEADS_SUCCESS:
      return Object.assign({}, state, {
        leads: action.leads,
        error: null,
        loading: false
      })
    case RESET_LEADS:
      return Object.assign({}, state, {
        leads: [],
        error: null,
        loading: false
      })
    default:
      return state
  }
}

// combine all reducers
const rootReducer = combineReducers({
  leads,
})

export default rootReducer
