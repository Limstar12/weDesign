$(document).ready(function(){
    setInterval(function(){        
        $('#mainBanner ul').animate(
            // ul을 -1200으로 0.4초동안 이동해라
            {"marginLeft" : -1200}, 
            400,         //애니메이션 스피드. 0.4초라는 뜻
            function(){     // 애니메이션 끝나고 처리될 액션.
                            
                $("#mainBanner li").eq(0).appendTo('#mainBanner ul');
                      // 첫번째 li를 막내자리로 옮겨라
                $("#mainBanner ul").css("margin-left", 0)
                    // 자식들이 앞에 쏠리지 않게 0에 고정시킨다
        }
        ); //animate
        
    }, 3000); //3초마다 주기적으로 앞에있는 함수를 실행한다

}); //ready


// setInterval 주기적으로 실행하는 함수
// settimeout 한번만 실행하는 한수
// {} 제이존

