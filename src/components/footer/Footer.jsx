import style from './footer.module.scss';
import Card from '../card/Card';
import { cardFooter } from '../../constants/info-cards';

const Footer = () => {
	return (
		<footer className={style.container}>
			{cardFooter.map(card => {
				return <Card key={card.id} {...card}></Card>;
			})}
		</footer>
	);
};
export default Footer;
