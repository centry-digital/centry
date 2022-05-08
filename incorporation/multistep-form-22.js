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
    incNextButton.innerText = "Next";
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
        document.getElementById("inc-prev-button").classList.remove("hide");
        document.getElementById("review-page-back").classList.add("hide");
        activeTabId = "w-tabs-0-data-w-tab-4";
        updateButtons();
        break;
    }
  });
}

//Summary
let incorporationSummary = {};
incorporationSummary.msicCodes = ["-", "-", "-"];
function getSummary() {
  incorporationSummary.directors = [];
  incorporationSummary.shareholders = [];
  document.getElementById("incorporate-summary-directors-wrapper").innerHTML = "";
  document.getElementById("incorporate-summary-shareholders-wrapper").innerHTML = "";
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
  incorporationSummary.businessAddressLine2 = document.querySelector(
    'input[data-incorporation-data="business-address-2"]'
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
      incorporationSummary.shareholderShares[shNo].value;
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
  if (incorporationSummary.businessAddressLine2 != "") {
    document.getElementById("incorporate-review-business-address").innerText =
      incorporationSummary.businessAddressLine1 +
        ", " +
        incorporationSummary.businessAddressLine2 +
        ", " +
        incorporationSummary.businessAddressPostcode +
        " " +
        incorporationSummary.businessAddressCity +
        ", " +
        incorporationSummary.businessAddressState +
        ", " +
        incorporationSummary.businessAddressCountry || "-";
  } else {
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
  }
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
    shareholderGroupLabel_shNo.classList.add("incorporate-summary-shareholder-label");
    shareholderGroupBody_shNo.classList.add("input-wrapper");
    shareholderName_shNo.classList.add("field-label");
    shareholderShares_shNo.classList.add("field-label");
    shareholderShares_shNo.innerText = incorporationSummary.shareholders[shNo].shares;
    if (incorporationSummary.shareholders[shNo].type == "Individual") {
      shareholderName_shNo.innerText = incorporationSummary.shareholderNamesInd[shNo].name;
    } else if (incorporationSummary.shareholders[shNo].type == "Corporate") {
      shareholderName_shNo.innerText = incorporationSummary.shareholderNamesCorp[shNo].name;
      shareholderRep_shNo.classList.add("summary-text", "text-sm");
      shareholderRep_shNo.innerText = incorporationSummary.shareholders[shNo].rep;
      shareholderGroupBody_shNo.appendChild(shareholderRep_shNo);
    }
    shareholderEmail_shNo.classList.add("summary-text", "text-sm");
    shareholderEmail_shNo.innerText = incorporationSummary.shareholders[shNo].email;
    shareholderPhone_shNo.classList.add("summary-text", "text-sm");
    shareholderPhone_shNo.innerText = incorporationSummary.shareholders[shNo].phone;
    
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
