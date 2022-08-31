let query = new URLSearchParams(window.location.search);
let type = query.get("session");
let data, data2;
// Dashboard Content
let dashboard = document.getElementById("dashboard");
let dashboardLoading = document.getElementById("dashboard-loading");
// Overview
let coName = document.getElementById("company-name-container");
let statusBanner = document.getElementById("status-banner");
let statusBannerSymbolIncomplete = document.getElementById(
  "status-banner-symbol-incomplete"
);
let statusBannerSymbolComplete = document.getElementById(
  "status-banner-symbol-complete"
);
let statusBannerNumber = document.getElementById("status-banner-number");
let statusBannerText = document.getElementById("status-banner-text");
let p1 = document.getElementById("progress-1");
let p2 = document.getElementById("progress-2");
let p3 = document.getElementById("progress-3");
let p4 = document.getElementById("progress-4");
let p5 = document.getElementById("progress-5");
let card1 = document.getElementById("card-1");
let card2 = document.getElementById("card-2");
let card3 = document.getElementById("card-3");
let card4 = document.getElementById("card-4");
let card5 = document.getElementById("card-5");
let card1BtnDraft = document.getElementById("overview-btn-1-draft");
let card1BtnComplete = document.getElementById("overview-btn-1-complete");
let card2BtnComplete = document.getElementById("overview-btn-2-complete");
let card2BtnLock = document.getElementById("overview-lock-2");
let card2BtnDraft = document.getElementById("overview-btn-2-draft");
let card3BtnComplete = document.getElementById("overview-btn-3-complete");
let card3BtnLock = document.getElementById("overview-lock-3");
let card3BtnDraft = document.getElementById("overview-btn-3-draft");
let card4BtnComplete = document.getElementById("overview-btn-4-complete");
let card4BtnLock = document.getElementById("overview-lock-4");
let card4BtnDraft = document.getElementById("overview-btn-4-draft");
let card5BtnComplete = document.getElementById("overview-btn-4-complete");
let card5BtnLock = document.getElementById("overview-lock-4");
let card5BtnDraft = document.getElementById("overview-btn-4-draft");
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
let paymentBanner = document.getElementById("payment-banner");
let paymentReady = document.getElementById("payment-ready");
let paymentNotReady = document.getElementById("payment-not-ready");
let paymentLoading = document.getElementById("payment-loading");
let paymentCompleteBtn = document.getElementById("payment-complete");
// e-KYC
let ekycBanner = document.getElementById("ekyc-banner");
let ekycEmpty = document.getElementById("ekyc-empty");
let ekycNotEmpty = document.getElementById("ekyc-not-empty");
let ekycTable = document.getElementById("ekyc-table-body");
let ekycCompleteBtn = document.getElementById("ekyc-complete");
// Declarations
let declarationsBanner = document.getElementById("declarations-banner");
let declarationsEmpty = document.getElementById("declarations-empty");
let declarationsNotEmpty = document.getElementById("declarations-not-empty");
let declarationsTable = document.getElementById("declarations-table-body");
let declarationsCompleteBtn = document.getElementById("declarations-complete");
// SSM
let ssmBanner = document.getElementById("ssm-banner");
let ssmEmpty = document.getElementById("ssm-empty");
let ssmNotEmpty = document.getElementById("ssm-not-empty");
let ssmCompleteBtn = document.getElementById("ssm-complete");
let ssmSuccess = document.getElementById("ssm-success");
// Tabs
let tab1 = document.getElementById("tab-1");
let tab2 = document.getElementById("tab-2");
let tab3 = document.getElementById("tab-3");
let tab4 = document.getElementById("tab-4");
let tab5 = document.getElementById("tab-5");
let tab6 = document.getElementById("tab-6");
// Back to Overview Button
let backToOverview = document.querySelectorAll(
  '[data-button="back-to-overview"]'
);
let toCoDetailsTab = document.querySelectorAll(
  '[data-button="co-details-tab"]'
);
let toPaymentTab = document.querySelectorAll('[data-button="payment-tab"]');
let toEkycTab = document.querySelectorAll('[data-button="ekyc-tab"]');
for (i = 0; i < backToOverview.length; i++) {
  backToOverview[i].addEventListener("click", () => {
    tab1.click();
  });
}
for (i = 0; i < toCoDetailsTab.length; i++) {
  toCoDetailsTab[i].addEventListener("click", () => {
    tab2.click();
  });
}
for (i = 0; i < toPaymentTab.length; i++) {
  toPaymentTab[i].addEventListener("click", () => {
    tab3.click();
  });
}
for (i = 0; i < toEkycTab.length; i++) {
  toEkycTab[i].addEventListener("click", () => {
    tab4.click();
  });
}

