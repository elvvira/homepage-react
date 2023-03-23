import Footer from '../footer/Footer';
import Header from '../header/Header';
import Main from '../main/Main';
import style from './body.module.scss';

const Body = () => {
	return (
		<div className={style.container}>
			<Header />
			<Main />
			<Footer />
		</div>
	);
};
export default Body;
