let query = new URLSearchParams(window.location.search);
let type = query.get("session");
let emailSave = query.get("email");
let unid = query.get("unid");
let infoContainer = document.getElementById("info-container");
let unidContainer = document.getElementById("unid-container");
let emailContainer = document.getElementById("email-container");
let data = {};
let regexEmail = /\w+((\.?[^ ]\w+)+)?@\w+(\.\w+)+/;
let apiUrl = "https://api.centry.digital/api:";
let dashboardLoader = Array.from(document.querySelectorAll('[data-dashboard="loader"]'));
let tabContents = Array.from(document.querySelectorAll('[data-dashboard="tab-content"]'));
// Dashboard Content
let dashboard = document.getElementById("dashboard");
let dashboardLoading0 = document.getElementById("dashboard-loading-0");
// Overview
let coName = document.getElementById("company-name-container");
let loadingBanner = document.getElementById("loading-banner");
let statusBanner = document.getElementById("status-banner");
let statusBannerSymbolIncomplete = document.getElementById(
  "status-banner-symbol-incomplete"
);
let statusBannerSymbolComplete = document.getElementById(
  "status-banner-symbol-complete"
);
let statusBannerNumber = document.getElementById("status-banner-number");
let statusBannerNumber2 = document.getElementById("status-banner-number-2");
let statusBannerHeader = document.getElementById("status-banner-header");
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
let card6 = document.getElementById("card-6");
let card1BtnStart = document.getElementById("start-incorporating-btn");
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
let card5BtnComplete = document.getElementById("overview-btn-5-complete");
let card5BtnLock = document.getElementById("overview-lock-5");
let card5BtnDraft = document.getElementById("overview-btn-5-draft");
let card6BtnComplete = document.getElementById("overview-btn-6-complete");
let card6BtnLock = document.getElementById("overview-lock-6");
let card6BtnDraft = document.getElementById("overview-btn-6-draft");
let card6BtnDraftText = document.getElementById("overview-btn-6-draft-text");
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
let cosecPlan = document.getElementById("cosec_plan");
let coBankAccBlock = document.getElementById("co-bank-account-block");
let coOptedInAlliance = document.getElementById("opted-in-alliance");
let coAllianceTabLink = document.getElementById("co-alliance-tab-link");
// Payment
let paymentBanner = document.getElementById("payment-banner");
let paymentReady = document.getElementById("payment-ready");
let paymentNotReady = document.getElementById("payment-not-ready");
let paymentLoading = document.getElementById("payment-loading");
let paymentCompleteBtn = document.getElementById("payment-complete");
let paymentCosec1 = document.getElementById("payment-cosec-1");
let paymentCosec2 = document.getElementById("payment-cosec-2");
let paymentCosecTotal = document.getElementById("payment-cosec-total");
let paymentTotalDesc = document.getElementById("payment-total-desc");
let paymentTotal = document.getElementById("payment-total");
let paymentCashBack = document.getElementById("payment-cashback");
// e-KYC
let indexEkyc = 1
let ekycBanner = document.getElementById("ekyc-banner");
let ekycEmpty = document.getElementById("ekyc-empty");
let ekycNotEmpty = document.getElementById("ekyc-not-empty");
let ekycTable = document.getElementById("ekyc-table");
let ekycCompleteBtn = document.getElementById("ekyc-complete");
// Declarations
let indexDeclaration = 1;
let indexDeclarationLoa = 1;
let declarationsBanner = document.getElementById("declarations-banner");
let declarationsEmpty = document.getElementById("declarations-empty");
let declarationsNotEmpty = document.getElementById("declarations-not-empty");
let declarationsLoiTable = document.getElementById("declarations-loi-table-body");
let declarationsS201Table = document.getElementById("declarations-s201-table-body");
let declarationsLoaTable = document.getElementById("declarations-loa-table-body");
let declarationsLoaContainer = document.getElementById("declarations-loa-container")
let declarationsCompleteBtn = document.getElementById("declarations-complete");
// Submission
let ssmBanner = document.getElementById("ssm-banner");
let ssmEmpty = document.getElementById("ssm-empty");
let ssmNotEmpty = document.getElementById("ssm-not-empty");
let ssmCompleteBtn = document.getElementById("ssm-complete");
let ssmSuccess = document.getElementById("ssm-success");
let ssmSuccessCoName = document.getElementById("ssm-success-co-name");
// Alliance Bank
let allianceStatus = document.getElementById("alliance-status");
let allianceCompleteBtn = document.getElementById("bank-account-complete");
let allianceIncorporating = document.getElementById("bank-account-incorporating-block");
let allianceIncorporatingIndicator = document.getElementById("bank-account-incorporating-indicator");
let allianceIncorporatingConnector = document.getElementById("bank-account-incorporating-connector");
let alliancePending = document.getElementById("bank-account-pending-block");
let alliancePendingIndicator = document.getElementById("bank-account-pending-indicator");
let alliancePendingConnector = document.getElementById("bank-account-pending-connector");
let allianceInProgress = document.getElementById("bank-account-in-progress-block");
let allianceInProgressIndicator = document.getElementById("bank-account-in-progress-indicator");
let allianceInProgressConnector = document.getElementById("bank-account-in-progress-connector");
let allianceQuery = document.getElementById("bank-account-query-block");
let allianceQueryIndicator = document.getElementById("bank-account-query-indicator");
let allianceQueryConnector = document.getElementById("bank-account-query-connector");
let allianceSuccess = document.getElementById("bank-account-success-block");
let allianceSuccessIndicator = document.getElementById("bank-account-success-indicator");

