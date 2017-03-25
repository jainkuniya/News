//Import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const moreStyles = StyleSheet.create({
	containerStyle: {
		padding: 8,
		flexDirection: 'row',
		alignItems: 'center',
	},
	testStyle: {
		paddingLeft: 16,
		paddingRight: 16,
	},
	touchableStyle: {
		marginLeft: 16,
		marginRight: 16,
	},
	selectedStyle: {
		borderRadius: 4,
		borderWidth: 0.5,
		borderColor: '#000000',
	},
	nonSelectedStyle: {
		borderRadius: 4,
		borderWidth: 0.5,
		borderColor: '#d6d7da',
	},

});

export default class SortBySelector extends Component {
	render() {
		const { 
			containerStyle,
			testStyle, 
			selectedStyle, 
			nonSelectedStyle,
			touchableStyle,
		} = moreStyles;
		const { onSelect, currentSelected } = this.props;

		return (
			<View style={containerStyle}>
				<TouchableOpacity
					style={[
						touchableStyle, 
						(currentSelected === 'latest') ? selectedStyle : nonSelectedStyle
						]}
					activeOpacity={0.7}
					onPress={() => onSelect('latest')}
				>
					<Text style={testStyle}>Latest</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[
						touchableStyle, 
						(currentSelected === 'top') ? selectedStyle : nonSelectedStyle
						]}
					activeOpacity={0.7}
					onPress={() => onSelect('top')}
				>
					<Text style={testStyle}>Top</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[
						touchableStyle, 
						(currentSelected === 'popular') ? selectedStyle : nonSelectedStyle
						]}
					activeOpacity={0.7}
					onPress={() => onSelect('popular')}
				>
					<Text style={testStyle}>Popular</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
