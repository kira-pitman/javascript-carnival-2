// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let unicorns = document.getElementsByClassName('unicorn')

for (let unicorn of unicorns) {
  unicorn.onclick = unicornClicked
}
//put in array afterwards
let unicorn0 = 0
let unicorn1 = 0
let unicorn2 = 0

function unicornClicked(e) {
  let unicorn = e.currentTarget
  let id = unicorn.id

  if (id == 0) {
    unicorn0 += 1 // increase unicorn 0 number
    unicorn.src = `./images/unicorn-${unicorn0}.png`
  }

  console.log('clicked ur unicorn')
}
