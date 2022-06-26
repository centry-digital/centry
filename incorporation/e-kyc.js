let inputData = {};
let user_to_verify = {};
user_to_verify.passport = {};
user_to_verify.proof_of_address = {};
let inputFname = document.querySelector('[data-kyc="fname"]');
let inputLname = document.querySelector('[data-kyc="lname"]');
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

countryOfResidenceCountrySelect.addEventListener("change", checkCountries);
nationalityCountrySelect.addEventListener("change", checkCountries);
let inputFields = document.querySelectorAll("[data-kyc]");
for (let i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("keyup", validateField);
}

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
      inputFname.value = inputData.first_name;
      inputLname.value = inputData.last_name;
      inputName.value = inputData.legal_name;
      inputEmail.value = inputData.email;
      inputPhone.value = inputData.phone;
      countryOfResidenceCountrySelect.value = inputData.country_of_residence;
    } else {
      console.error("There is an error retrieving the user to verify");
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
});

widget_proof_of_address.onUploadComplete((fileInfo) => {
  // get a CDN URL from the file info
  document
    .querySelector(".uploadcare--widget__file-size")
    .classList.add("hide");
  proof_of_address_file_url = fileInfo.cdnUrl;
  proof_of_address_file_name = fileInfo.name;
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
    } else {
      passportGroup.classList.add("hide");
      verifyBtn.innerText = "Begin verification";
    }
    proofOfAddressGroup.classList.remove("hide");
  } catch (error) {
    console.error(error);
  }
}

// construct payload
function getSummary() {
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
    (nationality != "Malaysia" && user_to_verify.passport.file_url != "")
  ) {
    flag_7 = true;
  } else if (
    nationality != "Malaysia" &&
    user_to_verify.passport.file_url == ""
  ) {
    flag_7 = false;
  }
  let flag_8 = false;
  if (
    nationality == "Malaysia" ||
    (nationality != "Malaysia" &&
      user_to_verify.proof_of_address.file_url != "")
  ) {
    flag_8 = true;
  } else if (
    nationality != "Malaysia" &&
    user_to_verify.proof_of_address.file_url == ""
  ) {
    flag_8 = false;
  }

  let inputsValidity =
    flag_1 &&
    flag_2 &&
    flag_3 &&
    flag_4 &&
    flag_5 &&
    flag_6 &&
    flag_7 &&
    flag_8;

  if (inputsValidity) {
  }
}
