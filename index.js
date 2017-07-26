var inventorimages=[
	"assets/images/sparklers.jpg",
	"assets/images/table.jpg"
];
var productimages=
[
	"assets/images/bridge.jpg",
	"assets/images/desktop.jpg"
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
		if(index1>=productimages.length){index1=0;}
		var image= inventorimages[index1++];
		// console.log(inventorimages.length);
		var icon=$('#icon-1');
		icon.css('display','none');//hide icon
		var bubble=$('#bubble-image1');
		bubble.attr('src',image);//set image
		bubble.css('display','unset');//show image
		bubble.show();
	}

	else if(x.hasClass('bubble-2'))
	{
		if(index2>=productimages.length){index2=0;}
		// console.log(2);
		var image= productimages[index2++];

		var icon=$('#icon-2');
		icon.css('display','none');//hide icon
		var bubble=$('#bubble-image2');
		bubble.attr('src',image);//set image
		bubble.css('display','unset');//show image
		bubble.show();
	}
}
function hideImg(){
	
	
	$('#bubble-image1').css('display','none');//hide image
	$('#bubble-image2').css('display','none');//hide image
	$('#icon-1').css('display','unset');//show icon
	$('#icon-2').css('display','unset');//show icon
}
