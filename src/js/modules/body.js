const bodyLock = () => {
	document.body.style.overflow = 'hidden';
};

const bodyUnLock = () => {
	document.body.style.overflow = 'auto';
};

export { bodyLock, bodyUnLock };
