let dieRolls = []//array for roll results



let roll = document.querySelector('#roll')// roll button
let input = document.querySelector('#input')//input number
let total = document.querySelector('#total')


roll.addEventListener('click', function(){
    let dieNumber = parseInt(input.value)//the input value
    
    
    while(dieRolls.length < dieNumber){//while die rolls length is less than te number of die
        dieRolls.push(Math.floor(Math.random() * 6 + 1 ))  //push a random number to dieRolls array

        let sum = dieRolls.reduce( function(total, amount){
            return total + amount
          });
          total.innerText = sum

      console.log(dieRolls)
    }
    
})