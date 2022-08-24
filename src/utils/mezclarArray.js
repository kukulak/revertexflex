

//Recibo data revuelvo nombre con fecha y retorno un solo array 


const mezcla = (arr, ajeno, section) =>{
    let sliced;
    switch (section) {
        case 'd':
            sliced = ajeno.slice(0, 2)
            break;
        case 'm':
            sliced = ajeno.slice(2, 4)
            break;
        case 'a':
            sliced = ajeno.slice(4, 8)
            break;
        default:
            sliced = ajeno.slice(0, 2)
            break;
    }

    const arr1 = arr.split('')
    arr1.splice(arr.length/3, 0, sliced)
    const arr2 = arr1.join('')
    return arr2

}

// console.log(mezclar('Christian', 'valderrama', 'babu', '05071977'))

export const mezclarArray = (nombre, apellido, nick, date) => {
    // console.log('DATEDATE', Date.parse(date), date)
    // const dateNumber = Date.parse(date).toString()
    const dateNumber = Math.abs(Date.parse(date)).toString()
    // console.log("date number", dateNumber)
    const bArray = mezcla(nombre, dateNumber, 'd') + mezcla(apellido, dateNumber, 'm') + mezcla(nick, dateNumber, 'a')
    return bArray.replaceAll(' ', '')
}

// console.log(mezclarArray('Christian', 'Valderrama Gomez', 'babuchas', '1977-10-26'))