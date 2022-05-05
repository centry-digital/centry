let activeTabId = "w-tabs-0-data-w-tab-0";
let currentSideNav, currentSideIcon;
let nextSideNav, nextSideIcon, nextTab;
let prevSideNav, prevSideIcon, prevTab;
let incNextButton = document.getElementById("inc-next-button");
let incPrevButton = document.getElementById("inc-prev-button");
let reviewBackButton = document.getElementById("review-page-back");

reviewBackButton.addEventListener("click", getPrevTab);
incNextButton.addEventListener("click", getNextTab);
incPrevButton.addEventListener("click", getPrevTab);

function getNextTab() {
  if (activeTabId == "w-tabs-0-data-w-tab-0") {
    nextTab = document.getElementById("w-tabs-0-data-w-tab-1");
    currentSideNav = document.getElementById("inc-sidenav-0");
    nextSideNav = document.getElementById("inc-sidenav-1");
    currentSideIcon = document.getElementById("inc-sidenav-icon-0");
    nextSideIcon = document.getElementById("inc-sidenav-icon-1");
    activeTabId = "w-tabs-0-data-w-tab-1";
  } else if (activeTabId == "w-tabs-0-data-w-tab-1") {
    nextTab = document.getElementById("w-tabs-0-data-w-tab-2");
    currentSideNav = document.getElementById("inc-sidenav-1");
    nextSideNav = document.getElementById("inc-sidenav-2");
    currentSideIcon = document.getElementById("inc-sidenav-icon-1");
    nextSideIcon = document.getElementById("inc-sidenav-icon-2");
    activeTabId = "w-tabs-0-data-w-tab-2";
  } else if (activeTabId == "w-tabs-0-data-w-tab-2") {
    nextTab = document.getElementById("w-tabs-0-data-w-tab-3");
    currentSideNav = document.getElementById("inc-sidenav-2");
    nextSideNav = document.getElementById("inc-sidenav-3");
    currentSideIcon = document.getElementById("inc-sidenav-icon-2");
    nextSideIcon = document.getElementById("inc-sidenav-icon-3");
    activeTabId = "w-tabs-0-data-w-tab-3";
  } else if (activeTabId == "w-tabs-0-data-w-tab-3") {
    nextTab = document.getElementById("w-tabs-0-data-w-tab-4");
    currentSideNav = document.getElementById("inc-sidenav-3");
    nextSideNav = document.getElementById("inc-sidenav-4");
    currentSideIcon = document.getElementById("inc-sidenav-icon-3");
    nextSideIcon = document.getElementById("inc-sidenav-icon-4");
    activeTabId = "w-tabs-0-data-w-tab-4";
  } else if (activeTabId == "w-tabs-0-data-w-tab-4") {
    nextTab = document.getElementById("w-tabs-0-data-w-tab-5");
    currentSideNav = document.getElementById("inc-sidenav-4");
    nextSideNav = document.getElementById("inc-sidenav-5");
    currentSideIcon = document.getElementById("inc-sidenav-icon-4");
    nextSideIcon = document.getElementById("inc-sidenav-icon-5");
    activeTabId = "w-tabs-0-data-w-tab-5";
  }
  nextTab.click();
  currentSideNav.classList.remove("active");
  nextSideNav.classList.add("active");
  currentSideIcon.classList.remove("active");
  nextSideIcon.classList.add("active");
  updateButtons();
}

