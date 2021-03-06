const addDirectorButton = document.getElementById("add-director-button");
addDirectorButton.setAttribute("onClick", "addDirectorInputGroup()");
const directorGroup = document.getElementById("director-group");

let dirFirstName = document.querySelector('input[data-incorporation-data="director-fname"]');
let dirLastName = document.querySelector('input[data-incorporation-data="director-lname"]');
dirFirstName.addEventListener("keyup", updateDirectorLegalName);
dirLastName.addEventListener("keyup", updateDirectorLegalName);

function updateDirectorLegalName(el) {
  let parentGroup =
    el.target.parentElement.parentElement.parentElement.parentElement;
  let firstName = parentGroup.querySelector(
    'input[data-incorporation-data="director-fname"]'
  );
  let lastName = parentGroup.querySelector(
    'input[data-incorporation-data="director-lname"]'
  );
  let legalName = parentGroup.querySelector(
    'input[data-incorporation-data="director-name"]'
  );
  let fname = firstName.value;
  let lname = lastName.value;
  legalName.value = fname + " " + lname;
}

function addDirectorInputGroup() {
  //Create elements
  const directorInputGroup = document.createElement("div");
  const inputSubGroup50_1 = document.createElement("div");
  const inputFieldBlock50_1 = document.createElement("div");
  const inputFieldBlock50_2 = document.createElement("div");
  const inputSubGroup100_1 = document.createElement("div");
  const inputSubGroup100_2 = document.createElement("div");
  const inputSubGroup50_2 = document.createElement("div");
  const inputFieldBlock50_3 = document.createElement("div");
  const inputFieldBlock50_4 = document.createElement("div");
  const inputWrapperFName = document.createElement("div");
  const inputWrapperLName = document.createElement("div");
  const inputWrapperDirector = document.createElement("div");
  const directorLegalNameDescription = document.createElement("div");
  const inputWrapperEmail = document.createElement("div");
  const inputWrapperPhone = document.createElement("div");
  const inputWrapperCountry = document.createElement("div");
  const directorLabelWrapper = document.createElement("div");
  const removeDirectorButton = document.createElement("button");
  const directorFNameLabel = document.createElement("label");
  const directorLNameLabel = document.createElement("label");
  const directorNameLabel = document.createElement("label");
  const directorEmailLabel = document.createElement("label");
  const directorPhoneLabel = document.createElement("label");
  const directorCountryLabel = document.createElement("label");
  const directorFName = document.createElement("input");
  const directorLName = document.createElement("input");
  const directorName = document.createElement("input");
  const directorEmail = document.createElement("input");
  const directorPhone = document.createElement("input");
  const directorCountry = document.createElement("select");

  //Add classes
  directorInputGroup.classList.add("director-input-group-additional");
  inputSubGroup50_1.classList.add("input-subgroup-50");
  inputFieldBlock50_1.classList.add("input-field-block-50");
  inputFieldBlock50_2.classList.add("input-field-block-50");
  inputSubGroup100_1.classList.add("input-subgroup-100");
  inputSubGroup100_2.classList.add("input-subgroup-100");
  directorLabelWrapper.classList.add("director-label-wrapper");
  removeDirectorButton.classList.add("director-remove", "text-sm");
  inputSubGroup50_2.classList.add("input-subgroup-50");
  inputFieldBlock50_3.classList.add("input-field-block-50");
  inputFieldBlock50_4.classList.add("input-field-block-50");
  inputWrapperFName.classList.add("input-wrapper");
  inputWrapperLName.classList.add("input-wrapper");
  inputWrapperDirector.classList.add("input-wrapper");
  inputWrapperEmail.classList.add("input-wrapper");
  inputWrapperPhone.classList.add("input-wrapper");
  inputWrapperCountry.classList.add("input-wrapper");
  directorFNameLabel.classList.add("field-label");
  directorLNameLabel.classList.add("field-label");
  directorNameLabel.classList.add("field-label");
  directorEmailLabel.classList.add("field-label");
  directorPhoneLabel.classList.add("field-label");
  directorCountryLabel.classList.add("field-label");
  directorFName.classList.add("centry-text-field", "text-sm", "w-input");
  directorLName.classList.add("centry-text-field", "text-sm", "w-input");
  directorLegalNameDescription.classList.add("text-block-37", "text-xs");
  directorName.classList.add("centry-text-field", "text-sm", "w-input");
  directorEmail.classList.add("centry-text-field", "text-sm", "w-input");
  directorPhone.classList.add("centry-text-field", "text-sm", "w-input");
  directorCountry.classList.add("select-field", "text-sm", "w-select");

  //Set input group - Director
  directorInputGroup.setAttribute("data-incorporation-data", "director");

  // Set input field - Director FName
  directorFNameLabel.innerText = "First name / given name";
  directorFName.type = "text";
  directorFName.name = "Director-first-name";
  directorFName.setAttribute("data-name", "Director-first-name");
  directorFName.setAttribute("data-incorporation-data", "director-fname");
  directorFName.setAttribute("maxlength", "256");
  directorFName.setAttribute("required", "");
  directorFName.addEventListener("keyup", validateField);
  directorFName.addEventListener("keyup", updateDirectorLegalName);

  // Set input field - Director LName
  directorLNameLabel.innerText = "Last name / family name";
  directorLName.type = "text";
  directorLName.name = "Director-last-name";
  directorLName.setAttribute("data-name", "Director-last-name");
  directorLName.setAttribute("data-incorporation-data", "director-lname");
  directorLName.setAttribute("maxlength", "256");
  directorLName.setAttribute("required", "");
  directorLName.addEventListener("keyup", validateField);
  directorLName.addEventListener("keyup", updateDirectorLegalName);
  
  //Set input field - Director Name
  directorNameLabel.innerText = "Legal name displayed per NRIC / ID / Passport";
  removeDirectorButton.type = "button";
  removeDirectorButton.innerText = "remove";
  directorLegalNameDescription.innerText = "The name in this field will be used in all official documents for the company. Please edit this field if the automatic name capturing does not accurately reflect your legal name per your government-issued identification document.";
  directorName.type = "text";
  directorName.name = "Legal name displayed per NRIC / ID / Passport";
  directorName.setAttribute("data-name", "Director-name");
  directorName.setAttribute("data-incorporation-data", "director-name");
  directorName.setAttribute("maxlength", "256");
  directorName.setAttribute("required", "");
  directorName.addEventListener("keyup", validateField);

  //Set input field - Director Email
  directorEmailLabel.innerText = "Email address";
  directorEmail.type = "email";
  directorEmail.name = "Director-email";
  directorEmail.setAttribute("data-name", "Director-email");
  directorEmail.setAttribute("data-incorporation-data", "director-email");
  directorEmail.setAttribute("maxlength", "256");
  directorEmail.setAttribute("required", "");
  directorEmail.addEventListener("keyup", validateField);

  //Set input field - Director Phone
  directorPhoneLabel.innerText = "Phone number";
  directorPhone.type = "phone";
  directorPhone.name = "Director-phone";
  directorPhone.setAttribute("data-name", "Director-phone");
  directorPhone.setAttribute("data-incorporation-data", "director-phone");
  directorPhone.setAttribute("maxlength", "256");
  directorPhone.setAttribute("required", "");
  directorPhone.addEventListener("keyup", validateField);

  //Set input field - Director Country
  directorCountryLabel.innerText = "Country of Residence";
  directorCountry.name = "Director-country-of-residence";
  directorCountry.setAttribute("data-name", "Director-country-of-residence");
  directorCountry.setAttribute("data-incorporation-data", "director-country");
  directorCountry.setAttribute("data-select-type", "director-country");
  directorCountry.setAttribute("required", "");
  directorCountry.addEventListener("keyup", validateField);

  //Append elements to Director Input Groups
  directorInputGroup.appendChild(removeDirectorButton);
  directorInputGroup.appendChild(inputSubGroup50_1);
  directorInputGroup.appendChild(inputSubGroup100_1);
  directorInputGroup.appendChild(inputSubGroup50_2);
  directorInputGroup.appendChild(inputSubGroup100_2);

  // Director FName
  inputSubGroup50_1.appendChild(inputFieldBlock50_1);
  inputFieldBlock50_1.appendChild(directorFNameLabel);
  inputFieldBlock50_1.appendChild(inputWrapperFName);
  inputWrapperFName.appendChild(directorFName);

  // Director LName
  inputSubGroup50_1.appendChild(inputFieldBlock50_2);
  inputFieldBlock50_2.appendChild(directorLNameLabel);
  inputFieldBlock50_2.appendChild(inputWrapperLName);
  inputWrapperLName.appendChild(directorLName);
  
  //Director Name
  inputSubGroup100_1.appendChild(directorLabelWrapper);
  inputSubGroup100_1.appendChild(directorLegalNameDescription);
  directorLabelWrapper.appendChild(directorNameLabel);
  inputSubGroup100_1.appendChild(inputWrapperDirector);
  inputWrapperDirector.appendChild(directorName);

  //Director Email
  inputSubGroup50_2.appendChild(inputFieldBlock50_3);
  inputFieldBlock50_3.appendChild(directorEmailLabel);
  inputFieldBlock50_3.appendChild(inputWrapperEmail);
  inputWrapperEmail.appendChild(directorEmail);

  //Director Phone
  inputSubGroup50_2.appendChild(inputFieldBlock50_4);
  inputFieldBlock50_4.appendChild(directorPhoneLabel);
  inputFieldBlock50_4.appendChild(inputWrapperPhone);
  inputWrapperPhone.appendChild(directorPhone);

  //Director Country
  inputSubGroup100_2.appendChild(directorCountryLabel);
  inputSubGroup100_2.appendChild(inputWrapperCountry);
  inputWrapperCountry.appendChild(directorCountry);

  //Append element to DOM
  directorGroup.appendChild(directorInputGroup);
  mapDirectorCountrySelect();
  validateInput();
  updateButtons();
  removeDirectorButton.addEventListener("click", removeDirector);
}

function removeDirector(el) {
  const director = el.target.parentElement;
  director.remove();
  validateInput();
  updateButtons();
}
