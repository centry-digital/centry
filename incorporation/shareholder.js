//add shareholder
const addShareholderButton = document.getElementById("add-shareholder-button");
addShareholderButton.setAttribute("onClick", "addShareholderInputGroup()");
const shareholderGroup = document.getElementById("shareholder-group");

let shareholderFirstName_Ind = document.querySelector(
  'input[data-incorporation-data="individual-shareholder-fname"]'
);
let shareholderLastName_Ind = document.querySelector(
  'input[data-incorporation-data="individual-shareholder-lname"]'
);
let shareholderLegalName_Ind = document.querySelector(
  'input[data-incorporation-data="individual-shareholder-name"]'
);
let repFirstName_Corp = document.querySelector(
  'input[data-incorporation-data="corporate-representative-fname"]'
);
let repLastName_Corp = document.querySelector(
  'input[data-incorporation-data="corporate-representative-lname"]'
);
let repLegalName_Corp = document.querySelector(
  'input[data-incorporation-data="corporate-representative-name"]'
);

let shFirstNameInd = document.querySelector(
  'input[data-incorporation-data="individual-shareholder-fname"]'
);
let shLastNameInd = document.querySelector(
  'input[data-incorporation-data="individual-shareholder-lname"]'
);
shFirstNameInd.addEventListener("keyup", updateIndShareholderLegalName);
shLastNameInd.addEventListener("keyup", updateIndShareholderLegalName);

let repFirstName = document.querySelector(
  'input[data-incorporation-data="corporate-representative-fname"]'
);
let repLastName = document.querySelector(
  'input[data-incorporation-data="corporate-representative-lname"]'
);
repFirstName.addEventListener("keyup", updateRepLegalName);
repLastName.addEventListener("keyup", updateRepLegalName);

function updateIndShareholderLegalName(el) {
  let parentGroup =
    el.target.parentElement.parentElement.parentElement.parentElement;
  let firstName = parentGroup.querySelector(
    'input[data-incorporation-data="individual-shareholder-fname"]'
  );
  let lastName = parentGroup.querySelector(
    'input[data-incorporation-data="individual-shareholder-lname"]'
  );
  let legalName = parentGroup.querySelector(
    'input[data-incorporation-data="individual-shareholder-name"]'
  );
  legalName.value = firstName.value + " " + lastName.value;
}

function updateRepLegalName(el) {
  let parentGroup =
    el.target.parentElement.parentElement.parentElement.parentElement;
  let firstName = parentGroup.querySelector(
    'input[data-incorporation-data="corporate-representative-fname"]'
  );
  let lastName = parentGroup.querySelector(
    'input[data-incorporation-data="corporate-representative-lname"]'
  );
  let legalName = parentGroup.querySelector(
    'input[data-incorporation-data="corporate-representative-name"]'
  );
  legalName.value = firstName.value + " " + lastName.value;
}

