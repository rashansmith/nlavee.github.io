$(document).ready(function (){
    
var grade;
var activities;
var a = false;
var b = false;
var c = false;
var d = false;
var e = false;
var f = false;
var g = false;
var h = false;
var i = false;
var j = false;
    
    $("#1").click (function(){
		$("#1").data('clicked', true);
        a = !a;
        
        if(a = true){
        $("#1").css({
			"background-color": "#d78ce5"
		});
        }else{
            $("#1").css({
			"background-color": "#EA4B22"
		});
        }
        
	});
    
    $("#2").click (function(){
		$(this).data('clicked', !b);
        b = !b;
	});
    
    $("#3").click (function(){
		$(this).data('clicked', !c);
        c = !c;
	});
    $("#4").click (function(){
		$(this).data('clicked', !d);
        d = !d;
	});
    $("#5").click (function(){
		$(this).data('clicked', !e);
        e = !e;
	});
    $("#6").click (function(){
		$(this).data('clicked', !f);
        f = !f;
	});
    $("#7").click (function(){
		$(this).data('clicked', !g);
        g = !g;
	});
    $("#8").click (function(){
		$(this).data('clicked', !h);
        h = !h;
	});
    $("#9").click (function(){
		$(this).data('clicked', !i);
        i = !i;
	});
    $("#10").click (function(){
		$(this).data('clicked', !j);
        j = !j;
	});
    
    
    if(jQuery('#1').data('clicked')) {
        
        grade = 1;
    }else if (jQuery('#2').data('clicked')) {
        
        grade = 2;
    }else if (jQuery('#3').data('clicked')) {
        
        grade = 3;
    }else if (jQuery('#4').data('clicked')) {
        
        grade = 4;
    }else if (jQuery('#5').data('clicked')) {
        
        grade = 5;
    }else if (jQuery('#6').data('clicked')) {
        
        grade = 6;
    }else if (jQuery('#7').data('clicked')) {
        
        grade = 7;
    }else if (jQuery('#8').data('clicked')) {
        
        grade = 8;
    }else if (jQuery('#9').data('clicked')) {
        
        grade = 9;
    }else if (jQuery('#10').data('clicked')) {
        
        grade = 10;
    }
        
    console.log(grade);  
    
    });

