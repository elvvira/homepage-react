import style from './new.module.scss';

const New = ({ title, text }) => {
	return (
		<div className={style.container}>
			<h3 className={style.title}>{title}</h3>
			<p className={style.text}>{text}</p>
		</div>
	);
};
export default New;
