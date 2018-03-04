let theAudioElement =document.getElementsByClassName('electra')[0]
let theAudioElement1 =document.getElementsByClassName('fish')[0]
let theAudioElement2 =document.getElementsByClassName('corniche')[0]
let theAudioElement3 =document.getElementsByClassName('hamdan')[0]
let theAudioElement4 =document.getElementsByClassName('shisha')[0]


var electraAudio = new Audio('breakfast.ogg');

 theAudioElement.onclick = () => {
   electraAudio.play();

 }



 var fishAudio = new Audio('fishsouk.ogg');

  theAudioElement1.onclick = () => {
    fishAudio.play();

  }



  var cornicheAudio = new Audio('lunch.ogg');

   theAudioElement2.onclick = () => {
     cornicheAudio.play();

   }

   var hamdanAudio = new Audio('dinner.ogg');

    theAudioElement3.onclick = () => {
      hamdanAudio.play();

    }


    var shishaAudio = new Audio('shisha.ogg');

     theAudioElement4.onclick = () => {
       shishaAudio.play();

     }
