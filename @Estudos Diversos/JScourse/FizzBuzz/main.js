let play = []
let count = 1

function fizzBuzz() {
  
  // WHILE
    
  while (count <= 100) {

    if (count % 3 === 0 && count % 5 === 0) {
      play.push(' FizzBuzz')
    } else if (count % 3 === 0) {
      play.push(' Fizz')
    } else if (count % 5 === 0) {
      play.push(' Buzz')      
    } else {
      play.push(' ' + count)
    }
    count++
  
  }

  // FOR LOOP
    
  // for ( var i = 1; i < 100; i++) {

  //   if (i % 3 === 0 && i % 5 === 0) {
  //     play.push(' FizzBuzz')
  //   } else if (i % 3 === 0) {
  //     play.push(' Fizz')
  //   } else if (i % 5 === 0) {
  //     play.push(' Buzz')      
  //   } else {
  //     play.push(' ' + i)
  //   }
  
  // }

}

const container = document.getElementById('container')
const botao = document.getElementById('botao')

botao.addEventListener('click', () => {
  fizzBuzz()
  container.textContent = play
})


