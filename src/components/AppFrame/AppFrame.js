import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../NavBar/Navbar'
import Footer from './../Footer/Footer'
import './AppFrame.css'

const AppFrame = ({children}) => {
	return (
		<div className="container-all">
			<Navbar/>
			<div>
				{children}
			</div>
			<div className="app-frame__buttons">
				<Footer/>
			</div>
		</div>
	);
};

AppFrame.propTypes = {
	children: PropTypes.node.isRequired
};

export default AppFrame;