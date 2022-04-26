let activeTabId = "w-tabs-0-data-w-tab-0";
let currentSideNav, currentSideIcon;
let nextSideNav, nextSideIcon, nextTab;
let prevSideNav, prevSideIcon, prevTab;
let incNextButton = document.getElementById("inc-next-button");
let incPrevButton = document.getElementById("inc-prev-button");
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
  }
  nextTab.click();
  currentSideNav.classList.remove("active");
  nextSideNav.classList.add("active");
  currentSideIcon.classList.remove("active");
  nextSideIcon.classList.add("active");
  hidePrevButton();
}

function getPrevTab() {
	if (activeTabId == "w-tabs-0-data-w-tab-4") {
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
  hidePrevButton();
}

function hidePrevButton() {
	if (activeTabId == "w-tabs-0-data-w-tab-0") {
  	incPrevButton.classList.add("hide");
  } else {
  	incPrevButton.classList.remove("hide");
  }
}