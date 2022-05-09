let activeTabId = "w-tabs-0-data-w-tab-0";
let currentSideNav, currentSideIcon;
let nextSideNav, nextSideIcon, nextTab;
let prevSideNav, prevSideIcon, prevTab;
let incNextButton = document.getElementById("inc-next-button");
let incPrevButton = document.getElementById("inc-prev-button");

// incNextButton.addEventListener("click", getNextTab);
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
    incNextButton.addEventListener("click", getNextTab);
    incNextButton.style.cursor = "pointer";
    incNextButton.classList.remove("button-2-disabled");
    incNextButton.classList.add("button-2");
    incNextButton.innerText = "Next";
    incPrevButton.classList.add("hide");
  } else if (activeTabId == "w-tabs-0-data-w-tab-4") {
    validateInput();
    incNextButton.innerText = "Next";
  } else if (activeTabId == "w-tabs-0-data-w-tab-5") {
    document.getElementById("inc-sidenav-5").classList.remove("hide");
    incNextButton.addEventListener("click", getNextTab);
    incNextButton.innerText = "Proceed to payment";
  } else {
    incNextButton.addEventListener("click", getNextTab);
    incNextButton.style.cursor = "pointer";
    incNextButton.classList.remove("button-2-disabled");
    incNextButton.classList.add("button-2");
    incNextButton.innerText = "Next";
    incPrevButton.classList.remove("hide");
  }
}
updateButtons();

//Format sidenav
let incorporationSideNavClickable = document.querySelectorAll(
  "[data-incorporation-sidenav-clickable]"
);
let incorporationSideNavUnclickable = document.querySelectorAll(
  "[data-incorporation-sidenav-unclickable]"
);
let incorporationSideNavIcon = document.querySelectorAll(
  "[data-incorporation-sidenav-icon]"
);
for (const tab of incorporationSideNavClickable) {
  tab.style.cursor = "pointer";
  tab.addEventListener("click", () => {
    let sidenavTab = tab.getAttribute("data-incorporation-sidenav-clickable");
    let n;
    switch (sidenavTab) {
      case "0":
        n = 0;
        document.getElementById("w-tabs-0-data-w-tab-0").click();
        for (const t of incorporationSideNavClickable) {
          t.classList.remove("active");
        }
        tab.classList.add("active");
        for (const icon of incorporationSideNavIcon) {
          icon.classList.remove("active");
        }
        incorporationSideNavIcon[n].classList.add("active");
        activeTabId = "w-tabs-0-data-w-tab-0";
        updateButtons();
        break;
      case "1":
        n = 1;
        document.getElementById("w-tabs-0-data-w-tab-1").click();
        for (const t of incorporationSideNavClickable) {
          t.classList.remove("active");
        }
        tab.classList.add("active");
        for (const icon of incorporationSideNavIcon) {
          icon.classList.remove("active");
        }
        incorporationSideNavIcon[n].classList.add("active");
        activeTabId = "w-tabs-0-data-w-tab-1";
        updateButtons();
        break;
      case "2":
        n = 2;
        document.getElementById("w-tabs-0-data-w-tab-2").click();
        for (const t of incorporationSideNavClickable) {
          t.classList.remove("active");
        }
        tab.classList.add("active");
        for (const icon of incorporationSideNavIcon) {
          icon.classList.remove("active");
        }
        incorporationSideNavIcon[n].classList.add("active");
        activeTabId = "w-tabs-0-data-w-tab-2";
        updateButtons();
        break;
      case "3":
        n = 3;
        document.getElementById("w-tabs-0-data-w-tab-3").click();
        for (const t of incorporationSideNavClickable) {
          t.classList.remove("active");
        }
        tab.classList.add("active");
        for (const icon of incorporationSideNavIcon) {
          icon.classList.remove("active");
        }
        incorporationSideNavIcon[n].classList.add("active");
        activeTabId = "w-tabs-0-data-w-tab-3";
        updateButtons();
        break;
      case "4":
        n = 4;
        document.getElementById("w-tabs-0-data-w-tab-4").click();
        for (const t of incorporationSideNavClickable) {
          t.classList.remove("active");
        }
        tab.classList.add("active");
        for (const icon of incorporationSideNavIcon) {
          icon.classList.remove("active");
        }
        incorporationSideNavIcon[n].classList.add("active");
        activeTabId = "w-tabs-0-data-w-tab-4";
        updateButtons();
        break;
      case "5":
        n = 5;
        document.getElementById("w-tabs-0-data-w-tab-5").click();
        getSummary();
        for (const t of incorporationSideNavClickable) {
          t.classList.remove("active");
        }
        tab.classList.add("active");
        for (const icon of incorporationSideNavIcon) {
          icon.classList.remove("active");
        }
        incorporationSideNavIcon[n].classList.add("active");
        activeTabId = "w-tabs-0-data-w-tab-5";
        updateButtons();
        break;
    }
  });
}

