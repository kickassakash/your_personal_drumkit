// alert("files are working!");
var elem = document.querySelectorAll("button").length;
for(var i=0;i<elem;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var key = this.innerHTML;
        animation(key);
        switch (key) {
            case "w":
                var aud = new Audio('sounds/crash.mp3');
                aud.play();
                break;

            case "a":
                var aud = new Audio('sounds/kick-bass.mp3');
                aud.play();
                break;
            case "s":
                var aud = new Audio('sounds/snare.mp3');
                aud.play();
                break;

            case "d":
                   var aud = new Audio('sounds/tom-1.mp3');
                    aud.play();
                    break;
            case "j":
                var aud = new Audio('sounds/tom-2.mp3');
                aud.play();
                break;
            case "k":
                    var aud = new Audio('sounds/tom-3.mp3');
                    aud.play();
                    break;
            case "l":
                var aud = new Audio('sounds/tom-4.mp3');
                aud.play();
                break;
            default:
                console.log("undefined key pressed lol!");
                break;
        }
    });
}
document.addEventListener("keydown", function(event){
        var stroke = event.key;
        animation(stroke);
        switch (stroke) {
            case "w":
                var aud1 = new Audio('sounds/crash.mp3');
                aud1.play();
                console.log(stroke);
                break;
            case "a":
                var aud = new Audio('sounds/kick-bass.mp3');
                aud.play();
                break;
            case "s":
                var aud = new Audio('sounds/snare.mp3');
                aud.play();
                break;
                case "s":
                    var aud = new Audio('sounds/snare.mp3');
                    aud.play();
                    break;
    
                case "d":
                       var aud = new Audio('sounds/tom-1.mp3');
                        aud.play();
                        break;
                case "j":
                    var aud = new Audio('sounds/tom-2.mp3');
                    aud.play();
                    break;
                case "k":
                        var aud = new Audio('sounds/tom-3.mp3');
                        aud.play();
                        break;
                case "l":
                    var aud = new Audio('sounds/tom-4.mp3');
                    aud.play();
                    break;
            default:
                break;
        }
    });

function animation(key_val){
    var cl = document.querySelector("."+key_val);
    cl.classList.add("pressed");
    setTimeout(function(){cl.classList.remove("pressed");},100);
}