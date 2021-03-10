'use strict';

let parasha;

window.addEventListener('load', () => {
	document.getElementById('contact-form').reset();
});

let candles;
let havdalah;
fetch('https://www.hebcal.com/shabbat/?cfg=json&geonameid=2761369&m=50')
	.then((res) => res.json())
	.then((data) => {
		candles = new Date(Date.parse(data.items.find((item) => item.category === 'candles').date));
		document.querySelector('.candles').innerText = `${candles.getHours()}:${
			candles.getMinutes() < 10 ? '0' + candles.getMinutes() : candles.getMinutes()
		}`;
		document.querySelector('.candles-date').innerText = candles.toLocaleDateString('en-GB');
		console.log(candles.toLocaleDateString('en-GB'));

		if (data.items.find((item) => item.category === 'havdalah')) {
			havdalah = new Date(Date.parse(data.items.find((item) => item.category === 'havdalah').date));
			document.querySelector('.havdalah').innerText = `${havdalah.getHours()}:${
				havdalah.getMinutes() < 10 ? '0' + havdalah.getMinutes() : havdalah.getMinutes()
			}`;
		} else {
			document.querySelector('.havdalah').innerText = 'Праздник';
		}
		//*********************************************************************/
		parasha = data.items
			.find((item) => item.title.includes('Parashat'))
			.title.split(' ')
			.pop();
		console.log(parasha);
		//*********************************************************************/
	});

(function () {
	var setting = {
		height: 338,
		// width: 803,
		zoom: 17,
		queryString: 'Wollzeile 17, Vienna, Austria',
		place_id: 'ChIJU3T0lp8HbUcR_SKQmntTozY',
		satellite: false,
		centerCoord: [48.20852016776647, 16.376148399999977],
		cid: '0x36a3537b9a9022fd',
		lang: 'en',
		cityUrl: '/austria/vienna',
		cityAnchorText: 'Map of Vienna, Waldviertel, Austria',
		id: 'map-9cd199b9cc5410cd3b1ad21cab2e54d3',
		embed_id: '338443',
	};
	var d = document;
	var s = d.createElement('script');
	s.src = 'https://1map.com/js/script-for-user.js?embed_id=338443';
	s.async = true;
	s.onload = function (e) {
		window.OneMap.initMap(setting);
	};
	var to = d.getElementsByTagName('script')[0];
	to.parentNode.insertBefore(s, to);
})();


