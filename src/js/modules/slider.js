import Swiper, { Navigation, Pagination } from 'swiper/core';
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.portfolio-swiper-container', {
	navigation: {
		nextEl: '.portfolio-button-next',
		prevEl: '.portfolio-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	autoplay: true,
});
