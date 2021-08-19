import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

import './Commit.css'

const useButtonTextStyles = makeStyles((theme) => ({
	root: {
		textTransform: "none",
		width: '100px',
		height: '35px',
		color: '#0366d6',
		padding: 0,
		margin: 0,
		background: 'rgb(242, 242, 242)',
		"&:hover": {
      background: '#0366d6',
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
		"&:hover": {
      background: '#0366d6',
			color: 'white'
    },
	}
}))

const Commit = ({title, user, daysBefore, sha, image_url}) => {
	const buttonTextStyles = useButtonTextStyles()
	const buttonIconStyles = useButtonIconStyles()

	return (
		<div className="commit">
			<div className="commit-grid">
			<div className="commit__info">
				<div className="commit__info__title">{title}</div>
				<div className="commit__info__descrip">
					<div className="info__avatar"><img height="20" width="20" alt={user} src={image_url} className="avatar-user"/></div>
					<span className="info__user"> {user}</span>
					<span className="info__days-before"> {daysBefore}</span>
				</div>
			</div>
			<div className="commit__buttons">
				<ButtonGroup>
					<Button classes={buttonIconStyles}><i className="fas fa-copy fa-lg"></i></Button>
					<Button 
						classes={buttonTextStyles}>
							{sha.slice(0, 7)}
					</Button>
				</ButtonGroup>
				<Button variant="outlined" classes={buttonIconStyles}><i className="fas fa-code"></i></Button>
			</div>
			</div>
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