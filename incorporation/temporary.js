//add shareholder
const addShareholderButton = document.getElementById("add-shareholder-button");
addShareholderButton.setAttribute("onClick", "addShareholderInputGroup()");

function addShareholderInputGroup() {
  const shareholderGroup = document.getElementById("shareholder-group");
  //Create elements
  const shareholderInputGroup = document.createElement("div");
  const inputSubGroup100Type = document.createElement("div");
  	const shareholderTypeLabel = document.createElement("label");
    //radio wrapper
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
    	shareholderTypeLabel.classList.add("field-label");
  	inputSubGroupInd.classList.add("individual-shareholder-group");
      inputSubGroup100Ind.classList.add("input-subgroup-100");
        shareholderNameLabelInd.classList.add("field-label");
        inputWrapperInd.classList.add("input-wrapper");
          shareholderNameInd.classList.add("centry-text-field", "text-sm");
    inputSubGroupCorp.classList.add("corporate-shareholder-group");
      inputSubGroup100Corp1.classList.add("input-subgroup-100");
        shareholderNameLabelCorp1.classList.add("field-label");
        inputWrapperCorp1.classList.add("input-wrapper");
          shareholderNameCorp1.classList.add("centry-text-field", "text-sm");
      inputSubGroup100Corp2.classList.add("input-subgroup-100");
        shareholderNameLabelCorp2.classList.add("field-label");
        inputWrapperCorp2.classList.add("input-wrapper");
          shareholderNameCorp2.classList.add("centry-text-field", "text-sm");
    inputSubGroup50.classList.add("input-subgroup-50");
      inputFieldBlock50_1.classList.add("input-field-block-50");
        shareholderEmailLabel.classList.add("field-label");
        inputWrapperEmail.classList.add("input-wrapper");
          shareholderEmail.classList.add("centry-text-field", "text-sm");
      inputFieldBlock50_2.classList.add("input-field-block-50");
        shareholderPhoneLabel.classList.add("field-label");
        inputWrapperPhone.classList.add("input-wrapper");
          shareholderPhone.classList.add("centry-text-field", "text-sm");
    inputSubGroup100Shares.classList.add("input-subgroup-100");
      shareholderSharesLabel.classList.add("field-label");
      inputWrapperShares.classList.add("shareholding-wrapper");
        inputShareholderSharesPct.classList.add("centry-shareholding-field", "text-sm");
        shareholderSharesNumWrapper.classList.add("number-of-shares", "text-sm");
  
  //Set input field - Shareholder Type
  shareholderTypeLabel.innerText = "Type of shareholder";
//  removeDirectorButton.type = "button";
//  removeDirectorButton.innerText = "remove";
  
  //Set input field - Individual shareholder Name
  shareholderNameLabelInd.innerText = "Shareholder name";
  shareholderNameInd.type = "text";
  shareholderNameInd.name = "Individual-shareholder-name";
  shareholderNameInd.setAttribute("data-name", "Individual-shareholder-name");
  shareholderNameInd.setAttribute("maxlength", "256");
  shareholderNameInd.setAttribute("required", "");
  
  //Set input field - Corporate shareholder name
  shareholderNameLabelCorp1.innerText = "Corporate shareholder name";
  shareholderNameCorp1.type = "text";
  shareholderNameCorp1.name = "Corporate-shareholder-name";
  shareholderNameCorp1.setAttribute("data-name", "Corporate-shareholder-name");
  shareholderNameCorp1.setAttribute("maxlength", "256");
  shareholderNameCorp1.setAttribute("required", "");
  
  //Set input field - Corporate shareholder representative
  shareholderNameLabelCorp2.innerText = "Corporate representative name";
  shareholderNameCorp2.type = "text";
  shareholderNameCorp2.name = "Corporate-representative-name";
  shareholderNameCorp2.setAttribute("data-name", "Corporate-representative-name");
  shareholderNameCorp2.setAttribute("maxlength", "256");
  shareholderNameCorp2.setAttribute("required", "");
  
  //Set input field - Shareholder Email
  shareholderEmailLabel.innerText = "Email address";
  shareholderEmail.type = "email";
  shareholderEmail.name = "Shareholder-email";
  shareholderEmail.setAttribute("data-name", "Shareholder-email");
  shareholderEmail.setAttribute("maxlength", "256");
  shareholderEmail.setAttribute("required", "");
  
  //Set input field - Shareholder Phone
  shareholderPhoneLabel.innerText = "Phone number";
  shareholderPhone.type = "phone";
  shareholderPhone.name = "Shareholder-phone";
  shareholderPhone.setAttribute("data-name", "Shareholder-phone");
  shareholderPhone.setAttribute("maxlength", "256");
  shareholderPhone.setAttribute("required", "");
  
  //Set input field - Number of Shares
  shareholderSharesLabel.innerText = "Number of Shares";
  inputShareholderSharesPct.type = "text";
  inputShareholderSharesPct.name = "Number-of-shares";
  inputShareholderSharesPct.setAttribute("data-name", "Number-of-shares");
  inputShareholderSharesPct.setAttribute("data-shareholding", "percent");
  inputShareholderSharesPct.setAttribute("maxlength", "256");
  inputShareholderSharesPct.setAttribute("required", "");
  shareholderSharesNum1.innerText = "0";
  shareholderSharesNum1.setAttribute("data-shareholding", "number");
  shareholderSharesNum2.innerText = " / 1000 shares";
  
  //Append elements to Shareholder Input Groups
  shareholderInputGroup.appendChild(inputSubGroup100Type);
  shareholderInputGroup.appendChild(inputSubGroupInd);
  shareholderInputGroup.appendChild(inputSubGroupCorp);
  shareholderInputGroup.appendChild(inputSubGroup50);
  shareholderInputGroup.appendChild(inputSubGroup100Shares);
  
  //Shareholder type
  inputSubGroup100Type.appendChild(shareholderTypeLabel);
  
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
  inputWrapperCorp1.appendChild(shareholderNameCorp2);
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
}

function removeDirector(el) {
	const director = el.target.parentElement.parentElement.parentElement;
  director.remove();
}