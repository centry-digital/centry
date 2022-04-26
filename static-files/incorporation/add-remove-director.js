const addDirectorButton = document.getElementById("add-director-button");
addDirectorButton.setAttribute("onClick", "addDirectorInputGroup()");
const directorGroup = document.getElementById("director-group");

function addDirectorInputGroup() {
    //Create elements
  const directorInputGroup = document.createElement("div");
  const inputSubGroup100 = document.createElement("div");
  const inputSubGroup50 = document.createElement("div");
  const inputFieldBlock50_1 = document.createElement("div");
  const inputFieldBlock50_2 = document.createElement("div");
  const inputWrapperDirector = document.createElement("div");
  const inputWrapperEmail = document.createElement("div");
  const inputWrapperPhone = document.createElement("div");
  const directorLabelWrapper = document.createElement("div");
  const removeDirectorButton = document.createElement("button");
  const directorNameLabel = document.createElement("label");
  const directorEmailLabel = document.createElement("label");
  const directorPhoneLabel = document.createElement("label");
  const directorName = document.createElement("input");
  const directorEmail = document.createElement("input");
  const directorPhone = document.createElement("input");
  
  //Add classes
  directorInputGroup.classList.add("director-input-group-additional");
  inputSubGroup100.classList.add("input-subgroup-100");
  directorLabelWrapper.classList.add("director-label-wrapper");
  removeDirectorButton.classList.add("director-remove", "text-sm");
  inputSubGroup50.classList.add("input-subgroup-50");
  inputFieldBlock50_1.classList.add("input-field-block-50");
  inputFieldBlock50_2.classList.add("input-field-block-50");
  inputWrapperDirector.classList.add("input-wrapper");
  inputWrapperEmail.classList.add("input-wrapper");
  inputWrapperPhone.classList.add("input-wrapper");
  directorNameLabel.classList.add("field-label");
  directorEmailLabel.classList.add("field-label");
  directorPhoneLabel.classList.add("field-label");
  directorName.classList.add("centry-text-field", "text-sm", "w-input");
  directorEmail.classList.add("centry-text-field", "text-sm", "w-input");
  directorPhone.classList.add("centry-text-field", "text-sm", "w-input");
  
  //Set input field - Director Name
  directorNameLabel.innerText = "Director name";
  removeDirectorButton.type = "button";
  removeDirectorButton.innerText = "remove";
  directorName.type = "text";
  directorName.name = "Director-name";
  directorName.setAttribute("data-name", "Director-name");
  directorName.setAttribute("maxlength", "256");
  directorName.setAttribute("required", "");
  
  //Set input field - Director Email
	directorEmailLabel.innerText = "Email address";
  directorEmail.type = "email";
  directorEmail.name = "Director-email";
  directorEmail.setAttribute("data-name", "Director-email");
  directorEmail.setAttribute("maxlength", "256");
  directorEmail.setAttribute("required", "");
  
  //Set input field - Director Phone
  directorPhoneLabel.innerText = "Phone number";
  directorPhone.type = "phone";
  directorPhone.name = "Director-phone";
  directorPhone.setAttribute("data-name", "Director-phone");
  directorPhone.setAttribute("maxlength", "256");
  directorPhone.setAttribute("required", "");
  
  //Append elements to Director Input Groups
  directorInputGroup.appendChild(inputSubGroup100);
  directorInputGroup.appendChild(inputSubGroup50);
  
  //Director Name
  inputSubGroup100.appendChild(directorLabelWrapper);
  directorLabelWrapper.appendChild(directorNameLabel);
  directorLabelWrapper.appendChild(removeDirectorButton);
  inputSubGroup100.appendChild(inputWrapperDirector);
  inputWrapperDirector.appendChild(directorName);
  
  //Director Email
  inputSubGroup50.appendChild(inputFieldBlock50_1);
  inputFieldBlock50_1.appendChild(directorEmailLabel);
  inputFieldBlock50_1.appendChild(inputWrapperEmail);
  inputWrapperEmail.appendChild(directorEmail);
  
  //Director Phone
  inputSubGroup50.appendChild(inputFieldBlock50_2);
  inputFieldBlock50_2.appendChild(directorPhoneLabel);
  inputFieldBlock50_2.appendChild(inputWrapperPhone);
  inputWrapperPhone.appendChild(directorPhone);
  
  //Append element to DOM
  directorGroup.appendChild(directorInputGroup);
  removeDirectorButton.addEventListener("click", removeDirector);
}

function removeDirector(el) {
	const director = el.target.parentElement.parentElement.parentElement;
  director.remove();
}