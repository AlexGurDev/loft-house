// Nav-icon

const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__inner-wrapper');

navBtn.addEventListener('click', () => {
	navIcon.classList.toggle('nav-icon--active');
	nav.classList.toggle('header__inner-wrapper--mobile');
});

const select = document.querySelector('.select-box__selected');
const selectList = document.querySelector('.select-box__list');

select.addEventListener('click', () => {
	selectList.classList.toggle('open');
	select.classList.toggle('select-box__selected--open');
});



var slider = document.querySelector(".range-slider__input");
var output = document.querySelector(".range-slider__output-number");
output.innerHTML = slider.value;

slider.oninput = function () {
	output.innerHTML = this.value;
};