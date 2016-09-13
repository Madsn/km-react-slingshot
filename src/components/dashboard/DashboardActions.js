import React from 'react';

class DashboardActions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span title="Edit booking" className="clickable glyphicon glyphicon-edit"/>
      </div>
    );
  }
}

export default DashboardActions;
