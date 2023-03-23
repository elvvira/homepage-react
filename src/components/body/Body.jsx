import Footer from '../footer/Footer';
import Header from '../header/Header';
import Main from '../main/Main';
import style from './body.module.scss';
import { useState } from 'react';

const Body = () => {
	const [close, setClose] = useState(true);
	return (
		<div className={style.container}>
			<Header close={close} setClose={setClose} />
			<Main />
			<Footer />
		</div>
	);
};
export default Body;