function addShareholderInputGroup() {
  //Create elements
  const shareholderInputGroup = document.createElement("div");
  const inputSubGroup100Type = document.createElement("div");
  const shareholderTypeLabelWrapper = document.createElement("div");
  const shareholderTypeLabel = document.createElement("label");
  const removeShareholderButton = document.createElement("button");
  const shareholderType = document.createElement("div");
  const shareholderTypeRadio1 = document.createElement("label");
  const shareholderTypeRadioLabel1 = document.createElement("div");
  const shareholderTypeRadioInput1 = document.createElement("input");
  const shareholderTypeRadioSpan1 = document.createElement("span");
  const shareholderTypeRadio2 = document.createElement("label");
  const shareholderTypeRadioLabel2 = document.createElement("div");
  const shareholderTypeRadioInput2 = document.createElement("input");
  const shareholderTypeRadioSpan2 = document.createElement("span");
  const hiddenInput = document.createElement("input");
  const inputSubGroupInd = document.createElement("div");
  const inputSubGroup50_1 = document.createElement("div");
  const inputFieldBlock50_1 = document.createElement("div");
  const shareholderFNameLabelInd = document.createElement("label");
  const inputWrapperFNameInd = document.createElement("div");
  const shareholderFNameInd = document.createElement("input");
  const inputFieldBlock50_2 = document.createElement("div");
  const shareholderLNameLabelInd = document.createElement("label");
  const inputWrapperLNameInd = document.createElement("div");
  const shareholderLNameInd = document.createElement("input");
  const inputSubGroup100Ind = document.createElement("div");
  const shareholderNameLabelInd = document.createElement("label");
  const shareholderNameIndDescription = document.createElement("div");
  const inputWrapperInd = document.createElement("div");
  const shareholderNameInd = document.createElement("input");
  const inputSubGroupCorp = document.createElement("div");
  const inputSubGroup100Corp1 = document.createElement("div");
  const shareholderNameLabelCorp1 = document.createElement("label");
  const inputWrapperCorp1 = document.createElement("div");
  const shareholderNameCorp1 = document.createElement("input");
  const inputSubGroup50_2 = document.createElement("div");
  const inputFieldBlock50_3 = document.createElement("div");
  const shareholderFNameLabelCorpRep = document.createElement("label");
  const inputWrapperFNameCorpRep = document.createElement("div");
  const shareholderFNameCorpRep = document.createElement("input");
  const inputFieldBlock50_4 = document.createElement("div");
  const shareholderLNameLabelCorpRep = document.createElement("label");
  const inputWrapperLNameCorpRep = document.createElement("div");
  const shareholderLNameCorpRep = document.createElement("input");
  const inputSubGroup100Corp2 = document.createElement("div");
  const shareholderNameLabelCorp2 = document.createElement("label");
  const shareholderNameCorp2Description = document.createElement("div");
  const inputWrapperCorp2 = document.createElement("div");
  const shareholderNameCorp2 = document.createElement("input");
  const inputSubGroup50_3 = document.createElement("div");
  const inputFieldBlock50_5 = document.createElement("div");
  const shareholderEmailLabel = document.createElement("label");
  const inputWrapperEmail = document.createElement("div");
  const shareholderEmail = document.createElement("input");
  const inputFieldBlock50_6 = document.createElement("div");
  const shareholderPhoneLabel = document.createElement("label");
  const inputWrapperPhone = document.createElement("div");
  const shareholderPhone = document.createElement("input");
  const inputSubGroup100Shares = document.createElement("div");
  const shareholderSharesLabel = document.createElement("label");
  const inputWrapperShares = document.createElement("div");
  const inputShareholderSharesPct = document.createElement("input");
  const shareholderSharesNumWrapper = document.createElement("div");
  const shareholderSharesNum1 = document.createElement("span");
  const shareholderSharesNum2 = document.createElement("span");

  //Add classes
  shareholderInputGroup.classList.add("shareholder-input-group-additional");
  inputSubGroup100Type.classList.add("input-subgroup-100");
  shareholderTypeLabelWrapper.classList.add("shareholder-label-wrapper");
  shareholderTypeLabel.classList.add("field-label");
  removeShareholderButton.classList.add("shareholder-remove", "text-sm");
  shareholderType.classList.add("radio-wrapper");
  shareholderTypeRadio1.classList.add(
    "shareholder-type",
    "text-sm",
    "active",
    "w-radio"
  );
  shareholderTypeRadio1.style.cursor = "pointer";
  shareholderTypeRadioLabel1.classList.add(
    "w-form-formradioinput",
    "w-form-formradioinput--inputType-custom",
    "radio-button",
    "w-radio-input",
    "w-redirected-checked"
  );
  shareholderTypeRadioInput1.style.opacity = "0";
  shareholderTypeRadioInput1.style.position = "absolute";
  shareholderTypeRadioInput1.style.zIndex = "-1";
  shareholderTypeRadioSpan1.classList.add("radio-button-label", "w-form-label");
  shareholderTypeRadio2.classList.add("shareholder-type", "text-sm", "w-radio");
  shareholderTypeRadio2.style.cursor = "pointer";
  shareholderTypeRadioLabel2.classList.add(
    "w-form-formradioinput",
    "w-form-formradioinput--inputType-custom",
    "radio-button",
    "w-radio-input"
  );
  shareholderTypeRadioInput2.style.opacity = "0";
  shareholderTypeRadioInput2.style.position = "absolute";
  shareholderTypeRadioInput2.style.zIndex = "-1";
  shareholderTypeRadioSpan2.classList.add("radio-button-label", "w-form-label");
  inputSubGroupInd.classList.add("individual-shareholder-group");
  inputSubGroup50_1.classList.add("input-subgroup-50");
  inputFieldBlock50_1.classList.add("input-field-block-50");
  shareholderFNameLabelInd.classList.add("field-label");
  inputWrapperFNameInd.classList.add("input-wrapper");
  shareholderFNameInd.classList.add("centry-text-field", "text-sm", "w-input");
  inputFieldBlock50_2.classList.add("input-field-block-50");
  shareholderLNameLabelInd.classList.add("field-label");
  inputWrapperLNameInd.classList.add("input-wrapper");
  shareholderLNameInd.classList.add("centry-text-field", "text-sm", "w-input");
  inputSubGroup100Ind.classList.add("input-subgroup-100");
  shareholderNameLabelInd.classList.add("field-label");
  shareholderNameIndDescription.classList.add("text-block-37", "text-xs");
  inputWrapperInd.classList.add("input-wrapper");
  shareholderNameInd.classList.add("centry-text-field", "text-sm", "w-input");
  inputSubGroupCorp.classList.add("corporate-shareholder-group", "hide");
  inputSubGroup100Corp1.classList.add("input-subgroup-100");
  shareholderNameLabelCorp1.classList.add("field-label");
  inputWrapperCorp1.classList.add("input-wrapper");
  shareholderNameCorp1.classList.add("centry-text-field", "text-sm", "w-input");
  inputSubGroup50_2.classList.add("input-subgroup-50");
  inputFieldBlock50_3.classList.add("input-field-block-50");
  shareholderFNameLabelCorpRep.classList.add("field-label");
  inputWrapperFNameCorpRep.classList.add("input-wrapper");
  shareholderFNameCorpRep.classList.add(
    "centry-text-field",
    "text-sm",
    "w-input"
  );
  inputFieldBlock50_4.classList.add("input-field-block-50");
  shareholderLNameLabelCorpRep.classList.add("field-label");
  inputWrapperLNameCorpRep.classList.add("input-wrapper");
  shareholderLNameCorpRep.classList.add(
    "centry-text-field",
    "text-sm",
    "w-input"
  );
  inputSubGroup100Corp2.classList.add("input-subgroup-100");
  shareholderNameLabelCorp2.classList.add("field-label");
  shareholderNameCorp2Description.classList.add("text-block-37", "text-xs");
  inputWrapperCorp2.classList.add("input-wrapper");
  shareholderNameCorp2.classList.add("centry-text-field", "text-sm", "w-input");
  inputSubGroup50_3.classList.add("input-subgroup-50");
  inputFieldBlock50_5.classList.add("input-field-block-50");
  shareholderEmailLabel.classList.add("field-label");
  inputWrapperEmail.classList.add("input-wrapper");
  shareholderEmail.classList.add("centry-text-field", "text-sm", "w-input");
  inputFieldBlock50_6.classList.add("input-field-block-50");
  shareholderPhoneLabel.classList.add("field-label");
  inputWrapperPhone.classList.add("input-wrapper");
  shareholderPhone.classList.add("centry-text-field", "text-sm", "w-input");
  inputSubGroup100Shares.classList.add("input-subgroup-100");
  shareholderSharesLabel.classList.add("field-label");
  inputWrapperShares.classList.add("shareholding-wrapper");
  inputShareholderSharesPct.classList.add(
    "centry-shareholding-field",
    "text-sm",
    "w-input"
  );
  shareholderSharesNumWrapper.classList.add("number-of-shares", "text-xs");

  //Set input group - Shareholder
  shareholderInputGroup.setAttribute("data-incorporation-data", "shareholder");

  //Set input field - Shareholder Type
  // shareholderTypeLabel.innerText = "Type of shareholder";
  shareholderTypeLabel.innerHTML =
    '<span>Type of shareholder </span><span class="text-span-27">*</span>';
  removeShareholderButton.type = "button";
  removeShareholderButton.innerText = "remove";
  shareholderType.setAttribute("data-incorporation-data", "shareholder-type");
  shareholderTypeRadio1.setAttribute("data-shareholder-type", "individual");
  shareholderTypeRadio1.addEventListener("click", selectRadio);
  shareholderTypeRadioInput1.setAttribute("name", "Shareholder-Type");
  shareholderTypeRadioInput1.setAttribute("value", "individual-shareholder");
  shareholderTypeRadioInput1.setAttribute("data-name", "Shareholder Type");
  shareholderTypeRadioInput1.setAttribute("required", "");
  shareholderTypeRadioInput1.setAttribute("checked", "");
  shareholderTypeRadioSpan1.innerText = "Individual";
  shareholderTypeRadioSpan1.setAttribute("for", "individual-shareholder");
  shareholderTypeRadio2.setAttribute("data-shareholder-type", "corporate");
  shareholderTypeRadio2.addEventListener("click", selectRadio);
  shareholderTypeRadioInput2.setAttribute("name", "Shareholder-Type");
  shareholderTypeRadioInput2.setAttribute("value", "corporate-shareholder");
  shareholderTypeRadioInput2.setAttribute("data-name", "Shareholder Type");
  shareholderTypeRadioInput2.setAttribute("required", "");
  shareholderTypeRadioSpan2.innerText = "Corporate";
  shareholderTypeRadioSpan2.setAttribute("for", "corporate-shareholder");
  hiddenInput.name = "Shareholder-type";
  hiddenInput.setAttribute("type", "hidden");
  hiddenInput.setAttribute(
    "data-incorporation-data",
    "shareholder-type-hidden"
  );
  hiddenInput.setAttribute("value", "Individual");

  //Set input field - Individual shareholder First Name
  // shareholderFNameLabelInd.innerText = "First Name / given name";
  shareholderFNameLabelInd.innerHTML =
    '<span>First Name / given name </span><span class="text-span-27">*</span>';
  shareholderFNameInd.type = "text";
  shareholderFNameInd.name = "Individual-shareholder-first-name";
  shareholderFNameInd.setAttribute(
    "data-incorporation-data",
    "individual-shareholder-fname"
  );
  shareholderFNameInd.setAttribute(
    "data-name",
    "Individual-shareholder-first-name"
  );
  shareholderFNameInd.setAttribute("maxlength", "256");
  shareholderFNameInd.setAttribute("required", "");
  shareholderFNameInd.addEventListener("keyup", validateField);
  shareholderFNameInd.addEventListener("keyup", updateButtons);
  shareholderFNameInd.addEventListener("keyup", updateIndShareholderLegalName);

  //Set input field - Individual shareholder Last Name
  // shareholderLNameLabelInd.innerText = "Last Name / family name";
  shareholderLNameLabelInd.innerHTML =
    '<span>Last Name / family name</span><span class="text-span-27">*</span>';
  shareholderLNameInd.type = "text";
  shareholderLNameInd.name = "Individual-shareholder-last-name";
  shareholderLNameInd.setAttribute(
    "data-incorporation-data",
    "individual-shareholder-lname"
  );
  shareholderLNameInd.setAttribute(
    "data-name",
    "Individual-shareholder-last-name"
  );
  shareholderLNameInd.setAttribute("maxlength", "256");
  shareholderLNameInd.setAttribute("required", "");
  shareholderLNameInd.addEventListener("keyup", validateField);
  shareholderLNameInd.addEventListener("keyup", updateButtons);
  shareholderLNameInd.addEventListener("keyup", updateIndShareholderLegalName);

  //Set input field - Individual shareholder Name
  inputSubGroupInd.setAttribute("data-shareholder-group", "individual");
  // shareholderNameLabelInd.innerText = "Legal name displayed per NRIC / ID / Passport";
  shareholderNameLabelInd.innerHTML =
    '<span>Legal name displayed per NRIC / ID / Passport </span><span class="text-span-27">*</span>';
  shareholderNameIndDescription.innerText =
    "The name in this field will be used in all official documents for the company. Please edit this field if the automatic name capturing does not accurately reflect your legal name per your government-issued identification document.";
  shareholderNameInd.type = "text";
  shareholderNameInd.name = "Individual-shareholder-name";
  shareholderNameInd.setAttribute(
    "data-incorporation-data",
    "individual-shareholder-name"
  );
  shareholderNameInd.setAttribute("data-name", "Individual-shareholder-name");
  shareholderNameInd.setAttribute("maxlength", "256");
  shareholderNameInd.addEventListener("keyup", validateField);
  shareholderNameInd.addEventListener("keyup", updateButtons);

  //Set input field - Corporate shareholder name
  inputSubGroupCorp.setAttribute("data-shareholder-group", "corporate");
  // shareholderNameLabelCorp1.innerText = "Corporate shareholder name";
  shareholderNameLabelCorp1.innerHTML =
    '<span>Corporate shareholder name </span><span class="text-span-27">*</span>';
  shareholderNameCorp1.type = "text";
  shareholderNameCorp1.name = "Corporate-shareholder-name";
  shareholderNameCorp1.setAttribute(
    "data-incorporation-data",
    "corporate-shareholder-name"
  );
  shareholderNameCorp1.setAttribute("data-name", "Corporate-shareholder-name");
  shareholderNameCorp1.setAttribute("maxlength", "256");
  shareholderNameCorp1.addEventListener("keyup", validateField);
  shareholderNameCorp1.addEventListener("keyup", updateButtons);

  //Set input field - Corporate shareholder representative
  // shareholderNameLabelCorp2.innerText =
  //   "Corporate representative legal name displayed per NRIC / ID / Passport";
  shareholderNameLabelCorp2.innerHTML =
    '<span>Corporate representative legal name displayed per NRIC / ID / Passport </span><span class="text-span-27">*</span>';
  shareholderNameCorp2Description.innerText = "The name in this field will be used in all official documents for the company. Please edit this field if the automatic name capturing does not accurately reflect your legal name per your government-issued identification document.";
  shareholderNameCorp2.type = "text";
  shareholderNameCorp2.name = "Corporate-representative-name";
  shareholderNameCorp2.setAttribute(
    "data-incorporation-data",
    "corporate-representative-name"
  );
  shareholderNameCorp2.setAttribute(
    "data-name",
    "Corporate-representative-name"
  );
  shareholderNameCorp2.setAttribute("maxlength", "256");
  shareholderNameCorp2.addEventListener("keyup", validateField);
  shareholderNameCorp2.addEventListener("keyup", updateButtons);

  //Set input field - Corporate shareholder representative First Name
  // shareholderFNameLabelCorpRep.innerText =
  //   "Corporate representative first name / given name";
  shareholderFNameLabelCorpRep.innerHTML =
    '<span>Corporate representative first name / given name </span><span class="text-span-27">*</span>';
  shareholderFNameCorpRep.type = "text";
  shareholderFNameCorpRep.name = "Corporate-representative-first-name";
  shareholderFNameCorpRep.setAttribute(
    "data-incorporation-data",
    "corporate-representative-fname"
  );
  shareholderFNameCorpRep.setAttribute(
    "data-name",
    "Corporate-representative-first-name"
  );
  shareholderFNameCorpRep.setAttribute("maxlength", "256");
  shareholderFNameCorpRep.setAttribute("required", "");
  shareholderFNameCorpRep.addEventListener("keyup", validateField);
  shareholderFNameCorpRep.addEventListener("keyup", updateButtons);
  shareholderFNameCorpRep.addEventListener("keyup", updateRepLegalName);

  //Set input field - Corporate shareholder representative Last Name
  // shareholderLNameLabelCorpRep.innerText =
  //   "Corporate representativeast last name / family name";
  shareholderLNameLabelCorpRep.innerHTML =
    '<span>Corporate representativeast last name / family name </span><span class="text-span-27">*</span>';
  shareholderLNameCorpRep.type = "text";
  shareholderLNameCorpRep.name = "Corporate-representative-last-name";
  shareholderLNameCorpRep.setAttribute(
    "data-incorporation-data",
    "corporate-representative-lname"
  );
  shareholderLNameCorpRep.setAttribute(
    "data-name",
    "Corporate-representative-last-name"
  );
  shareholderLNameCorpRep.setAttribute("maxlength", "256");
  shareholderLNameCorpRep.setAttribute("required", "");
  shareholderLNameCorpRep.addEventListener("keyup", validateField);
  shareholderLNameCorpRep.addEventListener("keyup", updateButtons);
  shareholderLNameCorpRep.addEventListener("keyup", updateRepLegalName);

  //Set input field - Shareholder Email
  shareholderEmailLabel.innerHTML = '<span>Email address </span><span class="text-span-27">*</span>';
  shareholderEmail.type = "email";
  shareholderEmail.name = "Shareholder-email";
  shareholderEmail.setAttribute("data-incorporation-data", "shareholder-email");
  shareholderEmail.setAttribute("data-name", "Shareholder-email");
  shareholderEmail.setAttribute("maxlength", "256");
  shareholderEmail.setAttribute("required", "");
  shareholderEmail.addEventListener("keyup", validateField);
  shareholderEmail.addEventListener("keyup", updateButtons);

  //Set input field - Shareholder Phone
  shareholderPhoneLabel.innerHTML = '<span>Phone number </span><span class="text-span-27">*</span>';
  shareholderPhone.type = "phone";
  shareholderPhone.name = "Shareholder-phone";
  shareholderPhone.setAttribute("data-incorporation-data", "shareholder-phone");
  shareholderPhone.setAttribute("data-name", "Shareholder-phone");
  shareholderPhone.setAttribute("maxlength", "256");
  shareholderPhone.setAttribute("required", "");
  shareholderPhone.addEventListener("keyup", validateField);
  shareholderPhone.addEventListener("keyup", updateButtons);

  //Set input field - Number of Shares
  shareholderSharesLabel.innerHTML = '<span>Number of Shares </span><span class="text-span-27">*</span>';
  inputShareholderSharesPct.type = "text";
  inputShareholderSharesPct.name = "Number-of-shares";
  inputShareholderSharesPct.setAttribute(
    "data-incorporation-data",
    "number-of-shares"
  );
  inputShareholderSharesPct.setAttribute("data-name", "Number-of-shares");
  inputShareholderSharesPct.setAttribute("data-shareholding", "percent");
  inputShareholderSharesPct.setAttribute("maxlength", "256");
  inputShareholderSharesPct.setAttribute("required", "");
  inputShareholderSharesPct.addEventListener("keyup", validateField);
  inputShareholderSharesPct.addEventListener("keyup", updateButtons);
  shareholderSharesNum1.innerText = "0";
  shareholderSharesNum1.setAttribute("data-shareholding", "number");
  shareholderSharesNum2.innerText = " / 1,000 shares";

  //Append elements to Shareholder Input Groups
  shareholderInputGroup.appendChild(removeShareholderButton);
  shareholderInputGroup.appendChild(inputSubGroup100Type);
  shareholderInputGroup.appendChild(inputSubGroupInd);
  shareholderInputGroup.appendChild(inputSubGroupCorp);
  shareholderInputGroup.appendChild(inputSubGroup50_3);
  shareholderInputGroup.appendChild(inputSubGroup100Shares);

  //Shareholder type
  inputSubGroup100Type.appendChild(shareholderTypeLabelWrapper);
  inputSubGroup100Type.appendChild(shareholderType);
  inputSubGroup100Type.appendChild(hiddenInput);
  shareholderTypeLabelWrapper.appendChild(shareholderTypeLabel);
  shareholderType.appendChild(shareholderTypeRadio1);
  shareholderType.appendChild(shareholderTypeRadio2);
  shareholderTypeRadio1.appendChild(shareholderTypeRadioLabel1);
  shareholderTypeRadio1.appendChild(shareholderTypeRadioInput1);
  shareholderTypeRadio1.appendChild(shareholderTypeRadioSpan1);
  shareholderTypeRadio2.appendChild(shareholderTypeRadioLabel2);
  shareholderTypeRadio2.appendChild(shareholderTypeRadioInput2);
  shareholderTypeRadio2.appendChild(shareholderTypeRadioSpan2);

  //Individual Shareholder
  inputSubGroupInd.appendChild(inputSubGroup50_1);
  inputSubGroupInd.appendChild(inputSubGroup100Ind);
  inputSubGroup50_1.appendChild(inputFieldBlock50_1);
  inputSubGroup50_1.appendChild(inputFieldBlock50_2);
  inputFieldBlock50_1.appendChild(shareholderFNameLabelInd);
  inputFieldBlock50_1.appendChild(inputWrapperFNameInd);
  inputWrapperFNameInd.appendChild(shareholderFNameInd);
  inputFieldBlock50_2.appendChild(shareholderLNameLabelInd);
  inputFieldBlock50_2.appendChild(inputWrapperLNameInd);
  inputWrapperLNameInd.appendChild(shareholderLNameInd);
  inputSubGroup100Ind.appendChild(shareholderNameLabelInd);
  inputSubGroup100Ind.appendChild(shareholderNameIndDescription);
  inputSubGroup100Ind.appendChild(inputWrapperInd);
  inputWrapperInd.appendChild(shareholderNameInd);

  //Corporate Shareholder
  inputSubGroupCorp.appendChild(inputSubGroup100Corp1);
  inputSubGroupCorp.appendChild(inputSubGroup50_2);
  inputSubGroupCorp.appendChild(inputSubGroup100Corp2);
  inputSubGroup100Corp1.appendChild(shareholderNameLabelCorp1);
  inputSubGroup100Corp1.appendChild(inputWrapperCorp1);
  inputWrapperCorp1.appendChild(shareholderNameCorp1);
  inputSubGroup50_2.appendChild(inputFieldBlock50_3);
  inputSubGroup50_2.appendChild(inputFieldBlock50_4);
  inputFieldBlock50_3.appendChild(shareholderFNameLabelCorpRep);
  inputFieldBlock50_3.appendChild(inputWrapperFNameCorpRep);
  inputWrapperFNameCorpRep.appendChild(shareholderFNameCorpRep);
  inputFieldBlock50_4.appendChild(shareholderLNameLabelCorpRep);
  inputFieldBlock50_4.appendChild(inputWrapperLNameCorpRep);
  inputWrapperLNameCorpRep.appendChild(shareholderLNameCorpRep);
  inputSubGroup100Corp2.appendChild(shareholderNameLabelCorp2);
  inputSubGroup100Corp2.appendChild(shareholderNameCorp2Description);
  inputSubGroup100Corp2.appendChild(inputWrapperCorp2);
  inputWrapperCorp2.appendChild(shareholderNameCorp2);

  //Shareholder Email
  inputSubGroup50_3.appendChild(inputFieldBlock50_5);
  inputFieldBlock50_5.appendChild(shareholderEmailLabel);
  inputFieldBlock50_5.appendChild(inputWrapperEmail);
  inputWrapperEmail.appendChild(shareholderEmail);

  //Director Phone
  inputSubGroup50_3.appendChild(inputFieldBlock50_6);
  inputFieldBlock50_6.appendChild(shareholderPhoneLabel);
  inputFieldBlock50_6.appendChild(inputWrapperPhone);
  inputWrapperPhone.appendChild(shareholderPhone);

  //Number of Shares
  inputSubGroup100Shares.appendChild(shareholderSharesLabel);
  inputSubGroup100Shares.appendChild(inputWrapperShares);
  inputWrapperShares.appendChild(inputShareholderSharesPct);
  inputWrapperShares.appendChild(shareholderSharesNumWrapper);
  shareholderSharesNumWrapper.appendChild(shareholderSharesNum1);
  shareholderSharesNumWrapper.appendChild(shareholderSharesNum2);

  //Append element to DOM
  shareholderGroup.appendChild(shareholderInputGroup);
  removeShareholderButton.addEventListener("click", removeShareholder);

  //rerun function to calculate shares
  calculateShares();
  updateButtons();
}

