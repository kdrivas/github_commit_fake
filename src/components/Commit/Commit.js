import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
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

const Commit = ({message, user, daysBefore, commitSha, shaUrl, repoUrl, userUrl, avatarUrl}) => {
	const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
		navigator.clipboard.writeText(commitSha)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

	const buttonTextStyles = useButtonTextStyles()
	const buttonIconStyles = useButtonIconStyles()

	return (
		<div className="commit">
			<div className="commit-grid">
			<div className="commit__info">
				<a className="commit__info__title" href={shaUrl}>{message}</a>
				<div className="commit__info__descrip">
					<a className="info__avatar" href={userUrl}><img height="20" width="20" alt={user} src={avatarUrl} className="avatar-user"/></a>
					<a href={userUrl} className="info__user"> {user}</a> 
					<span className="info__days-before">commited on {daysBefore}</span>
				</div>
			</div>
			<div className="commit__buttons">
				<ButtonGroup>
					<Button classes={buttonIconStyles} onClick={handleClick}><i className="fas fa-copy fa-lg"></i></Button>
					<Popover
						open={Boolean(anchorEl)}
						anchorEl={anchorEl}
						onClose={handleClose}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'center',
						}}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'center',
						}}
					>
						<Typography>Copied</Typography>
					</Popover>
					<Button 
						classes={buttonTextStyles}
						href={shaUrl}
					>
						{commitSha.slice(0, 7)}
					</Button>
				</ButtonGroup>
				<Button variant="outlined" classes={buttonIconStyles} href={repoUrl}><i className="fas fa-code"></i></Button>
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