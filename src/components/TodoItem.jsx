import {useDispatch} from 'react-redux';

import {removeTodo} from '../store/TodoSlice';
import {deleteTodo} from '../store/TodoSlice';

import {
	CardContent,
	CardMedia,
	Typography,
	CardActionArea,
	Card,
	Button,
	CardActions,
} from '@mui/material';

const TodoItem = ({id, task}) => {
	const dispatch = useDispatch();

	return (
		<li style={{margin: '20px'}}>
			<div className='card' style={{display: 'flex', flexDirection: 'column'}}>
				<Card sx={{maxWidth: 600, ml: '160px'}}>
					<CardActionArea>
						<CardMedia
							component='img'
							height='60'
							image='https://wallpaperaccess.com/full/2987573.jpg'
							alt='green iguana'
						/>
						<CardContent>
							<Typography
								variant='body2'
								sx={{color: 'black', fontSize: '20px', textAlign: 'center'}}
							>
								{task}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button
							size='small'
							color='primary'
							style={{alignSelf: 'center', justifySelf: 'center'}}
							onClick={() => dispatch(deleteTodo(id))}
						>
							REMOVE
						</Button>
					</CardActions>
				</Card>
			</div>
		</li>
	);
};

export default TodoItem;
