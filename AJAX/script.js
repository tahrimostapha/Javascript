let xhr = getXMLHttpRequest();

function getXMLHttpRequest() {
  let xhr = null;

	if (window.XMLHttpRequest || window.ActiveXObject) {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		} else {
			xhr = new XMLHttpRequest();
		}
	} else {
		alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
		return null;
	}

	return xhr;
}

function request(callback) {
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			callback(xhr.responseText);
		}
	};

	xhr.open("GET", "https://thatsthespir.it/api", true);
	xhr.send(null);
}

function readData(sData) {

	if (sData != null) {
		let json = JSON.parse(sData);
		let quote = document.getElementById("quote");
		let text = document.createTextNode(json.quote)
		quote.appendChild(text);
	} else {
		alert("Y'a eu un problème");
	}
}

request(readData);
