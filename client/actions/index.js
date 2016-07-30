import axios from 'axios'

const ROOT_URL = 'http://localhost:8000'

// Leads list
export const FETCH_LEADS = 'FETCH_LEADS';
export const FETCH_LEADS_SUCCESS = 'FETCH_LEADS_SUCCESS';
export const FETCH_LEADS_FAILURE = 'FETCH_LEADS_FAILURE';

export function fetchLeadsFromServer() {
  return axios
    .get('http://localhost:8001/leads/')
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
    .delete('http://localhost:8001/leads/' + leadId + '/')
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
    .get('http://localhost:8001/leads/' + leadId + '/')
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


//create lead
export const CREATE_LEAD = 'CREATE_LEAD'
export const CREATE_LEAD_SUCCESS = 'CREATE_LEAD_SUCCESS'
export const CREATE_LEAD_FAILURE = 'CREATE_LEAD_FAILURE'
export const RESET_CREATE_LEAD = 'RESET_CREATE_LEAD';

export function createLeadFromServer(props) {

  return axios  
    .post('http://localhost:8001/leads/', props)
}

export function createLead(payload) {
  return {
    type: CREATE_LEAD,
    payload
  }
}

export function createLeadSuccess(lead) {
  return {
    type: CREATE_LEAD_SUCCESS,
    payload: lead
  }
}

export function createLeadFailure(error) {
  return {
    type: CREATE_LEAD_FAILURE,
    payload: error
  }
}

export function resetCreateLead() {
  return {
    type: RESET_CREATE_LEAD
  }
}

//Validate leads fields
export const VALIDATE_LEAD_FIELDS = 'VALIDATE_LEAD_FIELDS'
export const VALIDATE_LEAD_FIELDS_SUCCESS = 'VALIDATE_LEAD_FIELDS_SUCCESS'
export const VALIDATE_LEAD_FIELDS_FAILURE = 'VALIDATE_LEAD_FIELDS_FAILURE'
export const RESET_LEAD_FIELDS = 'RESET_LEAD_FIELDS'

export function validateLeadFromServer(props) {

  return axios  
    .post('http://localhost:8001/leads/', props)
}

export function validateLeadFields(payload) {

  return {
    type: VALIDATE_LEAD_FIELDS,
    payload
  }
}

export function validateLeadFieldsSuccess() {
  return {
    type: VALIDATE_LEAD_FIELDS_SUCCESS
  }
}

export function validateLeadFieldsFailure(error) {
  return {
    type: VALIDATE_LEAD_FIELDS_FAILURE,
    payload: error
  }
}

export function resetLeadFields() {
  return {
    type: RESET_LEAD_FIELDS
  }
}