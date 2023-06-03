const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__inner-wrapper');
const selectBox = document.querySelector('.select-box');
const options = document.querySelectorAll('.select-box__item');
const selectedOption = document.querySelector('.select-box__selected');
const selectList = document.querySelector('.select-box__list');
const slider = document.querySelector(".range-slider__input");
const output = document.querySelector(".range-slider__output-number");
const revealElements = document.querySelectorAll("[data-reveal]");
const array = [];

options.forEach(item => array.push(item.innerHTML.replace(/(\r\n|\n|\r|\t)/gm, "")));
selectList.addEventListener('click', function (event) {
	array.forEach(item => (event.target.innerHTML.replace(/(\r\n|\n|\r|\t)/gm, "") === item) ? selectedOption.value = item : false);

});
selectBox.addEventListener('click', () => {
	selectBox.classList.toggle('active');
});

navBtn.addEventListener('click', () => {
	navIcon.classList.toggle('nav-icon--active');
	nav.classList.toggle('header__inner-wrapper--mobile');
});



output.innerHTML = slider.value;
slider.addEventListener('input', () => output.innerHTML = slider.value);
const scrollReveal = () => {
	for (let i = 0; i < revealElements.length; i++) {
		const isElementsOnScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight;
		if (isElementsOnScreen) {
			revealElements[i].classList.add("revealed");
		} else {
			revealElements[i].classList.remove("revealed");
		}
	}
};
window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);
// document.addEventListener("click", (event) => {
// 	if (!event.target.matches(".select-box__selected")) {
// 		select.classList.remove('select-box__selected--open');
// 		selectList.classList.remove('open');
// 	}
// }, !1);