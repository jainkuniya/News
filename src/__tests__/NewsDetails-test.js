import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import NewsDetails from '../components/NewsDetails';

test('renders correctly', () => {
	const news = { 
		author: 'newsAuthor', 
		description: 'newsDescription', 
		publishedAt: 'newsTimeStamp', 
		title: 'newsTitle', 
		urlToImage: 'newsImageURL', 
	};
	const tree = renderer.create(
		<NewsDetails
			news={news} 
		/>
		).toJSON();
	expect(tree).toMatchSnapshot();
});
