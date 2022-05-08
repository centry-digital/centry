//add shareholder
const addShareholderButton = document.getElementById("add-shareholder-button");
addShareholderButton.setAttribute("onClick", "addShareholderInputGroup()");

function addShareholderInputGroup() {
  const shareholderGroup = document.getElementById("shareholder-group");
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
  	const inputSubGroup100Ind = document.createElement("div");
    	const shareholderNameLabelInd = document.createElement("label");
      const inputWrapperInd = document.createElement("div");
      	const shareholderNameInd = document.createElement("input");
  const inputSubGroupCorp = document.createElement("div");
  	const inputSubGroup100Corp1 = document.createElement("div");
    	const shareholderNameLabelCorp1 = document.createElement("label");
      const inputWrapperCorp1 = document.createElement("div");
      	const shareholderNameCorp1 = document.createElement("input");
  	const inputSubGroup100Corp2 = document.createElement("div");
    	const shareholderNameLabelCorp2 = document.createElement("label");
      const inputWrapperCorp2 = document.createElement("div");
      	const shareholderNameCorp2 = document.createElement("input");
  const inputSubGroup50 = document.createElement("div");
  	const inputFieldBlock50_1 = document.createElement("div");
    	const shareholderEmailLabel = document.createElement("label");
      const inputWrapperEmail = document.createElement("div");
      	const shareholderEmail = document.createElement("input");
	  const inputFieldBlock50_2 = document.createElement("div");
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
        shareholderTypeRadio1.classList.add("shareholder-type","text-sm","active","w-radio");
        shareholderTypeRadio1.style.cursor = "pointer";
          shareholderTypeRadioLabel1.classList.add("w-form-formradioinput","w-form-formradioinput--inputType-custom","radio-button","w-radio-input","w-redirected-checked");
          shareholderTypeRadioInput1.style.opacity = "0";
          shareholderTypeRadioInput1.style.position = "absolute";
          shareholderTypeRadioInput1.style.zIndex = "-1";
          shareholderTypeRadioSpan1.classList.add("radio-button-label","w-form-label");
        shareholderTypeRadio2.classList.add("shareholder-type","text-sm","w-radio");
        shareholderTypeRadio2.style.cursor = "pointer";
          shareholderTypeRadioLabel2.classList.add("w-form-formradioinput","w-form-formradioinput--inputType-custom","radio-button","w-radio-input");
          shareholderTypeRadioInput2.style.opacity = "0";
          shareholderTypeRadioInput2.style.position = "absolute";
          shareholderTypeRadioInput2.style.zIndex = "-1";
          shareholderTypeRadioSpan2.classList.add("radio-button-label","w-form-label");
    inputSubGroupInd.classList.add("individual-shareholder-group");
      inputSubGroup100Ind.classList.add("input-subgroup-100");
        shareholderNameLabelInd.classList.add("field-label");
        inputWrapperInd.classList.add("input-wrapper");
          shareholderNameInd.classList.add("centry-text-field", "text-sm", "w-input");
    inputSubGroupCorp.classList.add("corporate-shareholder-group", "hide");
      inputSubGroup100Corp1.classList.add("input-subgroup-100");
        shareholderNameLabelCorp1.classList.add("field-label");
        inputWrapperCorp1.classList.add("input-wrapper");
          shareholderNameCorp1.classList.add("centry-text-field", "text-sm", "w-input");
      inputSubGroup100Corp2.classList.add("input-subgroup-100");
        shareholderNameLabelCorp2.classList.add("field-label");
        inputWrapperCorp2.classList.add("input-wrapper");
          shareholderNameCorp2.classList.add("centry-text-field", "text-sm", "w-input");
    inputSubGroup50.classList.add("input-subgroup-50");
      inputFieldBlock50_1.classList.add("input-field-block-50");
        shareholderEmailLabel.classList.add("field-label");
        inputWrapperEmail.classList.add("input-wrapper");
          shareholderEmail.classList.add("centry-text-field", "text-sm", "w-input");
      inputFieldBlock50_2.classList.add("input-field-block-50");
        shareholderPhoneLabel.classList.add("field-label");
        inputWrapperPhone.classList.add("input-wrapper");
          shareholderPhone.classList.add("centry-text-field", "text-sm", "w-input");
    inputSubGroup100Shares.classList.add("input-subgroup-100");
      shareholderSharesLabel.classList.add("field-label");
      inputWrapperShares.classList.add("shareholding-wrapper");
        inputShareholderSharesPct.classList.add("centry-shareholding-field", "text-sm", "w-input");
        shareholderSharesNumWrapper.classList.add("number-of-shares", "text-xs");
  
  //Set input group - Shareholder
  shareholderInputGroup.setAttribute("data-incorporation-data", "shareholder");
  
  //Set input field - Shareholder Type
  shareholderTypeLabel.innerText = "Type of shareholder";
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
  hiddenInput.setAttribute("type", "hidden");
  hiddenInput.setAttribute("data-incorporation-data", "shareholder-type-hidden");
  hiddenInput.setAttribute("value", "Individual");
  
  //Set input field - Individual shareholder Name
  inputSubGroupInd.setAttribute("data-shareholder-group", "individual");
  shareholderNameLabelInd.innerText = "Shareholder name";
  shareholderNameInd.type = "text";
  shareholderNameInd.name = "Individual-shareholder-name";
  shareholderNameInd.setAttribute("data-incorporation-data", "individual-shareholder-name");
  shareholderNameInd.setAttribute("data-name", "Individual-shareholder-name");
  shareholderNameInd.setAttribute("maxlength", "256");
  shareholderNameInd.setAttribute("required", "");
  
  //Set input field - Corporate shareholder name
  inputSubGroupCorp.setAttribute("data-shareholder-group", "corporate");
  shareholderNameLabelCorp1.innerText = "Corporate shareholder name";
  shareholderNameCorp1.type = "text";
  shareholderNameCorp1.name = "Corporate-shareholder-name";
  shareholderNameCorp1.setAttribute("data-incorporation-data", "corporate-shareholder-name");
  shareholderNameCorp1.setAttribute("data-name", "Corporate-shareholder-name");
  shareholderNameCorp1.setAttribute("maxlength", "256");
  shareholderNameCorp1.setAttribute("required", "");
  
  //Set input field - Corporate shareholder representative
  shareholderNameLabelCorp2.innerText = "Corporate representative name";
  shareholderNameCorp2.type = "text";
  shareholderNameCorp2.name = "Corporate-representative-name";
  shareholderNameCorp2.setAttribute("data-incorporation-data", "corporate-representative-name");
  shareholderNameCorp2.setAttribute("data-name", "Corporate-representative-name");
  shareholderNameCorp2.setAttribute("maxlength", "256");
  shareholderNameCorp2.setAttribute("required", "");
  
  //Set input field - Shareholder Email
  shareholderEmailLabel.innerText = "Email address";
  shareholderEmail.type = "email";
  shareholderEmail.name = "Shareholder-email";
  shareholderEmail.setAttribute("data-incorporation-data", "shareholder-email");
  shareholderEmail.setAttribute("data-name", "Shareholder-email");
  shareholderEmail.setAttribute("maxlength", "256");
  shareholderEmail.setAttribute("required", "");
  
  //Set input field - Shareholder Phone
  shareholderPhoneLabel.innerText = "Phone number";
  shareholderPhone.type = "phone";
  shareholderPhone.name = "Shareholder-phone";
  shareholderPhone.setAttribute("data-incorporation-data", "shareholder-phone");
  shareholderPhone.setAttribute("data-name", "Shareholder-phone");
  shareholderPhone.setAttribute("maxlength", "256");
  shareholderPhone.setAttribute("required", "");
  
  //Set input field - Number of Shares
  shareholderSharesLabel.innerText = "Number of Shares";
  inputShareholderSharesPct.type = "text";
  inputShareholderSharesPct.name = "Number-of-shares";
  inputShareholderSharesPct.setAttribute("data-incorporation-data", "number-of-shares");
  inputShareholderSharesPct.setAttribute("data-name", "Number-of-shares");
  inputShareholderSharesPct.setAttribute("data-shareholding", "percent");
  inputShareholderSharesPct.setAttribute("maxlength", "256");
  inputShareholderSharesPct.setAttribute("required", "");
  shareholderSharesNum1.innerText = "0";
  shareholderSharesNum1.setAttribute("data-shareholding", "number");
  shareholderSharesNum2.innerText = " / 1,000 shares";
  
  //Append elements to Shareholder Input Groups
  shareholderInputGroup.appendChild(inputSubGroup100Type);
  shareholderInputGroup.appendChild(inputSubGroupInd);
  shareholderInputGroup.appendChild(inputSubGroupCorp);
  shareholderInputGroup.appendChild(inputSubGroup50);
  shareholderInputGroup.appendChild(inputSubGroup100Shares);
  
  //Shareholder type
  inputSubGroup100Type.appendChild(shareholderTypeLabelWrapper);
  inputSubGroup100Type.appendChild(shareholderType);
  inputSubGroup100Type.appendChild(hiddenInput);
  shareholderTypeLabelWrapper.appendChild(shareholderTypeLabel);
  shareholderTypeLabelWrapper.appendChild(removeShareholderButton);
  shareholderType.appendChild(shareholderTypeRadio1);
  shareholderType.appendChild(shareholderTypeRadio2);
  shareholderTypeRadio1.appendChild(shareholderTypeRadioLabel1);
  shareholderTypeRadio1.appendChild(shareholderTypeRadioInput1);
  shareholderTypeRadio1.appendChild(shareholderTypeRadioSpan1);
  shareholderTypeRadio2.appendChild(shareholderTypeRadioLabel2);
  shareholderTypeRadio2.appendChild(shareholderTypeRadioInput2);
  shareholderTypeRadio2.appendChild(shareholderTypeRadioSpan2);

  //Individual Shareholder
  inputSubGroupInd.appendChild(inputSubGroup100Ind);
  inputSubGroup100Ind.appendChild(shareholderNameLabelInd);
  inputSubGroup100Ind.appendChild(inputWrapperInd);
  inputWrapperInd.appendChild(shareholderNameInd);
  
  //Corporate Shareholder
  inputSubGroupCorp.appendChild(inputSubGroup100Corp1);
  inputSubGroupCorp.appendChild(inputSubGroup100Corp2);
  inputSubGroup100Corp1.appendChild(shareholderNameLabelCorp1);
  inputSubGroup100Corp1.appendChild(inputWrapperCorp1);
  inputWrapperCorp1.appendChild(shareholderNameCorp1);
  inputSubGroup100Corp2.appendChild(shareholderNameLabelCorp2);
  inputSubGroup100Corp2.appendChild(inputWrapperCorp2);
  inputWrapperCorp2.appendChild(shareholderNameCorp2);
  
  //Shareholder Email
  inputSubGroup50.appendChild(inputFieldBlock50_1);
  inputFieldBlock50_1.appendChild(shareholderEmailLabel);
  inputFieldBlock50_1.appendChild(inputWrapperEmail);
  inputWrapperEmail.appendChild(shareholderEmail);
  
  //Director Phone
  inputSubGroup50.appendChild(inputFieldBlock50_2);
  inputFieldBlock50_2.appendChild(shareholderPhoneLabel);
  inputFieldBlock50_2.appendChild(inputWrapperPhone);
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
}

