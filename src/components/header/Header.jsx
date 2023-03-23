import style from './header.module.scss';

const Header = ({ close, setClose }) => {
	return (
		<header className={style.container}>
			<img src='/public/images/logo.svg' alt='logo' />
			<div className={style.menu}>
				<img
					onClick={() => setClose(!close)}
					className={style.icon}
					src={
						close
							? '/public/images/icon-menu.svg'
							: '/public/images/icon-menu-close.svg'
					}
					alt=''
				/>
				<nav className={close ? style.nav : style['nav--show']}>
					<ul className={style.ul}>
						<li>
							<a href=''>Home</a>
						</li>
						<li>
							<a href=''>New</a>
						</li>
						<li>
							<a href=''>Popular</a>
						</li>
						<li>
							<a href=''>Trending</a>
						</li>
						<li>
							<a href=''>Categories</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
