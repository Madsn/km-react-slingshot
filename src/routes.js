import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import DashboardPage from './components/dashboard/DashboardPage'; // eslint-disable-line import/no-named-as-default
import ViewBookingPage from './components/bookings/ViewBookingPage'; // eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="dashboard" component={DashboardPage}/>
    <Route path="/bookings/:bookingId" component={ViewBookingPage}/>
  </Route>
);
