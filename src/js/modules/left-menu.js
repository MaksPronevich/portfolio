const leftMenu = document.querySelector('.left-menu-wrap');
const toggleBtn = document.querySelector('.left-menu__toggle-btn');
const links = document.querySelectorAll('.left-menu__item');

const bodyLock = () => {
	document.body.style.overflow = 'hidden';
};

const bodyUnLock = () => {
	document.body.style.overflow = 'auto';
};

links.forEach(link =>
	link.addEventListener('click', () => {
		leftMenu.classList.remove('active');
		bodyUnLock();
		toggleBtn.firstElementChild.src = 'img/left-menu-btn.svg';
	}),
);

toggleBtn.addEventListener('click', e => {
	e.preventDefault();
	leftMenu.classList.toggle('active');

	if (leftMenu.classList.contains('active')) {
		bodyLock();
		toggleBtn.firstElementChild.src = 'img/left-menu-btn-active.svg';
	} else {
		toggleBtn.firstElementChild.src = 'img/left-menu-btn.svg';
		bodyUnLock();
	}
});
