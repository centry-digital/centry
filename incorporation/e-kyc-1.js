let inputData = {};
let user_to_verify = {};
user_to_verify.passport = {};
user_to_verify.proof_of_address = {};
let inputsValidity = false;
let manualVerification = false;
let uuid, business_uuid, director_uuid, ind_shareholder_uuid;
let inputFname = document.querySelector('[data-kyc="fname"]');
inputFname.addEventListener("keyup", captureLegalName);
let inputLname = document.querySelector('[data-kyc="lname"]');
inputLname.addEventListener("keyup", captureLegalName);
let inputName = document.querySelector('[data-kyc="name"]');
let inputDob = document.querySelector('[data-kyc="dob"]');
let inputEmail = document.querySelector('[data-kyc="email"]');
let inputPhone = document.querySelector('[data-kyc="phone"]');
let nationality = nationalityCountrySelect.value;
let nationalityCode =
  nationalityCountrySelect.options[
    nationalityCountrySelect.selectedIndex
  ].getAttribute("code");
let cor = countryOfResidenceCountrySelect.value;
let docType = nationality == "Malaysia" ? "id_card" : "passport";
let passport_file_url = "";
let passport_file_name = "";
let proof_of_address_file_url = "";
let proof_of_address_file_name = "";
let proofOfAddressGroup = document.querySelector(
  '[data-kyc="proof-of-address-group"]'
);
let passportGroup = document.querySelector('[data-kyc="passport-group"]');
let verifyBtn = document.querySelector('[data-kyc="button"]');

countryOfResidenceCountrySelect.addEventListener("change", checkCountries);
nationalityCountrySelect.addEventListener("change", checkCountries);

let inputFields = document.querySelectorAll("[data-kyc]");
for (let i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("keyup", updateButton);
  inputFields[i].addEventListener("keyup", validateField);
}
updateButton();

// load data
const query = new URLSearchParams(window.location.search);
let tokenValue;
if (query.has("token")) {
  tokenValue = query.get("token");
  retrieveUser(tokenValue);
}

