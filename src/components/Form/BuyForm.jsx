import React from 'react'
import { useState, useEffect } from "react";
import clienteAxios from '../../config/clienteAxios';
import Alert from './Alert';
import {Link} from 'react-router-dom'

const RegisterForm = (props) => {

  const [nombre, setNombre]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword] = useState('')
  const [repetirPassword, setRepetirPassword] = useState('')
  const [alert, setAlert] = useState({})

  const submitHandler = async (e) => {
    e.preventDefault()
    if([nombre, email, password, repetirPassword].includes('')){
      setAlert({
        msg: 'Fill all the fields to register',
        error: true
      })
      return
    }
    if(password !== repetirPassword){
      setAlert({
        msg: 'Bouth password must be equal',
        error: true
      })
      return
    }
    if(password.length < 6){
      setAlert({
        msg: 'Password length must be at least 6 characters',
        error: true
      })
      return
    }
    setAlert({})
    //Crear el usuario en la API
    
    try{
      const { data } = await clienteAxios.post(`/usuarios`, {nombre, email, password})
      setAlert({
        msg: data.msg,
        error: false
      })
      setNombre('')
      setEmail('')
      setPassword('')
      setRepetirPassword('')
    }catch(error){
      setAlert({
        msg: error.response.data.msg,
        error: true
      })
    }

  }

  const { msg } = alert

  const getUsers=async()=>{
    const response = await fetch('/profile/:nombre');
    const data=await response.json();
    // console.log('show DATA', data.results[0])
    setNombre(data.results[0])
  }

  const goDown = () => {
    const element = document.querySelector("#formName")
    element.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <>
      <div className="user__name">
      </div>
      <section className='formWraper'>
      <form className='registerForm' onSubmit={submitHandler}>
        <div className='titleClose'> <h2>Register</h2> <Link onClick={ goDown } to='/'> <h3>X close</h3> </Link></div>
        { msg && <Alert alert={alert}/> }
        <label htmlFor="nombre-register"> Name </label>
        <input value={nombre} name="nombre" id="nombre-register" className="form-control" type="text" placeholder="Your name" autoComplete="off"  onChange={e => setNombre(e.target.value)} />

        <label htmlFor="email-register"> eMail </label>
        <input value={email} name="email" id="email-register" className="form-control" type="email" placeholder="you@favoritemail.com" autoComplete="off" onChange={e => setEmail(e.target.value)}/>

        <label htmlFor="password-register"> Password </label>
        <input value={password} name="password" id="password-register" className="form-control" type="password" placeholder="Create password" autoComplete="off" onChange={e => setPassword(e.target.value)}/>
       
        <input value={repetirPassword} name="password2" id="password-register2" className="form-control" type="password" placeholder="Confirm password" autoComplete="off" onChange={e => setRepetirPassword(e.target.value)}/>
        
        <input type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block" value="Sign Up" />

        <div className='already'> <h3>Already registered? </h3> <Link to='/login'> <h3>Log In here</h3> </Link></div>

          <div className='already'> <h3>Forgot your password?</h3> <Link to='/olvide-password'> <h3>Reset it here</h3> </Link></div>

      </form>
      </section>
    </>
  )
}

export default RegisterForm