import axios from 'axios'

// Leads list
export const FETCH_LEADS = 'FETCH_LEADS';
export const FETCH_LEADS_SUCCESS = 'FETCH_LEADS_SUCCESS';
export const FETCH_LEADS_FAILURE = 'FETCH_LEADS_FAILURE';


const ROOT_URL = 'http://localhost:8000'

export function fetchLeadsFromServer() {
  return axios
    .get('http://localhost:8000/leads/')
}

export function fetchLeads(payload) {
  return {
    type: FETCH_LEADS,
    payload
  }
}

export function fetchLeadsSuccess(leads) {
  return {
    type: FETCH_LEADS_SUCCESS,
    payload: leads
  }
}

export function fetchLeadsFailure(error) {
  return {
    type: FETCH_LEADS_FAILURE,
    payload: error
  }
}
