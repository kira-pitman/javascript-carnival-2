// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
import canvasConfetti from 'https://cdn.skypack.dev/canvas-confetti'

console.log('Inflate The Unicorn!')

let unicorns = document.getElementsByClassName('unicorn')

for (let unicorn of unicorns) {
  unicorn.onclick = unicornClicked
}
//put in array afterwards
let unicornarr = [0, 0, 0] // id corresponds to index
// let unicorn0 = 0
// let unicorn1 = 0
// let unicorn2 = 0

function unicornClicked(e) {
  let unicorn = e.currentTarget
  let id = unicorn.id

  if (id == 0) {
    if (unicornarr[0] < 4) {
      unicornarr[0] += 1 // increase unicorn 0 number
      unicorn.src = `./images/unicorn-${unicornarr[0]}.png`
    }
    if (unicornarr[0] >= 4) {
      canvasConfetti()
      unicorn.src = `./images/unicorn-0.png`
      unicornarr[0] = 0
      console.log('congrat !')
    }
  }

  if (id == 1) {
    unicornarr[1] += 1 // increase unicorn 1 number
    unicorn.src = `./images/unicorn-${unicornarr[1]}.png`
  }

  if (id == 2) {
    unicornarr[2] += 1 // increase unicorn 2 number
    unicorn.src = `./images/unicorn-${unicornarr[2]}.png`
  }

  console.log('clicked ur unicorn')
}
