var inventorimages=[
	"assets/images/Idea300x300.jpg",
	"assets/images/Design300x300.jpg",
	"assets/images/prototype300x300.jpg",
	"assets/images/manufacturing300x300.jpg"
];
var productimages=
[
	"assets/images/mammothsuckalogo300x300.jpg",
	"assets/images/led-bulbs.jpg",
	"assets/images/solar-panels-australia.png"
];
var index1=0;
var index2=0;
$(function(){
	$('bubble-image1').hide();
	$('bubble-image2').hide();
	$('.bubble').hover(
		function(){showImg($(this))},
		function(){hideImg()}
	);

});


function showImg(x){
	 // console.log(x);
	if(x.hasClass('bubble-1'))
	{
		// console.log(1);
		if(index1>=inventorimages.length){index1=0;}
		var image= inventorimages[index1++];
		// console.log(inventorimages.length);
		var icon=$('#icon-1');
		icon.css('display','none').fadeOut('slow');//hide icon
		var bubble=$('#bubble-image1');
		bubble.attr('src',image).css('display','unset').show();
	}

	else if(x.hasClass('bubble-2'))
	{
		if(index2>=productimages.length){index2=0;}
		// console.log(2);
		var image= productimages[index2++];

		var icon=$('#icon-2');
		icon.css('display','none').fadeOut('slow');//hide icon
		var bubble=$('#bubble-image2');
		bubble.attr('src',image).css('display','unset').show();
	}
}
function hideImg(){


	$('#bubble-image1').css('display','none').hide();//hide image
	$('#bubble-image2').css('display','none').hide();//hide image
	$('#icon-1').css('display','unset').fadeIn('slow');//show icon
	$('#icon-2').css('display','unset').fadeIn('slow');//show icon
}
