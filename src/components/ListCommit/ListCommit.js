import React from 'react';
import PropTypes from 'prop-types';
import Commit from './../Commit/Commit';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import './ListCommit.css';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const ListCommit = ({data}) => {
	return (
		<div  className="list-commit">
			<List>
              {generate(
                <ListItem className="list-commit-item">
                  <Commit title={'commit'} user={'user'} daysBefore={'daysBefore'} sha={'sha78934'} image_url={"https://avatars.githubusercontent.com/u/19364805?v=4"}/>
                </ListItem>,
              )}
      </List>
		</div>
	);
};

ListCommit.propTypes = {
	
};

export default ListCommit;