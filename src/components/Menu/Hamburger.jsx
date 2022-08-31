import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useProyectos from '../../hooks/useProyectos'

const Hamburger = () => {
  const { auth, cerrarSesionAuth } = useAuth()
  const { cerrarSesionProyectos } = useProyectos()
  const [menu, setMenu] = useState(true)
  const menuHRef = useRef()
  const menuHam = useRef()


  const handleLogout = () => {
    cerrarSesionAuth()
    cerrarSesionProyectos()
    localStorage.removeItem('token')
  }


  const hideShow = () => {
    console.log('menuPressed')
    menu ? setMenu(false) : setMenu(true)
    menu ? menuHRef.current.style.right = '0vw' : menuHRef.current.style.right = '-100vw'
  }

  return (
    <>
      <div ref={menuHam} onClick={hideShow} className='hamMenu'>
        <div className='hamElement'></div>
        <div className='hamElement'></div>
        <div className='hamElement'></div>
      </div>
      <div ref={menuHRef} className='menuHide'>
        <Link className='itemMenu' onClick={hideShow} to={'/about'} > About </Link>
        <Link className='itemMenu' onClick={hideShow} to={'/buy'} > Buying process </Link>
        {/* <Link className='itemMenu' onClick={hideShow} to={'/revertexflex'} > What is REVERTEXFLEX </Link> */}
        <Link className='itemMenu' onClick={hideShow} to={'/contact'} > Contact </Link>
        {/* <button href={'/'} > CuartelDinamita </button> */}
        {auth.nombre && <Link to='/' onClick={handleLogout} className='btnLogOut'>Log Out</Link>}
      </div>
    </>
  )
}

export default Hamburger