// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
import canvasConfetti from 'https://cdn.skypack.dev/canvas-confetti'

let unicorns = document.getElementsByClassName('unicorn')

for (let unicorn of unicorns) {
  unicorn.onclick = unicornClicked
}

let unicornarr = [0, 0, 0]

function unicornClicked(e) {
  let unicorn = e.currentTarget
  let id = unicorn.id

  if (id == 0) {
    if (unicornarr[0] < 4) {
      unicornarr[0] += 1
      unicorn.src = `./images/unicorn-${unicornarr[0]}.png`
    }
    if (unicornarr[0] >= 4) {
      canvasConfetti()
      unicorn.src = `./images/unicorn-0.png`
      unicornarr[0] = 0
    }
  }

  if (id == 1) {
    if (unicornarr[1] < 4) {
      unicornarr[1] += 1
      unicorn.src = `./images/unicorn-${unicornarr[1]}.png`
    }
    if (unicornarr[1] >= 4) {
      canvasConfetti()
      unicorn.src = `./images/unicorn-0.png`
      unicornarr[1] = 0
    }
  }

  if (id == 2) {
    if (unicornarr[2] < 4) {
      unicornarr[2] += 1
      unicorn.src = `./images/unicorn-${unicornarr[2]}.png`
    }
    if (unicornarr[2] >= 4) {
      canvasConfetti()
      unicorn.src = `./images/unicorn-0.png`
      unicornarr[2] = 0
    }
  }
}