function getPrevTab() {
  if (activeTabId == "w-tabs-0-data-w-tab-5") {
    prevTab = document.getElementById("w-tabs-0-data-w-tab-4");
    currentSideNav = document.getElementById("inc-sidenav-5");
    prevSideNav = document.getElementById("inc-sidenav-4");
    currentSideIcon = document.getElementById("inc-sidenav-icon-5");
    prevSideIcon = document.getElementById("inc-sidenav-icon-4");
    activeTabId = "w-tabs-0-data-w-tab-4";
  } else if (activeTabId == "w-tabs-0-data-w-tab-4") {
    prevTab = document.getElementById("w-tabs-0-data-w-tab-3");
    currentSideNav = document.getElementById("inc-sidenav-4");
    prevSideNav = document.getElementById("inc-sidenav-3");
    currentSideIcon = document.getElementById("inc-sidenav-icon-4");
    prevSideIcon = document.getElementById("inc-sidenav-icon-3");
    activeTabId = "w-tabs-0-data-w-tab-3";
  } else if (activeTabId == "w-tabs-0-data-w-tab-3") {
    prevTab = document.getElementById("w-tabs-0-data-w-tab-2");
    currentSideNav = document.getElementById("inc-sidenav-3");
    prevSideNav = document.getElementById("inc-sidenav-2");
    currentSideIcon = document.getElementById("inc-sidenav-icon-3");
    prevSideIcon = document.getElementById("inc-sidenav-icon-2");
    activeTabId = "w-tabs-0-data-w-tab-2";
  } else if (activeTabId == "w-tabs-0-data-w-tab-2") {
    prevTab = document.getElementById("w-tabs-0-data-w-tab-1");
    currentSideNav = document.getElementById("inc-sidenav-2");
    prevSideNav = document.getElementById("inc-sidenav-1");
    currentSideIcon = document.getElementById("inc-sidenav-icon-2");
    prevSideIcon = document.getElementById("inc-sidenav-icon-1");
    activeTabId = "w-tabs-0-data-w-tab-1";
  } else if (activeTabId == "w-tabs-0-data-w-tab-1") {
    prevTab = document.getElementById("w-tabs-0-data-w-tab-0");
    currentSideNav = document.getElementById("inc-sidenav-1");
    prevSideNav = document.getElementById("inc-sidenav-0");
    currentSideIcon = document.getElementById("inc-sidenav-icon-1");
    prevSideIcon = document.getElementById("inc-sidenav-icon-0");
    activeTabId = "w-tabs-0-data-w-tab-0";
  }
  prevTab.click();
  currentSideNav.classList.remove("active");
  prevSideNav.classList.add("active");
  currentSideIcon.classList.remove("active");
  prevSideIcon.classList.add("active");
  updateButtons();
}

function updateButtons() {
  if (activeTabId == "w-tabs-0-data-w-tab-0") {
    incPrevButton.classList.add("hide");
    reviewBackButton.classList.add("hide");
  } else if (activeTabId == "w-tabs-0-data-w-tab-4") {
    incNextButton.addEventListener("click", getSummary);
    incPrevButton.classList.remove("hide");
    reviewBackButton.classList.add("hide");
  } else if (activeTabId == "w-tabs-0-data-w-tab-5") {
    incNextButton.innerText = "Proceed to payment";
    incPrevButton.classList.add("hide");
    reviewBackButton.classList.remove("hide");
  } else {
    incNextButton.innerText = "Next";
    incPrevButton.classList.remove("hide");
    reviewBackButton.classList.add("hide");
  }
}
updateButtons();

// function getSummary() {
//   let incorporationSummary = {};

//   incorporationSummary.companyName = document.querySelector(
//     'input[data-incorporation-data="company-name"]'
//   ).value;
//   incorporationSummary.companyNameExplanation = document.querySelector(
//     'textarea[data-incorporation-data="company-name-explanation"]'
//   ).value;
//   incorporationSummary.natureOfBusiness = document.querySelector(
//     'textarea[data-incorporation-data="nature-of-business"]'
//   ).value;
//   incorporationSummary.msicCodes = [];
//   incorporationSummary.companyEmail = document.querySelector(
//     'input[data-incorporation-data="company-email"]'
//   ).value;
//   let officeNumber = document.querySelector(
//     'input[data-incorporation-data="office-number"]'
//   ).value;
//   let businessAddressLine1 = document.querySelector(
//     'input[data-incorporation-data="business-address-1"]'
//   ).value;
//   let businessAddressLine2 = document.querySelector(
//     'input[data-incorporation-data="business-address-1"]'
//   ).value;
//   let businessAddressCity = document.querySelector(
//     'input[data-incorporation-data="business-address-city"]'
//   ).value;
//   let businessAddressPostcode = document.querySelector(
//     'input[data-incorporation-data="business-address-postcode"]'
//   ).value;
//   incorporationSummary.businessAddressState = document.querySelector(
//     'select[data-incorporation-data="business-address-state"]'
//   ).value;
//   incorporationSummary.businessAddressCountry = "Malaysia";
//   incorporationSummary.directors = [];
//   incorporationSummary.shareholders = [];

//   // let incorporationSummary = {
//   //   companyName: "",
//   //   companyNameExplanation: "",
//   //   natureOfBusiness: "",
//   //   msicCodes: [],
//   //   companyEmail: "",
//   //   officeNumber: "",
//   //   businessAddressLine1: "",
//   //   businessAddressLine2: "",
//   //   businessAddressCity: "",
//   //   businessAddressPostcode: "",
//   //   businessAddressState: "",
//   //   businessAddressCountry: "",
//   //   directors: [],
//   //   shareholders: []
//   // }

//   let reviewCompanyName = document.getElementById("incorporate-review-name");
//   reviewCompanyName.innerText = companyName.value;
// }
