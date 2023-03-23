import style from './card.module.scss';

const Card = ({ icon, number, title, info }) => {
	return (
		<div className={style.container}>
			<img className={style.image} src={icon} alt='' />
			<div className={style.info}>
				<p className={style.number}>{number}</p>
				<p className={style.title}>{title}</p>
				<p className={style.text}>{info}</p>
			</div>
		</div>
	);
};
export default Card;
