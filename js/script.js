// ====== Tooltips ====== 
const tooltips = document.querySelectorAll(".info");

const toggleTooltip = (tooltip) => {
	tooltip.querySelector(":scope > .tooltip").classList.toggle("tooltip-hidden");
	tooltip.querySelector(":scope > .tooltip-pointer").classList.toggle("tooltip-hidden");	
	console.log(tooltip);
}

tooltips.forEach(tooltip => {
	tooltip.addEventListener("click", function ()	{
			tooltip.querySelector(":scope > .tooltip").classList.toggle("tooltip-hidden");
			tooltip.querySelector(":scope > .tooltip-pointer").classList.toggle("tooltip-hidden");	
		}
	);
});


