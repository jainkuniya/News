//Import library
import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import Header from './src/components/Header';
import NewsList from './src/components/NewsList';

//Create a class component
export default class News extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <NewsList />
      </View>
    );
  }
}

//Render it to the android screen
AppRegistry.registerComponent('News', () => News);
