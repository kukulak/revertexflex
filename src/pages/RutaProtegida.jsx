import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import LoadSculpts from '../components/Creator/LoadSculpts'
import Menu from '../components/Menu/Menu'
import useAuth from '../hooks/useAuth'

const RutaProtegida = () => {

  const { auth, cargando } = useAuth()
  // console.log(auth)
  if(cargando) return 'Cargando...'
  return (
    <>
    <div>Hola</div>
      {auth._id ? (
        <div>
          <Menu />
          <LoadSculpts />
          <main>
            <Outlet /> 
          </main>
        </div>
      ): <div>you must be loged in</div>}
      {/* ): <Navigate to='/' />} */}
    </>
  )
}

export default RutaProtegida