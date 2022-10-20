document.getElementById("noscript-notice").classList.add("hide");
document.getElementById("ekyc-container").classList.remove("hide");
let verification_object = {};
let sessionToken;
const query = new URLSearchParams(window.location.search);
if (
  query.has("verification") &&
  query.has("token") &&
  query.has("manual") &&
  query.has("fname") &&
  query.has("lname") &&
  query.has("dob") &&
  query.has("nationality")
) {
  if (query.get("manual") == "false") {
    verification_object.verification_uuid = query.get("verification");
    verification_object.manual_verification = query.get("manual");
    verification_object.first_name = query.get("fname");
    verification_object.last_name = query.get("lname");
    verification_object.dob = query.get("dob");
    verification_object.nationality = query.get("nationality");
    // verification_object.unique_id = query.get("unique_id");
    // verification_object.email_save = query.get("email_save");
    sessionToken = query.get("token");
    submitVerification(sessionToken, verification_object.verification_uuid);

    document.getElementById("ekyc-container").classList.remove("hide");
    document.getElementById("manual-container").classList.add("hide");
  } else {
    document.getElementById("ekyc-container").classList.add("hide");
    document.getElementById("manual-container").classList.remove("hide");
  }
}

async function submitVerification(token,uuid) {
  try {
    let response = await fetch(
      "https://api.centry.digital/api:ekyc/verify/submit",
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify(verification_object),
      }
    );
    let data = await response.json();
    console.log(data);
    window.location.href = data.response.result.verification.url;
  } catch (error) {
    console.error(error);
  }
}