//Import library
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/component/Header'

//Create a class component
export default class News extends Component {
  render() {
    return (
      <Header />
    );
  }
}

//Render it to the android screen
AppRegistry.registerComponent('News', () => News);
