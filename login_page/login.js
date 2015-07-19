var mydata;
var school_names = [];

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

function initialize(school_name) {
	console.log("getting map..");
	for(i = 0; i < mydata.length; i++) {
		//console.log(mydata[i].name);
		if(school_names[i] == school_name) {
			geometry = mydata[i].geometry;
			console.log(geometry);
			loc = geometry.coordinates;
		};
	}
	console.log(loc[0]);
	console.log(loc[1]);
	var myLatlng = new google.maps.LatLng(loc[1], loc[0]);
	var map = new google.maps.Map(document.getElementById('map-canvas'), {
		zoom: 15,
		center: myLatlng
	});

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: school_name
	});
	console.log("map should be appearing..")
}

$(document).ready( function(){


	console.log("page-ready!");

	load_json();

	$(function() {
		$( "#school-name" ).autocomplete({
			source: school_names
		});
	});

	$("#submit-login").click( function() {
		var first_name = $("#first-name").val();
		var last_name = $("#last-name").val();
		var school_name = $("#school-name").val();
		var email = $("#email").val();
		if(first_name != null & last_name != null) {
			$("#success").append(
					'<p>Woohoo! We have found information about your school.</p>'
					+"<p> We are glad you're joining other warriors from your school: " + school_name.toLowerCase() + ".</p>"
					+'<div id="map-canvas" style="width: 400px; height: 200px"></div>'
					+'<p>Your username is: '+ first_name.replace(/ /g,'.').toLowerCase() + '-' + last_name.replace(/ /g,'.').toLowerCase() + '.'
					+"<p>We'll send your password to your email "+ email +".</p>"


			);
			$("#success").css(
				'display':'block';
			);
			console.log(school_name);
			initialize(school_name);
			
		}

	});

});