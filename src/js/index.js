import preloader from './modules/preloader';
import tabs from './modules/tabs';
import slider from './modules/slider';
import menu from './modules/menu';

preloader();

window.addEventListener('DOMContentLoaded', () => {
	tabs();
	slider();
	menu();
});
