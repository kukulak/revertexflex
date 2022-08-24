import React from 'react'
import useProyectos from '../hooks/useProyectos'
import './Infos.css'


const Proyectos = () => {
  const {proyectos} = useProyectos()

  return (
    <>
      <h3>Saved Sculptures</h3>
    </>
  )
}

export default Proyectos