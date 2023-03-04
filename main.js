function startClassification() 
{ 
    navigator.mediaDevices.getUserMedia({ audio: true});
     classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady); } 
     modelReady();
     
     function modelReady(){
     classifier.classify( gotResults);}
     function gotResults(error,results){
        if(error){
            console.error(error);
        }
        else{
            console.log(results);
            var red= Math.floor(Math.random()* 255 +1);
            var blue=Math.floor(Math.random()* 255 +1);
            var green=Math.floor(Math.random()* 255 +1);

            document.getElementById("sound_detecting_count").innerHTML= "Detected Barking - "+dog+" Detected Meowing - "+cat+" Detected Roaring - "+lion+" Detected Mooing - " + cow;
            document.getElementById("result_sound").innerHTML= "Detected Sound Of - "+results;

            document.getElementById("result_sound").style.color = "rgb("+red+", "+green+", "+blue+")";
            document.getElementById("sound_detecting_count").style.color = "rgb("+red+", "+green+", "+blue+")";

            img = document.getElementById("photo");

            if(results[0].label == "barking"){

                img.src="dog.jpeg";
                dog = dog + 1;

    
            }
    
            else if(results[0].label == "meowing"){
    
                img.src="cat.png";
                cat = cat+1;

            }
    
            else if(results[0].label == "roaring"){
    
                img.src="lion.png";
                lion = lion+1;
    
            }

            else if(results[0].label == "mooing"){
    
                img.src="cow.png";
                cow = cow+1;
    
            }
    
            else {
    
                img.src="ear.png";
            }
    
    

        } }

var dog=0
var cat=0
var cow=0
var lion=0

