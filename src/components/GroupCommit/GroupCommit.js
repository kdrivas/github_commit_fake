import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import ListCommit from "../ListCommit/ListCommit"
import CircularProgress from '@material-ui/core/CircularProgress'
import {connect} from 'react-redux'
import './GroupCommit.css'

import {
	GET_COMMITS_REQUESTED
} from './../../redux/actions/commit-action'

const CommitSection = ({listCommit, date}) => {
	return ( 
		<div className="block-date">
			<div className="separator">
				<i className="fas fa-dot-circle group__icon"></i>
				<div className="vertical-line">&nbsp;</div>
			</div>
			<div className="timeline">
				<h2 className="group__text">Commits on {date}</h2>
				<ListCommit listCommit={listCommit}/>
			</div> 
		</div>
	)
}

const GroupCommit = ({
	branch: {branches, currentBranch},
	commit: {commits, currentPage},
	getCommits
}) => {

	useEffect(() => {
		// Avoiding too many requests
		if (branches.length && commits[`${branches[currentBranch].commit.sha}-${currentPage}`] === undefined){
			const payload = {'branch': branches[currentBranch].commit.sha, 'page': currentPage}
			getCommits(payload)
		}
	}, [branches, currentPage])

	return (
		<div className="group-commit">
			{(branches.length > 0 && commits[`${branches[currentBranch].commit.sha}-${currentPage}`] !== undefined && Object.keys(commits[`${branches[currentBranch].commit.sha}-${currentPage}`]).length > 0) ? 
				(
				<div className="grid-commit">
					{
						Object.keys(commits[`${branches[currentBranch].commit.sha}-${currentPage}`]).map((element, index) => <CommitSection listCommit={commits[`${branches[currentBranch].commit.sha}-${currentPage}`][element]} date={element} key={index}/>)
					}
				</div>) : ((branches.length > 0  && commits[`${branches[currentBranch].commit.sha}-${currentPage}`] !== undefined && Object.keys(commits[`${branches[currentBranch].commit.sha}-${currentPage}`]).length == 0) ? <div>No more commits</div> : <CircularProgress disableShrink />)
			}
		</div>
	)
}

GroupCommit.propTypes = {
	branches: PropTypes.array,
	currentBranch: PropTypes.number,
	commits: PropTypes.shape({commit: PropTypes.string}),
	currentPage: PropTypes.number,
	getCommits: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  branch: state.branch,
  commit: state.commit
})

const mapDispatchToProps = (dispatch) => ({
  getCommits: (data) => dispatch({ type: GET_COMMITS_REQUESTED, payload: data }),
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupCommit)