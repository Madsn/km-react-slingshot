import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DashboardTable from '../components/dashboard/DashboardTable';
import * as actions from '../actions/dashboardActions';

export const DashboardPage = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <DashboardTable header="Due to Check in" rows={props.bookings}/>
      <DashboardTable header="Occupants" rows={props.bookings}/>
    </div>
  );
};

DashboardPage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    bookings: state.dashboard
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);
