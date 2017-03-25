import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import NewsList from '../components/NewsList';

test('renders correctly', () => {
  const tree = renderer.create(
    <NewsList />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
