import React from 'react';
import { useAppSelector } from '../../store/hooks';

import Header from '../../components/Header';
import Shop from '../../components/Shop';

const Favorit = () => {
	const items = useAppSelector(state => state.items.items);
	const favItems = items.filter(item => (item.fav ? item : ''));
	console.log(favItems, 'закладки');

	return (
		<>
			<Header />
			<Shop items={favItems} title={'Закладки'} />
		</>
	);
};

export default Favorit;