//remove shareholder input group
function removeShareholder(el) {
  const shareholder = el.target.parentElement;
  shareholder.remove();
  updateShares();
  updateButtons();
}

// Shareholder radio buttons
radioDivs = document.querySelectorAll(".w-radio");
for (const radioDiv of radioDivs) {
  radioDiv.style.cursor = "pointer";
  radioDiv.addEventListener("click", selectRadio);
  radioDiv.addEventListener("click", updateButtons);
}

let selectedRadio, selectedType, selectedParent, shareholderType_hidden;
function selectRadio(el) {
  selectedRadio = el.target.parentElement;
  selectedType = el.target.parentElement.getAttribute("data-shareholder-type");
  selectedParent =
    el.target.parentElement.parentElement.parentElement.parentElement;
  shareholderType_hidden = selectedParent.querySelector(
    'input[data-incorporation-data="shareholder-type-hidden"]'
  );
  individualRadio = selectedParent.querySelector(
    'label[data-shareholder-type="individual"]'
  );
  corporateRadio = selectedParent.querySelector(
    'label[data-shareholder-type="corporate"]'
  );
  individualDiv = selectedParent.querySelector(
    'div[data-shareholder-group="individual"]'
  );
  corporateDiv = selectedParent.querySelector(
    'div[data-shareholder-group="corporate"]'
  );
  if (selectedType == "individual") {
    individualRadio.classList.add("active");
    corporateRadio.classList.remove("active");
    corporateDiv.classList.add("hide");
    individualDiv.classList.remove("hide");
    shareholderType_hidden.setAttribute("value", "Individual");
  } else if (selectedType == "corporate") {
    individualRadio.classList.remove("active");
    corporateRadio.classList.add("active");
    corporateDiv.classList.remove("hide");
    individualDiv.classList.add("hide");
    shareholderType_hidden.setAttribute("value", "Corporate");
  }
  updateButtons();
}

