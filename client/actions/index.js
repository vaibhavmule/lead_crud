import axios from 'axios'

const ROOT_URL = 'http://localhost:8000'

// Leads list
export const FETCH_LEADS = 'FETCH_LEADS';
export const FETCH_LEADS_SUCCESS = 'FETCH_LEADS_SUCCESS';
export const FETCH_LEADS_FAILURE = 'FETCH_LEADS_FAILURE';

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


// Delete List
export const DELETE_LEAD = 'DELETE_LEAD';
export const DELETE_LEAD_SUCCESS = 'DELETE_LEAD_SUCCESS';
export const DELETE_LEAD_FAILURE = 'DELETE_LEAD_FAILURE';

export function deleteLeadFromServer(leadId) {
  return axios
    .delete('http://localhost:8000/leads/' + leadId + '/')
}

export function deleteLead(payload) {
  return {
    type: DELETE_LEAD,
    payload
  }
}

export function deleteLeadSuccess(lead) {
  return {
    type: DELETE_LEAD_SUCCESS,
    payload: lead
  }
}

export function deleteLeadFailure(error) {
  return {
    type: DELETE_LEAD_FAILURE,
    payload: error
  }
}



// get lead
export const FETCH_LEAD = 'FETCH_LEAD'
export const FETCH_LEAD_SUCCESS = 'FETCH_LEAD_SUCCESS'
export const FETCH_LEAD_FAILURE = 'FETCH_LEAD_FAILURE'

export function fetchLeadFromServer(leadId) {

  return axios
    .get('http://localhost:8000/leads/' + leadId + '/')
}

export function fetchLead(payload) {
  return {
    type: FETCH_LEAD,
    payload
  }
}

export function fetchLeadSuccess(lead) {
  return {
    type: FETCH_LEAD_SUCCESS,
    payload: lead
  }
}

export function fetchLeadFailure(error) {
  return {
    type: FETCH_LEAD_FAILURE,
    payload: error
  }
}