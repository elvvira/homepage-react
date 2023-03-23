import { cardNew } from '../../constants/info-cards';
import New from '../new/New';
import style from './main.module.scss';

const Main = () => {
	return (
		<main className={style.container}>
			<img
				className={style.image}
				src='/public/images/image-web-3-mobile.jpg'
				alt=''
			/>

			<h1 className={style.title}>The Bright Future of Web 3.0?</h1>
			<div>
				<p className={style.text}>
					We dive into the next evolution of the web that claims to put the po
					wer of the platforms back into the hands of the people. But is it
					really fulfilling its promise?
				</p>
				<button className={style.button}>READ MORE</button>
			</div>
			<div className={style.news}>
				<h2 className={style.titleNew}>New</h2>
				{cardNew.map(card => {
					return <New key={card.id} {...card} />;
				})}
			</div>
		</main>
	);
};
export default Main;
