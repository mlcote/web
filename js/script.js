// ====== Tooltips ====== 
const tooltips = document.querySelectorAll(".info");

// const toggleTooltip = (tooltip) => {
// 	tooltip.querySelector(":scope > .tooltip").classList.toggle("tooltip-hidden");
// 	tooltip.querySelector(":scope > .tooltip-pointer").classList.toggle("tooltip-hidden");	
// 	console.log(tooltip);
// }

// to-do: Try to see if you can add a condition to fix the tooltips being out of bounds if too close to an edge
tooltips.forEach(tooltip => {
	tooltip.addEventListener("click", function () {
		tooltip.querySelector(":scope > .tooltip").classList.toggle("tooltip-hidden");
		tooltip.querySelector(":scope > .tooltip-pointer").classList.toggle("tooltip-hidden");
	}
	);
});

const menus = document.querySelectorAll(".has-submenu");
menus.forEach(menu => {
	menu.addEventListener("click", function () {
		clearMenuSelection(menu);
		menu.nextElementSibling.classList.toggle("is-open");
		menu.blur();
	}
	);
	menu.addEventListener("keypress", function (e) {
		if (e.key == "Enter") {
			clearMenuSelection(menu);
			menu.nextElementSibling.classList.toggle("is-open");
		}
	}
	);

});

const clearMenuSelection = (menu) => {
	menus.forEach(submenu => {
		if(submenu != menu) {
		submenu.nextElementSibling.classList.remove("is-open");
		}
	});
}