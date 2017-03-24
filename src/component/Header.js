import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = {
	headerViewStyle: {
		backgroundColor: '#F8F8F8',
	    justifyContent: 'center',
	    alignItems: 'center',
	    height: 40,
	    shadowColor: '#000',
	    shadowOffset: { width: 0, height: 2 },
	    shadowOpacity: 0.2,
	    elevation: 2,
	    position: 'relative'
	},
	headerTextStyle: {
		fontSize: 20,
		color: 'darkgrey'
	}
}
export default class News extends Component {
	
	render() {
		const {headerViewStyle, headerTextStyle} = styles;

		return(
			<View style={headerViewStyle}>
				<Text style={headerTextStyle}>News</Text>
			</View>
		);
	}
}