// Tabs
let tab1 = document.getElementById("tab-1");
let tab2 = document.getElementById("tab-2");
let tab3 = document.getElementById("tab-3");
let tab4 = document.getElementById("tab-4");
let tab5 = document.getElementById("tab-5");
let tab6 = document.getElementById("tab-6");
let tab7 = document.getElementById("tab-7");
tab1.addEventListener("click", () => tabClick(0), false);
tab2.addEventListener("click", () => tabClick(1), false);
tab3.addEventListener("click", () => tabClick(2), false);
tab4.addEventListener("click", () => tabClick(3), false);
tab5.addEventListener("click", () => tabClick(4), false);
tab6.addEventListener("click", () => tabClick(5), false);
tab7.addEventListener("click", () => tabClick(6), false);
// Page Link Buttons
let backToOverview = document.querySelectorAll('[data-button="back-to-overview"]');
let toCoDetailsTab = document.querySelectorAll('[data-button="co-details-tab"]');
let toPaymentTab = document.querySelectorAll('[data-button="payment-tab"]');
let toEkycTab = document.querySelectorAll('[data-button="ekyc-tab"]');
let toSsmTab = document.querySelectorAll('[data-button="ssm-tab"]');
let optinAlliance = document.querySelectorAll('[data-button="optin-alliance"]');
// 
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
for (i = 0; i < toSsmTab.length; i++) {
  toSsmTab[i].addEventListener("click", () => {
    tab5.click();
  });
}

if (query == "") {
  card1BtnStart.classList.remove("hide");
  // Overview
  statusBannerHeader.innerText = "Start incorporating your dream company";
  statusBannerText.innerText =
    "Complete 4 easy steps below to incorporate your dream company! Get started by clicking on the 'Start Incorporating' button below.";
  statusBannerSymbolIncomplete.classList.remove("hide");
  statusBanner.classList.remove("hide");
  p1.classList.add("in-progress");
  card1.classList.add("current");
  card1BtnStart.classList.remove("hide");
  // Company Details
  coEmpty.classList.remove("hide");
  coAllianceTabLink.addEventListener("click", () => {
    tab7.click();
  })
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
  // Unhide dashboard
  dashboard.classList.remove("hide");
  dashboardLoading0.classList.add("hide");
} else {
  if (query.get("session") && query.get("email") && query.get("unid")) {
    if (type == "resume") {
      document.title = unid + " - Incorporate Your Company Online - Centry"
      retrieveIncorporationData(emailSave, unid, true);
      coBankAccBlock.classList.remove("hide");
      for (i = 0; i < optinAlliance.length; i++) {
        optinAlliance[i].addEventListener("click", allianceOptIn);
      }
    }
  } else {
    window.location.href = `https://${window.location.hostname}/incorporation/get-started`;
  }
}

async function allianceOptIn() {
  try {
    let response = await fetch(
      `${apiUrl}incorporation/new_incorporation/alliance_opt_in`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          unid: unid,
          email_save: emailSave
        }),
      }
    );
    if (response.ok) {
      for (i = 0; i < optinAlliance.length; i++) {
        optinAlliance[i].classList.add("hide");
      }
      coOptedInAlliance.classList.remove("hide");
      paymentCashBack.classList.remove("hide");
      allianceStatus.classList.remove("hide");
    }
    } catch(error) {
      console.error(error);
    }
}

async function tabClick(tabNo) {
  if (query.get("session") && query.get("email") && query.get("unid")) {
    if (type == "resume") {
      tabContents[tabNo].classList.add("hide");
      dashboardLoader[tabNo].classList.remove("hide");
      await retrieveIncorporationData(emailSave, unid, false);
      window.scrollTo(0,0);
      dashboardLoader[tabNo].classList.add("hide");
      tabContents[tabNo].classList.remove("hide");
    }
  } else {
    window.scrollTo(0,0);
    tabContents[tabNo].classList.remove("hide");
  }
}

function errorDisplay(e) {
  e.target.classList.add("invalid-field");
  e.target.parentElement
    .querySelector(".html-embed-56")
    .classList.remove("hide");
}

