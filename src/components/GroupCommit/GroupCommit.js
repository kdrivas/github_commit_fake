import React from 'react';
import PropTypes from 'prop-types';
import ListCommit from "../ListCommit/ListCommit";
import './GroupCommit.css';

const GroupCommit = ({data}) => {
	return (
		<div className="group-commit">
			<div className="separator">
				<i className="fas fa-dot-circle group__icon"></i>
				<div className="vertical-line">&nbsp;</div>
			</div>
			<div className="timeline">
				<h2 className="group__text">{"LALALA"}</h2>
				<ListCommit></ListCommit>
			</div>
		</div>
	);
};

GroupCommit.propTypes = {
	
};

export default GroupCommit;