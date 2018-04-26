let theAudioElement =document.getElementsByClassName('song1')[0]
let theAudioElement1 =document.getElementsByClassName('song2')[0]
let theAudioElement2 =document.getElementsByClassName('song3')[0]
let theAudioElement3 =document.getElementsByClassName('song4')[0]

element.addEventListener("click", function(){ alert("good choice!"); });



var song1Audio = new Audio('Something Good.mp3');

 theAudioElement.onclick = () => {
   song1Audio.play();

 }



 var song2Audio = new Audio('Under.mp3');

  theAudioElement1.onclick = () => {
    song2Audio.play();

  }



  var song3Audio = new Audio('03 East Harlem.mp3');

   theAudioElement2.onclick = () => {
     song3Audio.play();

   }

   var song4Audio = new Audio('Moonage Daydream..mp3');

    theAudioElement3.onclick = () => {
      song4Audio.play();

    }
