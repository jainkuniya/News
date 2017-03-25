//Import libraries
import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import axios from 'axios';
import NewsList from './NewsList';
import styles from '../common/styles';
import { getSourcesUrl, getArticlesUrl } from '../networking/URL';
import SortBySelector from './SortBySelector';

//more styles
const moreStyles = StyleSheet.create({
	pickerStyle: {
		flex: 2
	},
	sourceSelector: {
		marginTop: 8,
		paddingLeft: 8,
		paddingRight: 8,
		flexDirection: 'row',
	},
	sourceSelectorText: {
		flex: 1,
		fontSize: 16,
	},
});

//Create class component
export default class MainPage extends Component {

	constructor() {
		super();
		this.state = {
			news: [],
			currentSourceId: 'the-next-web',
			sources: [],
			sortBy: 'latest',
		};
	}

	componentWillMount() {
		// Make a GET request to get news
		console.log(getSourcesUrl());
		axios.get(getSourcesUrl())
			.then(response => this.setState({ sources: response.data.sources }))
			.catch((error) => {
			console.log(error);
		});

		//fetch news with default source 
		this.fetchNews(this.state.currentSourceId, this.state.sortBy);
	}

	onValueChange = (id: string) => {
		//update selected source in picker
		this.setState({ 
			currentSourceId: id, 
		});
		this.fetchNews(id, this.state.sortBy);		
	};

	onSortSelect = (sort: string) => {
		this.setState({
			sortBy: sort,
		});
		this.fetchNews(this.state.currentSourceId, sort);
	}

	fetchNews = (sourceId: string, sortBy: string) => {
		// Make a GET request to get news
		axios.get(getArticlesUrl(sourceId, sortBy))
			.then(response => this.setState({ news: response.data.articles }))
			.catch((error) => {
			console.log(error);
			this.setState({ news: [] });
		});
	}

	renderSources() {
		return this.state.sources.map(source => 
			<Picker.Item 
				key={source.id} 
				label={source.name} 
				value={source.id}
			/>);
	}
	
	render() {
		const { pickerStyle, sourceSelector, sourceSelectorText } = moreStyles;

		return (
			<View>
				<View style={[sourceSelector, styles.cardView]}>
					<Text style={sourceSelectorText}>Sources</Text>
					<Picker
						style={[pickerStyle]}
						selectedValue={this.state.currentSourceId}
						onValueChange={(value) => this.onValueChange(value)}
					>
					{this.renderSources()}
					</Picker>
				</View>
				<View style={[sourceSelector, styles.cardView]}>
					<SortBySelector
						onSelect={this.onSortSelect}
						currentSelected={this.state.sortBy}
					/>
				</View>
				<NewsList
					news={this.state.news}
				/>
			</View>
		);
	}
}
