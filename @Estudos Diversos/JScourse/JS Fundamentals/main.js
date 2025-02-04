const rafa = [
  'Rafael',
  'Matos',
  2024-1986,
  'Policial'
]

/* *** FOR LOOP *** */
for(let i = rafa.length - 1; i >= 0; i--) {
  console.log(i, rafa[i])   
}

for(let x = 1; x <= 3; x++) {
  console.log(`### Tarefa ${x} ###`)
  
  for(let y=1; y <= 3; y++) {
    console.log(`Tarefa ${x}: subtarefa ${y}`)
  } 
}

/* *** WHILE LOOP *** */
let dice = Math.trunc(Math.random()*6) + 1
console.log(dice)

while (dice !== 6) {
  console.log(`You rolled ${dice}...`)
  dice = Math.trunc(Math.random()*6) + 1
  if(dice === 6) {
    console.log(`You rolled ${dice}!`)
    console.log('Loop is finally over!!')
  }
}

