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
      `https://api.centry.digital/api:ekyc/verify/${verification_uuid}`
    );
    let data = await response.json();
    if (response.ok) {
      if (data.verification_data._user.verified == "false") {
        populateData(data);
      } else if (data.verification_data._user.verified == "true") {
        verifyStatus.innerText = "Your profile has been verified";
        verifyStatusText.innerText =
          "Our Client Success Team will reach out to you on the next steps.";
        iconVerified.classList.remove("hide");
        loadingScreen.classList.add("hide");
        verifiedContainer.classList.remove("hide");
      } else if (data.verification_data._user.verified == "submitted") {
        verifyStatus.innerText = "Your verification has been submitted";
        verifyStatusText.innerText =
          "Your profile is currently under review. You will be notified once the review is complete.";
        iconVerified.classList.remove("hide");
        loadingScreen.classList.add("hide");
        verifiedContainer.classList.remove("hide");
      } else if (data.verification_data._user.verified == "pending") {
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

function populateData(retrieved_data) {
  sessionStorage.setItem("token", retrieved_data.token);
  let verificationData = retrieved_data.verification_data;
  let url = `https://tally.so/r/nrjdQX?transparentBackground=1&h_first_name=${encodeURIComponent(
    verificationData._user.first_name
  )}&h_last_name=${encodeURIComponent(
    verificationData._user.last_name
  )}&h_legal_name=${encodeURIComponent(
    verificationData._user.legal_name
  )}&h_email=${encodeURIComponent(
    verificationData._user.email
  )}&h_phone=${encodeURIComponent(
    verificationData._user.phone
  )}&h_role=${encodeURIComponent(
    verificationData._user.role
  )}&h_country_of_residence=${encodeURIComponent(
    verificationData._user.country_of_residence
  )}&h_verification_uuid=${encodeURIComponent(
    verificationData.uuid
  )}&h_token=${encodeURIComponent(retrieved_data.token)}`;
  formContainer.innerHTML = `<iframe
    src="${url}"
    width="100%"
    height="100%"
    frameborder="0"
    marginheight="0"
    marginwidth="0"
    title="e-KYC Initiation"
  ></iframe>`;
  loadingScreen.classList.add("hide");
  formContainer.classList.remove("hide");
}