//remove shareholder input group
function removeShareholder(el) {
	const shareholder = el.target.parentElement.parentElement.parentElement;
  shareholder.remove();
  updateShares();
}

// function selectRadio() {
radioDivs = document.querySelectorAll(".w-radio");
for (const radioDiv of radioDivs) {
  radioDiv.style.cursor = "pointer";
  radioDiv.addEventListener("click", selectRadio);
}
  
let selectedRadio, selectedType, selectedParent, shareholderType_hidden;
function selectRadio(el) {
  selectedRadio = el.target.parentElement;
  selectedType = el.target.parentElement.getAttribute("data-shareholder-type");
  selectedParent = el.target.parentElement.parentElement.parentElement.parentElement;
  shareholderType_hidden = selectedParent.querySelector('input[data-incorporation-data="shareholder-type-hidden"]');
  console.log(shareholderType_hidden);
  individualRadio = selectedParent.querySelector('label[data-shareholder-type="individual"]');
  corporateRadio = selectedParent.querySelector('label[data-shareholder-type="corporate"]');;
  individualDiv = selectedParent.querySelector('div[data-shareholder-group="individual"]');
  corporateDiv = selectedParent.querySelector('div[data-shareholder-group="corporate"]');	
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
}

//calculate number of shares
let totalSharesArray = [];
let totalShares, sharesPercent, sharesNumber;
let totalDistributedSharesElement = document.querySelector('[data-shareholding="distributed-shares"]')
let totalUndistributedSharesElement = document.querySelector('[data-shareholding="undistributed-shares"]')
let totalUndistributedShares;