async function retrieveIncorporationData(emailSave, unid, pageLoad) {
  let retrievalObject = { email: emailSave };
  try {
    let response = await fetch(
      `${apiUrl}incorporation/incorporation/${unid}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(retrievalObject),
      }
    );
    data_res = await response.json();
    let uniqueId = data_res.incorporation_data.unique_id;
    let incorporationData = data_res.incorporation_data;
    let usersToVerify = data_res.users_to_verify;
    let bankingData = data_res.banking;
    if (response.ok) {
      data.email_save = incorporationData.email_save;
      data.unique_id = incorporationData.unique_id;
      incorporationShareBtn.classList.remove("hide");
      sessionStorage.setItem(
        "incorporation-data",
        JSON.stringify(incorporationData)
      );
      unidContainer.innerText = unid;
      emailContainer.innerText = emailSave;
      infoContainer.classList.remove("hide");
      populateData(incorporationData, uniqueId, usersToVerify, pageLoad, bankingData);
      dashboard.classList.remove("hide");
      dashboardLoading0.classList.add("hide");
    } else {
      dashboardLoading0.classList.add("hide");
      loadingBanner.classList.remove("hide");
    }
  } catch (err) {
    dashboardLoading0.classList.add("hide");
    loadingBanner.classList.remove("hide");
    console.error(err);
  }
}

function populateData(incorporation_data, unique_id, users_to_verify, pageLoad, banking_data) {
  // Adjust aesthetics based on status
  let declarationsStatus = []
  users_to_verify.forEach((user)=>user.declarations.forEach((declaration)=>declarationsStatus.push(declaration.status)));
  let allDeclarationsStatusSigned = declarationsStatus.some((status) => status != "signed");
  let currentStatus = incorporation_data.status;
  let openAlliance = incorporation_data.open_alliance
  // Resetting parameters
  indexEkyc = 1
  indexDeclaration = 1;
  indexDeclarationLoa = 1;
  ekycTable.innerHTML = "";
  coDirContainer.innerHTML = "";
  coShContainer.innerHTML = "";
  declarationsLoiTable.innerHTML = "";
  declarationsS201Table.innerHTML = "";
  declarationsLoaTable.innerHTML = "";
  if (openAlliance) {
    card6BtnDraftText.innerText = "In progress";
  } else {
    card6BtnDraftText.innerText = "Opt-in";
  }
  if (pageLoad) {
    card6BtnLock.classList.add("hide");
    card6BtnDraft.addEventListener("click", () => tab7.click());
    card6BtnDraft.classList.remove("hide");
  }
  if (currentStatus == "Draft") {
    // Overview
    statusBannerNumber.innerText = "0";
    statusBannerSymbolIncomplete.classList.remove("hide");
    statusBanner.classList.remove("hide");
    p1.classList.add("in-progress");
    if (openAlliance) {
      p4.style.borderRadius = 0;
      p5.classList.remove("hide");
      statusBannerNumber2.innerText = "5";
    }
    card1.classList.add("current");
    if (pageLoad) {
      card1BtnDraft.addEventListener("click", () => tab2.click());
    }
    card1BtnDraft.classList.remove("hide");
    // Company Details
    coEditBtn.classList.remove("hide");
    coDetails.classList.remove("hide");
    // Payment
    paymentBanner.classList.remove("hide");
    paymentNotReady.classList.remove("hide");
    // e-KYC
    ekycBanner.classList.remove("hide");
    ekycEmpty.classList.remove("hide");
    // Declarations
    declarationsBanner.classList.remove("hide");
    declarationsEmpty.classList.remove("hide");
    // Submission
    ssmBanner.classList.remove("hide");
    ssmEmpty.classList.remove("hide");
    // Alliance
    if (openAlliance) {
      allianceStatus.classList.remove("hide");
    }
  } else if (currentStatus == "Submitted") {
    // Overview
    statusBannerNumber.innerText = "1";
    statusBannerSymbolIncomplete.classList.remove("hide");
    statusBanner.classList.remove("hide");
    p1.classList.add("complete");
    p1.classList.remove("in-progress");
    p2.classList.add("in-progress");
    if (openAlliance) {
      p4.style.borderRadius = 0;
      p5.classList.remove("hide");
      statusBannerNumber2.innerText = "5";
    }
    card1.classList.remove("current");
    card2.classList.add("current");
    card1BtnDraft.classList.add("hide");
    if (pageLoad) {
      card1BtnComplete.addEventListener("click", () => tab2.click());
    }
    card1BtnComplete.classList.remove("hide");
    card2BtnLock.classList.add("hide");
    if (pageLoad) {
      card2BtnDraft.addEventListener("click", () => tab3.click());
    }
      card2BtnDraft.classList.remove("hide");
    // Company Details
    coEditBtn.classList.add("hide");
    coCompleteBtn.classList.remove("hide");
    coDetails.classList.remove("hide");
    // Payment
    paymentNotReady.classList.add("hide");
    if (pageLoad) {
      paymentReady.addEventListener("click", (event) => {
        paymentReady.classList.add("hide");
        paymentLoading.classList.remove("hide");
        retrievePaymentSession(event, unique_id);
      });
    }
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
    // Alliance
    if (openAlliance) {
      allianceStatus.classList.remove("hide");
    }
  } else if (currentStatus == "Paid") {
    // Overview
    statusBannerNumber.innerText = "2";
    statusBannerSymbolIncomplete.classList.remove("hide");
    statusBanner.classList.remove("hide");
    p1.classList.add("complete");
    p2.classList.add("complete");
    p2.classList.remove("in-progress");
    p3.classList.add("in-progress");
    if (openAlliance) {
      p4.style.borderRadius = 0;
      p5.classList.remove("hide");
      statusBannerNumber2.innerText = "5";
    }
    card2.classList.remove("current");
    card3.classList.add("current");
    if (pageLoad) {
      card1BtnComplete.addEventListener("click", () => tab2.click());
    }
    card1BtnComplete.classList.remove("hide");
    card2BtnLock.classList.add("hide");
    card2BtnDraft.classList.add("hide");
    if (pageLoad) {
      card2BtnComplete.addEventListener("click", () => tab3.click());
    }
    card2BtnComplete.classList.remove("hide");
    card3BtnLock.classList.add("hide");
    if (pageLoad) {
      card3BtnDraft.addEventListener("click", () => tab4.click());
    }
    card3BtnDraft.classList.remove("hide");
    card4BtnLock.classList.add("hide");
    if (allDeclarationsStatusSigned) {
      card4.classList.add("current");
      card4BtnComplete.classList.add("hide");
      card4BtnDraft.classList.remove("hide");
    } else {
      card4BtnDraft.classList.add("hide");
      card4BtnComplete.classList.remove("hide");
    }
    if (pageLoad) {
      card4BtnDraft.addEventListener("click", () => tab5.click());
      card4BtnComplete.addEventListener("click", () => tab5.click());
    }
    // Company Details
    coCompleteBtn.classList.remove("hide");
    coDetails.classList.remove("hide");
    // Payment
    paymentReady.classList.add("hide");
    paymentCompleteBtn.classList.remove("hide");
    // e-KYC
    ekycEmpty.classList.add("hide");
    ekycBanner.classList.add("hide");
    let usersToVerify = users_to_verify;
    usersToVerify.forEach(fillEkycTable);
    ekycNotEmpty.classList.remove("hide");
    // Declarations
    declarationsEmpty.classList.add("hide");
    declarationsBanner.classList.add("hide");
    usersToVerify.forEach((item) => fillDeclarationsTable(incorporation_data, currentStatus, item));
    declarationsNotEmpty.classList.remove("hide");
    // Submission
    ssmBanner.classList.remove("hide");
    ssmEmpty.classList.remove("hide");
    // Alliance
    if (openAlliance) {
      allianceStatus.classList.remove("hide");
    }
  } else if (currentStatus == "KYC Complete") {
    // Overview
    statusBannerNumber.innerText = "3";
    statusBannerSymbolIncomplete.classList.remove("hide");
    statusBanner.classList.remove("hide");
    p1.classList.add("complete");
    p2.classList.add("complete");
    p3.classList.add("complete");
    p3.classList.remove("in-progress");
    p4.classList.add("in-progress");
    if (openAlliance) {
      p4.style.borderRadius = 0;
      p5.classList.remove("hide");
      statusBannerNumber2.innerText = "5";
    }
    card3.classList.remove("current");
    card4.classList.add("current");
    if (pageLoad) {
      card1BtnComplete.addEventListener("click", () => tab2.click());
    }
    card1BtnComplete.classList.remove("hide");
    card2BtnLock.classList.add("hide");
    if (pageLoad) {
      card2BtnComplete.addEventListener("click", () => tab3.click());
    }
    card2BtnComplete.classList.remove("hide");
    card3BtnLock.classList.add("hide");
    card3BtnDraft.classList.add("hide");
    if (pageLoad) {
      card3BtnComplete.addEventListener("click", () => tab4.click());
    }
    card3BtnComplete.classList.remove("hide");
    card4BtnLock.classList.add("hide");
    if (pageLoad) {
      card4BtnDraft.addEventListener("click", () => tab5.click());
    }
    card4BtnDraft.classList.remove("hide");
    // Company Details
    coCompleteBtn.classList.remove("hide");
    coDetails.classList.remove("hide");
    // Payment
    paymentCompleteBtn.classList.remove("hide");
    // e-KYC
    ekycCompleteBtn.classList.remove("hide");
    let usersToVerify = users_to_verify;
    usersToVerify.forEach(fillEkycTable);
    ekycNotEmpty.classList.remove("hide");
    // Declarations
    usersToVerify.forEach((item) => fillDeclarationsTable(incorporation_data, currentStatus, item));
    declarationsNotEmpty.classList.remove("hide");
    // Submission
    ssmBanner.classList.remove("hide");
    ssmEmpty.classList.remove("hide");
    // Alliance
    if (openAlliance) {
      allianceStatus.classList.remove("hide");
    }
  } else if (currentStatus == "Incorporating") {
    // Overview
    statusBanner.classList.remove("notice");
    statusBanner.classList.add("complete");
    statusBannerNumber.innerText = "4";
    statusBannerSymbolIncomplete.classList.add("hide");
    statusBannerSymbolComplete.classList.remove("hide");
    statusBannerText.innerText =
      "You have completed all the required steps to incorporate your company! Our team is now hard at work making it happen and will let you know once your company has been successfully incorporated.";
    statusBanner.classList.remove("hide");
    p1.classList.add("complete");
    p2.classList.add("complete");
    p3.classList.add("complete");
    p4.classList.remove("in-progress");
    p4.classList.add("complete");
    if (openAlliance) {
      p4.style.borderRadius = 0;
      p5.classList.remove("hide");
      statusBannerNumber2.innerText = "5";
    }
    card4.classList.remove("current");
    card5.classList.add("current");
    if (pageLoad) {
      card1BtnComplete.addEventListener("click", () => tab2.click());
    }
    card1BtnComplete.classList.remove("hide");
    card2BtnLock.classList.add("hide");
    if (pageLoad) {
      card2BtnComplete.addEventListener("click", () => tab3.click());
    }
    card2BtnComplete.classList.remove("hide");
    card3BtnLock.classList.add("hide");
    if (pageLoad) {
      card3BtnComplete.addEventListener("click", () => tab4.click());
    }
    card3BtnComplete.classList.remove("hide");
    card4BtnLock.classList.add("hide");
    card4BtnDraft.classList.add("hide");
    if (pageLoad) {
      card4BtnComplete.addEventListener("click", () => tab5.click());
    }
    card4BtnComplete.classList.remove("hide");
    card5BtnLock.classList.add("hide");
    if (pageLoad) {
      card5BtnDraft.addEventListener("click", () => tab6.click());
    }
    card5BtnDraft.classList.remove("hide");
    // Company Details
    coCompleteBtn.classList.remove("hide");
    coDetails.classList.remove("hide");
    // Payment
    paymentCompleteBtn.classList.remove("hide");
    // e-KYC
    ekycCompleteBtn.classList.remove("hide");
    let usersToVerify = users_to_verify;
    usersToVerify.forEach(fillEkycTable);
    ekycNotEmpty.classList.remove("hide");
    // Declarations
    declarationsCompleteBtn.classList.remove("hide");
    usersToVerify.forEach((item) => fillDeclarationsTable(incorporation_data, currentStatus, item));
    declarationsNotEmpty.classList.remove("hide");
    // Submission
    ssmBanner.classList.add("hide");
    ssmEmpty.classList.add("hide");
    ssmNotEmpty.classList.remove("hide");
    // Alliance
    if (openAlliance) {
      allianceStatus.classList.remove("hide");
    }
  } else if (currentStatus == "Success") {
    // Overview
    statusBannerSymbolIncomplete.classList.add("hide");
    statusBannerSymbolComplete.classList.remove("hide");
    if (openAlliance && banking_data.status != "success") {
      statusBannerNumber.innerText = "4";
      statusBannerHeader.innerText = `${incorporation_data.company_name} Sdn. Bhd. has been successfully incorporated!`;
      statusBannerText.innerText = "Hang on tight, our partners from Alliance Bank will reach out to you to get your bank account opened at your doorstep.";
    } else if (openAlliance && banking_data.status == "success") {
      statusBannerNumber.innerText = "5";
      statusBanner.classList.remove("notice");
      statusBanner.classList.add("complete");
      statusBannerHeader.innerText = `🎉 Congratulations, ${incorporation_data.company_name} Sdn. Bhd. & the bank account is fully set up!`;
      statusBannerText.innerText = "Your company setup is now complete. Go reach for the stars! ⭐️ ";
    } else {
      statusBannerNumber.innerText = "4";
      statusBanner.classList.remove("notice");
      statusBanner.classList.add("complete");
      statusBannerHeader.innerText = `🎉 Congratulations, ${incorporation_data.company_name} Sdn. Bhd. has been successfully incorporated!`;
      statusBannerText.innerText = "Hang on tight, our team will reach out to you with the next steps.";
    }
    statusBanner.classList.remove("hide");
    p1.classList.add("complete");
    p2.classList.add("complete");
    p3.classList.add("complete");
    p4.classList.add("complete");
    card5.classList.remove("current");
    if (openAlliance) {
      if (banking_data.status != "success") {
        card6.classList.add("current");
      }
    }
    if (pageLoad) {
      card1BtnComplete.addEventListener("click", () => tab2.click());
    }
    card1BtnComplete.classList.remove("hide");
    card2BtnLock.classList.add("hide");
    if (pageLoad) {
      card2BtnComplete.addEventListener("click", () => tab3.click());
    }
    card2BtnComplete.classList.remove("hide");
    card3BtnLock.classList.add("hide");
    if (pageLoad) {
      card3BtnComplete.addEventListener("click", () => tab4.click());
    }
    card3BtnComplete.classList.remove("hide");
    card4BtnLock.classList.add("hide");
    if (pageLoad) {
      card4BtnComplete.addEventListener("click", () => tab5.click());
    }
    card4BtnComplete.classList.remove("hide");
    card5BtnLock.classList.add("hide");
    card5BtnDraft.classList.add("hide");
    if (pageLoad) {
      card5BtnComplete.addEventListener("click", () => tab6.click());
    }
    if (pageLoad) {
      card6BtnComplete.addEventListener("click", () => tab7.click());
    }
    card5BtnComplete.classList.remove("hide");
    if (openAlliance) {
      p4.style.borderRadius = 0;
      p5.classList.remove("hide");
      statusBannerNumber2.innerText = "5";
      if (banking_data.status != "success") {
        p5.classList.add("in-progress");
      } else {
        card6.classList.remove("current");
        p5.classList.remove("in-progress");
        p5.classList.add("complete");
        card6BtnDraft.classList.add("hide");
        card6BtnComplete.classList.remove("hide");
      }
    }
    // Company Details
    coCompleteBtn.classList.remove("hide");
    coDetails.classList.remove("hide");
    // Payment
    paymentCompleteBtn.classList.remove("hide");
    // e-KYC
    ekycCompleteBtn.classList.remove("hide");
    let usersToVerify = users_to_verify;
    usersToVerify.forEach(fillEkycTable);
    ekycNotEmpty.classList.remove("hide");
    // Declarations
    declarationsCompleteBtn.classList.remove("hide");
    usersToVerify.forEach((item) => fillDeclarationsTable(incorporation_data, currentStatus, item));
    declarationsNotEmpty.classList.remove("hide");
    // Submission
    ssmNotEmpty.classList.add("hide");
    ssmSuccessCoName.innerText = incorporation_data.company_name + " Sdn. Bhd.";
    ssmCompleteBtn.classList.remove("hide");
    ssmSuccess.classList.remove("hide");
    // Alliance
    if (openAlliance) {
      allianceStatus.classList.remove("hide");
      if (banking_data.status == "pending") {
        allianceIncorporating.classList.add("success");
        allianceIncorporatingIndicator.classList.add("success");
        allianceIncorporatingConnector.classList.add("success");
        alliancePending.classList.add("pending");
        alliancePendingIndicator.classList.add("pending");
        alliancePendingConnector.classList.add("pending");
      } else if (banking_data.status == "meeting_scheduled") {
        allianceIncorporating.classList.add("success");
        allianceIncorporatingIndicator.classList.add("success");
        allianceIncorporatingConnector.classList.add("success");
        alliancePending.classList.add("success");
        alliancePendingIndicator.classList.add("success");
        alliancePendingConnector.classList.add("success");
      } else if (banking_data.status == "in_progress") {
        allianceIncorporating.classList.add("success");
        allianceIncorporatingIndicator.classList.add("success");
        allianceIncorporatingConnector.classList.add("success");
        alliancePending.classList.add("success");
        alliancePendingIndicator.classList.add("success");
        alliancePendingConnector.classList.add("success");
        allianceInProgress.classList.add("pending");
        allianceInProgressIndicator.classList.add("pending");
        allianceInProgressConnector.classList.add("pending");
      } else if (banking_data.status == "query") {
        allianceIncorporating.classList.add("success");
        allianceIncorporatingIndicator.classList.add("success");
        allianceIncorporatingConnector.classList.add("success");
        alliancePending.classList.add("success");
        alliancePendingIndicator.classList.add("success");
        alliancePendingConnector.classList.add("success");
        allianceInProgress.classList.add("success");
        allianceInProgressIndicator.classList.add("success");
        allianceInProgressConnector.classList.add("success");
        allianceQuery.classList.remove("hide");
        allianceQuery.classList.add("pending");
        allianceQueryIndicator.classList.add("pending");
        allianceQueryConnector.classList.add("pending");
      } else if (banking_data.status == "success") {
        allianceIncorporating.classList.add("success");
        allianceIncorporatingIndicator.classList.add("success");
        allianceIncorporatingConnector.classList.add("success");
        allianceCompleteBtn.classList.remove("hide");
        alliancePending.classList.add("success");
        alliancePendingIndicator.classList.add("success");
        alliancePendingConnector.classList.add("success");
        allianceInProgress.classList.add("success");
        allianceInProgressIndicator.classList.add("success");
        allianceInProgressConnector.classList.add("success");
        allianceQuery.classList.add("hide");
        allianceSuccess.classList.add("success");
        allianceSuccessIndicator.classList.add("success");
      }
    } else {
      allianceStatus.classList.add("hide");
    }
  }

  // Populate Data
  if (incorporation_data.company_name != "") {
    coName.innerText = incorporation_data.company_name + " Sdn. Bhd.";
  }
  // co details
  coName2.innerText = incorporation_data.company_name
    ? incorporation_data.company_name + " Sdn. Bhd."
    : "-";
  coNameExp.innerText = incorporation_data.name_explanation ? incorporation_data.name_explanation : "-";
  coNature.innerText = incorporation_data.nature_of_business ? incorporation_data.nature_of_business : "-";
  coMsic1.innerText = incorporation_data.msic_codes[0];
  coMsic2.innerText = incorporation_data.msic_codes[1];
  coMsic3.innerText = incorporation_data.msic_codes[2];
  coAdd.innerText =
    incorporation_data.company_address && incorporation_data.company_postcode && incorporation_data.company_city
      ? incorporation_data.company_address +
        ", " +
        incorporation_data.company_postcode +
        " " +
        incorporation_data.company_city +
        ", " +
        incorporation_data.company_state +
        ", " +
        incorporation_data.company_country
      : "-";
  coEmail.innerText = incorporation_data.company_email ? incorporation_data.company_email : "-";
  coPhone.innerText = incorporation_data.company_phone ? incorporation_data.company_phone : "-";
  coDetails.classList.remove("hide");
  for (let i = 0; i < incorporation_data.company_directors.length; i++) {
    coDir[i] = {};
    coDir[i].elContainer = document.createElement("div");
    coDir[i].elName = document.createElement("div");
    coDir[i].elName.classList.add("text-block-72", "text-sm");
    coDir[i].elName.innerText =
      "Legal name: " +
      (incorporation_data.company_directors[i].name ? incorporation_data.company_directors[i].name : "-");
    coDir[i].elFName = document.createElement("div");
    coDir[i].elFName.classList.add("text-block-73", "text-sm");
    coDir[i].elFName.innerText =
      "First name: " +
      (incorporation_data.company_directors[i].fname ? incorporation_data.company_directors[i].fname : "-");
    coDir[i].elLName = document.createElement("div");
    coDir[i].elLName.classList.add("text-block-73", "text-sm");
    coDir[i].elLName.innerText =
      "Last name: " +
      (incorporation_data.company_directors[i].lname ? incorporation_data.company_directors[i].lname : "-");
    coDir[i].elEmail = document.createElement("div");
    coDir[i].elEmail.classList.add("text-block-73", "text-sm");
    coDir[i].elEmail.innerText =
      "Email: " +
      (incorporation_data.company_directors[i].email ? incorporation_data.company_directors[i].email : "-");
    coDir[i].elPhone = document.createElement("div");
    coDir[i].elPhone.classList.add("text-block-73", "text-sm");
    coDir[i].elPhone.innerText =
      "Phone: " +
      (incorporation_data.company_directors[i].phone ? incorporation_data.company_directors[i].phone : "-");
    coDir[i].elCountry = document.createElement("div");
    coDir[i].elCountry.classList.add("text-block-73", "text-sm");
    coDir[i].elCountry.innerText =
      "Country of Residence: " +
      (incorporation_data.company_directors[i].country
        ? incorporation_data.company_directors[i].country
        : "-");
    coDir[i].elContainer.appendChild(coDir[i].elName);
    coDir[i].elContainer.appendChild(coDir[i].elFName);
    coDir[i].elContainer.appendChild(coDir[i].elLName);
    coDir[i].elContainer.appendChild(coDir[i].elEmail);
    coDir[i].elContainer.appendChild(coDir[i].elPhone);
    coDir[i].elContainer.appendChild(coDir[i].elCountry);
    coDirContainer.appendChild(coDir[i].elContainer);
  }
  for (let i = 0; i < incorporation_data.company_shareholders.length; i++) {
    coSh[i] = {};
    coSh[i].elContainer = document.createElement("div");
    coSh[i].elContainer2 = document.createElement("div");
    coSh[i].elContainer2.classList.add("div-block-254");
    if (incorporation_data.company_shareholders[i].type == "Individual") {
      coSh[i].elName = document.createElement("div");
      coSh[i].elName.classList.add("text-block-72", "text-sm");
      coSh[i].elName.innerText = incorporation_data.company_shareholders[i].name_individual
        ? incorporation_data.company_shareholders[i].name_individual
        : "-";
      coSh[i].elShares = document.createElement("div");
      coSh[i].elShares.classList.add("text-block-72", "text-sm");
      coSh[i].elShares.innerText =
        "Shares: " +
        (incorporation_data.company_shareholders[i].shares
          ? incorporation_data.company_shareholders[i].shares
          : "-");
      coSh[i].elFName = document.createElement("div");
      coSh[i].elFName.classList.add("text-block-73", "text-sm");
      coSh[i].elFName.innerText =
        "First name: " +
        (incorporation_data.company_shareholders[i].fname_individual
          ? incorporation_data.company_shareholders[i].fname_individual
          : "-");
      coSh[i].elLName = document.createElement("div");
      coSh[i].elLName.classList.add("text-block-73", "text-sm");
      coSh[i].elLName.innerText =
        "Last name: " +
        (incorporation_data.company_shareholders[i].lname_individual
          ? incorporation_data.company_shareholders[i].lname_individual
          : "-");
      coSh[i].elEmail = document.createElement("div");
      coSh[i].elEmail.classList.add("text-block-73", "text-sm");
      coSh[i].elEmail.innerText =
        "Email: " +
        (incorporation_data.company_shareholders[i].email
          ? incorporation_data.company_shareholders[i].email
          : "-");
      coSh[i].elPhone = document.createElement("div");
      coSh[i].elPhone.classList.add("text-block-73", "text-sm");
      coSh[i].elPhone.innerText =
        "Phone: " +
        (incorporation_data.company_shareholders[i].phone
          ? incorporation_data.company_shareholders[i].phone
          : "-");
    } else if (incorporation_data.company_shareholders[i].type == "Corporate") {
      coSh[i].elName = document.createElement("div");
      coSh[i].elName.classList.add("text-block-72", "text-sm");
      coSh[i].elName.innerText = incorporation_data.company_shareholders[i].name_corporate
        ? incorporation_data.company_shareholders[i].name_corporate
        : "-";
      coSh[i].elShares = document.createElement("div");
      coSh[i].elShares.classList.add("text-block-72", "text-sm");
      coSh[i].elShares.innerText =
        "Shares: " +
        (incorporation_data.company_shareholders[i].shares
          ? incorporation_data.company_shareholders[i].shares
          : "-");
      coSh[i].elNameRep = document.createElement("div");
      coSh[i].elNameRep.classList.add("text-block-73", "text-sm");
      coSh[i].elNameRep.innerText =
        "Representative legal name: " +
        (incorporation_data.company_shareholders[i].name_representative
          ? incorporation_data.company_shareholders[i].name_representative
          : "-");
      coSh[i].elFName = document.createElement("div");
      coSh[i].elFName.classList.add("text-block-73", "text-sm");
      coSh[i].elFName.innerText =
        "Representative first name: " +
        (incorporation_data.company_shareholders[i].fname_representative
          ? incorporation_data.company_shareholders[i].fname_representative
          : "-");
      coSh[i].elLName = document.createElement("div");
      coSh[i].elLName.classList.add("text-block-73", "text-sm");
      coSh[i].elLName.innerText =
        "Representative last name: " +
        (incorporation_data.company_shareholders[i].lname_representative
          ? incorporation_data.company_shareholders[i].lname_representative
          : "-");
      coSh[i].elEmail = document.createElement("div");
      coSh[i].elEmail.classList.add("text-block-73", "text-sm");
      coSh[i].elEmail.innerText =
        "Email: " +
        (incorporation_data.company_shareholders[i].email
          ? incorporation_data.company_shareholders[i].email
          : "-");
      coSh[i].elPhone = document.createElement("div");
      coSh[i].elPhone.classList.add("text-block-73", "text-sm");
      coSh[i].elPhone.innerText =
        "Phone: " +
        (incorporation_data.company_shareholders[i].phone
          ? incorporation_data.company_shareholders[i].phone
          : "-");
    }
    coSh[i].elContainer.appendChild(coSh[i].elContainer2);
    coSh[i].elContainer2.appendChild(coSh[i].elName);
    coSh[i].elContainer2.appendChild(coSh[i].elShares);
    if (incorporation_data.company_shareholders[i].type == "Corporate") {
      coSh[i].elContainer.appendChild(coSh[i].elNameRep);
    }
    coSh[i].elContainer.appendChild(coSh[i].elFName);
    coSh[i].elContainer.appendChild(coSh[i].elLName);
    coSh[i].elContainer.appendChild(coSh[i].elEmail);
    coSh[i].elContainer.appendChild(coSh[i].elPhone);
    coShContainer.appendChild(coSh[i].elContainer);
  }
  if (incorporation_data.cosec_plan == "all_in") {
    cosecPlan.innerText = "All-inclusive";
    paymentCosec1.innerText = "RM450"
    paymentCosec2.innerText = "RM450"
    paymentCosecTotal.innerText = "RM450"
    paymentTotal.innerText = "RM1,849"
    paymentTotalDesc.innerText = "RM1,849"
  } else if (incorporation_data.cosec_plan == "lite") {
    cosecPlan.innerText = "Lite";
    paymentCosec1.innerText = "RM480"
    paymentCosec2.innerText = "RM480"
    paymentCosecTotal.innerText = "RM480"
    paymentTotal.innerText = "RM1,679"
    paymentTotalDesc.innerText = "RM1,679"
  }
  if (incorporation_data.open_alliance) {
    for (i = 0; i < optinAlliance.length; i++) {
      optinAlliance[i].classList.add("hide");
    }
    coOptedInAlliance.classList.remove("hide");
    paymentCashBack.classList.remove("hide");
  } else {
    paymentCashBack.classList.add("hide");
    coOptedInAlliance.classList.add("hide");
    for (i = 0; i < optinAlliance.length; i++) {
      optinAlliance[i].classList.remove("hide");
    }
  }
}
// window.history.pushState({}, document.title, window.location.pathname);
async function retrievePaymentSession(event, unid) {
  let request_body = {unique_id: unid};
  try {
    let response = await fetch(
      `${apiUrl}incorporation/new_incorporation/retrieve_payment_session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request_body),
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
  let verificationLink, tableContent, tableHeading, roles;
  if (item.role.length > 1) {
    roles = "- " + item.role.join("<br>" + "- ");
  } else {
    roles = "- " + item.role;
  }
  if (indexEkyc == 1) {
    tableHeading = `<thead style="border-bottom:1px solid #e5e7eb">
                          <tr>
                            <th class="text-block-76" style="padding:0 10px 4px 0;width:40px;">No</th>
                            <th class="text-block-76" style="padding:0 10px 4px 0">Name</th>
                            <th class="text-block-76" style="padding:0 10px 4px 10px">Role(s)</th>
                            <th class="text-block-76" style="padding:0 0 4px 10px;">Verification</th>
                          </tr>
                        </thead>`;
  } else {
    tableHeading = `<thead><tr></tr></thead>`;
  }
  if (item.verified == "false" || item.verified == "pending") {
    verificationLink = `<a href=${"https://" + window.location.hostname + "/e-kyc/start?verification=" + item.verification_uuid}
                          target="_blank" style="display:flex;align-items:center;justify-content:flex-start;column-gap:4px;color:#4f46e5;">
                            <span style="text-decoration:underline;">Start verification</span>
                            <div class="html-embed-51 common-symbol">
                              <span class="material-symbols-rounded" style="font-size:18px;line-height:1.25rem;">
                                arrow_right_alt
                              </span>
                            </div>
                        </a>`;
  }else if (item.verified == "true") {
    verificationLink = `<div style="display:flex;align-items:center;justify-content:flex-start;column-gap:4px;">
                          <span style="color:#111827">Verified</span>
                          <div class="dashboard-nav common-symbol-filled complete">
                            <span class="material-symbols-rounded symbol-filled" style="font-size:14px;line-height:1.25rem;">
                              check_circle
                            </span>
                          </div>
                        </div>`;
  } else if (item.verified == "submitted") {
    verificationLink = `<span style="color:#111827">AI-automated verification in progress</span>`;
  } else {
    verificationLink = `<div style="color:#111827">Pending review</div>`;
  };
  tableContent = `${tableHeading}
                  <tbody style="width:100%">
                    <tr style="vertical-align:top;">
                      <td class="text-block-74" style="padding:4px 10px 0 0;word-wrap:normal;">${indexEkyc}</td>
                      <td class="text-block-74" style="padding:4px 10px 0 0;word-wrap:normal;">${item.legal_name}</td>
                      <td class="text-block-74" style="padding:4px 10px 0 10px;word-wrap:normal;">${roles}</td>
                      <td class="text-block-74" style="padding:4px 0 0 10px;word-wrap:normal;">${verificationLink}</td>
                    </tr>
                  </tbody>`
  ekycTable.innerHTML += tableContent;
  indexEkyc++;
}

function fillDeclarationsTable(data, currentStatus, item) {
  let statusLoi, statusS201, statusLoa;
  let checkDeclarationLoi = item.declarations.find((declaration) => {return declaration.doc_type == "letter_of_incorporation" && declaration.status != "signed"});
  let checkDeclarationS201 = item.declarations.find((declaration) => {return declaration.doc_type == "s201" && declaration.status != "signed"});
  let checkDeclarationLoa = item.declarations.find((declaration) => {return item.role.includes("Corporate Representative") && declaration.doc_type == "letter_of_authorisation" && declaration.status != "signed"});
  // if (currentStatus == "Incorporating" || currentStatus == "Success") {
  if (item.verified == "false") {
    statusLoi = `<span style="color:#4f46e5;text-decoration:underline;cursor:pointer;" onClick='tab4.click();'>Pending e-KYC</span>`;
    statusS201 = `<span style="color:#4f46e5;text-decoration:underline;cursor:pointer;" onClick='tab4.click();'>Pending e-KYC</span>`;
    statusLoa = `<span style="color:#4f46e5;text-decoration:underline;cursor:pointer;" onClick='tab4.click();'>Pending e-KYC</span>`;
  } else {
    if (item.verified != "false" && checkDeclarationLoi == null) {
      statusLoi = `<div style="display:flex;align-items:center;justify-content:flex-end;column-gap:4px;">
                    <span style="color:#111827">Completed</span>
                    <div class="dashboard-nav common-symbol-filled complete">
                      <span class="material-symbols-rounded symbol-filled" style="font-size:14px;line-height:1.25rem;">
                        check_circle
                      </span>
                    </div>
                  </div>`;
    } else {
      statusLoi = `<span>Please check your email to retrieve your </span><span style="font-weight:500;text-decoration:underline;">e-signing link</span><span>`;
    }
    if (item.verified != "false" && checkDeclarationS201 == null) {
      statusS201 = `<div style="display:flex;align-items:center;justify-content:flex-end;column-gap:4px;">
                      <span style="color:#111827">Completed</span>
                      <div class="dashboard-nav common-symbol-filled complete">
                        <span class="material-symbols-rounded symbol-filled" style="font-size:14px;line-height:1.25rem;">
                          check_circle
                        </span>
                      </div>
                    </div>`;
    } else {
      statusS201 = `<span>Please check your email to retrieve your </span><span style="font-weight:500;text-decoration:underline;">e-signing link</span><span>`;
    }
    if (item.verified != "false" && checkDeclarationLoa == null) {                  
      statusLoa = `<div style="display:flex;align-items:center;justify-content:flex-end;column-gap:4px;">
                      <span style="color:#111827">Completed</span>
                      <div class="dashboard-nav common-symbol-filled complete">
                        <span class="material-symbols-rounded symbol-filled" style="font-size:14px;line-height:1.25rem;">
                          check_circle
                        </span>
                      </div>
                    </div>`;              
    } else {
      statusLoa = `<div>Please check your email to retrieve your LoA. Once signed, kindly upload it here:</div>
                    <a href="https://e-kyc.centry.digital/upload-loa?h_declarations_session=${data.declarations_session}&h_user=${item.user_uuid}&h_email=${encodeURIComponent(data.email_save)}&h_unid=${data.unique_id}" style="display:flex;column-gap:8px;padding:5px 8px 5px 16px;border:1px solid #4f46e5;border-radius:4px;align-items:center;">
                      <span class="text-sm" style="color:#4f46e5;text-decoration:underline;">Upload signed LoA</span>
                      <div class="dashboard-nav common-symbol-filled" style="color:#4f46e5;">
                        <span class="material-symbols-rounded symbol-outline" style="font-size:18px;line-height:1.25rem;width:20px;height:20px;"">
                          upload
                        </span>
                      </div>
                    </a>`;
    }
  }
  declarationsLoiTable.innerHTML += `<tr style="vertical-align:top;">
                                      <td class="text-block-74" style="padding:4px 10px 0 0;word-wrap:normal;">${indexDeclaration}</td>
                                      <td class="text-block-74" style="padding:4px 10px 0 0;word-wrap:normal;">${item.legal_name}</td>
                                      <td class="text-block-74" style="text-align:right;padding:4px 0 0 10px;word-wrap:normal;">${statusLoi}</td>
                                    </tr>`;
  declarationsS201Table.innerHTML += `<tr style="vertical-align:top;">
                                        <td class="text-block-74" style="padding:4px 10px 0 0;word-wrap:normal;">${indexDeclaration}</td>
                                        <td class="text-block-74" style="padding:4px 10px 0 0;word-wrap:normal;">${item.legal_name}</td>
                                        <td class="text-block-74" style="text-align:right;padding:4px 0 0 10px;word-wrap:normal;">${statusS201}</td>
                                      </tr>`;
  if (item.role.includes("Corporate Representative")) {
    declarationsLoaContainer.classList.remove("hide");
    declarationsLoaTable.innerHTML += `<tr style="vertical-align:top;">
                                          <td class="text-block-74" style="padding:4px 10px 0 0;word-wrap:normal;">${indexDeclarationLoa}</td>
                                          <td class="text-block-74" style="padding:4px 10px 0 0;word-wrap:normal;">${item.legal_name}</td>
                                          <td class="text-block-74" style="text-align:right;display:flex;flex-direction:column;align-items:flex-end;padding:4px 0 0 10px;word-wrap:normal;row-gap:6px;">${statusLoa}</td>
                                        </tr>`;
    declarationsLoaTable.classList.remove("hide");
    indexDeclarationLoa++;
  }
  indexDeclaration++;
}
