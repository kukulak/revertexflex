import React, {useState} from 'react'
import Alert from '../Form/Alert'
import clienteAxios from '../../config/clienteAxios'
import '../Form/PersonalForm.styles.css'
import {Link} from 'react-router-dom'

const OlvidePassword = () => {
  const [email, setEmail] = useState('')
  const [alerta, setAlerta] = useState({})
  const submitHandler = async (e) => {
    e.preventDefault()
    if(email === ''){
      setAlerta({
        msg: 'Please fill the email field',
        error: true
      })
      return
    }
    try{
      const {data} = await clienteAxios.post(`/usuarios/olvide-password`, { email })
      // console.log(data)
      setAlerta({
        msg: data.msg,
        error: false
       })
       goDown()
    }catch(error){
     setAlerta({
      msg: error.response.data.msg,
      error: true
     })
    }
  }

  const goDown = () => {
    const element = document.querySelector("#formName")
    element.scrollIntoView({behavior: 'smooth'});
  }

  const { msg } = alerta
  return (
    <section className='formWraper'>
      <form className='loginForm' onSubmit={submitHandler}>
      <div className='titleClose'> <h2>Retrive Password</h2> <Link onClick={ goDown } to='/'> <h3>X close</h3> </Link></div>
      
      {msg && <Alert alert={alerta} />}

        <label htmlFor="mail-retrive"> Email</label>

        <input name="mail-retrive" id="mail-retrive" className="form-control" type="email" placeholder="Registered email" autoComplete="off" onChange={e => setEmail(e.target.value)} />

        <input type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block" value="Send Instructions" />

        <div className='already'> <h3>If you don't have an account</h3> <Link to='/register'> <h3>Register here</h3> </Link></div>

        <div className='already'> <h3>Already registered? </h3> <Link to='/login'> <h3>Log In here</h3> </Link></div>


      </form>
    </section>
  )
}

export default OlvidePassword