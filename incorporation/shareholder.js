const radioButtons = document.querySelectorAll('input[name="Shareholder-Type"]');
const radioDivs = document.querySelectorAll(".w-radio");
for (const radioDiv of radioDivs) {
	radioDiv.style.cursor = "pointer";
    radioDiv.setAttribute("onclick", "selectRadio()");	
}
function selectRadio() {
	console.log("eventListener triggered")
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
    	radioDivs[i].classList.add("active");
    } else {
    	radioDivs[i].classList.remove("active");
    }
  }
}