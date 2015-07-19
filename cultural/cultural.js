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


function initialize(lat, lon) {
	console.log("getting map..");

	var myLatlng = new google.maps.LatLng(lat, lon);
	var map = new google.maps.Map(document.getElementById('map-canvas'), {
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

$(".map-button").click(functtion() {
	var id = $(this).attr('id');
	var location = loc[id];
	
	initialize(location[0], location[1]);
});

$(document).ready( function() {
	
	load_json();
	
	$("#search").click(function() {
		console.log("seaching..");
		
		var i = 1;
		
		$.get('https://jsonp.afeld.me/?url=http%3A%2F%2Fapi.nytimes.com%2Fsvc%2Fevents%2Fv2%2Flistings%3Fapi-key%3Dd60f06ee6b233be3b6362cf824aa2c1c%253A1%253A61091877%26ll%3D'+mydata[i].geometry.coordinates[1] +'%252C'+mydata[i].geometry.coordinates[0]+'%26radius%3D5000', function (results) {
	        console.log(results);
	        var num_results = results['num_results'];
	        var array = results['results'];
	        
	        //var arrayLength = array.length;
	        for (var i = 0; i < num_results; i++) {
	            var oneInstance = array[i];
	            var city = oneInstance['city'];
	            var free = oneInstance['free'];
	            var free_event;
	            var price; 
	            if(free == false) price = oneInstance['price'];
	            if(free == true) free_event = "Yes!";
	            else free_event = "No! :("
	            
	            var event_name = oneInstance['event_name'];
	            $(".results").append(
	            	'<div class="information" id="information-'+i+'">'
	            	+'<p>City:' + city + '</p>'
	            	+'<p>Event:' + event_name + '</p>'
	            	+'<p>Free:' + free_event + '</p>'
	            	+'<button class="map-button" id="click-map-'+i+'">Check Map</button>'
	            	+'<div id="map-canvas" style="width: 400px; height: 200px"></div>'
	            	+'</div>'
	            );
	            
	            if(free == false) {
	            	$("#information-"+i).append(
	    	            	'<p>Price:' + price + '</p>'
	    	            );
	            }
	            var lat = oneInstance['geocode_latitude'];
	            var lon = oneInstance['geocode_longitude'];
	            loc[i] = [lat,lon];
	            
	        }
	      });
		

	});
});