import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import { connect } from 'react-redux'

import {
	SET_CURRENT_PAGE
} from './../../redux/actions/commit-action'

const Footer = ({
	commit: {commits, currentPage},
	branch: {branches, currentBranch},
	setCurrentPage
}) => {
	const [disabledNewer, setDisabledNewer] = useState(true)
	const [disabledOlder, setDisabledOlder] = useState(true)
	
	useEffect(() => {
		if (currentPage == 1){
			setDisabledOlder(false)
			setDisabledNewer(true)
			console.log('Entre a condicion 1')
		} else if (commits[`${branches[currentBranch].commit.sha}-${currentPage}`] !== undefined && Object.keys(commits[`${branches[currentBranch].commit.sha}-${currentPage}`]).length > 0 && currentPage > 1) {
			setDisabledOlder(false)
			setDisabledNewer(false)
			console.log('Entre a condicion 2')
		} else if (commits[`${branches[currentBranch].commit.sha}-${currentPage}`] !== undefined && Object.keys(commits[`${branches[currentBranch].commit.sha}-${currentPage}`]).length == 0 && currentPage > 1) {
				setDisabledOlder(true)
				setDisabledNewer(false)
				console.log('Entre a condicion 2')
		} else if (commits[`${branches[currentBranch].commit.sha}-${currentPage}`] === undefined) {
			setDisabledOlder(true)
			setDisabledNewer(true)
			console.log('Entre a condicion 3', commits[`${branches[currentBranch].commit.sha}-${currentPage}`], `${branches[currentBranch].commit.sha}-${currentPage}`)
		}
		console.log('Dentro del footer', currentPage)
	}, [currentPage, commits, branches])

	const handleNewer = () => {
		setCurrentPage(currentPage - 1)
	}

	const handleOlder = () => {
		setCurrentPage(currentPage + 1)
	}

	return (
		<ButtonGroup>
			<Button disabled={disabledNewer} onClick={handleNewer}>Newer</Button>
			<Button disabled={disabledOlder} onClick={handleOlder}>Older</Button>
		</ButtonGroup>
	);
};

Footer.propTypes = {
	
};

const mapStateToProps = (state) => ({
	commit: state.commit,
	branch: state.branch
})

const mapDispatchToProps = (dispatch) => ({
	setCurrentPage: (data) => dispatch({ type: SET_CURRENT_PAGE, payload: data})
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer);