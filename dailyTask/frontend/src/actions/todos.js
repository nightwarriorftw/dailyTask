import { reset } from 'redux-form';
import axios from 'axios';
import { GET_TODOS, ADD_TODOS, ADD_TODO } from './types';


// Get TODOS
export const getTodos = () => async dispatch => {
	const res = await axios.get('/api/todos/');
	dispatch({
		type: GET_TODOS,
		payload: res.data
	});

};

// Add TODO
export const addTodos = (formValues) => async dispatch => {
	const res = await axios.post('/api/todos/', {...formValues});
	dispatch({
		type: ADD_TODO,
		payload: res.data,
	});
	dispatch(reset('todoForm'));
};