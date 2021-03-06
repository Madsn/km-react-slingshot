import React from 'react';
import DashboardActions from './DashboardTableActionCol';

const DashboardTable = (props) => {
  return (
    <div>
      <div className="row">
        <div className="card col-md-12">
          <div className="page-header">
            <h3>{props.header}</h3>
          </div>
          <table className="table">
            <thead>
            <tr>
              <th/>
              <th>Booking type</th>
              <th>Customer</th>
              <th>Details</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {props.rows.map(function (item) {
              return (
                <tr key={item.id}>
                  <td>
                    <a href={"bookings/" + item.id}>
                      View booking
                    </a>
                  </td>
                  <td><span className="badge alert-success">{ item.category }</span></td>
                  <td>{ item.customer }</td>
                  <td>{ item.details }</td>
                  <td><span className="text-info">{ item.status }</span></td>
                  <td>
                    <DashboardActions item={item}/>
                  </td>
                </tr>
              );
            })
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

DashboardTable.propTypes = {
  header: React.PropTypes.string.isRequired,
  rows: React.PropTypes.array.isRequired
};

export default DashboardTable;