// Validation
function validateInput() {
  let flag_1 = incorporationSummary.companyName ? true : false;
  let flag_2 = incorporationSummary.companyNameExplanation ? true : false;
  let flag_3 = incorporationSummary.natureOfBusiness ? true : false;
  let flag_4 = !(
    incorporationSummary.msicCodes[0] === "-" ||
    incorporationSummary.msicCodes[1] === "-" ||
    incorporationSummary.msicCodes[2] === "-"
  );
  let flag_5 = incorporationSummary.companyEmail ? true : false;
  let flag_6 = incorporationSummary.officeNumber ? true : false;
  let flag_7 = incorporationSummary.businessAddressLine1 ? true : false;
  let flag_8 = incorporationSummary.businessAddressCity ? true : false;
  let flag_9 = incorporationSummary.businessAddressPostcode ? true : false;
  let flag_10 = incorporationSummary.businessAddressState ? true : false;
  let flag_11 = false;
  for (let dirNo = 0; dirNo < incorporationSummary.numberOfDirectors; dirNo++) {
    if (incorporationSummary.directors[dirNo].name != "") {
      flag_11 = true;
    } else {
      flag_11 = false;
      break;
    }
  }
  let flag_12 = false;
  for (let dirNo = 0; dirNo < incorporationSummary.numberOfDirectors; dirNo++) {
    if (incorporationSummary.directors[dirNo].email != "") {
      flag_12 = true;
    } else {
      flag_12 = false;
      break;
    }
  }
  let flag_13 = false;
  for (let dirNo = 0; dirNo < incorporationSummary.numberOfDirectors; dirNo++) {
    if (incorporationSummary.directors[dirNo].phone != "") {
      flag_13 = true;
    } else {
      flag_13 = false;
      break;
    }
  }
  let flag_14 = false;
  for (let dirNo = 0; dirNo < incorporationSummary.numberOfDirectors; dirNo++) {
    if (incorporationSummary.directors[dirNo].country != "") {
      flag_14 = true;
    } else {
      flag_14 = false;
      break;
    }
  }
  let flag_15, flag_16, flag_17, flag_18, flag_19;
  for (let shNo = 0; shNo < incorporationSummary.numberOfShareholders; shNo++) {
    if (incorporationSummary.shareholders[shNo].type == "Individual") {
      flag_15 = false;
      if (incorporationSummary.shareholders[shNo].name != "") {
        flag_15 = true;
      } else {
        flag_15 = false;
        break;
      }
      flag_16 = true;
      flag_17 = false;
      if (incorporationSummary.shareholders[shNo].email != "") {
        flag_17 = true;
      } else {
        flag_17 = false;
        break;
      }
      flag_18 = false;
      if (incorporationSummary.shareholders[shNo].phone != "") {
        flag_18 = true;
      } else {
        flag_18 = false;
        break;
      }
      flag_19 = false;
      if (incorporationSummary.shareholders[shNo].shares != "") {
        flag_19 = true;
      } else {
        flag_19 = false;
        break;
      }
    } else if (incorporationSummary.shareholders[shNo].type == "Corporate") {
      flag_15 = false;
      if (incorporationSummary.shareholders[shNo].name != "") {
        flag_15 = true;
      } else {
        flag_15 = false;
        break;
      }
      flag_16 = false;
      if (incorporationSummary.shareholders[shNo].rep != "") {
        flag_16 = true;
      } else {
        flag_16 = false;
        break;
      }
      flag_17 = false;
      if (incorporationSummary.shareholders[shNo].email != "") {
        flag_17 = true;
      } else {
        flag_17 = false;
        break;
      }
      flag_18 = false;
      if (incorporationSummary.shareholders[shNo].phone != "") {
        flag_18 = true;
      } else {
        flag_18 = false;
        break;
      }
      flag_19 = false;
      if (incorporationSummary.shareholders[shNo].shares != "") {
        flag_19 = true;
      } else {
        flag_19 = false;
        break;
      }
    }
  }

  let inputsValidity =
    flag_1 &&
    flag_2 &&
    flag_3 &&
    flag_4 &&
    flag_5 &&
    flag_6 &&
    flag_7 &&
    flag_8 &&
    flag_9 &&
    flag_10 &&
    flag_11 &&
    flag_12 &&
    flag_13 &&
    flag_14 &&
    flag_15 &&
    flag_16 &&
    flag_17 &&
    flag_18 &&
    flag_19;

  if (inputsValidity) {
    incNextButton.addEventListener("click", getSummary);
    incNextButton.style.cursor = "pointer";
    incNextButton.classList.remove("button-2-disabled");
    incNextButton.classList.add("button-2");
  } else {
    incNextButton.style.pointerEvents = "none";
    incNextButton.style.cursor = "not-allowed";
    incNextButton.classList.remove("button-2");
    incNextButton.classList.add("button-2-disabled");
  }
}

