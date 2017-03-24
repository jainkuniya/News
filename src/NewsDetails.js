//Import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles'

//more styles
const moreStyles = StyleSheet.create({
	containerStyle: {
		marginTop: 16,
	},
});

//create component
export default class NewsDetails extends Component{
	

	render(){
		const { news } = this.props;
		const { author,
				description,
				publishedAt,
				title,
				url,
				urlToImage } = news;

		return (
			<View style={[styles.cardView, moreStyles.containerStyle]}>
				<Text>{title}</Text>
			</View>
		);
	}
}
