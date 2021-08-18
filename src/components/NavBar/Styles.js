import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

const useSelectorStyles = makeStyles((theme) => ({
	root: {
		minWidth: 150,
		alignItems: 'center',
		display: 'flex',
		background: 'white',
		color: deepPurple[500],
		fontWeight: 1,
		borderStyle:'none',
		borderWidth: 2,
		borderRadius: 12,
		paddingLeft: 24,
		paddingTop: 10,
		paddingBottom: 10,
		boxShadow: '0px 5px 8px -3px rgba(0,0,0,0.14)',
		"&:focus":{
			borderRadius: 12,
			background: 'white',
			borderColor: deepPurple[100]
		},
	}
}))

const useIconStyles = makeStyles((theme) => ({
	icon:{
    color: deepPurple[300],
    right: 12,
    position: 'absolute',
    userSelect: 'none',
    pointerEvents: 'none'
  },
}))

const useMenuStyles = makeStyles((theme) => ({
	paper: {
		borderRadius: 12,
		marginTop: 8,
		marginLeft: 0
	},
	list: {
		paddingTop:0,
		paddingBottom:0,
		background:'white',
		"& li":{
			fontWeight:10,
			paddingTop:10,
			paddingBottom:10,
		},
		"& li:hover":{
			background: deepPurple[100]
		},
		"& li.Mui-selected":{
			color:'white',
			background: deepPurple[400]
		},
		"& li.Mui-selected:hover":{
			background: deepPurple[500]
		}
	}
}))

export {useSelectorStyles, useMenuStyles, useIconStyles}