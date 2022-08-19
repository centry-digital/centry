let query = new URLSearchParams(window.location.search);
let type = query.get("session");
let data;
// Overview
let coName = document.getElementById("company-name-container");
let p1 = document.getElementById("progress-1");
let p2 = document.getElementById("progress-2");
let p3 = document.getElementById("progress-3");
let p4 = document.getElementById("progress-4");
let card1BtnDraft = document.getElementById("overview-btn-1-draft");
let card1BtnComplete = document.getElementById("overview-btn-1-complete");
// Details
let coEmpty = document.getElementById("inc-details-empty");
let coDetails = document.getElementById("inc-details-not-empty");
let coEditBtn = document.getElementById("co-details-edit-btn");
let coCompleteBtn = document.getElementById("co-details-complete");
let coName2 = document.getElementById("company-name");
let coNameExp = document.getElementById("company-name-explanation");
let coNature = document.getElementById("company-nature-of-business");
let coMsic1 = document.getElementById("company-msic-1");
let coMsic2 = document.getElementById("company-msic-2");
let coMsic3 = document.getElementById("company-msic-3");
let coAdd = document.getElementById("company-address");
let coEmail = document.getElementById("company-email");
let coPhone = document.getElementById("company-phone");
let coDirContainer = document.getElementById("company-directors-container");
let coDir = [];
let coSh = [];
let coShContainer = document.getElementById("company-shareholders-container");
// Payment
let paymentReady = document.getElementById("payment-ready");
let paymentNotReady = document.getElementById("payment-not-ready");
// Tabs
let tab1 = document.getElementById("tab-1");
let tab2 = document.getElementById("tab-2");
let tab3 = document.getElementById("tab-3");
let tab4 = document.getElementById("tab-4");
let tab5 = document.getElementById("tab-5");

if (type == "resume") {
  let emailSave = query.get("email");
  let uuid = query.get("unid");
  retrieveIncorporationData(emailSave, uuid);
}

