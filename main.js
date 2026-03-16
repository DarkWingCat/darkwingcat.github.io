import "./subpages/components/wx-header/wx-header.js";
import "./subpages/components/wx-swf/wx-swf.js";
import "./subpages/components/wx-nav/wx-nav.js";
import "./subpages/components/wx-footer/wx-footer.js";
import "./ruffle/ruffle.js";

window.addEventListener("DOMContentLoaded", () => {

});

window.revealAllHidden = () => {
	var hiddenElements = document.getElementsByClassName("hidden");
	for(var i=0; i<hiddenElements.length; i++)
		{
			hiddenElements[i].style.display = "block";
		}
}

window.doNotActivate = () => {
	console.log("You really need to stop.");
  var superHidden = document.getElementById("superHidden");
	superHidden.style.display = "block";
};

window.onNavigation = (address) => {
  window.location.assign(address + ".html");
}