const preloader = () => {
	setTimeout(() => {
		document.querySelector('.preloader').classList.add('hide');
	}, 5000);
};

export default preloader;
