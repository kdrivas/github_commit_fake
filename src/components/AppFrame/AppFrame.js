import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../NavBar/Navbar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './AppFrame.css';

const AppFrame = ({children}) => {
	return (
		<div className="container-all">
			<Navbar branches={['main', 'header']}/>
			<div>
				{children}
			</div>
			<div className="app-frame__buttons">
				<ButtonGroup>
					<Button>Newer</Button>
					<Button>Older</Button>
				</ButtonGroup>
			</div>
		</div>
	);
};

AppFrame.propTypes = {
	
};

export default AppFrame;