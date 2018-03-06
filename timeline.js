let theAudioElement = document.getElementById('electra')
let theAudioElement1 = document.getElementById('fish')
let theAudioElement2 = document.getElementById('corniche')
let theAudioElement3 = document.getElementById('hamdan')
let theAudioElement4 = document.getElementById('shisha')
let timeLine = document.getElementById('tl')

let electraPlayed = false;
let fishPlayed = false;
let cornichePlayed = false;
let hamdanPlayed = false;
let shishaPlayed = false;

let electraClick = 1;
let fishClick = 1;
let cornicheClick = 1;
let hamdanClick = 1;
let shishaClick = 1;


var electraAudio = new Audio('breakfast.ogg');

 theAudioElement.onclick = () => {
   if ((electraClick % 2) == 1)
   {

      fishAudio.pause();
      hamdanAudio.pause();
      cornicheAudio.pause();
      shishaAudio.pause();

     electraAudio.play();
     timeLine.src="electra.png";
     electraPlayed = true;
     console.log(electraPlayed);
     electraClick += 1;

   }
   else {
     electraAudio.pause();
     electraClick += 1;
   }

 }


 var fishAudio = new Audio('fishsouk.ogg');

  theAudioElement1.onclick = () => {
    if (electraPlayed)
    {
      if ((fishClick % 2) == 1)
      {
        fishAudio.play();
        timeLine.src="fish.png";
        fishPlayed = true;
        console.log(fishPlayed);
        fishClick += 1;


       electraAudio.pause();
       hamdanAudio.pause();
       cornicheAudio.pause();
       shishaAudio.pause();

      }
      else {
        fishAudio.pause();
        fishClick += 1;
      }
    }
  }

  var cornicheAudio = new Audio('lunch.ogg');

   theAudioElement2.onclick = () => {

     if (fishPlayed)
     {
       if ((cornicheClick % 2) == 1)
       {

         fishAudio.pause();
         hamdanAudio.pause();
         electraAudio.pause();
         shishaAudio.pause();

         cornicheAudio.play();
         timeLine.src="corniche.png";
         cornichePlayed = true;
         console.log(cornichePlayed);
         cornicheClick += 1;

       }
       else {
         cornicheAudio.pause();
         cornicheClick += 1;
       }
     }
   }


   var hamdanAudio = new Audio('dinner.ogg');

    theAudioElement3.onclick = () => {
      if (cornichePlayed)
      {
        if ((hamdanClick % 2) == 1)
        {

          fishAudio.pause();
          electraAudio.pause();
          cornicheAudio.pause();
          shishaAudio.pause();

          hamdanAudio.play();
          timeLine.src="hamdan.png";
          hamdanPlayed = true;
          console.log(hamdanPlayed)
          hamdanClick += 1;
        }
        else {
          hamdanAudio.pause();
          hamdanClick += 1;
        }
      }
    }


    var shishaAudio = new Audio('shisha.ogg');

     theAudioElement4.onclick = () => {
       if (hamdanPlayed)
       {
         if ((shishaClick % 2) == 1)
         {

           fishAudio.pause();
           hamdanAudio.pause();
           cornicheAudio.pause();
           electraAudio.pause();

           shishaAudio.play();
           timeLine.src="shisha.png";
           shishaPlayed = true;
           console.log(shishaPlayed);
           shishaClick += 1;
         }
         else
         {
           shishaAudio.pause();
           shishaClick += 1;
         }
       }
     }
