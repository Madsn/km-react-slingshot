import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/viewBookingActions';
import {connect} from 'react-redux';

class ViewBookingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.fetchSingleBooking(this.props.params.bookingId);
  }

  render() {
    let booking = this.props.booking;
    return (
      <div>
        <h1>View Booking</h1>
        {booking.id} - {booking.category} - {booking.customer} - {booking.details} - {booking.status}
      </div>
    );
  }
}

ViewBookingPage.propTypes = {
  booking: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    booking: state.viewBooking.booking
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
)(ViewBookingPage);
