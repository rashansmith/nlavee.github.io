var mydata;
var school_names = [];
var loc = {};

function load_json() {
	console.log("loading json");
	$.get('school_loc.json', function(data) {
		console.log("got data...");
		mydata = data;
		console.log(mydata[0].name);
		console.log(mydata[0].geometry);
		console.log(mydata[1].name);
		console.log(mydata[1].geometry);
		for(i = 0; i < mydata.length; i++) {
			//console.log(mydata[i].name);
			school_names[i] = (mydata[i].name);
		}
	});
}


function initialize(lat, lon, id) {
	console.log("getting map..");

	var myLatlng = new google.maps.LatLng(lat, lon);
	var map = new google.maps.Map(document.getElementById('map-canvas-'+id), {
		zoom: 15,
		center: myLatlng
	});

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: event
	});
	console.log("map should be appearing..")
}

$(document).on('click', ".map-button", function() {
	console.log("click button for map");
	var id = $(this).attr('id');
	var location = loc[id];
	console.log(location);

	initialize(location[0], location[1], id);
});

$(document).ready( function() {

	load_json();

	$("#back").click(function() {
		document.location.href = 'http://nlavee.github.io/Ketchup/index.html';
	});
	
	console.log("seaching..");

	
	$.get('https://jsonp.afeld.me/?url=http%3A%2F%2Fapi.nytimes.com%2Fsvc%2Fevents%2Fv2%2Flistings%3Fapi-key%3Dd60f06ee6b233be3b6362cf824aa2c1c%253A1%253A61091877%26ll%3D'+mydata[i].geometry.coordinates[1] +'%252C'+mydata[i].geometry.coordinates[0]+'%26radius%3D5000', function (results) {
		console.log(results);
		var num_results = results['num_results'];
		var array = results['results'];

		var arrayLength = array.length;
		for (var i = 0; i < arrayLength; i++) {
			var oneInstance = array[i];
			var city = oneInstance['city'];
			var free = oneInstance['free'];
			var free_event;
			var price; 
			if(free == false) price = oneInstance['price'];
			if(free == true) free_event = "Yes!";
			else free_event = "No! :("
				var link = oneInstance['event_detail_url'];
			var event_name = oneInstance['event_name'];
			$(".results").append(
					'<div class="information" id="information-'+i+'">'
					+'<p>City:' + city + '</p>'
					+'<p>Event:' + event_name + '</p>'
					+'<p>Free:' + free_event + '</p>'
					+'<a href="'+link+'">Link to this event</a><br />'
					+'<button class="map-button" id="'+i+'">Check Map</button>'
					+'<div id="map-canvas-'+i+'" style="width: 400px; height: 200px"></div>'
					+'</div>'
			);

			var lat = oneInstance['geocode_latitude'];
			var lon = oneInstance['geocode_longitude'];
			console.log(lat);
			console.log(lon);
			loc[i] = [lat,lon];

		}


	});
});