if (query == "") {
  window.location.href =
    "https://" + window.location.hostname + "/incorporation/get-started";
}
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
    let uniqueId = data.unique_id;
    let incorporationData = data.incorporation_data;
    let usersToVerify = data.users_to_verify;
    if (response.ok) {
      sessionStorage.setItem("incorporation-data", JSON.stringify(data));
      populateData(incorporationData, uniqueId, usersToVerify);
      dashboard.classList.remove("hide");
      dashboardLoading.classList.add("hide");
    }
  } catch (err) {
    console.error(err);
  }
}

function populateData(data, unique_id, users_to_verify) {
  // Adjust aesthetics based on status
  let currentStatus = data.status;
  if (currentStatus == "Draft") {
    // Overview
    statusBannerNumber.innerText = "0";
    statusBannerSymbolIncomplete.classList.remove("hide");
    statusBanner.classList.remove("hide");
    p1.classList.add("in-progress");
    card1.classList.add("current");
    card1BtnDraft.addEventListener("click", () => tab2.click());
    card1BtnDraft.classList.remove("hide");
    // Company Details
    coEditBtn.classList.remove("hide");
    // Payment
    paymentBanner.classList.remove("hide");
    paymentNotReady.classList.remove("hide");
    // e-KYC
    ekycBanner.classList.remove("hide");
    ekycEmpty.classList.remove("hide");
    // Declarations
    declarationsBanner.classList.remove("hide");
    declarationsEmpty.classList.remove("hide");
    // SSM
    ssmBanner.classList.remove("hide");
    ssmEmpty.classList.remove("hide");
  } else if (currentStatus == "Submitted") {
    // Overview
    statusBannerNumber.innerText = "1";
    statusBannerSymbolIncomplete.classList.remove("hide");
    statusBanner.classList.remove("hide");
    p1.classList.add("complete");
    p2.classList.add("in-progress");
    card2.classList.add("current");
    card1BtnComplete.addEventListener("click", () => tab2.click());
    card1BtnComplete.classList.remove("hide");
    card2BtnLock.classList.add("hide");
    card2BtnDraft.addEventListener("click", () => tab3.click());
    card2BtnDraft.classList.remove("hide");
    // Company Details
    coCompleteBtn.classList.remove("hide");
    // Payment
    paymentReady.addEventListener("click", (event) => {
      paymentReady.classList.add("hide");
      paymentLoading.classList.remove("hide");
      retrievePaymentSession(event, unique_id);
    });
    paymentReady.classList.remove("hide");
    // e-KYC
    ekycBanner.classList.remove("hide");
    ekycEmpty.classList.remove("hide");
    // Declarations
    declarationsBanner.classList.remove("hide");
    declarationsEmpty.classList.remove("hide");
    // SSM
    ssmBanner.classList.remove("hide");
    ssmEmpty.classList.remove("hide");
  } else if (currentStatus == "Paid") {
    // Overview
    statusBannerNumber.innerText = "2";
    statusBannerSymbolIncomplete.classList.remove("hide");
    statusBanner.classList.remove("hide");
    p1.classList.add("complete");
    p2.classList.add("complete");
    p3.classList.add("in-progress");
    card3.classList.add("current");
    card1BtnComplete.addEventListener("click", () => tab2.click());
    card1BtnComplete.classList.remove("hide");
    card2BtnLock.classList.add("hide");
    card2BtnComplete.addEventListener("click", () => tab3.click());
    card2BtnComplete.classList.remove("hide");
    card3BtnLock.classList.add("hide");
    card3BtnDraft.addEventListener("click", () => tab4.click());
    card3BtnDraft.classList.remove("hide");
    // Company Details
    coCompleteBtn.classList.remove("hide");
    // Payment
    paymentCompleteBtn.classList.remove("hide");
    // e-KYC
    let usersToVerify = users_to_verify;
    usersToVerify.forEach(fillEkycTable);
    ekycNotEmpty.classList.remove("hide");
    // Declarations
    declarationsBanner.classList.remove("hide");
    declarationsEmpty.classList.remove("hide");
    // SSM
    ssmBanner.classList.remove("hide");
    ssmEmpty.classList.remove("hide");
  } else if (currentStatus == "KYC Complete") {
    // Overview
    statusBannerNumber.innerText = "3";
    statusBannerSymbolIncomplete.classList.remove("hide");
    statusBanner.classList.remove("hide");
    p1.classList.add("complete");
    p2.classList.add("complete");
    p3.classList.add("complete");
    p4.classList.add("in-progress");
    card4.classList.add("current");
    card1BtnComplete.addEventListener("click", () => tab2.click());
    card1BtnComplete.classList.remove("hide");
    card2BtnLock.classList.add("hide");
    card2BtnComplete.addEventListener("click", () => tab3.click());
    card2BtnComplete.classList.remove("hide");
    card3BtnLock.classList.add("hide");
    card3BtnComplete.addEventListener("click", () => tab4.click());
    card3BtnComplete.classList.remove("hide");
    card4BtnLock.classList.add("hide");
    card4BtnDraft.addEventListener("click", () => tab5.click());
    card4BtnDraft.classList.remove("hide");
    // Company Details
    coCompleteBtn.classList.remove("hide");
    // Payment
    paymentCompleteBtn.classList.remove("hide");
    // e-KYC
    ekycCompleteBtn.classList.remove("hide");
    let usersToVerify = users_to_verify;
    usersToVerify.forEach(fillEkycTable);
    ekycNotEmpty.classList.remove("hide");
    // Declarations
    usersToVerify.forEach((item) => fillDeclarationsTable(currentStatus, item));
    declarationsNotEmpty.classList.remove("hide");
    // SSM
    ssmBanner.classList.remove("hide");
    ssmEmpty.classList.remove("hide");
  } else if (currentStatus == "Incorporating") {
    // Overview
    statusBanner.classList.remove("notice");
    statusBanner.classList.add("complete");
    statusBannerNumber.innerText = "4";
    statusBannerSymbolComplete.classList.remove("hide");
    statusBannerText.innerText =
      "🎉 You have completed all the required steps to incorporate your company! Our team is now hard at work making it happen and will let you know once your company has been successfully incorporated.";
    statusBanner.classList.remove("hide");
    p1.classList.add("complete");
    p2.classList.add("complete");
    p3.classList.add("complete");
    p4.classList.add("complete");
    card1BtnComplete.addEventListener("click", () => tab2.click());
    card1BtnComplete.classList.remove("hide");
    card2BtnLock.classList.add("hide");
    card2BtnComplete.addEventListener("click", () => tab3.click());
    card2BtnComplete.classList.remove("hide");
    card3BtnLock.classList.add("hide");
    card3BtnComplete.addEventListener("click", () => tab4.click());
    card3BtnComplete.classList.remove("hide");
    card4BtnLock.classList.add("hide");
    card4BtnComplete.addEventListener("click", () => tab5.click());
    card4BtnComplete.classList.remove("hide");
    card5BtnLock.classList.add("hide");
    card5BtnDraft.addEventListener("click", () => tab6.click());
    card5BtnDraft.classList.remove("hide");
    // Company Details
    coCompleteBtn.classList.remove("hide");
    // Payment
    paymentCompleteBtn.classList.remove("hide");
    // e-KYC
    ekycCompleteBtn.classList.remove("hide");
    let usersToVerify = users_to_verify;
    usersToVerify.forEach(fillEkycTable);
    ekycNotEmpty.classList.remove("hide");
    // Declarations
    declarationsCompleteBtn.classList.remove("hide");
    usersToVerify.forEach((item) => fillDeclarationsTable(currentStatus, item));
    declarationsNotEmpty.classList.remove("hide");
    // SSM
    ssmBanner.classList.remove("hide");
    ssmNotEmpty.classList.remove("hide");
  } else if (currentStatus == "Success") {
    // Overview
    statusBanner.classList.remove("notice");
    statusBanner.classList.add("complete");
    statusBannerNumber.innerText = "4";
    statusBannerSymbolComplete.classList.remove("hide");
    statusBannerText.innerText =
      "🎉 You have completed all the required steps to incorporate your company! Our team is now hard at work making it happen and will let you know once your company has been successfully incorporated.";
    statusBanner.classList.remove("hide");
    p1.classList.add("complete");
    p2.classList.add("complete");
    p3.classList.add("complete");
    p4.classList.add("complete");
    card1BtnComplete.addEventListener("click", () => tab2.click());
    card1BtnComplete.classList.remove("hide");
    card2BtnLock.classList.add("hide");
    card2BtnComplete.addEventListener("click", () => tab3.click());
    card2BtnComplete.classList.remove("hide");
    card3BtnLock.classList.add("hide");
    card3BtnComplete.addEventListener("click", () => tab4.click());
    card3BtnComplete.classList.remove("hide");
    card4BtnLock.classList.add("hide");
    card4BtnComplete.addEventListener("click", () => tab5.click());
    card4BtnComplete.classList.remove("hide");
    card5BtnLock.classList.add("hide");
    card5BtnDraft.addEventListener("click", () => tab6.click());
    card5BtnDraft.classList.remove("hide");
    // Company Details
    coCompleteBtn.classList.remove("hide");
    // Payment
    paymentCompleteBtn.classList.remove("hide");
    // e-KYC
    ekycCompleteBtn.classList.remove("hide");
    let usersToVerify = users_to_verify;
    usersToVerify.forEach(fillEkycTable);
    ekycNotEmpty.classList.remove("hide");
    // Declarations
    declarationsCompleteBtn.classList.remove("hide");
    usersToVerify.forEach((item) => fillDeclarationsTable(currentStatus, item));
    declarationsNotEmpty.classList.remove("hide");
    // SSM
    ssmCompleteBtn.classList.remove("hide");
    ssmBanner.classList.remove("hide");
    ssmSuccess.classList.remove("hide");
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
  coNature.innerText = data.nature_of_business ? data.nature_of_business : "-";
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
      (data.company_directors[i].name ? data.company_directors[i].name : "-");
    coDir[i].elFName = document.createElement("div");
    coDir[i].elFName.classList.add("text-block-73", "text-sm");
    coDir[i].elFName.innerText =
      "First name: " +
      (data.company_directors[i].fname ? data.company_directors[i].fname : "-");
    coDir[i].elLName = document.createElement("div");
    coDir[i].elLName.classList.add("text-block-73", "text-sm");
    coDir[i].elLName.innerText =
      "Last name: " +
      (data.company_directors[i].lname ? data.company_directors[i].lname : "-");
    coDir[i].elEmail = document.createElement("div");
    coDir[i].elEmail.classList.add("text-block-73", "text-sm");
    coDir[i].elEmail.innerText =
      "Email: " +
      (data.company_directors[i].email ? data.company_directors[i].email : "-");
    coDir[i].elPhone = document.createElement("div");
    coDir[i].elPhone.classList.add("text-block-73", "text-sm");
    coDir[i].elPhone.innerText =
      "Phone: " +
      (data.company_directors[i].phone ? data.company_directors[i].phone : "-");
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
      coSh[i].elName.innerText = data.company_shareholders[i].name_individual
        ? data.company_shareholders[i].name_individual
        : "-";
      coSh[i].elShares = document.createElement("div");
      coSh[i].elShares.classList.add("text-block-72", "text-sm");
      coSh[i].elShares.innerText =
        "Shares: " +
        (data.company_shareholders[i].shares
          ? data.company_shareholders[i].shares
          : "-");
      coSh[i].elFName = document.createElement("div");
      coSh[i].elFName.classList.add("text-block-73", "text-sm");
      coSh[i].elFName.innerText =
        "First name: " +
        (data.company_shareholders[i].fname_individual
          ? data.company_shareholders[i].fname_individual
          : "-");
      coSh[i].elLName = document.createElement("div");
      coSh[i].elLName.classList.add("text-block-73", "text-sm");
      coSh[i].elLName.innerText =
        "Last name: " +
        (data.company_shareholders[i].lname_individual
          ? data.company_shareholders[i].lname_individual
          : "-");
      coSh[i].elEmail = document.createElement("div");
      coSh[i].elEmail.classList.add("text-block-73", "text-sm");
      coSh[i].elEmail.innerText =
        "Email: " +
        (data.company_shareholders[i].email
          ? data.company_shareholders[i].email
          : "-");
      coSh[i].elPhone = document.createElement("div");
      coSh[i].elPhone.classList.add("text-block-73", "text-sm");
      coSh[i].elPhone.innerText =
        "Phone: " +
        (data.company_shareholders[i].phone
          ? data.company_shareholders[i].phone
          : "-");
    } else if (data.company_shareholders[i].type == "Corporate") {
      coSh[i].elName = document.createElement("div");
      coSh[i].elName.classList.add("text-block-72", "text-sm");
      coSh[i].elName.innerText = data.company_shareholders[i].name_corporate
        ? data.company_shareholders[i].name_corporate
        : "-";
      coSh[i].elShares = document.createElement("div");
      coSh[i].elShares.classList.add("text-block-72", "text-sm");
      coSh[i].elShares.innerText =
        "Shares: " +
        (data.company_shareholders[i].shares
          ? data.company_shareholders[i].shares
          : "-");
      coSh[i].elNameRep = document.createElement("div");
      coSh[i].elNameRep.classList.add("text-block-73", "text-sm");
      coSh[i].elNameRep.innerText =
        "Representative legal name: " +
        (data.company_shareholders[i].name_representative
          ? data.company_shareholders[i].name_representative
          : "-");
      coSh[i].elFName = document.createElement("div");
      coSh[i].elFName.classList.add("text-block-73", "text-sm");
      coSh[i].elFName.innerText =
        "Representative first name: " +
        (data.company_shareholders[i].fname_representative
          ? data.company_shareholders[i].fname_representative
          : "-");
      coSh[i].elLName = document.createElement("div");
      coSh[i].elLName.classList.add("text-block-73", "text-sm");
      coSh[i].elLName.innerText =
        "Representative last name: " +
        (data.company_shareholders[i].lname_representative
          ? data.company_shareholders[i].lname_representative
          : "-");
      coSh[i].elEmail = document.createElement("div");
      coSh[i].elEmail.classList.add("text-block-73", "text-sm");
      coSh[i].elEmail.innerText =
        "Email: " +
        (data.company_shareholders[i].email
          ? data.company_shareholders[i].email
          : "-");
      coSh[i].elPhone = document.createElement("div");
      coSh[i].elPhone.classList.add("text-block-73", "text-sm");
      coSh[i].elPhone.innerText =
        "Phone: " +
        (data.company_shareholders[i].phone
          ? data.company_shareholders[i].phone
          : "-");
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
async function retrievePaymentSession(event, unique_id) {
  try {
    let response = await fetch(
      "https://api.centry.digital/api:incorporation/new_incorporation/retrieve_payment_session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ unique_id: unique_id }),
      }
    );
    let data = await response.json();
    if (response.ok) {
      window.location.href = data._session.payment_link;
    }
  } catch (error) {
    console.error(error);
  }
}

function fillEkycTable(item) {
  let verificationLink, roles;
  if (item.verified == "false" || item.verified == "pending") {
    verificationLink = `<a href=${
      "https://" +
      window.location.hostname +
      "/e-kyc/start?verification=" +
      item.verification_uuid
    } style="display:flex;align-items:center;justify-content:flex-end;column-gap:6px;color:#4f46e5;">
                          <span style="text-decoration:underline;">Verification link</span>
                          </a>`;
    // <div class="html-embed-51 common-symbol">
    //   <span class="material-symbols-rounded" style="font-size:20px;line-height:1.25rem;">
    //     keyboard_arrow_right
    //   </span>
    // </div>
  } else if (item.verified == "true") {
    verificationLink = `<div style="display:flex;align-items:center;justify-content:flex-end;column-gap:6px;">
                          <span style="color:#111827">Verified</span>
                          <div class="dashboard-nav common-symbol-filled complete">
                            <span class="material-symbols-rounded" style="font-size:20px;line-height:1.25rem;">
                              check_circle
                            </span>
                          </div>
                        </div>`;
  } else if (item.verified == "submitted") {
    verificationLink = `<div style="color:#4f46e5">Verification in progress</div>`;
  } else {
    verificationLink = `<div style="color:#4f46e5">Pending review</div>`;
  }

  if (item.role.length > 1) {
    roles = item.role.join(", ");
  } else {
    roles = item.role;
  }

  ekycTable.innerHTML += `<tr style="vertical-align:top;">
                            <td class="text-block-74" style="padding:4px 6px 0 0;word-wrap:normal;">${item.legal_name}</td>
                            <td class="text-block-74" style="padding:4px 6px 0 6px;word-wrap:normal;">${roles}</td>
                            <td class="text-block-74" style="text-align:right;padding:4px 0 0 6px;word-wrap:normal;">${verificationLink}</td>
                          </tr>`;
}

function fillDeclarationsTable(currentStatus, item) {
  let status = "Pending";
  if (currentStatus == "Incorporating") {
    status = `<div style="display:flex;align-items:center;justify-content:flex-end;column-gap:6px;">
                <span style="color:#111827">Completed</span>
                <div class="dashboard-nav common-symbol-filled complete">
                  <span class="material-symbols-rounded" style="font-size:20px;line-height:1.25rem;">
                    check_circle
                  </span>
                </div>
              </div>`;
  }
  declarationsTable.innerHTML = `<tr style="vertical-align:top;">
                                  <td class="text-block-74" style="padding:4px 6px 0 0;word-wrap:normal;">Letter & Declaration for Application for Registration of a Company</td>
                                  <td class="text-block-74" style="text-align:right;padding:4px 0 0 6px;color:#4f46e5;word-wrap:normal;">${status}</td>
                                </tr>`;
  declarationsTable.innerHTML += `<tr style="vertical-align:top;">
                                    <td class="text-block-74" style="padding:4px 6px 0 0;word-wrap:normal;">Section 201 & Consent to Act - ${item.legal_name}</td>
                                    <td class="text-block-74" style="text-align:right;padding:4px 0 0 6px;color:#4f46e5;word-wrap:normal;">${status}</td>
                                  </tr>`;
}
