let verification_uuid;
let formContainer = document.getElementById("form-container");
let loadingScreen = document.getElementById("loading-screen");
let verifiedContainer = document.getElementById("verified-container");
let iconVerified = document.getElementById("verified-icon");
let iconResume = document.getElementById("resume-icon");
let verifyStatus = document.getElementById("verify-status");
let verifyStatusText = document.getElementById("verify-status-text");
let verifyButton = document.getElementById("verify-button");
let verifyButtonContainer = document.getElementById("verify-button-container");
const query = new URLSearchParams(window.location.search);

if (query.has("verification")) {
  verification_uuid = query.get("verification");
  retrieveVerificationSubject();
}

async function retrieveVerificationSubject() {
  try {
    let response = await fetch(
      `https://api.centry.digital/api:ekyc/verify/v2/${verification_uuid}`
    );
    let data = await response.json();
    if (response.ok) {
      if (data.status == "false") {
        //populateData(data);
        window.location.href = data.url;
      } else if (data.status == "true") {
        verifyStatus.innerText = "Your profile has been verified";
        verifyStatusText.innerText =
          "Our Client Success Team will reach out to you on the next steps.";
        iconVerified.classList.remove("hide");
        loadingScreen.classList.add("hide");
        verifiedContainer.classList.remove("hide");
      } else if (data.status == "submitted") {
        verifyStatus.innerText = "Your verification has been submitted";
        verifyStatusText.innerText =
          "Your profile is currently under review. You will be notified once the review is complete.";
        iconVerified.classList.remove("hide");
        loadingScreen.classList.add("hide");
        verifiedContainer.classList.remove("hide");
      } else if (data.status == "pending") {
        verifyStatus.innerText = "Please complete your verification";
        verifyStatusText.innerText =
          "Click on the button below to resume your verification session.";
        let resumeUrl = data.session_url;
        verifyButton.addEventListener("click", function () {
          window.location.href = resumeUrl;
        });
        verifyButtonContainer.classList.remove("hide");
        iconResume.classList.remove("hide");
        loadingScreen.classList.add("hide");
        verifiedContainer.classList.remove("hide");
      }
    }
  } catch (error) {
    console.error(error);
  }
}
