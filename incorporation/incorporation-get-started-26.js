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

function getNextTab() {
  retrievedData = JSON.parse(sessionStorage.getItem("incorporation-data"));
  document.getElementById("w-tabs-0-data-w-tab-1").click();
  uniqueCodeBox.innerText = uniqueCodeInput.value;

  // Style statuses
  let icon0 = document.getElementById("get-started-icon-0");
  let icon1 = document.getElementById("get-started-icon-1");
  let icon2 = document.getElementById("get-started-icon-2");
  let icon3 = document.getElementById("get-started-icon-3");
  let indicator0 = document.getElementById("get-started-status-indicator-0");
  let indicator1 = document.getElementById("get-started-status-indicator-1");
  let indicator2 = document.getElementById("get-started-status-indicator-2");
  let indicator3 = document.getElementById("get-started-status-indicator-3");
  let status0 = document.getElementById("get-started-status-0");
  let status1 = document.getElementById("get-started-status-1");
  let status2 = document.getElementById("get-started-status-2");
  let status3 = document.getElementById("get-started-status-3");
  let header0 = document.getElementById("get-started-header-0");

  if (retrievedData.status == "Draft") {
    continueIncorporatingBtn.classList.remove("hide");
    status0.innerText = "In progress";
  } else if (retrievedData.status == "Submitted") {
    continueIncorporatingBtn.classList.remove("hide");
    continueIncorporatingBtn.innerText = "Review & pay";
    status0.innerText = "Pending payment";
    header0.innerText = "Pending payment";
  } else if (retrievedData.status == "Paid") {
    continueIncorporatingBtn.classList.add("hide");
    icon0.classList.remove("in-progress");
    icon0.classList.add("complete");
    icon1.classList.add("in-progress");
    indicator0.classList.add("complete");
    indicator1.classList.add("in-progress");
    status0.classList.add("complete");
    status0.innerText = "Complete";
    status1.classList.add("in-progress");
    status1.innerText = "In progress";
  } else if (retrievedData.status == "KYC Complete") {
    continueIncorporatingBtn.classList.add("hide");
    icon0.classList.remove("in-progress");
    icon0.classList.add("complete");
    icon1.classList.add("complete");
    icon2.classList.add("in-progress");
    indicator0.classList.add("complete");
    indicator1.classList.add("complete");
    indicator2.classList.add("in-progress");
    status0.classList.add("complete");
    status1.classList.add("complete");
    status2.classList.add("in-progress");
  } else if (retrievedData.status == "Incorporation") {
    continueIncorporatingBtn.classList.add("hide");
    icon0.classList.remove("in-progress");
    icon0.classList.add("complete");
    icon1.classList.add("complete");
    icon2.classList.add("complete");
    icon3.classList.add("in-progress");
    indicator0.classList.add("complete");
    indicator1.classList.add("complete");
    indicator2.classList.add("complete");
    indicator3.classList.add("in-progress");
    status0.classList.add("complete");
    status1.classList.add("complete");
    status2.classList.add("complete");
    status3.classList.add("in-progress");
  }
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
  window.location.href = "https://centry-digital.webflow.io/incorporation/edit";
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
    let data = await response.json();
    if (response.ok) {
      document.getElementById("inc-invalid-code").classList.add("hide");
      sessionStorage.setItem("incorporation-data", JSON.stringify(data));
      getNextTab();
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
