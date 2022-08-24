const array = [
    8, 4, 9, 4, 5, 4, 9, 6, 2,
    6, 2, 5, 7, 9, 6, 3, 8, 5,
    4, 9, 9, 1, 6, 8, 2, 9, 5,
    3, 5, 7, 8, 4, 4, 8
  ]
const length = 3


const dividedBy = (a, la) => {
    const newArray = []
    let e = 0
    do {
        let tempArray = []
        for (let i = 0; i < la; i++) {
            tempArray.push(a[e])  
            e++
        }
        newArray.push(tempArray)   
        tempArray = [] 
    } while (newArray.length !== Math.floor(a.length/la));

    return newArray
}

// console.log(dividedBy(array, length))