import React, { Component } from 'react';
import ReportCard from './ReportCard';
import '../assets/styles/ReportsPage.scss';

class ReportsPage extends Component {
  state = {
    reports: [
      {
        id: 1,
        description: 'Something went wrong',
        image:
          'https://images.unsplash.com/photo-1455747634646-0ef67dfca23f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80',
      },
      {
        id: 2,
        description: 'Something went wrong',
        image:
          'https://images.unsplash.com/photo-1455747634646-0ef67dfca23f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80',
      },
      {
        id: 2,
        description: 'Something went wrong',
        image:
          'https://images.unsplash.com/photo-1455747634646-0ef67dfca23f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80',
      },
    ],
  };
  render() {
    const reports = this.state.reports;
    return (
      <div>
        <h1>Welcome to the reports page</h1>
        <div className="reports-container">
          {reports.map(report => (
            <ReportCard
              class="single-report"
              key={report.id}
              image={report.image}
              description={report.description}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ReportsPage;
