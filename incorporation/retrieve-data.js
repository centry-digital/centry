let data = sessionStorage.getItem("incorporation-data");
data = JSON.parse(data);
document.getElementById("incorporation-id").value = data.unique_id;
saveState = 1;
let boxes = document.querySelectorAll(
  '[data-incorporation-data="unique-code-box"]'
);
for (let box of boxes) {
  box.innerText = data.unique_id;
}
document.querySelector('[data-incorporation-data="company-name"]').value = data.company_name;
document.querySelector('[data-incorporation-data="company-name-explanation"]').value = data.name_explanation;
document.querySelector('[data-incorporation-data="nature-of-business"]').value =data.nature_of_business;
if (data.msic_codes[0] != "-" || data.msic_codes[1] != "-" || data.msic_codes[2] != "-") {
	select.set(data.msic_codes);
}
document.querySelector('[data-incorporation-data="company-email"]').value = data.company_email;
document.querySelector('[data-incorporation-data="office-number"]').value = data.company_phone;
document.querySelector('[data-incorporation-data="business-address-1"]').value = data.company_address;
document.querySelector('[data-incorporation-data="business-address-city"]').value = data.company_city;
document.querySelector('[data-incorporation-data="business-address-postcode"]').value = data.company_postcode;
document.querySelector('[data-incorporation-data="business-address-state"]').value = data.company_state;
for (let i = 1; i < data.company_directors.length; i++) {
  addDirectorInputGroup();
}
let director_names = document.querySelectorAll('[data-incorporation-data="director-name"]');
let director_fnames = document.querySelectorAll('[data-incorporation-data="director-fname"]');
let director_lnames = document.querySelectorAll('[data-incorporation-data="director-lname"]');
let director_emails = document.querySelectorAll('[data-incorporation-data="director-email"]');
let director_phones = document.querySelectorAll('[data-incorporation-data="director-phone"]');
let director_countries = document.querySelectorAll('[data-incorporation-data="director-country"]');
for (let i = 0; i < data.company_directors.length; i++) {
  director_names[i].value = data.company_directors[i].name;
  director_fnames[i].value = data.company_directors[i].fname;
  director_lnames[i].value = data.company_directors[i].lname;
  director_emails[i].value = data.company_directors[i].email;
  director_phones[i].value = data.company_directors[i].phone;
  director_countries[i].value = data.company_directors[i].country;
}
for (let i = 1; i < data.company_shareholders.length; i++) {
  addShareholderInputGroup();
}
let shareholder_types_ind = document.querySelectorAll('[data-shareholder-type="individual"]');
let shareholder_types_corp = document.querySelectorAll('[data-shareholder-type="corporate"]');
let shareholder_names_ind = document.querySelectorAll('[data-incorporation-data="individual-shareholder-name"]');
let shareholder_fnames_ind = document.querySelectorAll('[data-incorporation-data="individual-shareholder-fname"]');
let shareholder_lnames_ind = document.querySelectorAll('[data-incorporation-data="individual-shareholder-lname"]');
let shareholder_names_corp = document.querySelectorAll('[data-incorporation-data="corporate-shareholder-name"]');
let shareholder_names_rep = document.querySelectorAll('[data-incorporation-data="corporate-representative-name"]');
let shareholder_fnames_rep = document.querySelectorAll('[data-incorporation-data="corporate-representative-fname"]');
let shareholder_lnames_rep = document.querySelectorAll('[data-incorporation-data="corporate-representative-lname"]');
let shareholder_emails = document.querySelectorAll('[data-incorporation-data="shareholder-email"]');
let shareholder_phones = document.querySelectorAll('[data-incorporation-data="shareholder-phone"]');
let shareholder_shares = document.querySelectorAll('[data-incorporation-data="number-of-shares"]');
for (let i = 0; i < data.company_shareholders.length; i++) {
  if (data.company_shareholders[i].type == "Individual") {
    shareholder_types_ind[i].click();
  } else {
    shareholder_types_corp[i].click();
  }
  shareholder_names_ind[i].value = data.company_shareholders[i].name_individual;
  shareholder_fnames_ind[i].value = data.company_shareholders[i].fname_individual;
  shareholder_lnames_ind[i].value = data.company_shareholders[i].lname_individual;
  shareholder_names_corp[i].value = data.company_shareholders[i].name_corporate;
  shareholder_names_rep[i].value = data.company_shareholders[i].name_representative;
  shareholder_fnames_rep[i].value = data.company_shareholders[i].fname_representative;
  shareholder_lnames_rep[i].value = data.company_shareholders[i].lname_representative;
  shareholder_emails[i].value = data.company_shareholders[i].email;
  shareholder_phones[i].value = data.company_shareholders[i].phone;
  if (data.company_shareholders[i].shares == "") {
    shareholder_shares[i].value = "";
  } else {
    shareholder_shares[i].value = parseInt(data.company_shareholders[i].shares);
  }
}
tc_accepted = data.tc_accepted;
if (tc_accepted) {
  document.getElementById("tc-acceptance").classList.add("checked");
} else {
  document.getElementById("tc-acceptance").classList.remove("checked");
}
updateShares();
validateInput();