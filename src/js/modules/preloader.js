import { bodyLock, bodyUnLock } from './body';

const preloader = () => {
	setTimeout(() => {
		document.querySelector('.preloader').classList.add('hide');
	}, 3000);
};

export default preloader;
