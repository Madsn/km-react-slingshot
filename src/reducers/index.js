import {combineReducers} from 'redux';
import dashboard from './dashboardReducer';
import viewBooking from './viewBookingReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  viewBooking,
  dashboard,
  routing: routerReducer
});

export default rootReducer;

