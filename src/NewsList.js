//Import libraries
import React, { Component } from 'react';
import { ScrollView, Text, Linking } from 'react-native';
import axios from 'axios';
import NewsDetails from './NewsDetails'



//Create class component
export default class NewsList extends Component {

	constructor() {
		super();
		this.state = {
		  news : [],
		};
	}

	componentWillMount() {
		// Make a GET request to get news
		axios.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=edba351311594c4aa0d0f3a0611d7720')
		  .then(response => this.setState({ news: response.data.articles }))
		  .catch(function (error) {
		    console.log(error);
		  });
	}

	renderNews(){
		return this.state.news.map(news => 
			<NewsDetails 
				key={news.title} 
				news={news} 
				openBroweser={() => Linking.openURL(news.url)}
			/>);
	}

	render() {
		return(
			<ScrollView>
				{this.renderNews()}
			</ScrollView>
		);
	}
}