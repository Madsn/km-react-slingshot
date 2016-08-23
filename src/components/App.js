import React, {PropTypes} from 'react';
import Header from './common/Header';


// Class since this probably will be extended some loading or spinner in mapStateToProps
// Therefore not stateless
class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
