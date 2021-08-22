import React from 'react'
import PropTypes from 'prop-types'
import Commit from './../Commit/Commit'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import './ListCommit.css'

const ListCommit = ({listCommit}) => {
	return (
		<div  className="list-commit">
			<List>
        {listCommit.map( (element, value) => (
          <ListItem className="list-commit-item" key={value}>
            <Commit message={element.message} userId={element.userId} userName={element.userName} daysBefore={element.daysBefore} commitSha={element.commitSha} shaUrl={element.shaUrl} repoUrl={element.repoUrl} userUrl={element.userUrl} avatarUrl={element.avatarUrl}/>
          </ListItem>
        ))}
      </List>
		</div>
	)
}

ListCommit.propTypes = {
	listCommit: PropTypes.array.isRequired
}

export default ListCommit