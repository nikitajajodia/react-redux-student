import actionTypes from './actionTypes';

export function changeDate(date) {
	return {
		type: actionTypes.CHANGE_DATE,
		date
	}
}