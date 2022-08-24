// algorythm to make big array

export function coordenadas(name='1992-15-05', firstFull, secondFull, date){
    let allArray = []
    
    let finalArray = []
    

    let arrayName = name.split('')
    let arrayFirstFull = firstFull.split('')
    let arraySecondFull = secondFull.split('')
    let arrayDate = date.split('')

    let yearDigit = arrayName[3]

    function takeYear(){
        let year = arrayDate.slice(Math.max(arrayDate.length - 4, 1))
        let year2 = year.slice(0, 2)
        let year1 = year.slice(Math.max(year.length - 2, 1))
        let invertYear = year1.concat(year2)
        let day = arrayDate.slice(0, 2)
        let month = arrayDate.slice(2, 4)

        let correctMonth = [...invertYear, ...month, ...day]
        arrayDate = correctMonth
    }

    takeYear()


    // comper lengths
    let numbersToComper = [arrayName.length, arrayFirstFull.length, arraySecondFull.length, arrayDate.length ]
    let bigerL = Math.max(...numbersToComper)
         
    // let bigerL = charCode(name, firstFull, secondFull, date)

    for (let i = 0; i < bigerL; i++) {
        allArray.push(arrayDate[i])
        allArray.push(arrayFirstFull[i])
        allArray.push(arraySecondFull[i])
        allArray.push(arrayName[i])
    }
  
    const newArray = allArray.filter(Boolean);



    for (let i = 0; i < newArray.length; i++) {
        finalArray.push(newArray.join('').charCodeAt(i))
        if (finalArray[i] < 1 ){
            finalArray[i] = finalArray[i] + 2
        }
    }



    for(let i = 0; i < finalArray.length; i++) {
    
        while(String(finalArray[i]).length > 1) {
   
            
          if(yearDigit > 7){
            let nineDivision = finalArray[i]/yearDigit
            finalArray[i] = Math.round(nineDivision)
           
          }else{
            let nineDivision = finalArray[i]/7
            finalArray[i] = Math.round(nineDivision)
          }

          
          if(finalArray[i] === finalArray[i-1]){


            }
        }
        
    }

    // let toString = finalArray.map((e) => e.toString())
    // let result = []
    // const r1 = toString.map(e => e.split(''))
    // const lengthOne = (e) => e.length === 1
    // let arrayToLength = result.map((e) => e.toString())
    
    //     do {
    //         result = r1.map(e => e.map( element => +element ).reduce((pv, cv) => pv + cv, 0 ) )
    //         result = r1.map(e => e.map( element => +element ).reduce((pv, cv) => pv + cv, 0 ) )

    //         return arrayToLength
    //     } while(arrayToLength.every(lengthOne))

    
    // const sumatoria = (fArray) => {
    
    //     const sum = (fArray) => {
    //         let toString = fArray.map((e) => e.toString())
    //         let result = []
    //         const r1 = toString.map(e => e.split(''))
    //         result = r1.map(e => e.map( element => +element ).reduce((pv, cv) => pv + cv, 0 ) )
    //         return result
    //     }
    
    //     let arrayToLength = sum(fArray).map((e) => e.toString())
    //     const lengthOne = (e) => e.length === 1
    
    //     do {
    //         arrayToLength = sum(arrayToLength)
    //         arrayToLength = sum(arrayToLength)
    //         return arrayToLength
    //     } while(arrayToLength.every(lengthOne))
    
    // }



    finalArray.length = 32

 
   
    return finalArray


  
}
