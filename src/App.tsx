import React from 'react';
import './App.scss';

import logoSvg from './assets/images/logo.svg';
import cartSvg from './assets/images/cart.svg';
import favoriteSvg from './assets/images/favorite.svg';
import profileSvg from './assets/images/profile.svg';
import searchSvg from './assets/images/search.svg';

import Item from './components/Item';

function App() {
	return (
		<div className='wrapper'>
			<header className='header'>
				<div className='logo'>
					<img src={logoSvg} alt='logo' />
					<div className='logoName'>
						<div className='logoTitle'>React Snikers</div>
						<div className='logoSubtitle'>Магазин лучших кроссовок</div>
					</div>
				</div>
				<div className='profile'>
					<div className='myCart'>
						<img src={cartSvg} alt='cart' />
						<p className='price'>1205 руб.</p>
					</div>
					<img src={favoriteSvg} className='favorite' alt='favorite' />
					<img src={profileSvg} className='profileSvg' alt='cabinet' />
				</div>
			</header>
			<div className='reklama'>
				<img src='/assets/images/reklama.png' alt='reklama' />
			</div>
			<div className='shop'>
				<div className='shop__header'>
					<div className='shop__title'>Все кроссовки</div>
					<div className='shop__search'>
						<img src={searchSvg} alt='search' />
						<input type='text' placeholder='Поиск...' />
					</div>
				</div>
				<div className='shop__catalog'>
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
				</div>
			</div>
		</div>
	);
}

export default App;
