export const charCode = (par='nombreapellidosnickdate') => {
    const finalArray = []
    const letterList = par
    // console.log('data', letterList)
    for(let i = 0; i<letterList.length; i++){
      const up = letterList.toUpperCase()
      finalArray.push(up.charCodeAt(i))
    }
    return finalArray
  }

  // console.log(processator('nombre', 'apellido', 'nick', 'date'))
  // console.log(charCode('Chris26tianvalde10rramaba77bu'))
