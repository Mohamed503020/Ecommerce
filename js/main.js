
$(document).ready(function (){
 "use strict";
 //Adjust Height of Slider//
// start Scrolling Up //
$(window).scroll(function (){
     

    "use strict";

    if($(this).scrollTop()>= 500){

         $("#scroll-up").show(1000)
    }
    else{
        $("#scroll-up").hide(1000)
    }
   
});
//--------------------open and close right menu--------------------------------------//
 let open=false;
 $(".header .menu-icon").on("click",function(){
     if(open==true){
         open=!open;
         $(" .nav-right-menu").slideDown(800);
         $(" .nav-right-menu").mouseleave(function(){
            $(" .nav-right-menu").hide(3000);
         })
     }
     else{
         open=!open;
         $(" .nav-right-menu").hide();
     }
     
 })

// ---------------Click on button to scroll top--------------//
$("#scroll-up").click(function (){

       "use strict";

       $("html,body").animate({

           scrollTop:0

       },1000)
 })
 //
 document.querySelector(".toggle-setting .fa-plus").onclick=function(){
    // toggle class fa-spain of self
    // toggel class open of setting-box element
    document.querySelector(".setting-box").classList.toggle("open")
    
    }
 //nicescroll
 /*$('html').niceScroll({
	cursorcolor:'#3dbf6b',
	cursorborder:'5px solid #3dbf6b' ,
	cursorspeed:"1000",
	cursorborderradius:'2px'
});*/
$("html").easeScroll({

  frameRate: 60,

  animationTime: 1000,

  stepSize: 120,

  pulseAlgorithm: 1,

  pulseScale: 8,

  pulseNormalize: 1,

  accelerationDelta: 20,

  accelerationMax: 1,

  keyboardSupport:true,

  arrowScroll: 50,

  touchpadSupport:true,
  fixedBackground:true

});


// ------------------------------strart Loadding section-------------//
//loading screen //
$(window).on("load", function (){

    "use strict";

    $("#loader").fadeOut(3000, function(){

    $(this).parent().fadeOut(3000);
});
})










});


