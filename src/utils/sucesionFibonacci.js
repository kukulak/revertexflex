// La sucesión comienza con los números 0 y 1;2​ a partir de estos, «cada término es la suma de los dos anteriores», es la relación de recurrencia que la define.

// whant to use any 3 numbers, first number of sequence, second number of the secuence and the length of the sequebce

export const sequence = (a, b, l) => {
    const result = [Number(a), Number(b)]
    const starter = (x, y) => {
        let temporal = x + y;
        result.push(temporal)
    }

    for (let f = 2; f < l; f++) {
        const position = result.length-1;
        starter(result[position-1], result[position])
    }

    return result
}

// console.log(sequence(4, 9, 29))