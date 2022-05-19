let retrieveForm = document.getElementById("wf-form-Incorporation-Retrieval");
let retrieveBtn = document.getElementById("inc-retrieve-data");
let continueIncorporatingBtn = document.getElementById(
  "inc-continue-incorporating"
);
let uniqueCodeInput = document.getElementById("unique-code-input");
let uniqueCodeBox = document.querySelector(
  '[data-incorporation-data="unique-code-box"]'
);
let regexUniqueCode = /^[a-zA-Z0-9]{6}$/;
let retrievedData;

uniqueCodeInput.addEventListener("keyup", validateCapitalise);
continueIncorporatingBtn.addEventListener("click", continueIncorporating);
retrieveBtn.innerHTML =
  '<svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>';
retrieveBtn.style.cursor = "not-allowed";
retrieveForm.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    retrieveBtn.click();
  }
});

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
  } else if (retrievedData.status == "Submitted for Incorporation") {
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

function validateCapitalise() {
  let uniqueCode = uniqueCodeInput.value;
  uniqueCodeInput.value = uniqueCode.toUpperCase();

  if (regexUniqueCode.test(uniqueCode)) {
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

function continueIncorporating() {
  window.location.href = "https://centry-digital.webflow.io/incorporation/edit";
}

async function getIncorporationData() {
  let uniqueCode = uniqueCodeInput.value;
  try {
    let response = await fetch(
      `https://api.centry.digital/api:incorporation/incorporation/${uniqueCode}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.json();
    if (response.ok) {
      document.getElementById("inc-invalid-code").classList.add("hide");
      sessionStorage.setItem("incorporation-data", JSON.stringify(data));
      console.log(sessionStorage);
      // window.location.href = "https://centry-digital.webflow.io/incorporation/edit";
      getNextTab();
    } else {
      document.getElementById("inc-invalid-code").classList.remove("hide");
    }
  } catch (error) {
    console.error("Unique code not found", error);
  }
}
