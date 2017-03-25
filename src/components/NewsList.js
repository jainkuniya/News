//Import libraries
import React, { Component } from 'react';
import { View, Text, ScrollView, Linking, StyleSheet } from 'react-native';
import NewsDetails from './NewsDetails';

//more styles
const moreStyles = StyleSheet.create({
	emptyTextStyle: {
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 84,
	},
});

//Create class component
export default class NewsLists extends Component {

	render() {
		const { emptyTextStyle } = moreStyles;
		const { message } = this.props;

		return (
			<View>
				<ScrollView >
					{this.props.newsList.map(news => 
						<NewsDetails 
							key={news.title} 
							news={news} 
							openBroweser={() => Linking.openURL(news.url)}
						/>)}
				</ScrollView>
				<View style={emptyTextStyle}>
					<Text>{message}</Text>
				</View>
			</View>
		);
	}
}
