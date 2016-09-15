import {combineReducers} from 'redux';
import dashboard from './DashboardReducer';
import viewBooking from './ViewBookingReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  viewBooking,
  dashboard,
  routing: routerReducer
});

export default rootReducer;