//Summary
let incorporationSummary = {};
incorporationSummary.msicCodes = ["-", "-", "-"];
function getSummary() {
  incorporationSummary.directors = [];
  incorporationSummary.shareholders = [];
  document.getElementById("incorporate-summary-directors-wrapper").innerHTML =
    "";
  document.getElementById(
    "incorporate-summary-shareholders-wrapper"
  ).innerHTML = "";
  incorporationSummary.companyName = document.querySelector(
    'input[data-incorporation-data="company-name"]'
  ).value;
  incorporationSummary.companyNameExplanation = document.querySelector(
    'textarea[data-incorporation-data="company-name-explanation"]'
  ).value;
  incorporationSummary.natureOfBusiness = document.querySelector(
    'textarea[data-incorporation-data="nature-of-business"]'
  ).value;
  incorporationSummary.companyEmail = document.querySelector(
    'input[data-incorporation-data="company-email"]'
  ).value;
  incorporationSummary.officeNumber = document.querySelector(
    'input[data-incorporation-data="office-number"]'
  ).value;
  incorporationSummary.businessAddressLine1 = document.querySelector(
    'input[data-incorporation-data="business-address-1"]'
  ).value;
  incorporationSummary.businessAddressCity = document.querySelector(
    'input[data-incorporation-data="business-address-city"]'
  ).value;
  incorporationSummary.businessAddressPostcode = document.querySelector(
    'input[data-incorporation-data="business-address-postcode"]'
  ).value;
  incorporationSummary.businessAddressState = document.querySelector(
    'select[data-incorporation-data="business-address-state"]'
  ).value;
  incorporationSummary.businessAddressCountry = "Malaysia";
  incorporationSummary.numberOfDirectors = document.querySelectorAll(
    '[data-incorporation-data="director"]'
  ).length;
  incorporationSummary.directorNames = document.querySelectorAll(
    'input[data-incorporation-data="director-name"]'
  );
  incorporationSummary.directorEmails = document.querySelectorAll(
    'input[data-incorporation-data="director-email"]'
  );
  incorporationSummary.directorPhones = document.querySelectorAll(
    'input[data-incorporation-data="director-phone"]'
  );
  incorporationSummary.directorCountries = document.querySelectorAll(
    'select[data-incorporation-data="director-country"]'
  );
  for (let dirNo = 0; dirNo < incorporationSummary.numberOfDirectors; dirNo++) {
    incorporationSummary.directors.push({});
    incorporationSummary.directors[dirNo].name =
      incorporationSummary.directorNames[dirNo].value;
    incorporationSummary.directors[dirNo].email =
      incorporationSummary.directorEmails[dirNo].value;
    incorporationSummary.directors[dirNo].phone =
      incorporationSummary.directorPhones[dirNo].value;
    incorporationSummary.directors[dirNo].country =
      incorporationSummary.directorCountries[dirNo].value;
  }
  incorporationSummary.numberOfShareholders = document.querySelectorAll(
    '[data-incorporation-data="shareholder"]'
  ).length;
  incorporationSummary.shareholderType = document.querySelectorAll(
    'input[data-incorporation-data="shareholder-type-hidden"]'
  );
  incorporationSummary.shareholderNamesInd = document.querySelectorAll(
    'input[data-incorporation-data="individual-shareholder-name"]'
  );
  incorporationSummary.shareholderNamesCorp = document.querySelectorAll(
    'input[data-incorporation-data="corporate-shareholder-name"]'
  );
  incorporationSummary.shareholderReps = document.querySelectorAll(
    'input[data-incorporation-data="corporate-representative-name"]'
  );

  incorporationSummary.shareholderEmails = document.querySelectorAll(
    'input[data-incorporation-data="shareholder-email"]'
  );
  incorporationSummary.shareholderPhones = document.querySelectorAll(
    'input[data-incorporation-data="shareholder-phone"]'
  );
  incorporationSummary.shareholderShares = document.querySelectorAll(
    'input[data-incorporation-data="number-of-shares"]'
  );
  for (let shNo = 0; shNo < incorporationSummary.numberOfShareholders; shNo++) {
    incorporationSummary.shareholders.push({});
    incorporationSummary.shareholders[shNo].type =
      incorporationSummary.shareholderType[shNo].value;
    incorporationSummary.shareholderNamesInd[shNo].name =
      incorporationSummary.shareholderNamesInd[shNo].value;
    incorporationSummary.shareholderNamesCorp[shNo].name =
      incorporationSummary.shareholderNamesCorp[shNo].value;
    incorporationSummary.shareholders[shNo].rep =
      incorporationSummary.shareholderReps[shNo].value;
    incorporationSummary.shareholders[shNo].email =
      incorporationSummary.shareholderEmails[shNo].value;
    incorporationSummary.shareholders[shNo].phone =
      incorporationSummary.shareholderPhones[shNo].value;
    incorporationSummary.shareholders[shNo].shares =
      incorporationSummary.shareholderShares[shNo].value;
  }

  // Fill in summary section
  document.getElementById("incorporate-review-name").innerText =
    incorporationSummary.companyName || "-";
  document.getElementById("incorporate-review-name-explanation").innerText =
    incorporationSummary.companyNameExplanation || "-";
  document.getElementById("incorporate-review-business-address").innerText =
    incorporationSummary.businessAddressLine1 +
      ", " +
      incorporationSummary.businessAddressPostcode +
      " " +
      incorporationSummary.businessAddressCity +
      ", " +
      incorporationSummary.businessAddressState +
      ", " +
      incorporationSummary.businessAddressCountry || "-";

  document.getElementById("incorporate-review-company-email").innerText =
    incorporationSummary.companyEmail || "-";
  document.getElementById("incorporate-review-company-phone").innerText =
    incorporationSummary.officeNumber || "-";
  document.getElementById("incorporate-review-nature-of-business").innerText =
    incorporationSummary.natureOfBusiness || "-";
  document.getElementById("incorporate-review-msic-1").innerText =
    incorporationSummary.msicCodes[0] || "-";
  document.getElementById("incorporate-review-msic-2").innerText =
    incorporationSummary.msicCodes[1] || "-";
  document.getElementById("incorporate-review-msic-3").innerText =
    incorporationSummary.msicCodes[2] || "-";

  //Fill in director section
  const summaryDirectorsWrapper = document.getElementById(
    "incorporate-summary-directors-wrapper"
  );
  for (let dirNo = 0; dirNo < incorporationSummary.numberOfDirectors; dirNo++) {
    const directorGroup_dirNo = document.createElement("div");
    const directorGroupInner_dirNo = document.createElement("div");
    const directorName_dirNo = document.createElement("div");
    const directorEmail_dirNo = document.createElement("div");
    const directorPhone_dirNo = document.createElement("div");
    const directorCountry_dirNo = document.createElement("div");
    directorGroup_dirNo.classList.add("incorporate-summary-director");
    directorGroupInner_dirNo.classList.add("input-subgroup-100");
    directorName_dirNo.classList.add("field-label");
    directorName_dirNo.innerText = incorporationSummary.directors[dirNo].name;
    directorEmail_dirNo.classList.add("summary-text", "text-sm");
    directorEmail_dirNo.innerText = incorporationSummary.directors[dirNo].email;
    directorPhone_dirNo.classList.add("summary-text", "text-sm");
    directorPhone_dirNo.innerText = incorporationSummary.directors[dirNo].phone;
    directorCountry_dirNo.classList.add("summary-text", "text-sm");
    directorCountry_dirNo.innerText =
      incorporationSummary.directors[dirNo].country;
    summaryDirectorsWrapper.appendChild(directorGroup_dirNo);
    directorGroup_dirNo.appendChild(directorGroupInner_dirNo);
    directorGroupInner_dirNo.appendChild(directorName_dirNo);
    directorGroupInner_dirNo.appendChild(directorEmail_dirNo);
    directorGroupInner_dirNo.appendChild(directorPhone_dirNo);
    directorGroupInner_dirNo.appendChild(directorCountry_dirNo);
  }

  //Fill in shareholder section
  const summaryShareholdersWrapper = document.getElementById(
    "incorporate-summary-shareholders-wrapper"
  );
  for (let shNo = 0; shNo < incorporationSummary.numberOfShareholders; shNo++) {
    const shareholderGroup_shNo = document.createElement("div");
    const shareholderGroupInner_shNo = document.createElement("div");
    const shareholderGroupLabel_shNo = document.createElement("div");
    const shareholderGroupBody_shNo = document.createElement("div");
    const shareholderName_shNo = document.createElement("div");
    const shareholderShares_shNo = document.createElement("div");
    const shareholderRep_shNo = document.createElement("div");
    const shareholderEmail_shNo = document.createElement("div");
    const shareholderPhone_shNo = document.createElement("div");
    shareholderGroup_shNo.classList.add("incorporate-summary-shareholder");
    shareholderGroupInner_shNo.classList.add("input-subgroup-100");
    shareholderGroupLabel_shNo.classList.add(
      "incorporate-summary-shareholder-label"
    );
    shareholderGroupBody_shNo.classList.add("input-wrapper");
    shareholderName_shNo.classList.add("field-label");
    shareholderShares_shNo.classList.add("field-label");
    shareholderShares_shNo.innerText =
      incorporationSummary.shareholders[shNo].shares;
    if (incorporationSummary.shareholders[shNo].type == "Individual") {
      incorporationSummary.shareholders[shNo].name =
        incorporationSummary.shareholderNamesInd[shNo].name;
      shareholderName_shNo.innerText =
        incorporationSummary.shareholderNamesInd[shNo].name;
    } else if (incorporationSummary.shareholders[shNo].type == "Corporate") {
      incorporationSummary.shareholders[shNo].name =
        incorporationSummary.shareholderNamesCorp[shNo].name;
      shareholderName_shNo.innerText =
        incorporationSummary.shareholderNamesCorp[shNo].name;
      shareholderRep_shNo.classList.add("summary-text", "text-sm");
      shareholderRep_shNo.innerText =
        incorporationSummary.shareholders[shNo].rep;
      shareholderGroupBody_shNo.appendChild(shareholderRep_shNo);
    }
    shareholderEmail_shNo.classList.add("summary-text", "text-sm");
    shareholderEmail_shNo.innerText =
      incorporationSummary.shareholders[shNo].email;
    shareholderPhone_shNo.classList.add("summary-text", "text-sm");
    shareholderPhone_shNo.innerText =
      incorporationSummary.shareholders[shNo].phone;

    summaryShareholdersWrapper.appendChild(shareholderGroup_shNo);
    shareholderGroup_shNo.appendChild(shareholderGroupInner_shNo);
    shareholderGroupInner_shNo.appendChild(shareholderGroupLabel_shNo);
    shareholderGroupInner_shNo.appendChild(shareholderGroupBody_shNo);
    shareholderGroupLabel_shNo.appendChild(shareholderName_shNo);
    shareholderGroupLabel_shNo.appendChild(shareholderShares_shNo);
    shareholderGroupBody_shNo.appendChild(shareholderEmail_shNo);
    shareholderGroupBody_shNo.appendChild(shareholderPhone_shNo);
  }
}
getSummary();
