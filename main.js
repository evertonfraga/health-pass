var EL = s => document.querySelector(`[data-bind=${s}]`)

var compileTemplate = (template, search, value) => template.replace

var User = {
	setPicture: src => EL('picture').src = src,
	setName: 	t => EL('name').innerText = t,
	setCountry: t => EL('country-flag').src = `https://www.countryflags.io/${t}/flat/48.png`,
	setLifeEvent: l => {
		var list = EL('events');
		var template = list.getAttribute('data-template');

		var subs = {
			name: l.name,
			time: (new Date(l.date * 1000).toISOString().substr(0, 10))
		};

		for(var key in subs) {
			if(!subs.hasOwnProperty(key)) continue;
			
			template = template.replace(`%${key}%`, subs[key]);
		}

		list.innerHTML += template;
	},

	setMapPins: (l, map) => {
		var myLatLng = {lat: l.lat, lng: l.lon};
		var marker = new google.maps.Marker({
		  position: myLatLng,
		  title: l.name
		});

		marker.setMap(map);
		markers.push(marker);

		centerAndZoom(map, markers)
	}
}


function getBeneficiaryAddress() {
	// first, look at the query string
	// ?address=0x…
	var match = window.location.search.match(/address=(0x[a-f0-9]{40})/i)
	if (match) {
		return match[1].toLowerCase()
	}

	// Fallback is William
	return '0xB8ec0DAe7e2D860c3c94Fe0841d3a27a3255A16c'.toLowerCase();
}

var BENEFICIARY = getBeneficiaryAddress();

// Published in Rinkeby
var credentialDirectoryAddress = '0xdd960fd678b96f303c51cf6f7bac53896f58ff37';
var publishedAtBlock = 4946179;

function init() {
	// Checks Web3 support
	if (typeof web3 !== "undefined") {
	  // If there isn't then set a provider
	  web3 = new Web3(web3.currentProvider);
	} else {
	  // use Infura if it's not there
	  web3 = new Web3(
		new Web3.providers.HttpProvider(
		  "https://rinkeby.infura.io/v3/5f9796c765f54ac3a0de088bd7c5732a"
		)
	  );
	}

	// Fetch contract code
	web3.eth.getCode(credentialDirectoryAddress, function(e, r) {
	  if (!e && r.length > 3) {
		 setupContract();
	  } else {
		// If this one is not found either, then give up
		// document.getElementById("countup").textContent =
		//   "Unsupported network";
	  }
	});
}


function setupContract () {
	cd = web3.eth.contract(ABI).at(credentialDirectoryAddress);
	console.log(cd);

	cd.getCredentialPicture(BENEFICIARY, (error, result) => User.setPicture(result));
	cd.getCredentialName(BENEFICIARY, (error, result) => User.setName(result));
	cd.getCountryCode(BENEFICIARY, (error, result) => User.setCountry(result));

	var contractEvents = cd.allEvents({fromBlock: publishedAtBlock, toBlock: 'latest'});
	contractEvents.watch(function(error, event){
		console.log(event);
		if(error) return;
		if(!event.args._controller) return;

		var controllerAddress = event.args._controller.toLowerCase();
		if (controllerAddress !== BENEFICIARY) return;
		var eventObject = {
			name: event.args._eventName,
			date: event.args._timestamp,
			lat: event.args.lat.s * event.args.lat.c[0] / 1e6,
			lon: event.args.lon.s * event.args.lon.c[0] / 1e6
		};
		User.setLifeEvent(eventObject);
		User.setMapPins(eventObject, window.map);
	});
}

init();

