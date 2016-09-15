import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NewBookingForm from './NewBookingForm';

class NewBooking extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
          <NewBookingForm onSubmit={showResults}/>
        );
    }
}

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
      resolve()
    }, 500)
  });


// NewBooking.propTypes = {
//     //myProp: Proptypes.array.isRequired
// };

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

/*function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}*/

export default connect(mapStateToProps)(NewBooking);
