let shareEmailForm = document.getElementById("share-email-form");
let incorporationShareBtn = document.getElementById("incorporation-share-btn");
let shareEmailInput = document.getElementById("share-email-input");
let shareEmailBtn = document.getElementById("share-email-button");
let shareEmailLoader = document.getElementById("share-email-loader");
let shareEmailSuccess = document.getElementById("share-email-success");
let copyLinkBtn = document.getElementById("share-link-copy");
let copiedLinkBtn = document.getElementById("share-link-copied");
let closeSharePopupBtn = document.getElementById("close-share-popup-btn");
let sharePopup = document.getElementById("share-popup");
let urlShare;
shareEmailForm.addEventListener("keypress", (e) => {
	if (e.key =="Enter") {
  	e.preventDefault();
    if (!shareEmailBtn.classList.contains("disabled")) {
    	shareEmailBtn.click();
    }
  }
})
shareEmailInput.addEventListener("keyup", validateShareEmail);
incorporationShareBtn.addEventListener("click", openSharePopup);
copyLinkBtn.addEventListener("click", shareLinkCopy);
closeSharePopupBtn.addEventListener("click", closeSharePopup);
function openSharePopup() {
	sharePopup.classList.remove("hide");
  urlShare = `https://www.centry.digital/incorporation/dashboard?session=resume&email=${encodeURIComponent(data.email_save)}&unid=${data.unique_id}`
}
function shareLinkCopy() {
  navigator.clipboard.writeText(urlShare);
	copyLinkBtn.classList.add("hide");
  copiedLinkBtn.classList.remove("hide");
	setTimeout(resetCopyBtn, 2500);
}
function resetCopyBtn() {
	copyLinkBtn.classList.remove("hide");
  copiedLinkBtn.classList.add("hide");
}
function closeSharePopup() {
	console.log("trigger");
  sharePopup.classList.add("hide");
}
function validateShareEmail(e) {
	if (!regexEmail.test(e.target.value)) {
  	errorDisplay(e);
    shareEmailBtn.classList.add("disabled");
  } else {
  	shareEmailBtn.classList.remove("disabled");
    shareEmailBtn.addEventListener("click", clickShare);
    e.target.classList.remove("invalid-field");
    e.target.parentElement
      .querySelector(".html-embed-56")
      .classList.add("hide");
  }
}
async function clickShare() {
	shareEmailBtn.classList.add("hide");
  shareEmailLoader.classList.remove("hide");
  let share_object = {};
  share_object.email_share = shareEmailInput.value;
  share_object.url_share = urlShare;
  share_object.email_save = data.email_save;
  share_object.unid = data.unique_id;
  try {
  	let response = await fetch(apiUrl + "incorporation/draft/share", {
    	method: "POST",
      headers: {
      	"Content-Type": "application/json",
      },
      body: JSON.stringify(share_object),
    });
    let data = await response.json();
    if (response.ok) {
    	setTimeout(() => {
      	shareEmailSuccess.classList.remove("hide");
        shareEmailLoader.classList.add("hide");
        setTimeout(closeSharePopup, 1500);
      }, 1000)
    }
  } catch (error) {
  	console.error(error);
  }
}
function closeSharePopup() {
	sharePopup.classList.add("hide");
  shareEmailInput.value = "";
  shareEmailInput.classList.remove("invalid-field");
  shareEmailInput.parentElement
  	.querySelector(".html-embed-56")
    .classList.add("hide");
  shareEmailSuccess.classList.add("hide");
  shareEmailBtn.removeEventListener("click", clickShare);
  shareEmailBtn.classList.add("disabled");
  shareEmailBtn.classList.remove("hide");
}