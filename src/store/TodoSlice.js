import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// export const fetchTodos = createAsyncThunk(
// 	'todos/fetchTodos',
// 	async function (_, {rejectWithValue}) {
// 		try {
// 			const responce = await fetch(
// 				'https://jsonplaceholder.typicode.com/todos?_limit=10'
// 			);

// 			if (!responce.ok) {
// 				throw new Error('Cant fetch todos');
// 			}

// 			const data = await responce.json();

// 			return data;
// 		} catch (error) {
// 			return rejectWithValue(error.message);
// 		}
// 	}
// );

export const todoSlice = createSlice({
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
	// },
});

export const {addTodo, removeTodo} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
