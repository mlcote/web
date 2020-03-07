"use strict";
// ====== Menu ====== 
const menus = document.querySelectorAll(".has-submenu");
menus.forEach(menu => {

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
	menus.forEach(submenu => {
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

