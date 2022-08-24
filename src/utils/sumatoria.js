// Si cada elemento de un array es mayor a un digito se van a sumar los digitos hasta que quede el valor de un solo digito 

const fArray = [67, 72, 82, 73, 83, 50, 54, 84, 73, 65, 78, 86, 65, 76, 68, 69, 49, 48, 82, 82, 65, 77, 65, 66, 65, 55, 55, 66, 85]

// const fArray = [1, 2, 4, 5]


// const fArray = [
//     4,       9,      13,      22,
//    35,      57,      92,     149,
//   241,     390,     631,    1021,
//  1652,    2673,    4325,    6998,
// 11323,   18321,   29644,   47965,
// 77609,  125574,  203183,  328757,
// 531940,  860697, 1392637, 2253334,
// 3645971, 5899305, 9545276
// ]

export const sumatoria = (fArray) => {
    
    const sum = (fArray) => {
        let toString = fArray.map((e) => e.toString())
        let result = []
        const r1 = toString.map(e => e.split(''))
        result = r1.map(e => e.map( element => +element ).reduce((pv, cv) => pv + cv, 0 ) )
        return result
    }

    let arrayToLength = sum(fArray).map((e) => e.toString())
    const lengthOne = (e) => e.length === 1

    do {
        arrayToLength = sum(arrayToLength)
        arrayToLength = sum(arrayToLength)
        return arrayToLength
    } while(arrayToLength.every(lengthOne))

}

// console.log(sumatoria(fArray))