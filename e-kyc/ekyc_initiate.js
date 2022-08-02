let verification_uuid;

const query = new URLSearchParams(window.location.search);
if (query.has("verification")) {
  verification_uuid = query.get("verification");
  retrieveVerificationSubject();
}

async function retrieveVerificationSubject() {
  try {
    let response = await fetch(
      `https://api.centry.digital/api:ekyc/verify/${verification_uuid}`
    );
    let data = await response.json();
    if (response.ok) {
      saveSession(data);
      //  window.location.href = "http://" + window.location.hostname + "/e-kyc/verify";
      //	console.log(data);
    } else {
    }
  } catch (error) {
    console.error(error);
  }
}

function saveSession(retrieved_data) {
  sessionStorage.setItem("verification_data", JSON.stringify(retrieved_data));
  redirect();
}

function redirect() {
  window.location.href = "http://" + window.location.hostname + "/e-kyc/verify";
}
