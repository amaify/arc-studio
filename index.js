let slideIndex = 0;
function showSlides() {
	const slides = document.querySelectorAll(".intro-wrapper");
	const slideIndicator = document.querySelectorAll(
		".intro-button__items--button"
	);

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slideIndex++;
	if (slideIndex > slides.length) slideIndex = 1;

	for (let i = 0; i < slideIndicator.length; i++) {
		slideIndicator[i].className = slideIndicator[i].className.replace(
			" active",
			""
		);
	}

	// slideIndicator.forEach((slide, x) => {
	// 	slide.addEventListener("click", () => {
	// 		slides.forEach((s, n) => {
	// 			// slideIndex = n;
	// 			if (x === n) {
	// 				console.log(n);
	// 				slides[slideIndex - 1].style.display = "block";
	// 			}
	// 		});
	// 	});
	// });

	slides[slideIndex - 1].style.display = "block";
	slideIndicator[slideIndex - 1].className += " active";

	setTimeout(showSlides, 5000);
}

showSlides();
