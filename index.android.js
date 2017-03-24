//Import library
import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import Header from './src/Header'
import NewsList from './src/NewsList' 

//Create a class component
export default class News extends Component {
  render() {
    return (
      <View>
        <Header />
        <NewsList />
      </View>
    );
  }
}

//Render it to the android screen
AppRegistry.registerComponent('News', () => News);
