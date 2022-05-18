let retrieveForm = document.getElementById("wf-form-Incorporation-Retrieval");
let retrieveBtn = document.getElementById("inc-retrieve-data");
let uniqueCodeInput = document.getElementById("unique-code-input");
let regexUniqueCode = /^[a-zA-Z0-9]{6}$/;
uniqueCodeInput.addEventListener("keyup", validateCapitalise)
retrieveBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>';
retrieveBtn.style.cursor = "not-allowed";
retrieveForm.addEventListener("keypress", function(event) {
	if (event.key == "Enter") {
		event.preventDefault();
		retrieveBtn.click();
	}
})

function validateCapitalise() {
  let code = uniqueCodeInput.value;
  uniqueCodeInput.value = code.toUpperCase();
  
  if (regexUniqueCode.test(code)) {
  	uniqueCodeInput.classList.remove("invalid-field");
    retrieveBtn.addEventListener("click", getIncorporationData);
    retrieveBtn.classList.remove("disabled");
    retrieveBtn.style.cursor = "pointer";
  } else {
  	uniqueCodeInput.classList.add("invalid-field");
  	retrieveBtn.removeEventListener("click", getIncorporationData);
    retrieveBtn.classList.add("disabled");
    retrieveBtn.style.cursor = "not-allowed";
  }
}

async function getIncorporationData() {
	let uniqueCodeInput = document.getElementById("unique-code-input").value;
  try {
    let response = await fetch(`https://api.centry.digital/api:incorporation/incorporation/${uniqueCodeInput}`, {
      headers: {
        "Content-Type": "application/json",
      }
    });
    let data = await response.json()
    if (response.ok) {
      document.getElementById("inc-invalid-code").classList.add("hide");
      sessionStorage.setItem("incorporation-data", JSON.stringify(data));
	    window.location.href = "https://centry-digital.webflow.io/incorporation/edit";
		} else {
    	document.getElementById("inc-invalid-code").classList.remove("hide");
    }
  } catch (error) {
    console.error("Unique code not found");
  } 
}
