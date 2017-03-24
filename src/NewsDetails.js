//Import libraries
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import styles from './styles'

//more styles
const moreStyles = StyleSheet.create({
	containerStyle: {
		marginTop: 12,
		flex: 1,
	},
	imageStyle: {
		height: 200,
	    width: 320,    
	},
	titleStyle: {
		fontSize: 14,
		color: 'black',
		position: 'absolute',
		backgroundColor: 'rgba(255,255,255,0.6)',
		bottom: 0,
		padding: 8,
	},
	descriptionStyle: {
		padding: 8,
	},
	authorStyle: {
		fontSize: 14,
		color: 'brown',
		position: 'absolute',
		backgroundColor: 'rgba(255,255,255,0.8)',
		top: 0,
		padding: 2,
	},
	publishedAtStyle: {
		fontSize: 10,
		justifyContent: 'flex-start',
		paddingBottom: 2,
	},
});

//create component
export default class NewsDetails extends Component{
	

	render(){
		const { news, openBroweser } = this.props;
		const { 
			author,
			description,
			publishedAt,
			title,
			urlToImage 
		} = news;
		const { 
			containerStyle,
			imageStyle,
			titleStyle,
			descriptionStyle,
			authorStyle,
			publishedAtStyle,
		} = moreStyles;
		console.log(urlToImage);
		return (
			<TouchableOpacity 
				style={[styles.cardView, containerStyle]}
				activeOpacity={0.7}
				onPress={openBroweser}
			>
				<View>
					<Image
						style={imageStyle}
						source={{ uri: urlToImage }}
					/>
					<Text style={authorStyle}>{author}</Text>
					<Text style={titleStyle}>{title}</Text>
				</View>
				<Text style={descriptionStyle}>{description}</Text>
				<Text style={publishedAtStyle}>{publishedAt}</Text>
			</TouchableOpacity>
		);
	}
}
