const menu = () => {
	const menu = document.querySelector('.menu-wrap');
	const toggleBtn = document.querySelector('.menu__toggle-btn');
	const links = document.querySelectorAll('.menu__item');

	const bodyLock = () => {
		document.body.style.overflow = 'hidden';
	};

	const bodyUnLock = () => {
		document.body.style.overflow = 'auto';
	};

	links.forEach(link =>
		link.addEventListener('click', () => {
			menu.classList.remove('active');
			bodyUnLock();
			toggleBtn.firstElementChild.src = 'img/menu/menu-btn.svg';
		}),
	);

	toggleBtn.addEventListener('click', e => {
		e.preventDefault();
		menu.classList.toggle('active');

		if (menu.classList.contains('active')) {
			bodyLock();
			toggleBtn.firstElementChild.src = 'img/menu/menu-btn-active.svg';
		} else {
			toggleBtn.firstElementChild.src = 'img//menu/menu-btn.svg';
			bodyUnLock();
		}
	});
};

export default menu;
