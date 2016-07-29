import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import LeadsIndex from './pages/LeadsIndex'
import LeadDetail from './pages/LeadDetail'
import CreateLead from './pages/CreateLead'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LeadsIndex} />
    <Route path="leads/:id" component={LeadDetail} />
    <Route path="/createLead" component={CreateLead} />
  </Route>
)