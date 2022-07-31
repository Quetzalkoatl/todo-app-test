import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import nextId from 'react-id-generator';

const id = nextId();

// export const fetchTodos = createAsyncThunk(
// 	'todos/fetchTodos',
// 	async function (_, {rejectWithValue}) {
// 		try {
// 			const response = await fetch(
// 				'https://jsonplaceholder.typicode.com/todos?_limit=3'
// 			);

// 			if (!response.ok) {
// 				throw new Error('Cant fetch todos');
// 			}

// 			const data = await response.json();

// 			return data;
// 		} catch (error) {
// 			return rejectWithValue(error.message);
// 		}
// 	}
// );

// export const addNewTodo = createAsyncThunk(
// 	'todos/addNewTodo',
// 	async function (title, {rejectWithValue, dispatch}) {
// 		try {
// 			const todo = {
// 				id,
// 				title,
// 			};

// 			const response = await fetch(
// 				'https://jsonplaceholder.typicode.com/todos',
// 				{
// 					method: 'POST',
// 					headers: {
// 						'Content-type': 'application/json',
// 					},
// 					body: JSON.stringify(todo),
// 				}
// 			);

// 			if (!response.ok) {
// 				throw new Error('Cant add todo');
// 			}

// 			const data = await response.json();
// 			dispatch(addTodo(data));
// 		} catch (error) {
// 			return rejectWithValue(error.message);
// 		}
// 	}
// );

// export const deleteTodo = createAsyncThunk(
// 	'todos/deleteTodo',
// 	async function (id, {rejectWithValue, dispatch}) {
// 		try {
// 			const response = await fetch(
// 				`https://jsonplaceholder.typicode.com/todos/${id}`,
// 				{
// 					method: 'DELETE',
// 				}
// 			);

// 			if (!response.ok) {
// 				throw new Error('Cant delete todo');
// 			}

// 			dispatch(removeTodo(id));
// 		} catch (error) {
// 			return rejectWithValue(error.message);
// 		}
// 	}
// );

const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
		status: null,
		error: null,
	},
	reducers: {
		addTodo: (state, action) => {
			state.todos.push(action.payload);
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter(todo => {
				return todo.id !== action.payload;
			});
		},
	},
	// extraReducers: {
	// 	[fetchTodos.pending]: state => {
	// 		state.status = 'loading';
	// 		state.error = null;
	// 	},
	// 	[fetchTodos.fulfilled]: (state, action) => {
	// 		state.status = 'resolved';
	// 		state.todos = action.payload;
	// 	},
	// 	[fetchTodos.rejected]: (state, action) => {
	// 		state.status = 'rejected';
	// 		state.error = action.payload;
	// 	},
	// 	[addNewTodo.rejected]: (state, action) => {
	// 		state.status = 'rejected';
	// 		state.error = action.payload;
	// 	},
	// 	[deleteTodo.rejected]: (state, action) => {
	// 		state.status = 'rejected';
	// 		state.error = action.payload;
	// 	},
	// },
});

export const {addTodo, removeTodo} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
