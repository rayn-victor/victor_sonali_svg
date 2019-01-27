// What do we want to work with
(() => {
	var icon = document.querySelector('#facebook1');
	var allTheIcons = document.querySelectorAll('.icon');
	function logIcon() {
		console.log(this.id);
	}
	icon.addEventListener("click", logIcon);
	allTheIcons.forEach(currenticon => currenticon.addEventListener('click', logIcon));
})();