function calculateShares() {
  sharesPercent = document.querySelectorAll('input[data-shareholding="percent"]');
  sharesNumber = document.querySelectorAll('span[data-shareholding="number"]');
  for (let i = 0; i < sharesPercent.length; i++) {
    sharesPercent[i].addEventListener("keyup", function() {
      let percentage = sharesPercent[i].value;
      let percentToNumber = Math.round(percentage);
      sharesNumber[i].innerText = percentToNumber;
      
      totalShares = 0;
      totalSharesArray[i] = percentToNumber;
      for (let s = 0; s < totalSharesArray.length; s++) {
        totalShares += totalSharesArray[s]
      }
      totalDistributedSharesElement.innerText = totalShares.toLocaleString('en');
      totalUndistributedShares = 1000 - totalShares;
      totalUndistributedSharesElement.innerText = totalUndistributedShares.toLocaleString('en');;
    });
  }
}
calculateShares();

function updateShares() {
  sharesPercent = document.querySelectorAll('input[data-shareholding="percent"]');
  sharesNumber = document.querySelectorAll('span[data-shareholding="number"]');
  for (let i = 0; i < sharesPercent.length; i++) {
    let percentage = sharesPercent[i].value;
    let percentToNumber = Math.round(percentage);
    
    totalShares = 0;
    totalSharesArray = [];
    totalSharesArray[i] = percentToNumber;
    for (let s = 0; s < totalSharesArray.length; s++) {
      totalShares += totalSharesArray[s]
    }
    totalDistributedSharesElement.innerText = totalShares.toLocaleString('en');
    totalUndistributedShares = 1000 - totalShares;
    totalUndistributedSharesElement.innerText = totalUndistributedShares.toLocaleString('en');;
  }
}