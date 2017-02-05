import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import {
  connect
} from 'react-redux';
import {
  StudentActions
} from './actions';
import moment from  'moment';
require('react-datepicker/dist/react-datepicker.css');

class StudentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
    this.props.changeDate(date);
  }
  render() {
    const {
      students, absent, present 
    } = this.props;
    const selected = this.state.startDate ? moment(this.state.startDate,'DDMMYYYY') : '';
    return (
      <div className="student-container">
        <div className="date-selector row clearfix">
          <div className="col-md-3 text-left">
            <p>Select a date to see the attendance</p>
          </div>
          <div className="col-md-9 text-left">
            <DatePicker
            selected={selected}
            maxDate={moment('05022017','DDMMYYYY')}
            minDate={moment('01022017','DDMMYYYY')}
            placeholderText="Click to select a date"
            onChange={this.handleChange} />
            <div>Present: {present} Absent: {absent}</div>
          </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Roll No.</th>
              <th>Name</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map(student => 
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>
                    {
                      student.attendance.map(item => 
                        <span key={item.date}>{item.date} : {item.state
                          ? 
                            <span className="success">P</span> 
                          : 
                          <span className="danger">A</span>}
                        </span>
                      )
                    }
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    students: state.get('user').get('students'),
    present: state.get('user').get('present'),
    absent: state.get('user').get('absent')
  };
}

export default connect(mapStateToProps, { ...StudentActions
})(StudentsContainer);

