import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './src/common/styles'

const moreStyles = {
	headerTextStyle: {
		fontSize: 20,
		color: 'darkgrey'
	}
}
export default class News extends Component {
	
	render() {
		return(
			<View style={styles.cardView}>
				<Text style={moreStyles.headerTextStyle}>News</Text>
			</View>
		);
	}
}