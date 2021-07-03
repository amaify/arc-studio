// let slideIndex = 0;
// function showSlides() {
// 	const slides = document.querySelectorAll(".intro-wrapper");
// 	const slideIndicator = document.querySelectorAll(
// 		".intro-button__items--button"
// 	);

// 	for (let i = 0; i < slides.length; i++) {
// 		slides[i].style.display = "none";
// 	}

// 	slideIndex++;
// 	if (slideIndex > slides.length) slideIndex = 1;

// 	for (let i = 0; i < slideIndicator.length; i++) {
// 		slideIndicator[i].className = slideIndicator[i].className.replace(
// 			" active",
// 			""
// 		);
// 	}

// 	slides[slideIndex - 1].style.display = "block";
// 	slideIndicator[slideIndex - 1].className += " active";

// 	setTimeout(showSlides, 5000);
// }

// showSlides();

const slideWrapper = document.querySelector(".intro");
const introSlides = document.querySelectorAll(".intro-wrapper");
const slideIndicator = document.querySelectorAll(
	".intro-button__items--button"
);

let counter = 0;
let size = introSlides[0].clientWidth;

slideWrapper.style.transform = "translateX(" + -size * counter + "px)";

function autoSlideShow() {
	for (let i = 0; i < introSlides.length; i++) {
		introSlides[i].style.transition = "transform 2s ease-in-out";
		introSlides[i].style.transform = "translateX(" + -size * counter + "px)";

		introSlides[i].addEventListener("transitionend", () => {
			if (counter === 0) {
				introSlides[i].style.transition = "none";
				introSlides[i].style.transform =
					"translateX(" + -size * counter + "px)";
			}
		});
	}

	counter++;
	if (counter >= introSlides.length) counter = 0;

	for (let i = 0; i < slideIndicator.length; i++) {
		slideIndicator[i].className = slideIndicator[i].className.replace(
			" active",
			""
		);
	}

	counter === 0
		? (slideIndicator[0].className += " active")
		: (slideIndicator[counter - 1].className += " active");

	setTimeout(autoSlideShow, 4000);
}

autoSlideShow();
