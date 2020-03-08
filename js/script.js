"use strict";

// Mobile menu toggle
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
mobileMenuToggle.addEventListener("click", function () {
	document.querySelector("#menu").classList.toggle("open-menu");
	mobileMenuToggle.classList.toggle("toggled");
})


// ====== Navigation submenus ====== 
const submenus = document.querySelectorAll(".has-submenu");
submenus.forEach(menu => {

	menu.addEventListener("click", function () {
		clearMenuSelection(menu);
		menu.nextElementSibling.classList.toggle("is-open");
		menu.parentElement.classList.toggle("is-open");
		menu.blur();
	}
	);
	menu.addEventListener("keypress", function (e) {
		if (e.key == "Enter") {
			clearMenuSelection(menu);
			menu.nextElementSibling.classList.toggle("is-open");
			menu.parentElement.classList.toggle("is-open");
		}
	}
	);

});

// Closes opened submenus
const clearMenuSelection = (menu) => {
	submenus.forEach(submenu => {
		if (submenu != menu) {
			submenu.nextElementSibling.classList.remove("is-open");
			submenu.parentElement.classList.remove("is-open");
		}
	});
}

// Closes opened menu when clicking in main container
// Didn't do on the body since it messed with the toggle
document.querySelector(".main-container").addEventListener("click", function () { clearMenuSelection(menu); }, true);

// ====== Tooltips ====== 
const tooltips = document.querySelectorAll(".info");

tooltips.forEach(tooltip => {
	tooltip.addEventListener("click", function () {
		tooltip.querySelector(":scope > .tooltip").classList.toggle("tooltip-hidden");
		tooltip.querySelector(":scope > .tooltip-pointer").classList.toggle("tooltip-hidden");
	}
	);
});

