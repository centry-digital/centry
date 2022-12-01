let incorporationPopupOpen = document.getElementById("incorporation-help-popup-open");
let incorporationPopup = document.getElementById("incorporation-help-popup");
let incorporationPopupClose = document.getElementById("incorporation-help-popup-close");
incorporationPopupOpen.addEventListener("click", openIncorporationHelpPopup);
function openIncorporationHelpPopup() {
	incorporationPopup.classList.remove("hide");
}
incorporationPopupClose.addEventListener("click", closeIncorporationHelpPopup);
function closeIncorporationHelpPopup() {
	incorporationPopup.classList.add("hide");
}

lucide.createIcons({
  	attrs: {
      "stroke-width": 2.5
  	}
  });