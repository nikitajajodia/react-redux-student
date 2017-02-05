import {
  take,
  call,
  put,
  fork
} from 'redux-saga/effects';
import moment from 'moment';
import  students  from '../studentsData';

import actionTypes from '../actions/actionTypes';

function* changeDate() {
	while (true) {
		const request = yield take(actionTypes.CHANGE_DATE);
		var newStudentsPresent = students.map(student => {
			return student.attendance.filter(item => {
				return (moment(item.date, 'DDMMYYYY')._d.toISOString() === request.date._d.toISOString() && item.state == 1);
			})
		})
		const presentArray = newStudentsPresent.map(item => item.length);
		let presentCount = presentArray.reduce((a, b) => a + b, 0);
		var newStudentsAbsent = students.map(student => {
			return student.attendance.filter(item => {
				return (moment(item.date, 'DDMMYYYY')._d.toISOString() === request.date._d.toISOString() && item.state == 0);
			})
		})
		const absentArray = newStudentsAbsent.map(item => item.length);
		let absentCount = absentArray.reduce((a, b) => a + b, 0);
		yield put({
			type: actionTypes.CHANGE_DATE_SUCCESS,
			present: presentCount,
			absent: absentCount
		})
	}
}

export default function* () {
  yield fork(changeDate);
}