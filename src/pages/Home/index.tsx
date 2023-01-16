import React from 'react';
import { useAppSelector } from '../../store/hooks';

import styles from './Home.module.scss';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Shop from '../../components/Shop';

const Home = () => {
	const items = useAppSelector(state => state.items.items);
	console.log(items, 'home');
	return (
		<>
			<Header />
			<Banner />
			<Shop items={items} />
		</>
	);
};

export default Home;
