let countries = 
  [
    { code: "Malaysia", name: "Malaysia" },
    { code: "Afghanistan", name: "Afghanistan" },
    { code: "Åland Islands", name: "Åland Islands" },
    { code: "Albania", name: "Albania" },
    { code: "Algeria", name: "Algeria" },
    { code: "American Samoa", name: "American Samoa" },
    { code: "Andorra", name: "Andorra" },
    { code: "Angola", name: "Angola" },
    { code: "Anguilla", name: "Anguilla" },
    { code: "Antarctica", name: "Antarctica" },
    { code: "Antigua and Barbuda", name: "Antigua and Barbuda" },
    { code: "Argentina", name: "Argentina" },
    { code: "Armenia", name: "Armenia" },
    { code: "Aruba", name: "Aruba" },
    { code: "Australia", name: "Australia" },
    { code: "Austria", name: "Austria" },
    { code: "Azerbaijan", name: "Azerbaijan" },
    { code: "Bahamas", name: "Bahamas" },
    { code: "Bahrain", name: "Bahrain" },
    { code: "Bangladesh", name: "Bangladesh" },
    { code: "Barbados", name: "Barbados" },
    { code: "Belarus", name: "Belarus" },
    { code: "Belgium", name: "Belgium" },
    { code: "Belize", name: "Belize" },
    { code: "Benin", name: "Benin" },
    { code: "Bermuda", name: "Bermuda" },
    { code: "Bhutan", name: "Bhutan" },
    { code: "Bolivia", name: "Bolivia" },
    { code: "Bonaire, Sint Eustatius and Saba", name: "Bonaire, Sint Eustatius and Saba" },
    { code: "Bosnia and Herzegovina", name: "Bosnia and Herzegovina" },
    { code: "Botswana", name: "Botswana" },
    { code: "Bouvet Island", name: "Bouvet Island" },
    { code: "Brazil", name: "Brazil" },
    { code: "British Indian Ocean Territory", name: "British Indian Ocean Territory" },
    { code: "Brunei Darussalam", name: "Brunei Darussalam" },
    { code: "Bulgaria", name: "Bulgaria" },
    { code: "Burkina Faso", name: "Burkina Faso" },
    { code: "Burundi", name: "Burundi" },
    { code: "Cabo Verde", name: "Cabo Verde" },
    { code: "Cambodia", name: "Cambodia" },
    { code: "Cameroon", name: "Cameroon" },
    { code: "Canada", name: "Canada" },
    { code: "Cayman Islands", name: "Cayman Islands" },
    { code: "Central African Republic", name: "Central African Republic" },
    { code: "Chad", name: "Chad" },
    { code: "Chile", name: "Chile" },
    { code: "China", name: "China" },
    { code: "Christmas Island", name: "Christmas Island" },
    { code: "Cocos (Keeling) Islands", name: "Cocos (Keeling) Islands" },
    { code: "Colombia", name: "Colombia" },
    { code: "Comoros", name: "Comoros" },
    { code: "Congo", name: "Congo" },
    { code: "Congo, The Democratic Republic of the", name: "Congo, The Democratic Republic of the" },
    { code: "Cook Islands", name: "Cook Islands" },
    { code: "Costa Rica", name: "Costa Rica" },
    { code: "Côte d'Ivoire", name: "Côte d'Ivoire" },
    { code: "Croatia", name: "Croatia" },
    { code: "Cuba", name: "Cuba" },
    { code: "Curaçao", name: "Curaçao" },
    { code: "Cyprus", name: "Cyprus" },
    { code: "Czechia", name: "Czechia" },
    { code: "Denmark", name: "Denmark" },
    { code: "Djibouti", name: "Djibouti" },
    { code: "Dominica", name: "Dominica" },
    { code: "Dominican Republic", name: "Dominican Republic" },
    { code: "Ecuador", name: "Ecuador" },
    { code: "Egypt", name: "Egypt" },
    { code: "El Salvador", name: "El Salvador" },
    { code: "Equatorial Guinea", name: "Equatorial Guinea" },
    { code: "Eritrea", name: "Eritrea" },
    { code: "Estonia", name: "Estonia" },
    { code: "Ethiopia", name: "Ethiopia" },
    { code: "Falkland Islands (Malvinas)", name: "Falkland Islands (Malvinas)" },
    { code: "Faroe Islands", name: "Faroe Islands" },
    { code: "Fiji", name: "Fiji" },
    { code: "Finland", name: "Finland" },
    { code: "France", name: "France" },
    { code: "French Guiana", name: "French Guiana" },
    { code: "French Polynesia", name: "French Polynesia" },
    { code: "French Southern Territories", name: "French Southern Territories" },
    { code: "Gabon", name: "Gabon" },
    { code: "Gambia", name: "Gambia" },
    { code: "Georgia", name: "Georgia" },
    { code: "Germany", name: "Germany" },
    { code: "Ghana", name: "Ghana" },
    { code: "Gibraltar", name: "Gibraltar" },
    { code: "Greece", name: "Greece" },
    { code: "Greenland", name: "Greenland" },
    { code: "Grenada", name: "Grenada" },
    { code: "Guadeloupe", name: "Guadeloupe" },
    { code: "Guam", name: "Guam" },
    { code: "Guatemala", name: "Guatemala" },
    { code: "Guernsey", name: "Guernsey" },
    { code: "Guinea", name: "Guinea" },
    { code: "Guinea-Bissau", name: "Guinea-Bissau" },
    { code: "Guyana", name: "Guyana" },
    { code: "Haiti", name: "Haiti" },
    { code: "Heard Island and McDonald Islands", name: "Heard Island and McDonald Islands" },
    { code: "Holy See (Vatican City State)", name: "Holy See (Vatican City State)" },
    { code: "Honduras", name: "Honduras" },
    { code: "Hong Kong", name: "Hong Kong" },
    { code: "Hungary", name: "Hungary" },
    { code: "Iceland", name: "Iceland" },
    { code: "India", name: "India" },
    { code: "Indonesia", name: "Indonesia" },
    { code: "Iran, Islamic Republic of", name: "Iran, Islamic Republic of" },
    { code: "Iraq", name: "Iraq" },
    { code: "Ireland", name: "Ireland" },
    { code: "Isle of Man", name: "Isle of Man" },
    { code: "Israel", name: "Israel" },
    { code: "Italy", name: "Italy" },
    { code: "Jamaica", name: "Jamaica" },
    { code: "Japan", name: "Japan" },
    { code: "Jersey", name: "Jersey" },
    { code: "Jordan", name: "Jordan" },
    { code: "Kazakhstan", name: "Kazakhstan" },
    { code: "Kenya", name: "Kenya" },
    { code: "Kiribati", name: "Kiribati" },
    { code: "Korea, Democratic People's Republic of", name: "Korea, Democratic People's Republic of" },
    { code: "Korea, Republic of", name: "Korea, Republic of" },
    { code: "Kuwait", name: "Kuwait" },
    { code: "Kyrgyzstan", name: "Kyrgyzstan" },
    { code: "Lao People's Democratic Republic", name: "Lao People's Democratic Republic" },
    { code: "Latvia", name: "Latvia" },
    { code: "Lebanon", name: "Lebanon" },
    { code: "Lesotho", name: "Lesotho" },
    { code: "Liberia", name: "Liberia" },
    { code: "Libya", name: "Libya" },
    { code: "Liechtenstein", name: "Liechtenstein" },
    { code: "Lithuania", name: "Lithuania" },
    { code: "Luxembourg", name: "Luxembourg" },
    { code: "Macao", name: "Macao" },
    { code: "Macedonia, Republic of", name: "Macedonia, Republic of" },
    { code: "Madagascar", name: "Madagascar" },
    { code: "Malawi", name: "Malawi" },
    { code: "Malaysia", name: "Malaysia" },
    { code: "Maldives", name: "Maldives" },
    { code: "Mali", name: "Mali" },
    { code: "Malta", name: "Malta" },
    { code: "Marshall Islands", name: "Marshall Islands" },
    { code: "Martinique", name: "Martinique" },
    { code: "Mauritania", name: "Mauritania" },
    { code: "Mauritius", name: "Mauritius" },
    { code: "Mayotte", name: "Mayotte" },
    { code: "Mexico", name: "Mexico" },
    { code: "Micronesia, Federated States of", name: "Micronesia, Federated States of" },
    { code: "Moldova", name: "Moldova" },
    { code: "Monaco", name: "Monaco" },
    { code: "Mongolia", name: "Mongolia" },
    { code: "Montenegro", name: "Montenegro" },
    { code: "Montserrat", name: "Montserrat" },
    { code: "Morocco", name: "Morocco" },
    { code: "Mozambique", name: "Mozambique" },
    { code: "Myanmar", name: "Myanmar" },
    { code: "Namibia", name: "Namibia" },
    { code: "Nauru", name: "Nauru" },
    { code: "Nepal", name: "Nepal" },
    { code: "Netherlands", name: "Netherlands" },
    { code: "New Caledonia", name: "New Caledonia" },
    { code: "New Zealand", name: "New Zealand" },
    { code: "Nicaragua", name: "Nicaragua" },
    { code: "Niger", name: "Niger" },
    { code: "Nigeria", name: "Nigeria" },
    { code: "Niue", name: "Niue" },
    { code: "Norfolk Island", name: "Norfolk Island" },
    { code: "Northern Mariana Islands", name: "Northern Mariana Islands" },
    { code: "Norway", name: "Norway" },
    { code: "Oman", name: "Oman" },
    { code: "Pakistan", name: "Pakistan" },
    { code: "Palau", name: "Palau" },
    { code: "Palestine, State of", name: "Palestine, State of" },
    { code: "Panama", name: "Panama" },
    { code: "Papua New Guinea", name: "Papua New Guinea" },
    { code: "Paraguay", name: "Paraguay" },
    { code: "Peru", name: "Peru" },
    { code: "Philippines", name: "Philippines" },
    { code: "Pitcairn", name: "Pitcairn" },
    { code: "Poland", name: "Poland" },
    { code: "Portugal", name: "Portugal" },
    { code: "Puerto Rico", name: "Puerto Rico" },
    { code: "Qatar", name: "Qatar" },
    { code: "Réunion", name: "Réunion" },
    { code: "Romania", name: "Romania" },
    { code: "Russian Federation", name: "Russian Federation" },
    { code: "Rwanda", name: "Rwanda" },
    { code: "Saint Barthélemy", name: "Saint Barthélemy" },
    { code: "Saint Helena, Ascension and Tristan da Cunha", name: "Saint Helena, Ascension and Tristan da Cunha" },
    { code: "Saint Kitts and Nevis", name: "Saint Kitts and Nevis" },
    { code: "Saint Lucia", name: "Saint Lucia" },
    { code: "Saint Martin (French part)", name: "Saint Martin (French part)" },
    { code: "Saint Pierre and Miquelon", name: "Saint Pierre and Miquelon" },
    { code: "Saint Vincent and the Grenadines", name: "Saint Vincent and the Grenadines" },
    { code: "Samoa", name: "Samoa" },
    { code: "San Marino", name: "San Marino" },
    { code: "Sao Tome and Principe", name: "Sao Tome and Principe" },
    { code: "Saudi Arabia", name: "Saudi Arabia" },
    { code: "Senegal", name: "Senegal" },
    { code: "Serbia", name: "Serbia" },
    { code: "Seychelles", name: "Seychelles" },
    { code: "Sierra Leone", name: "Sierra Leone" },
    { code: "Singapore", name: "Singapore" },
    { code: "Sint Maarten (Dutch part)", name: "Sint Maarten (Dutch part)" },
    { code: "Slovakia", name: "Slovakia" },
    { code: "Slovenia", name: "Slovenia" },
    { code: "Solomon Islands", name: "Solomon Islands" },
    { code: "Somalia", name: "Somalia" },
    { code: "South Africa", name: "South Africa" },
    { code: "South Georgia and the South Sandwich Islands", name: "South Georgia and the South Sandwich Islands" },
    { code: "South Sudan", name: "South Sudan" },
    { code: "Spain", name: "Spain" },
    { code: "Sri Lanka", name: "Sri Lanka" },
    { code: "Sudan", name: "Sudan" },
    { code: "Suriname", name: "Suriname" },
    { code: "Svalbard and Jan Mayen", name: "Svalbard and Jan Mayen" },
    { code: "Swaziland", name: "Swaziland" },
    { code: "Sweden", name: "Sweden" },
    { code: "Switzerland", name: "Switzerland" },
    { code: "Syrian Arab Republic", name: "Syrian Arab Republic" },
    { code: "Taiwan", name: "Taiwan" },
    { code: "Tajikistan", name: "Tajikistan" },
    { code: "Tanzania", name: "Tanzania" },
    { code: "Thailand", name: "Thailand" },
    { code: "Timor-Leste", name: "Timor-Leste" },
    { code: "Togo", name: "Togo" },
    { code: "Tokelau", name: "Tokelau" },
    { code: "Tonga", name: "Tonga" },
    { code: "Trinidad and Tobago", name: "Trinidad and Tobago" },
    { code: "Tunisia", name: "Tunisia" },
    { code: "Turkey", name: "Turkey" },
    { code: "Turkmenistan", name: "Turkmenistan" },
    { code: "Turks and Caicos Islands", name: "Turks and Caicos Islands" },
    { code: "Tuvalu", name: "Tuvalu" },
    { code: "Uganda", name: "Uganda" },
    { code: "Ukraine", name: "Ukraine" },
    { code: "United Arab Emirates", name: "United Arab Emirates" },
    { code: "United Kingdom", name: "United Kingdom" },
    { code: "United States Minor Outlying Islands", name: "United States Minor Outlying Islands" },
    { code: "United States", name: "United States" },
    { code: "Uruguay", name: "Uruguay" },
    { code: "Uzbekistan", name: "Uzbekistan" },
    { code: "Vanuatu", name: "Vanuatu" },
    { code: "Venezuela", name: "Venezuela" },
    { code: "Vietnam", name: "Vietnam" },
    { code: "Virgin Islands, British", name: "Virgin Islands, British" },
    { code: "Virgin Islands, U.S.", name: "Virgin Islands, U.S." },
    { code: "Wallis and Futuna", name: "Wallis and Futuna" },
    { code: "Western Sahara", name: "Western Sahara" },
    { code: "Yemen", name: "Yemen" },
    { code: "Zambia", name: "Zambia" },
    { code: "Zimbabwe", name: "Zimbabwe" }
  ]

let options = countries.map(country => `<option value="${country.code}">${country.name}</option>`).join('\n');
let lastDirectorSelect, directorCountrySelect, directorCountrySelectLast;
function mapDirectorCountrySelect() {
  directorCountrySelect = document.querySelectorAll('select[data-select-type="director-country"]');
  lastDirectorSelect = directorCountrySelect.length - 1;
  directorCountrySelectLast = directorCountrySelect[lastDirectorSelect];
  directorCountrySelectLast.innerHTML = options;
}
mapDirectorCountrySelect();