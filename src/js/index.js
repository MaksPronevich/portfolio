import tabs from './modules/tabs';
import './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
	tabs();
});

const leftMenu = document.querySelector('.left-menu');
const toggleBtn = document.querySelector('.left-menu__toggle-btn');
const links = document.querySelectorAll('.left-menu__item');

links.forEach(link =>
	link.addEventListener('click', () => {
		leftMenu.classList.remove('active');
	}),
);

toggleBtn.addEventListener('click', () => {
	leftMenu.classList.toggle('active');
});
