function endGame(){
          jQuery(document).ready(function($){
            $(":button").css({"display" : "none"});
        });
     alert("Successful Clicks: " + (IDCOUNTER - 1) 
      + "\nUnsuccessful Clicks: " + missedClicks);
      location.reload();
      

    
}
    var IDCOUNTER = 1;
    var missedClicks = 0;
function datGameDoe(){
    setTimeout("endGame()", 60000);
    jQuery(document).ready(function($){

       $(".start").css({"display" : "none"});
       $("li").css({"display" : "none"});
       $("p").css({"display" : "none"});
       $(".add").css({"position" : "absolute",
                      "left": randomX()+"px",
                      "top": randomY()+"px"}); 
                  
    function randomX(){
       var x = Math.floor((Math.random() * $(window).width()) -20);
       return x;
    }
    function randomY(){
       var y = Math.floor((Math.random() * $(window).height()) -20);
       return y;
    }
    var CONST = 1;


    
    function createButtons(){
    
    section=document.createElement("button");
    section.style.position = 'absolute';
    section.style.left = randomX()+"px";
    section.style.top = randomY()+"px";
    section.style.width = "15px";
    section.style.height = "15px";
    section.style.background = "aqua";
    IDCOUNTER++;
     section.setAttribute("id", IDCOUNTER);
     section.setAttribute("class", "sdd");
     document.body.appendChild(section);
    
    
    
    return section;
    }

      $("body").on("click", "button", (function() {       
        
          if($(this).attr('id') == IDCOUNTER){ /*|| other numbers */

           createButtons();
           }
          
       else{
          missedClicks++; 
          alert("Missed clicks = " + missedClicks);
          
       }   
          
         }));
     
         
         

});
	
}


