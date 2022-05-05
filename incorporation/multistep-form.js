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

let incorporationSideNav = document.querySelectorAll("[data-incorporation-sidenav]");
let incorporationSideNavIcon = document.querySelectorAll("[data-incorporation-sidenav-icon]");
for (const tab of incorporationSideNav) {
	tab.style.cursor = "pointer";
  tab.addEventListener("click", () => {
    let sidenavTab = tab.getAttribute("data-incorporation-sidenav");
    let n;
    switch(sidenavTab) {
    	case "0":
        n = 0;
        document.getElementById("w-tabs-0-data-w-tab-0").click();
        for (const t of incorporationSideNav) {
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
        for (const t of incorporationSideNav) {
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
        for (const t of incorporationSideNav) {
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
        for (const t of incorporationSideNav) {
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
        for (const t of incorporationSideNav) {
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
      case "5":
        n = 5;
        document.getElementById("w-tabs-0-data-w-tab-5").click();
        for (const t of incorporationSideNav) {
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
    };
  });
}