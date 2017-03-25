import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import NewsList from '../components/NewsList';

test('renders correctly', () => {
	const news = { 
		author: 'newsAuthor', 
		description: 'newsDescription', 
		publishedAt: 'newsTimeStamp', 
		title: 'newsTitle', 
		urlToImage: 'newsImageURL', 
	};
	const newsList = [news];
	const tree = renderer.create(
		<NewsList
			news={newsList}
		/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});
