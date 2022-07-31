import {useState} from 'react';
import {useDispatch} from 'react-redux';
import nextId from 'react-id-generator';
import {TextField, Button} from '@mui/material';

import {addTodo} from '../store/TodoSlice';
import {addNewTodo} from '../store/TodoSlice';

const TodoInput = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	const id = nextId();

	const handleSubmit = e => {
		e.preventDefault();

		if (value) {
			dispatch(
				addTodo({
					id,
					title: value,
				})
			);
		}
		setValue('');
	};

	// const handleSubmit = e => {
	// 	e.preventDefault();

	// 	if (value) {
	// 		dispatch(addNewTodo(value));
	// 	}
	// 	setValue('');
	// };

	return (
		<div style={{marginLeft: '10rem'}}>
			<form onSubmit={handleSubmit}>
				<TextField
					id='outlined-basic'
					variant='outlined'
					label='Todo Title'
					value={value}
					sx={{width: '500px', mt: '2rem'}}
					onChange={e => setValue(e.target.value)}
				/>
				<Button
					variant='contained'
					sx={{width: '200px', ml: '2rem', mt: '2.1rem', height: '50px'}}
					onClick={handleSubmit}
				>
					ADD
				</Button>
			</form>
		</div>
	);
};

export default TodoInput;
