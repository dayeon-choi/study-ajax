$(document).ready(function(){
	var headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;

	lightning_one();
	lightning_two();
	lightning_three();

	$("#head").click(function(){		
		if (headclix < 9){
			$("#head").animate({left:"-=367px"},500);
			headclix+=1;
		}
		else{
			$("#head").animate({left:"0px"},500);
			headclix = 0;
		}
	});

	//추가1































});//end doc.onready function

function lightning_one(){
	$("#lightning1").fadeIn(250).fadeOut(250);
	setTimeout(function() {lightning_one()}, 4000);
};

//추가2