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

$(document).ready( function() {
	
	load_json();
	
	$("#search").click(function() {
		console.log("seaching..");
		
		var params = {
				"api-key": "d60f06ee6b233be3b6362cf824aa2c1c:1:61091877",
				ll:mydata[1].geometry.coordinates[1]+"," + mydata[1].geometry.coordinates[0],
				radius: 5000
		}
		console.log(params);
		
		
		$.getJSON('https://jsonp.afeld.me/?callback=myCallBack&url=http%3A%2F%2Fapi.nytimes.com%2Fsvc%2Fevents%2Fv2%2Flistings%3Fapi-key%3Dd60f06ee6b233be3b6362cf824aa2c1c%253A1%253A61091877%26ll%3D40.6561715%252C-73.9515718%26radius%3D5000', null, function (results) {
	        alert('Cross domain JS call achieved. Have your implementation going in here!');
	      });
		
		/*
		$.ajax({
			type:'GET',
			url:"https://jsonp.afeld.me/?url=http://api.nytimes.com/svc/events/v2/listings",
			data: params
		}).done(function (e) {
			console.log("getting events");
			console.log(e);
			
		})
		*/
	});
});