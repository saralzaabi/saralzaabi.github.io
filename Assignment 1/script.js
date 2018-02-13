let button1 = document.getElementById('tomovie')
let button2 = document.getElementById('toabout')
let button3 = document.getElementById('backtomovie')
let button4 = document.getElementById('tocrew')
let button5 = document.getElementById('backtoabout')

let land = document.getElementById("land")
let slide1 = document.getElementById("main-one")
let slide2 = document.getElementById("main-two")
let slide3 = document.getElementById("main-three")

button1.onclick = () =>
{
  land.style.height = '0px';
  setTimeout( () => {slide1.style.display='block', land.style.display='none'
  }, 200)
}

button2.onclick = () =>
{
  slide1.style.height = '0px';
  slide2.style.height = '750px'
  setTimeout( () => {slide2.style.display='block', slide1.style.display='none'
  }, 200)
}

button3.onclick = () =>
{
  slide2.style.height = '0px'
  slide1.style.height = '750px'
  setTimeout( () => {slide1.style.display='block', slide2.style.display='none'
  }, 200)
}

button4.onclick = () =>
{
  slide2.style.height = '0px'
  slide3.style.height = '900px'
  setTimeout( () => {slide3.style.display='block', slide2.style.display='none'
  }, 200)
}

button5.onclick = () =>
{
  slide3.style.height = '0px'
  slide2.style.height = '750px'
  setTimeout( () => {slide2.style.display='block', slide3.style.display='none'
  }, 200)
}
