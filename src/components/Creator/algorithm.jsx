const fullName = 'John'
let finalArray = []
let arrayName = fullName.split('')

// console.log(arrayName)

for (let i = 0; i < arrayName.length; i++) {
    finalArray.push((fullName).charCodeAt(i)) 
}

// console.log(finalArray)

for (let i = 0; i < finalArray.length; i++) {
    let bigNumber = String(finalArray[i])
    while(bigNumber.length > 1){
        let division = finalArray[i]/7
        finalArray[i] = Math.round(division)

    }    
}

// console.log(finalArray)