import React from 'react';
import './App.scss';

import logoSvg from './assets/images/logo.svg';
import cartSvg from './assets/images/cart.svg';
import favoriteSvg from './assets/images/favorite.svg';
import profileSvg from './assets/images/profile.svg';

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
		</div>
	);
}

export default App;
