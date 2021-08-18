import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

import './Commit.css'

const useButtonTextStyles = makeStyles((theme) => ({
	root: {
		textTransform: "none",
		width: '100px',
		height: '35px',
		color: '#0366d6',
		background: 'rgb(242, 242, 242)',
		"&:hover, &:focus": {
      backgroundColor: '#0366d6',
			color: 'white'
    },
	}
}))

const useButtonIconStyles = makeStyles((theme) => ({
	root: {
		width: '50px',
		height: '35px',
		color: '#6a737d',
		background: 'rgb(242, 242, 242)',
		"&:hover, &:focus": {
      backgroundColor: '#0366d6',
			color: 'white'
    },
	}
}))

const Commit = ({title, user, daysBefore, sha}) => {
	const buttonTextStyles = useButtonTextStyles()
	const buttonIconStyles = useButtonIconStyles()

	return (
		<div>
			<h1>{title}</h1>
			<span>{user}</span>
			<span>{daysBefore}</span>
			<span>{sha}</span>
			
			<ButtonGroup variant="contained">
				<Button classes={buttonIconStyles}><i className="fas fa-copy fa-lg"></i></Button>
				<Button 
					classes={buttonTextStyles}>
						{sha.slice(0, 7)}
				</Button>
			</ButtonGroup>
			<Button variant="contained" classes={buttonIconStyles}><i class="fas fa-code"></i></Button>
		</div>
	);
};

Commit.propTypes = {
	title: PropTypes.string,
	user: PropTypes.string,
	daysBefore: PropTypes.number,
	sha: PropTypes.string,
};

export default Commit;