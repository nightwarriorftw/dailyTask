import { reset } from 'redux-form';
import axios from 'axios';
import { GET_TODOS, ADD_TODOS } from './types';

// Get TODOS
export const getTodos = () => aync dispatch => {
	const res = await axios.post('/api/todos/', {...formValues});
	dispatch({
		type: GET_TODOS,
		payload: res.data
	});

};
