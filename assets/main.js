let dieRolls = [] //array for roll results



let roll = document.querySelector('#roll') // roll button
let input = document.querySelector('#input') //input number
let total = document.querySelector('#total')
let showRolls = document.querySelector('#show')
let sides = document.querySelector('#sides')


roll.addEventListener('click', function () {
    let dieNumber = parseInt(input.value) //the input value
    
  
    while (dieRolls.length < dieNumber) { //while die rolls length is less than te number of die
        dieRolls.push(Math.floor(Math.random() * parseInt(sides.value) + 1 )) //push a random number to dieRolls array

        
        let sum = dieRolls.reduce(function (total, amount) { //reduce array to 
            return total + amount
        })
    

        total.innerText = 'The sum of the roll is' + ' ' + sum

        console.log(dieRolls)
    
    }
   

}) // event listner while i < array .length create new html element with inner text of current index.
showRolls.addEventListener('click', function () { // <= listen for click
    let i = 0 // let index = 0

    while (i < dieRolls.length) { // while index is less than the length of the array

        dieRolls.join() // join array to make it a string 

        let newItem = document.createElement('li') // create a newItem variable equal to a  new list item 

        let itemContent = document.createTextNode(dieRolls[i]) // itemContent = text node of array index

        newItem.appendChild(itemContent) // append new content to new list item
        let list = document.querySelector('#allrolls')// add variable to my ordered list
    


        list.appendChild(newItem)// append child to my is

        console.log(list)
        
        i++// incriment index
    }
    dieRolls = []
})
