import React, {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from "@material-ui/core/Grid";
import SortIcon from '@material-ui/icons/Sort';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useSelectorStyles, useMenuStyles, useIconStyles} from './Styles';

import './Navbar.css'

const renderMenuItem = (value, index) => {
	return (
		<MenuItem value={value} key={index}>
			<ListItemIcon>
				<SortIcon/>
			</ListItemIcon>
			<span style={{marginTop:3}}>
				{value}
      </span>
		</MenuItem>
	)
}

const Navbar = ({branches}) => {
  const [branch, setBranch] = useState(branches[0]);
	const selectorStyles = useSelectorStyles()
	const menuStyles = useMenuStyles()
	const iconStyles = useIconStyles()

	console.log(branches)
	const menuProps = {
		classes: menuStyles,
    anchorOrigin: {
      vertical: "bottom",
        horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
        horizontal: "left"
    },
    getContentAnchorEl: null
	};

  const handleChange = (event) => {
    setBranch(event.target.value);
  };

  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon className={props.className + " " + iconStyles.icon}/>
  	)
	};

	return (
		<Grid
        container
        className="nav-bar nav-bar--xl"
    >
			<FormControl>
				<Select
					disableUnderline
					value={branch}
					classes={selectorStyles}
					MenuProps={menuProps}
					IconComponent={iconComponent}
					onChange={handleChange}
				>
					{
						branches.map((value, index) => renderMenuItem(value, index))
					}
				</Select>
			</FormControl>
		</Grid>
	);
};

export default Navbar;