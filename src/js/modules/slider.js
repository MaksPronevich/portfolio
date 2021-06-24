import Swiper, { Navigation, Pagination, Autoplay } from 'swiper/core';
Swiper.use([Navigation, Pagination, Autoplay]);

const swiper = new Swiper('.portfolio-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	pagination: {
		el: '.swiper-pagination',
	},

	autoplay: {
		delay: 3000,
	},
});
