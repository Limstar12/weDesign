$(document).ready(function(){
    // 위아래 //
    var objTop =$ ("#topBanner ul");
    setInterval(function(){

        objTop.animate({
            "marginTop" : "-="+350
        }, 400, function(){
            objTop.find("li").eq(0).appendTo(objTop);
                objTop.css({"marginTop" : 0});
            });
    }, 3000);
 
    // 상하 //
    var objLeft =$ ("#leftBanner ul");
    setInterval(function(){

        objLeft.animate({
            "marginLeft" : "-="+1200
        }, 400, function(){
            objLeft.find("li").eq(0).appendTo(objLeft);
            objLeft.css({"marginLeft" : 0});
            });
    }, 3000);

     // 페이드 //
     var objFade =$ ("#fadeBanner ul");
     var count = 0;
     setInterval(function(){
        count++;
        count = count % 3;
        objFade.find("li").eq(count).addClass("on").siblings().removeClass("on");
     }, 3000);
});