import React, {useRef, useState} from 'react'
import Hamburger from './Hamburger'
import './menu.styles.css'
import useAuth from '../../hooks/useAuth'
import useProyectos from '../../hooks/useProyectos'
import { Link } from 'react-router-dom'

const Menu = () => {
  const { auth, cerrarSesionAuth } = useAuth()
  const { cerrarSesionProyectos } = useProyectos()
  const [state, setState] = useState(true)
  const menuRef = useRef()

  const handleLogout = () => {
    cerrarSesionAuth()
    cerrarSesionProyectos()
    localStorage.removeItem('token')
  }

  const handleClick = () => {
    if(state) {
      menuRef.current.style.left = '-100vw'
      setState(false)
    }else{
      menuRef.current.style.left = '20vw'
      setState(true)
  }
    // console.log('ham,burger itten', state)
  }

  const goTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
  }
  


<div className='already'> <h3>Already registered? </h3> <Link to='/login'> <h3>Log In here</h3> </Link></div>

  return (
    <aside >
    <div className='menuWraper'>

    {auth.nombre ? <p className="saludo"> Hey {auth.nombre} </p> : <Link className='btnLogIn' onClick={goTop} to='/login'> Log In / Register </Link> }
      {/* <Hamburger handleClick={handleClick} /> */}
      <Hamburger />
      <div className="menuHam">
        <Link className='itemMenu' to={'/about'} > About </Link>
        <Link className='itemMenu' to={'/buy'} > Buying process </Link>
        {/* <Link className='itemMenu' to={'/revertexflex'} > What is REVERTEXFLEX </Link> */}
        <Link className='itemMenu' to={'/contact'} > Contact </Link>
        {/* <button href={'/'} > CuartelDinamita </button> */}
        {auth.nombre && <Link to='/' onClick={handleLogout} className='btnLogOut'>Log Out</Link>}
      </div>

    </div>
    {/* <div className= 'menu'>
      <div className="menuHam" ref={menuRef}>
        <button href={'/'} > About </button>
        <button href={'/'} > Buying process </button>
        <button href={'/'} > What is REVERTEXFLEX </button>
        <button href={'/'} > Contact </button>
        <button href={'/'} > V.1 </button>
        <button href={'/'} > CuartelDinamita </button>
        {auth.nombre && <button onClick={handleLogout} className='btnLogOut'>Log Out</button>}
      </div>
    </div> */}
    </aside>
  )
}

export default Menu