import React, {useState, useDispatch, useSelector, useEffect} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from "@material-ui/core/Grid";
import SortIcon from '@material-ui/icons/Sort';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useSelectorStyles, useMenuStyles, useIconStyles, useSkeletonStyles} from './Styles';

import {
	GET_BRANCHES_REQUESTED
} from '../../redux/actions/branch-action'

import { connect } from 'react-redux'

import './Navbar.css'

const renderMenuItem = (value, index) => {
	return (
		<MenuItem value={value} key={index}>
			<ListItemIcon>
				<SortIcon/>
			</ListItemIcon>
			<span>
				{value}
      </span>
		</MenuItem>
	)
}

const Navbar = ({
  branch: { loading, branch },
  getBranches
}) => {

	useEffect(() => {
		getBranches();
	}, [])

	useEffect(() => {
		const nameBranch = branch.map(e => e.name)
		setCurrentBranch(nameBranch[0])
	}, [branch])

  const [currentBranch, setCurrentBranch] = useState(null);
	const selectorStyles = useSelectorStyles()
	const menuStyles = useMenuStyles()
	const skeletonStyles = useSkeletonStyles()
	const iconStyles = useIconStyles()

	console.log(branch)
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
    setCurrentBranch(event.target.value);
  };

  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon className={props.className + " " + iconStyles.icon}/>
  	)
	};
	const c = false
	return (
		<>
			<Grid
				container
				className="nav-bar nav-bar--xl"
			>
				{currentBranch ? (
					<FormControl>
						<Select
							disableUnderline
							value={currentBranch}
							classes={selectorStyles}
							MenuProps={menuProps}
							IconComponent={iconComponent}
							onChange={handleChange}
						>
							{
								branch.map((value, index) => renderMenuItem(value.name, index))
							}
						</Select>
					</FormControl>) :
					(<Skeleton variant="rect" classes={skeletonStyles}></Skeleton>)
				}
			</Grid>
		</>
	);
};

const mapStateToProps = (state) => ({
  branch: state.branch
})

const mapDispatchToProps = (dispatch) => ({
  getBranches: () => dispatch({ type: GET_BRANCHES_REQUESTED }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)