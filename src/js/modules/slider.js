import Swiper, { Navigation, Pagination, Autoplay } from 'swiper/core';
Swiper.use([Navigation, Pagination, Autoplay]);

const swiper = new Swiper('.swiper-container', {
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	// loop: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},

	autoplay: {
		delay: 1000,
		pauseOnMouseEnter: true,
	},
});
