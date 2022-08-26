import React from 'react'
import { useState, useEffect } from "react";
import clienteAxios from '../config/clienteAxios';
import Alert from '../components/Form/Alert';
import {Link} from 'react-router-dom'
import './Infos.css'

const Contact = (props) => {


  const [nombre, setNombre]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword] = useState('')
  const [repetirPassword, setRepetirPassword] = useState('')
  const [alert, setAlert] = useState({})
  const [message, setMessage] = useState('')

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
    <div className='infos'>
      <div className='infoWraper'>
          {/* <Link to={'/'}>X cerrar</Link> */}
      

        <>
      <div className="user__name">
      </div>
      <section className='contactForm'>
      <form className='registerForm' onSubmit={submitHandler}>
        <div className='titleClose'> <h1>Contact</h1> <Link onClick={ goDown } to='/'> <h3>X close</h3> </Link></div>
        { msg && <Alert alert={alert}/> }
        <label htmlFor="nombre-register"> Name </label>
        <input value={nombre} name="nombre" id="nombre-register" className="form-control" type="text" placeholder="Your name" autoComplete="off"  onChange={e => setNombre(e.target.value)} />

        <label htmlFor="email-register"> eMail </label>
        <input value={email} name="email" id="email-register" className="form-control" type="email" placeholder="you@favoritemail.com" autoComplete="off" onChange={e => setEmail(e.target.value)}/>

        <textarea value={message} name="message" id="message" className="form-control" type="text" placeholder="Thanks for writing" autoComplete="off" onChange={e => setMessage(e.target.value)}/>
        
        <input type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block" value="Send" />

      

      </form>
      </section>
    </>

      </div>
    </div>
  )
}

export default Contact


