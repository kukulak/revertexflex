// Tomar dos arrays y los va a combinar

// [0, 1, 2]
// [3, 4, 5]
// [0, 3, 1, 4, 2, 5] opcion 1
// [[0, 3,], [1, 4,], [ 2, 5]] opcion 2 = [3, 5, 7]


export const combinator = (arr1, arr2) =>{
    const arr3 = []
    for (let i = 0; i < arr1.length; i++) {
        arr3.push([arr1[i], arr2[i]]);
    }
    if(arr1.length >= 11){
        const arr4 = arr3.map(element => element.reduce((prev, act) => prev + act, 0));
       return arr4
    } else {
        return arr3.flat()
    }
    // return arr3
 }

//  console.log(combinator([0, 1, 2], [3, 4, 5]))

//  console.log(combinator([11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
