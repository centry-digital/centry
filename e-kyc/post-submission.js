let verification_object = {};
let sessionToken = sessionStorage.getItem("token");
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
  if (query.get("manual")) {
    verification_object.verification_uuid = query.get("verification");
    verification_object.manual_verification = query.get("manual");
    verification_object.first_name = query.get("fname");
    verification_object.last_name = query.get("lname");
    verification_object.dob = query.get("dob");
    verification_object.nationality = query.get("nationality");
    submitVerification(sessionToken);

    document.getElementById("e-kyc-container").classList.add("hide");
    document.getElementById("manual-container").classList.remove("hide");
  } else {
    document.getElementById("e-kyc-container").classList.remove("hide");
    document.getElementById("manual-container").classList.add("hide");
  }
}

async function submitVerification(token) {
  try {
    let response = await fetch(
      "https://api.centry.digital/api:ekyc/verify/submit",
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
          "Access-Control-Allow-Headers": "Authorization",
          "Authorization": "Bearer " + token,
        },
        body: JSON.stringify(verification_object),
      }
    );
    let data = await response.json();
    window.location.href = data.response.result.verification.url;
  } catch (error) {
    console.error(error);
  }
}