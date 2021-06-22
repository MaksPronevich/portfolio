const tabs = () => {
	const tabBtns = document.querySelectorAll('.portfolio-nav__item');
	const tabContent = document.querySelectorAll('.portfolio__item');

	const hideTabContent = () => {
		tabBtns.forEach(tabBtn => tabBtn.firstElementChild.classList.remove('active'));
		tabContent.forEach(item => item.classList.remove('active'));
	};

	tabBtns.forEach((tabBtn, i) => {
		tabBtn.addEventListener('click', e => {
			hideTabContent();
			e.preventDefault();
			tabBtn.firstElementChild.classList.add('active');
			tabContent[i].classList.add('active');
		});
	});
};

export default tabs;