async function retrieveUser(token) {
  try {
    let response = await fetch(
      "https://api.centry.digital/api:ekyc/retrieve-user",
      {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    let data = await response.json();
    if (response.ok) {
      inputData = data;
      if (inputData.verified == false) {
        uuid = inputData.response.uuid;
        inputFname.value = inputData.response.first_name;
        inputLname.value = inputData.response.last_name;
        inputName.value = inputData.response.legal_name;
        inputEmail.value = inputData.response.email;
        inputPhone.value = inputData.response.phone;
        countryOfResidenceCountrySelect.value =
          inputData.response.country_of_residence;
        business_uuid = inputData.business_uuid;
        director_uuid = inputData.director_uuid;
        ind_shareholder_uuid = inputData.ind_shareholder_uuid;
      } else if (inputData.verified == "pending") {
        retrieveVerificationSession(
          inputData.response.uuid,
          inputData.business_uuid
        );
      }
    } else {
      console.error("There is an error retrieving the user to verify");
    }
  } catch (error) {
    console.error(error);
  }
}

// retrieve Verification session for 'pending' users
async function retrieveVerificationSession(user_uuid, business_uuid) {
  let bodyObject = {
    user_uuid: user_uuid,
    business_uuid: business_uuid,
  };
  try {
    let response = await fetch(
      "https://api.centry.digital/api:ekyc/retrieve-verification-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyObject),
      }
    );
    let data = await response.json();
    let verificationData = data;
    if (response.ok) {
      let verificationUrl = verificationData.veriff.session_url;
      windows.location.replace(verificationUrl);
    } else {
      console.error("There is an error retrieving the user's verification session'");
    }
  } catch (error) {
    console.error(error);
  }
}

// get an array of widget references
const widgets = uploadcare.initialize();

// update each widget button text with the data-btn-text attribute's value
widgets.forEach((widget) => {
  widget.inputElement.nextSibling.querySelector(
    ".uploadcare--widget__button_type_open"
  ).innerHTML = widget.inputElement.getAttribute("data-btn-text");
});

// get a widget reference
const widget_passport = uploadcare.Widget("[data-doc-type=passport]");
const widget_proof_of_address = uploadcare.Widget(
  "[data-doc-type=proof-of-address]"
);

// listen to the "upload completed" event
widget_passport.onUploadComplete((fileInfo) => {
  // get a CDN URL from the file info
  document
    .querySelector(".uploadcare--widget__file-size")
    .classList.add("hide");
  passport_file_url = fileInfo.cdnUrl;
  passport_file_name = fileInfo.name;
  updateButton();
});

widget_proof_of_address.onUploadComplete((fileInfo) => {
  // get a CDN URL from the file info
  document
    .querySelector(".uploadcare--widget__file-size")
    .classList.add("hide");
  proof_of_address_file_url = fileInfo.cdnUrl;
  proof_of_address_file_name = fileInfo.name;
  updateButton();
});

function checkCountries() {
  nationality = nationalityCountrySelect.value;
  nationalityCode =
    nationalityCountrySelect.options[
      nationalityCountrySelect.selectedIndex
    ].getAttribute("code");
  cor = countryOfResidenceCountrySelect.value;

  if (nationality == "Malaysia") {
    proofOfAddressGroup.classList.add("hide");
    verifyBtn.innerText = "Begin verification";
    docType = "id_card";
  } else {
    checkVerifiable();
    docType = "passport";
  }
}

async function checkVerifiable() {
  try {
    let response = await fetch(
      `https://api.centry.digital/api:ekyc/verification-methods/${nationality}`
    );
    let data = await response.json();
    if (
      data == "manual_verification" ||
      data.country.document[0].passport == false
    ) {
      passportGroup.classList.remove("hide");
      verifyBtn.innerText = "Submit for manual verification";
      manualVerification = true;
      updateButton();
    } else {
      passportGroup.classList.add("hide");
      verifyBtn.innerText = "Begin verification";
      manualVerification = false;
      updateButton();
    }
    proofOfAddressGroup.classList.remove("hide");
  } catch (error) {
    console.error(error);
  }
}

// parse legal name from first name and last name
function captureLegalName() {
  inputName.value = inputFname.value + " " + inputLname.value;
}

// construct payload
function getSummary() {
  user_to_verify.uuid = uuid;
  user_to_verify.business_uuid = business_uuid;
  user_to_verify.director_uuid = director_uuid;
  user_to_verify.ind_shareholder_uuid = ind_shareholder_uuid;
  user_to_verify.manual_verification = manualVerification;
  user_to_verify.first_name = inputFname.value;
  user_to_verify.last_name = inputLname.value;
  user_to_verify.legal_name = inputName.value;
  user_to_verify.dob = inputDob.value;
  user_to_verify.email = inputEmail.value;
  user_to_verify.phone = inputPhone.value;
  user_to_verify.nationality = nationality;
  user_to_verify.nationality_code = nationalityCode;
  user_to_verify.country_of_residence = cor;
  user_to_verify.doc_type = docType;
  user_to_verify.passport.file_url = passport_file_url;
  user_to_verify.passport.file_name = passport_file_name;
  user_to_verify.proof_of_address.file_url = proof_of_address_file_url;
  user_to_verify.proof_of_address.file_name = proof_of_address_file_name;
}

// validate input field
let regexEmail = /\w+((\.?[^ ]\w+)+)?@\w+(\.\w+)+/;
let regexPhone =
  /\+?([0-9]+)?[ ]?\(?\+?([0-9]+)?\)?[ ]?([0-9]{9,})[ ]?([0-9]+)?[ ]?([0-9]+)?[ ]?([0-9]+)?/;

function validateField(e) {
  validateInputs();
  if (
    e.target.getAttribute("data-kyc") == "email" &&
    !regexEmail.test(e.target.value)
  ) {
    e.target.classList.add("invalid-field");
  } else if (
    e.target.getAttribute("data-kyc") == "phone" &&
    !regexPhone.test(e.target.value)
  ) {
    e.target.classList.add("invalid-field");
  } else if (e.target.value == "") {
    e.target.classList.add("invalid-field");
  } else {
    e.target.classList.remove("invalid-field");
  }
}

// validate inputs
function validateInputs() {
  getSummary();
  let flag_1 = user_to_verify.first_name ? true : false;
  let flag_2 = user_to_verify.last_name ? true : false;
  let flag_3 = user_to_verify.legal_name ? true : false;
  let flag_4 = user_to_verify.dob ? true : false;
  let flag_5 = user_to_verify.email ? true : false;
  let flag_6 = user_to_verify.phone ? true : false;
  let flag_7 = false;
  if (
    nationality == "Malaysia" ||
    (nationality != "Malaysia" &&
      manualVerification == true &&
      user_to_verify.passport.file_url != "" &&
      user_to_verify.proof_of_address.file_url != "") ||
    (nationality != "Malaysia" &&
      manualVerification == false &&
      user_to_verify.proof_of_address.file_url != "")
  ) {
    flag_7 = true;
  }

  inputsValidity =
    flag_1 && flag_2 && flag_3 && flag_4 && flag_5 && flag_6 && flag_7;
}

function updateButton() {
  validateInputs();
  if (inputsValidity) {
    verifyBtn.addEventListener("click", submitVerification);
    verifyBtn.classList.remove("button-2-disabled");
    verifyBtn.classList.add("button-2");
    verifyBtn.style.cursor = "pointer";
  } else {
    verifyBtn.removeEventListener("click", submitVerification);
    verifyBtn.classList.remove("button-2");
    verifyBtn.classList.add("button-2-disabled");
    verifyBtn.style.cursor = "not-allowed";
  }
}

async function submitVerification() {
  // retrieveBtn.classList.add("hide");
  // retrieveLoadingBtn.classList.remove("hide");
  try {
    let response = await fetch("https://api.centry.digital/api:ekyc/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user_to_verify),
    });
    let data = await response.json();
    if (response.ok) {
      if (manualVerification) {
      } else {
        let verification_url = data.veriff.session_url;
        window.location.replace(verification_url);
      }
    } else {
      console.log(response);
    }
  } catch (error) {
    console.error("Unique code not found", error);
  }
}
