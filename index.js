
var numberOfDrumButton = document.querySelectorAll(".drum").length;

for(var i=0; i< numberOfDrumButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
            var button = this.innerHTML;

            makesound(button);
            buttonAnimation(button);
    });
}

    document.addEventListener("keypress",function(event){
        makesound(event.key);
        buttonAnimation(event.key);
    });

    function makesound(nkey){
    

        switch (nkey) {
            case "w":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;


            case "a":
                    var kick = new Audio("sounds/kick-bass.mp3");
                    kick.play();
                    break;

             case "s":
                     var tom1 = new Audio("sounds/tom-1.mp3");
                     tom1.play();
                 break;
        

            case "d":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                break;

            case "j":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                break;

            case "k":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                break;

            case "l":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                break;

            default:
                break;
        }
    }
        
   function buttonAnimation(currentKey){

     var activekey =   document.querySelector("."+currentKey);
     activekey.classList.add("pressed");


     setTimeout(function(){
        activekey.classList.remove("pressed");

     },100);
   }



