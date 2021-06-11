// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {
	modalClick();
})

function modalClick() {
	const body = document.body;
	const modal = document.body.querySelector('#modal');
	const buttonLogin = document.body.querySelector('#buttonLogin');
	const closeModal = document.body.querySelector('#close');


	buttonLogin.addEventListener('click', (e) => {
		e.preventDefault();
		modal.classList.toggle('modal--active');

		body.style.paddingRight = `${getScrollbarWidth()}px`
		body.style.overflow = 'hidden';
	})
	closeModal.addEventListener('click', (e) => {
		e.preventDefault();
		modal.classList.remove('modal--active');
		body.style.paddingRight = '0';
		body.style.overflow = '';
	})
}

// рассчет ширины скроллбара
const getScrollbarWidth = () => {
	const item = document.createElement('div');

	item.style.position = 'absolute';
	item.style.top = '-9999px';
	item.style.width = '50px';
	item.style.height = '50px';
	item.style.overflow = 'scroll';
	item.style.visibility = 'hidden';

	document.body.appendChild(item);
	const scrollBarWidth = item.offsetWidth - item.clientWidth;
	document.body.removeChild(item);

	return scrollBarWidth;
}