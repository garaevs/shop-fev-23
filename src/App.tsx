import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import './App.scss';

import Cart from './pages/Cart';
import Favorit from './pages/Favorit';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { addItems } from './store/items/itemSlice';
import { AppDispatch } from './store/store';
import { useAppDispatch, useAppSelector } from './store/hooks';

function App() {
	const dispatch: AppDispatch = useAppDispatch();

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get('http://localhost:3001/items').then(({ data }) => data);
			await dispatch(addItems(response));
		}
		fetchData();
	}, [dispatch]);

	return (
		<div className='wrapper'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/fav' element={<Favorit />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/profile' element={<Profile />} />
			</Routes>
		</div>
	);
}

export default App;
