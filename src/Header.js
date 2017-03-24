import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';

const moreStyles = StyleSheet.create({
	headerViewStyle: {
		height: 40,
		position: 'relative',
	},
	headerTextStyle: {
		fontSize: 20,
		color: 'darkgrey'
	},
});

export default class News extends Component {
	
	render() {
		const { headerViewStyle, headerTextStyle } = moreStyles;

		return(
			<View style={[styles.cardView, headerViewStyle]}>
				<Text style={headerTextStyle}>News</Text>
			</View>
		);
	}
}