//CODE FOR ADDING AN ACTIVE CLASS TO THE NAVIGATION ITEMS
let navItems = document.querySelectorAll(".header-links__item a");
let footerNav = document.querySelectorAll(".footer-links__item a");
let currentLocation = location.href;

for (let i = 0; i < navItems.length; i++) {
	if (navItems[i].href === currentLocation) {
		navItems[i].className = "nav-active";
	}
}

for (let i = 0; i < footerNav.length; i++) {
	if (footerNav[i].href === currentLocation) {
		console.log("matched");
		footerNav[i].style.color = "#1b1d23";
	}
}

//CODE FOR TOGGLING THE HAMBURGER MENU
let toggleBtn = document.querySelector(".mobile-menu__btn");
let backdrop = document.querySelector(".backdrop");
let navList = document.querySelector(".mobile-links");

let hamburgerIcon = `<img src="./assets/icons/icon-hamburger.svg" alt="Toggle Button">`;
let closeBtn = `<img src="./assets/icons/icon-close.svg" alt="Toggle Button">`;

window.onload = toggleBtn.innerHTML = hamburgerIcon;

function openNav() {
	backdrop.style.visibility = "visible";
	toggleBtn.innerHTML = closeBtn;
	navList.style.transform = "translateX(0)";
}

function closeNav() {
	backdrop.style.visibility = "hidden";
	toggleBtn.innerHTML = hamburgerIcon;
	navList.style.transform = "translateX(100%)";
}

toggleBtn.addEventListener("click", () => {
	if (toggleBtn.innerHTML.toString() === hamburgerIcon.toString()) {
		openNav();
	} else {
		closeNav();
	}
});

backdrop.addEventListener("click", closeNav);

//CODE FOR FIXING THE HEADER TO THE TOP
let header = document.querySelector(".header");
let sticky = header.offsetTop;

sticky = 600;

window.onscroll = fixedToTop;

function fixedToTop() {
	if (window.pageYOffset >= sticky) {
		header.classList.add("fixToTop");
	} else {
		header.classList.remove("fixToTop");
	}
}
console.log(sticky);
