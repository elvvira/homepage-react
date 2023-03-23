import style from './header.module.scss';

const Header = () => {
	return (
		<header className={style.container}>
			<img src='/public/images/logo.svg' alt='logo' />
			<div>
				<img src='/public/images/icon-menu.svg' alt='hamburguer' />
				{/* <nav>
                    <ul>
                    <li></li>
                    </ul>
                </nav> */}
			</div>
		</header>
	);
};
export default Header;
