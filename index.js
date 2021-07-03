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