async function retrieveIncorporationData(emailSave, uuid) {
  let retrievalObject = { email: emailSave };
  try {
    let response = await fetch(
      `https://api.centry.digital/api:incorporation/incorporation/${uuid}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(retrievalObject),
      }
    );
    data = await response.json();
    if (response.ok) {
      sessionStorage.setItem("incorporation-data", JSON.stringify(data)); 
      if (data.status == "Draft") {
        populateData(data.status);
      } else if (data.status == "Submitted") {
        populateData(data.status);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

function populateData(status) {
  // Adjust aesthetics based on status
  let currentStatus = status;
  if (currentStatus == "Draft") {
    // Overview
    p1.classList.add('in-progress');
    card1BtnDraft.addEventListener("click", () => tab2.click());
    card1BtnDraft.classList.remove('hide');
    // Company Details
    coEditBtn.classList.remove('hide');
    // Payment
    paymentNotReady.classList.remove("hide");
  } else if (currentStatus == "Submitted") {
    // Overview
    p1.classList.add('complete');
    p2.classList.add('in-progress');
    card1BtnComplete.addEventListener("click", () => tab2.click());
    card1BtnComplete.classList.remove('hide');
    // Company Details
    coCompleteBtn.classList.remove('hide');
    // Payment
    paymentReady.classList.remove("hide");
  }
  
  
  // Populate Data
  if (data.company_name != "") {
    coName.innerText = data.company_name + " Sdn. Bhd.";
  }
  // co details
  coName2.innerText = data.company_name
    ? data.company_name + " Sdn. Bhd."
    : "-";
  coNameExp.innerText = data.name_explanation ? data.name_explanation : "-";
  coNature.innerText = data.nature_of_business
    ? data.nature_of_business
    : "-";
  coMsic1.innerText = data.msic_codes[0];
  coMsic2.innerText = data.msic_codes[1];
  coMsic3.innerText = data.msic_codes[2];
  coAdd.innerText =
    data.company_address && data.company_postcode && data.company_city
      ? data.company_address +
        ", " +
        data.company_postcode +
        " " +
        data.company_city +
        ", " +
        data.company_state +
        ", " +
        data.company_country
      : "-";
  coEmail.innerText = data.company_email ? data.company_email : "-";
  coPhone.innerText = data.company_phone ? data.company_phone : "-";
  coDetails.classList.remove("hide");
  for (let i = 0; i < data.company_directors.length; i++) {
    coDir[i] = {};
    coDir[i].elContainer = document.createElement("div");
    coDir[i].elName = document.createElement("div");
    coDir[i].elName.classList.add("text-block-72", "text-sm");
    coDir[i].elName.innerText =
      "Legal name: " +
      (data.company_directors[i].name
        ? data.company_directors[i].name
        : "-");
    coDir[i].elFName = document.createElement("div");
    coDir[i].elFName.classList.add("text-block-73", "text-sm");
    coDir[i].elFName.innerText =
      "First name: " +
      (data.company_directors[i].fname
        ? data.company_directors[i].fname
        : "-");
    coDir[i].elLName = document.createElement("div");
    coDir[i].elLName.classList.add("text-block-73", "text-sm");
    coDir[i].elLName.innerText =
      "Last name: " +
      (data.company_directors[i].lname
        ? data.company_directors[i].lname
        : "-");
    coDir[i].elEmail = document.createElement("div");
    coDir[i].elEmail.classList.add("text-block-73", "text-sm");
    coDir[i].elEmail.innerText =
      "Email: " +
      (data.company_directors[i].email
        ? data.company_directors[i].email
        : "-");
    coDir[i].elPhone = document.createElement("div");
    coDir[i].elPhone.classList.add("text-block-73", "text-sm");
    coDir[i].elPhone.innerText =
      "Phone: " +
      (data.company_directors[i].phone
        ? data.company_directors[i].phone
        : "-");
    coDir[i].elCountry = document.createElement("div");
    coDir[i].elCountry.classList.add("text-block-73", "text-sm");
    coDir[i].elCountry.innerText =
      "Country of Residence: " +
      (data.company_directors[i].country
        ? data.company_directors[i].country
        : "-");
    coDir[i].elContainer.appendChild(coDir[i].elName);
    coDir[i].elContainer.appendChild(coDir[i].elFName);
    coDir[i].elContainer.appendChild(coDir[i].elLName);
    coDir[i].elContainer.appendChild(coDir[i].elEmail);
    coDir[i].elContainer.appendChild(coDir[i].elPhone);
    coDir[i].elContainer.appendChild(coDir[i].elCountry);
    coDirContainer.appendChild(coDir[i].elContainer);
  }
  for (let i = 0; i < data.company_shareholders.length; i++) {
    coSh[i] = {};
    coSh[i].elContainer = document.createElement("div");
    coSh[i].elContainer2 = document.createElement("div");
    coSh[i].elContainer2.classList.add("div-block-254");
    if (data.company_shareholders[i].type == "Individual") {
      coSh[i].elName = document.createElement("div");
      coSh[i].elName.classList.add("text-block-72", "text-sm");
      coSh[i].elName.innerText =
        data.company_shareholders[i].name_individual ? data.company_shareholders[i].name_individual : "-";
      coSh[i].elShares = document.createElement("div");
      coSh[i].elShares.classList.add("text-block-72", "text-sm");
      coSh[i].elShares.innerText =
        "Shares: " + (data.company_shareholders[i].shares ? data.company_shareholders[i].shares : "-");
      coSh[i].elFName = document.createElement("div");
      coSh[i].elFName.classList.add("text-block-73", "text-sm");
      coSh[i].elFName.innerText =
        "First name: " + (data.company_shareholders[i].fname_individual ? data.company_shareholders[i].fname_individual : "-");
      coSh[i].elLName = document.createElement("div");
      coSh[i].elLName.classList.add("text-block-73", "text-sm");
      coSh[i].elLName.innerText =
        "Last name: " + (data.company_shareholders[i].lname_individual ? data.company_shareholders[i].lname_individual : "-");
      coSh[i].elEmail = document.createElement("div");
      coSh[i].elEmail.classList.add("text-block-73", "text-sm");
      coSh[i].elEmail.innerText =
        "Email: " + (data.company_shareholders[i].email ? data.company_shareholders[i].email : "-");
      coSh[i].elPhone = document.createElement("div");
      coSh[i].elPhone.classList.add("text-block-73", "text-sm");
      coSh[i].elPhone.innerText =
        "Phone: " + (data.company_shareholders[i].phone ? data.company_shareholders[i].phone : "-");
    } else if (data.company_shareholders[i].type == "Corporate") {
      coSh[i].elName = document.createElement("div");
      coSh[i].elName.classList.add("text-block-72", "text-sm");
      coSh[i].elName.innerText =
        (data.company_shareholders[i].name_corporate ? data.company_shareholders[i].name_corporate : "-");
      coSh[i].elShares = document.createElement("div");
      coSh[i].elShares.classList.add("text-block-72", "text-sm");
      coSh[i].elShares.innerText =
        "Shares: " + (data.company_shareholders[i].shares ? data.company_shareholders[i].shares : "-");
      coSh[i].elNameRep = document.createElement("div");
      coSh[i].elNameRep.classList.add("text-block-73", "text-sm");
      coSh[i].elNameRep.innerText =
        "Representative legal name: " +
        (data.company_shareholders[i].name_representative ? data.company_shareholders[i].name_representative : "-");
      coSh[i].elFName = document.createElement("div");
      coSh[i].elFName.classList.add("text-block-73", "text-sm");
      coSh[i].elFName.innerText =
        "Representative first name: " +
        (data.company_shareholders[i].fname_representative ? data.company_shareholders[i].fname_representative : "-");
      coSh[i].elLName = document.createElement("div");
      coSh[i].elLName.classList.add("text-block-73", "text-sm");
      coSh[i].elLName.innerText =
        "Representative last name: " +
        (data.company_shareholders[i].lname_representative ? data.company_shareholders[i].lname_representative : "-");
      coSh[i].elEmail = document.createElement("div");
      coSh[i].elEmail.classList.add("text-block-73", "text-sm");
      coSh[i].elEmail.innerText =
        "Email: " + (data.company_shareholders[i].email ? data.company_shareholders[i].email : "-");
      coSh[i].elPhone = document.createElement("div");
      coSh[i].elPhone.classList.add("text-block-73", "text-sm");
      coSh[i].elPhone.innerText =
        "Phone: " + (data.company_shareholders[i].phone ? data.company_shareholders[i].phone : "-");
    }
    coSh[i].elContainer.appendChild(coSh[i].elContainer2);
    coSh[i].elContainer2.appendChild(coSh[i].elName);
    coSh[i].elContainer2.appendChild(coSh[i].elShares);
    if (data.company_shareholders[i].type == "Corporate") {
      coSh[i].elContainer.appendChild(coSh[i].elNameRep);
    }
    coSh[i].elContainer.appendChild(coSh[i].elFName);
    coSh[i].elContainer.appendChild(coSh[i].elLName);
    coSh[i].elContainer.appendChild(coSh[i].elEmail);
    coSh[i].elContainer.appendChild(coSh[i].elPhone);
    coSh[i].elContainer.appendChild(coDir[i].elCountry);
    coShContainer.appendChild(coSh[i].elContainer);
  }
}
// window.history.pushState({}, document.title, window.location.pathname);