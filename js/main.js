// What do we want to work with
(() => {
	var icon = document.querySelector('#facebook');
	var allTheIcons = document.querySelectorAll('.icon');
	function logIcon() {
		console.log("This is the icon for", this.id, "with the ID=", this.alt, "from the icon pack Retro Pack") ;
	}
	icon.addEventListener("click", logIcon);

	allTheIcons.forEach(currenticon => currenticon.addEventListener('click', logIcon));
	var allTheIcons = document.querySelectorAll('.icon2');
	function logIcon() {
		console.log("This is the icon for", this.id, "with the ID=", this.alt, "from the icon pack Minimalist Black");
	}
	icon.addEventListener("click", logIcon);
	allTheIcons.forEach(currenticon => currenticon.addEventListener('click', logIcon));
})();