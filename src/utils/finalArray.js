// final array va a recbir data y va a procesar la data con los diferentes procesadores para obtener el final array:

// data > mezclarArray > charCode > sumatoria = array 1
// cahrCode[0], charCodce[1], charCode.length > sucesionF > sumatoria = array2
// array1, array2 > combinator = finalArray
import { mezclarArray } from './mezclarArray.js';
import { charCode } from './charCode.js';
import { sumatoria } from './sumatoria.js';
import { sequence } from './sucesionFibonacci.js';
import { combinator } from './combinator.js';

const finalArray = (nombre='nombres', apellido='apellidos', nick='nick', date='1977-07-05', magicNumber=0) => {
    let fA = []
    const mezclar = mezclarArray(nombre, apellido, nick, date)
    const char = charCode(mezclar)
    const suma = sumatoria(char)
    const seq = sequence(magicNumber+70, suma[suma.length-1], suma.length)
    const seqSum = sumatoria(seq)
    fA = sumatoria(combinator(suma, seqSum))

    // console.log('mezclar', mezclar)
    // console.log('char', char)
    // console.log('suma', suma)
    // console.log('seq', seq)
    // console.log('seqSum', seqSum)
    // console.log('FA', fA)
    
    // fA.length = 32
    fA.length = 32
    // console.log('FA', fA)
    return fA
    
}


export default finalArray

// console.log(finalArray('', '', '', ''))
