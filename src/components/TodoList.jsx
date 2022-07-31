import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {fetchTodos} from '../store/TodoSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	const todos = useSelector(state => state.todos);

	return (
		<ul>
			{todos.status === 'loading' && <h2>Loading...</h2>}
			{todos.status === 'rejected' && <h2>Error: {todos.error}</h2>}
			{todos.todos.map(todo => {
				return <TodoItem key={todo.id} {...todo} />;
			})}
		</ul>
	);
};

export default TodoList;
