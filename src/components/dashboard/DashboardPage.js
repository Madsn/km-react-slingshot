import React from 'react';
import DashboardTable from './DashboardTable';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    // TODO MIKMA 30-08-2016 - Fetch from server/mock API
    this.state = {
      bookings: [
        {
          id: 1,
          category: "Dog",
          customer: "John Papa",
          details: "Masser af mad!",
          status: "Nice status",
        },
        {
          id: 2,
          category: "Cat",
          customer: "Mikkel Madsen",
          details: "Miav!",
          status: "No idea what status is"
        },
        {
          id: 3,
          category: "Dog",
          customer: "Eric Clapton",
          details: "It loves guitar solos",
          status: "Layla!",
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <DashboardTable header="Due to Check in" rows={this.state.bookings}/>
        <DashboardTable header="Occupants" rows={this.state.bookings}/>
      </div>
    );
  }
}

export default DashboardPage;
