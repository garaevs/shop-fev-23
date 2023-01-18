import React from 'react';
import { useAppSelector } from '../../store/hooks';

import Header from '../../components/Header';
import Shop from '../../components/Shop';

const Favorit = () => {
	// const items = useAppSelector(state => state.favItems.items);

	return (
		<>
			<Header />
			{/* <Shop items={items} /> */}
		</>
	);
};

export default Favorit;
