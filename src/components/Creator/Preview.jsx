import React, { useState } from 'react'
import useProyectos from '../../hooks/useProyectos'

const Preview = ({proyecto, i}) => {
  
  const {retriver, eliminarProyecto, reloadRay} = useProyectos()


  const { _id, nombre, apellidos, nick, birthdate, magicNumber, color1, color2, color3} = proyecto
  

  const handleDelete = () => {
    if (window.confirm('Sure to delete this Sculpture?')) {
      eliminarProyecto(_id)
    }
  }

  const setRetriver = async () => {
    reloadRay(false)
    setTimeout(() => {
      reloadRay(true)
      // retriver( proyecto )
      // console.log('PROYECTO', proyecto)
    }, "600") 

    // reloadRay(true)
    retriver( proyecto )
  }

  return (
    <div className='proyectWraper'> 
    <div onClick={ setRetriver  } className='btnProyectWraper proyectBtn'> 
      <div className='title_saved'>
        <h3>
          { nick } {" "} 
        </h3>
      <h5 className='mNumber'>
        { i + 1}
      </h5>
      </div>
      {/* <p className='mNumber'> { magicNumber } </p> */}
    <p>
      { nombre } 
    </p> 
    <p>
      { apellidos } 
    </p> 
      {/* <div className='imgProyect'>

      </div> */}
      <div className='colores'>
        <div style={{backgroundColor: color3}} className='coloresCirculos'></div>
        <div style={{backgroundColor: color2}} className='coloresCirculos'></div>
        <div style={{backgroundColor: color1}} className='coloresCirculos'></div>
       
      </div>
      {/* <p className='idSize'>
        { _id } 
      </p>  */}
    </div>
    <button onClick={ handleDelete } className='deleteRay'> Delete </button>
    </div>
  )
}

export default Preview