//calculate number of shares
let totalSharesArray = [];
let totalShares, sharesPercent, sharesNumber;
let totalDistributedSharesElement = document.querySelector(
  '[data-shareholding="distributed-shares"]'
);
let totalUndistributedSharesElement = document.querySelector(
  '[data-shareholding="undistributed-shares"]'
);
let totalUndistributedShares = 1000;
let sharesErrorMessage = document.getElementById("shares-error");

function calculateShares() {
  sharesPercent = document.querySelectorAll(
    'input[data-shareholding="percent"]'
  );
  sharesNumber = document.querySelectorAll('span[data-shareholding="number"]');
  for (let i = 0; i < sharesPercent.length; i++) {
    sharesPercent[i].addEventListener("keyup", function () {
      let percentage = sharesPercent[i].value;
      let percentToNumber = Math.round(percentage);
      sharesNumber[i].innerText = percentToNumber.toLocaleString("en");

      totalShares = 0;
      totalSharesArray[i] = percentToNumber;
      for (let s = 0; s < totalSharesArray.length; s++) {
        totalShares += totalSharesArray[s];
      }
      totalDistributedSharesElement.innerText =
        totalShares.toLocaleString("en");
      totalUndistributedShares = 1000 - totalShares;
      totalUndistributedSharesElement.innerText =
        totalUndistributedShares.toLocaleString("en");

      if (totalShares > 1000) {
        sharesErrorMessage.classList.remove("hide");
        totalDistributedSharesElement.classList.add("error");
        totalUndistributedSharesElement.classList.add("error");
      } else {
        sharesErrorMessage.classList.add("hide");
        totalDistributedSharesElement.classList.remove("error");
        totalUndistributedSharesElement.classList.remove("error");
      }
      updateButtons();
    });
  }
}
calculateShares();

function updateShares() {
  sharesPercent = document.querySelectorAll(
    'input[data-shareholding="percent"]'
  );
  sharesNumber = document.querySelectorAll('span[data-shareholding="number"]');
  totalSharesArray = [];

  for (let i = 0; i < sharesPercent.length; i++) {
    let percentage = sharesPercent[i].value;
    let percentToNumber = Math.round(percentage);
    totalShares = 0;

    totalSharesArray[i] = percentToNumber;
    for (let s = 0; s < totalSharesArray.length; s++) {
      totalShares += totalSharesArray[s];
    }
    totalDistributedSharesElement.innerText = totalShares.toLocaleString("en");
    totalUndistributedShares = 1000 - totalShares;
    totalUndistributedSharesElement.innerText =
      totalUndistributedShares.toLocaleString("en");

    if (totalShares > 1000) {
      sharesErrorMessage.classList.remove("hide");
      totalDistributedSharesElement.classList.add("error");
      totalUndistributedSharesElement.classList.add("error");
    } else {
      sharesErrorMessage.classList.add("hide");
      totalDistributedSharesElement.classList.remove("error");
      totalUndistributedSharesElement.classList.remove("error");
    }
    updateButtons();
  }
}
