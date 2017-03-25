//Import library
import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import Header from './src/components/Header';
import MainPage from './src/components/MainPage';

//Create a class component
export default class News extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <MainPage />
      </View>
    );
  }
}

//Render it to the android screen
AppRegistry.registerComponent('News', () => News);
