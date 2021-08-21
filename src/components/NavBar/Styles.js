import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useSelectorStyles = makeStyles((theme) => ({
	root: {
		minWidth: 150,
		alignItems: 'center',
		display: 'flex',
		background: 'white',
		color: '#0366d6',
		fontWeight: 1,
		borderStyle:'solid',
		borderWidth: 2,
		borderRadius: 12,
		paddingLeft: 24,
		paddingTop: 10,
		paddingBottom: 10,
		borderColor: '#e1e4e8',
		boxShadow: '0px 5px 8px -3px rgba(0,0,0,0.14)',
		height: 20,
		"&:focus":{
			borderRadius: 12,
			background: 'white',
			borderColor: '#e1e4e8',
		},
	}
}))

const useSkeletonStyles = makeStyles((theme) => ({
	root: {
		minWidth: 180,
		height: 20,
		alignItems: 'center',
		display: 'flex',
		fontWeight: 10,
		borderWidth: 4,
		borderRadius: 12,
		paddingLeft: 24,
		paddingTop: 10,
		paddingBottom: 10,
	}
}))

const useIconStyles = makeStyles((theme) => ({
	icon:{
    color: '#0366d6',
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
			background: '#79b8ff'
		},
		"& li.Mui-selected":{
			color:'white',
			background: '#0366d6'
		},
		"& li.Mui-selected:hover":{
			background: '#0366d6'
		}
	}
}))

export {useSelectorStyles, useMenuStyles, useIconStyles, useSkeletonStyles}