import React from 'react';
import PropTypes from 'prop-types';

const Commit = ({title, user, daysBefore, sha}) => {
	return (
		<div>
			<h1>{title}</h1>
			<span>{user}</span>
			<span>{daysBefore}</span>
			<span>{sha}</span>
			<i className="fas fa-copy fa-lg"></i>
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