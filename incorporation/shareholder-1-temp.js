//switching between individual and corporate shareholder type
const radioButtons = document.querySelectorAll('input[name="Shareholder-Type"]');
const radioDivs = document.querySelectorAll(".w-radio");
const individualShareholderGroup = document.querySelector('div[data-shareholder-group="individual"]');
const corporateShareholderGroup = document.querySelector('div[data-shareholder-group="corporate"]');

for (const radioDiv of radioDivs) {
	radioDiv.style.cursor = "pointer";
  radioDiv.setAttribute("onclick", "selectRadio()");	
}

function selectRadio() {
  for (let i = 0; i < radioButtons.length; i++) {
    let shareholderType;
    if (radioButtons[i].checked) {
    	radioDivs[i].classList.add("active");
      shareholderType = radioDivs[i].getAttribute("data-shareholder-type");
      if (shareholderType == "individual") {
      	individualShareholderGroup.classList.remove("hide")
        corporateShareholderGroup.classList.add("hide")
      } else if (shareholderType == "corporate") {
      	corporateShareholderGroup.classList.remove("hide")
        individualShareholderGroup.classList.add("hide")
      }
    } else {
    	radioDivs[i].classList.remove("active");
    }
  }
}

//calculate number of shares
function calculateShares() {
  const sharesPercent = document.querySelectorAll('input[data-shareholding="percent"]');
  const sharesNumber = document.querySelectorAll('span[data-shareholding="number"]');
  for (let i = 0; i < sharesPercent.length; i++) {
    sharesPercent[i].addEventListener("keyup", function() {
      percentage = sharesPercent[i].value;
      percentToNumber = Math.round(percentage);
      sharesNumber[i].innerText = percentToNumber;
      }
    );
  }
}
calculateShares();