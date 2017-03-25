import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import MainPage from '../components/MainPage';

test('renders correctly', () => {
  const tree = renderer.create(
    <MainPage />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
