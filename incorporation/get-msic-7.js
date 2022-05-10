function getMsicCodes() {
	let request = new XMLHttpRequest();
	let url = new URL('https://api.centry.digital/api:8ppyfTOI/msic_code')
  request.open('GET', url, true);
	request.onload = function() {
  	if (request.status >=200 && request.status < 400) {
    	var data = JSON.parse(this.response);
    }
		var select = new SlimSelect({
  		select: '#msic-codes',
   		limit: 3,
    	data: data,
      onChange: (selections) => {
				incorporationSummary.msicCodes = [];
        for (const selection of selections){
					incorporationSummary.msicCodes.push(selection.value);
					if (incorporationSummary.msicCodes == "") {
						console.log("msic code is empty");
						document.querySelector(".ss-multi-selected").classList.add("invalid-field");
					} else {
						document.querySelector(".ss-multi-selected").classList.remove("invalid-field");
						console.log("msic code is not empty");
					}
				}
		  }
		})
	}
	request.send();
}
  
(function() {
	getMsicCodes();
})();