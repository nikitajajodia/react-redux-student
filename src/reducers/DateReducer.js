import {
  Map,
  fromJS
} from 'immutable';

import actionTypes from '../actions/actionTypes';
import  students  from '../studentsData';

const initialState = Map({
	students: students,
	present: '',
	absent: ''
});

export default function DateReducer(state = initialState, action) {
	switch(action.type) {
		case actionTypes.CHANGE_DATE_SUCCESS: {
			return state.set('present', action.present)
									.set('absent', action.absent)
		}

		default:
      return state;
	}
};