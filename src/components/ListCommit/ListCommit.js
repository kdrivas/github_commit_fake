import React from 'react';
import PropTypes from 'prop-types';
import Commit from './../Commit/Commit';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './ListCommit.css';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const ListCommit = ({listCommit}) => {
	return (
		<div  className="list-commit">
			{console.log('Dentro de ListCommit', listCommit)}
			<List>
              {listCommit.map( (element, value) => (
                <ListItem className="list-commit-item" key={value}>
                  <Commit message={element.message} user={element.user} daysBefore={element.daysBefore} commitSha={element.commitSha} shaUrl={element.shaUrl} repoUrl={element.repoUrl} userUrl={element.userUrl} avatarUrl={element.avatarUrl}/>
                </ListItem>
              ))}
      </List>
		</div>
	);
};

ListCommit.propTypes = {
	
};

export default ListCommit;