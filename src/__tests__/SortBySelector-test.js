import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import SortBySelector from '../components/SortBySelector';

test('renders correctly', () => {
	const onSortSelect = (sort: string) => (console.log(sort));

	const tree = renderer.create(
		<SortBySelector
			onSelect={onSortSelect}
			currentSelected={'latest'}
		/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});
