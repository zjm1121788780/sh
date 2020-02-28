var title =new Array();
title[0]="1.图书阅读，限时免费";
title[1]="2.十年店庆";
title[2]="3.全场6.9折封顶";
title[3]="4.店庆局限，海量图书";
title[4]="5.快乐读书";
var NowFrame = 1;
var MaxFrame = 5;
function show(d1){
	if(Number(d1)){
		clearTimeout(theTimer);
		NowFrame =d1;
	}
	for(var i = 1; i<(MaxFrame+1); i++){
		if(i == NowFrame){
			document.getElementById("Rotator").src = "img/adRotator_" + i +".jpg";
			document.getElementById("fig_"+i).innerHTML = title[i-1];
			document.getElementById("fig_"+i).className = "numberOver";
		}else{
			document.getElementById("fig_"+i).innerHTML =i;
			document.getElementById("fig_"+i).className ="number";
		}

	}
	if(NowFrame == MaxFrame){
		NowFrame = 1;
	}else{
		NowFrame++;	
	}
}
var  theTimer = setInterval('show()' , 3000);
window.onload  = show;