let retrieveForm = document.getElementById("wf-form-Incorporation-Retrieval");
let retrieveEmail = document.getElementById("retrieve-email");
let retrieveEmailFlag = false;
let uniqueCodeInput = document.getElementById("unique-code-input");
let uniqueCodeFlag = false;
let retrieveBtn = document.getElementById("inc-retrieve-data");
let retrieveLoadingBtn = document.getElementById("inc-retrieve-data-loading");
let continueIncorporatingBtn = document.getElementById("inc-continue-incorporating");
let uniqueCodeBox = document.querySelector('[data-incorporation-data="unique-code-box"]');
let regexEmail = /\w+((\.?[^ ]\w+)+)?@\w+(\.\w+)+/;
let regexUniqueCode = /^[a-zA-Z0-9]{6}$/;
let retrievedData;
let backToGetStartedBtn = document.getElementById("back-get-started");

retrieveEmail.addEventListener("keyup", validateEmail);
uniqueCodeInput.addEventListener("keyup", validateCapitaliseCode);
continueIncorporatingBtn.addEventListener("click", continueIncorporating);
retrieveBtn.style.cursor = "not-allowed";
retrieveForm.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    retrieveBtn.click();
  }
});
backToGetStartedBtn.style.cursor = "pointer";
backToGetStartedBtn.addEventListener("click", backToGetStarted);

const query = new URLSearchParams(window.location.search);
if (query.has("unid") && query.has("email")) {
  let emailValue = query.get("email");
  let unidValue = query.get("unid");
  retrieveEmail.value = emailValue;
  uniqueCodeInput.value = unidValue;
  validateCapitaliseCode();
  validateEmail();
  retrieveBtn.click();
};


function backToGetStarted() {
  retrieveLoadingBtn.classList.add("hide");
  retrieveBtn.classList.remove("hide");
  document.getElementById("w-tabs-0-data-w-tab-0").click();
}

function validateCapitaliseCode() {
  let uniqueCode = uniqueCodeInput.value;
  uniqueCodeInput.value = uniqueCode.toUpperCase();

  if (regexUniqueCode.test(uniqueCode)) {
    uniqueCodeInput.classList.remove("invalid-field");
    uniqueCodeFlag = true;
  } else {
    uniqueCodeInput.classList.add("invalid-field");
    uniqueCodeFlag = false;
  }
  validateInputs();
}

function validateEmail() {
  let email = retrieveEmail.value;
  
  if (regexEmail.test(email)) {
    retrieveEmail.classList.remove("invalid-field");
    retrieveEmailFlag = true;
  } else {
    retrieveEmail.classList.add("invalid-field");
    retrieveEmailFlag = false;
  }
  validateInputs();
}

function validateInputs() {
  if (retrieveEmailFlag && uniqueCodeFlag) {
    retrieveBtn.addEventListener("click", getIncorporationData);
    retrieveBtn.classList.remove("disabled");
    retrieveBtn.style.cursor = "pointer";
  } else {
    retrieveBtn.removeEventListener("click", getIncorporationData);
    retrieveBtn.classList.add("disabled");
    retrieveBtn.style.cursor = "not-allowed";
  }
}

function continueIncorporating() {
  window.location.href = "http://" + window.location.hostname + "/incorporation/edit";
}

async function getIncorporationData() {
  retrieveBtn.classList.add("hide");
  retrieveLoadingBtn.classList.remove("hide");
  let retrieveEmailValue = retrieveEmail.value;
  let uniqueCode = uniqueCodeInput.value;
  let retrievalObject = { email: retrieveEmailValue }
  try {
    let response = await fetch(`https://api.centry.digital/api:incorporation/incorporation/${uniqueCode}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(retrievalObject),
      }
    );
    // let data = await response.json();
    if (response.ok) {
      // document.getElementById("inc-invalid-code").classList.add("hide");
      // sessionStorage.setItem("incorporation-data", JSON.stringify(data));
      // getNextTab();
      let encodedEmail = encodeURIComponent(retrieveEmailValue);
      window.location.href = `https://${window.location.hostname}/incorporation/dashboard?session=resume&email=${encodedEmail}&unid=${uniqueCode}`
    } else {
      document.getElementById("inc-invalid-code").classList.remove("hide");
      retrieveBtn.classList.remove("hide");
      retrieveLoadingBtn.classList.add("hide");
    }
  } catch (error) {
    document.getElementById("inc-invalid-code").classList.remove("hide");
    retrieveBtn.classList.remove("hide");
    retrieveLoadingBtn.classList.add("hide");
    console.error("Unique code not found", error);
  }
}
