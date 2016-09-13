import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DashboardTable from '../components/dashboard/DashboardTable';
import * as actions from '../actions/dashboardActions';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getAllBookings();
  }

  render() {
    let contents;
    if (this.props.loading) {
      contents = <p>Loading...</p>;
    } else {
      contents = (
        <div>
          <DashboardTable header="Due to Check in" rows={this.props.bookings}/>
          <DashboardTable header = "Occupants" rows={this.props.bookings}/>
        </div>
      )
      ;
    }
    return (
      <div>
        <h1>Dashboard</h1>
        {contents}
      </div>
    );
  }
}

DashboardPage.propTypes = {
  actions: PropTypes.object.isRequired,
  bookings: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object
};

function mapStateToProps(state) {
  return {
    bookings: state.dashboard.bookings,
    loading: state.dashboard.loading
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
