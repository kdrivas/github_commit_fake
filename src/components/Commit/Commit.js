import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import './Commit.css'

const usePopoverStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    pointerEvents: 'auto',
    padding: theme.spacing(2),
  },
}));

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

const Commit = ({message, userId, userName, daysBefore, commitSha, shaUrl, repoUrl, userUrl, avatarUrl}) => {
	const [copyPop, setCopyPop] = useState(null);
  const [userPop, setUserPop] = useState(false);
	const userRefPop = useRef(null)

  const popoverEnter = (event) => {
    setUserPop(true)
  };

  const popoverLeave = () => {
    setUserPop(false)
  };

  const handleClick = (event) => {
		navigator.clipboard.writeText(commitSha)
    setCopyPop(event.currentTarget);
  };

  const handleClose = () => {
    setCopyPop(null);
  };

	const buttonTextStyles = useButtonTextStyles()
	const buttonIconStyles = useButtonIconStyles()
	const popoverStyles = usePopoverStyles();

	return (
		<div className="commit">
			<div className="commit-grid">
			<div className="commit__info">
				<a className="commit__info__title" href={shaUrl}>{message}</a>
				<div className="commit__info__descrip">
					<a className="info__avatar" href={userUrl} ref={userRefPop}><img  onMouseEnter={popoverEnter} onMouseLeave={popoverLeave} height="20" width="20" alt={userId} src={avatarUrl} className="avatar-user"/></a>
					<Popover
						className={popoverStyles.popover}
						classes={{ paper: popoverStyles.paper, }}
						open={userPop}
						anchorEl={userRefPop.current}
						anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
						transformOrigin={{ vertical: 'top', horizontal: 'left', }}
						PaperProps={{ onMouseEnter: popoverEnter, onMouseLeave: popoverLeave }}
						disableRestoreFocus
					>
						<div className="commit__popover-info">
							<a className="info__avatar" href={userUrl}><img height="60" width="60" alt={userId} src={avatarUrl} className="avatar-user"/></a>
							<a className="popover__user-name" href={userUrl}>{userName}</a>
							<span className="popover__user-id">{userId}</span>
						</div>
					</Popover>
					<a href={userUrl} className="info__user"> {userId}</a> 
					<span className="info__days-before">commited on {daysBefore}</span>
				</div>
			</div>
			<div className="commit__buttons">
				<ButtonGroup>
					<Button classes={buttonIconStyles} onClick={handleClick}><i className="fas fa-copy fa-lg"></i></Button>
					<Popover
						open={Boolean(copyPop)}
						anchorEl={copyPop}
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
	message: PropTypes.string.isRequired,
	userId: PropTypes.string.isRequired, 
	userName: PropTypes.string.isRequired, 
	daysBefore: PropTypes.string.isRequired, 
	commitSha: PropTypes.string.isRequired, 
	shaUrl: PropTypes.string.isRequired, 
	repoUrl: PropTypes.string.isRequired, 
	userUrl: PropTypes.string.isRequired, 
	avatarUrl: PropTypes.string.isRequired
};

export default Commit;