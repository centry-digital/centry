function getMsicCodes() {
	let request = new XMLHttpRequest();
	let url = new URL('https://xb38-9clz-iqnc.s2.xano.io/api:8ppyfTOI/msic_code')
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
				for (const selection of selections){
					console.log(selection);
					incorporationSummary.msicCodes.push(selection.getAttribute("value"));
				}
		  }
		})
	}
	request.send();
}
  
(function() {
	getMsicCodes();
})();