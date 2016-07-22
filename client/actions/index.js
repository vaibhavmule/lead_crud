import 'isomorphic-fetch'

// Leads list
export const FETCH_LEADS = 'FETCH_LEADS';
export const FETCH_LEADS_SUCCESS = 'FETCH_LEADS_SUCCESS';
export const FETCH_LEADS_FAILURE = 'FETCH_LEADS_FAILURE';


export function fetchLeads() {
	const request = fetch('http://localhost:8000/leads/')
	return {
		type: FETCH_LEADS,
		payload: 'request'
	}
}

export function fetchLeadsSuccess(leads) {
	return {
		type: FETCH_LEADS_SUCCESS,
		payload : leads
	}
}

export function fetchLeadsFailure(error) {
	return {
		type: FETCH_LEADS_SUCCESS,
		payload: error
	}
}


let foo = fetch('http://localhost:8000/leads/').then((res) => {console.log(res)} )

console.log(foo)