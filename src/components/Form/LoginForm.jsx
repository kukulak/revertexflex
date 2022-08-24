import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Alert from './Alert'
import clienteAxios from '../../config/clienteAxios'
import useAuth from '../../hooks/useAuth'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alerta, setAlerta] = useState({})

  const { setAuth } = useAuth()
  let navigate = useNavigate();

  const goDown = () => {
    const element = document.querySelector("#formPersonal")
    element.scrollIntoView({behavior: 'smooth'});
  }


  const submitHandler = async (e) => {
    e.preventDefault()
    if([email, password].includes('')){
      setAlerta({
        msg: 'Bouth data are necesary',
        error: true
      })
      return
    }
    try{

      const { data } = await clienteAxios.post('/usuarios/login', {email, password})
      setAlerta({})
      localStorage.setItem('token', data.token)
      setAuth(data)
      goDown()
    }catch(error){
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
    navigate("/", { replace: true });
  }
  
 
  const { msg } = alerta

  return (
    <>
   
      <section className='formWraper'>
        <form className='loginForm' onSubmit={submitHandler}>
        <div className='titleClose'> <h2>Log In</h2> <Link onClick={ goDown } to='/'> <h3>X close</h3> </Link></div>
        {msg && <Alert alert={alerta}/>}
        
          <label htmlFor='email'> eMail </label>
          <input name="email" id="email" className="form-control" type="email" placeholder="Registered email" autoComplete="off" value={email} onChange={e => setEmail(e.target.value)} />

          <label htmlFor='password'> Password </label>
          <input name="password" id="password" className="form-control" type="password" placeholder="your Password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)}/>

          <input type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block" value="Enter" />

          <div className='already'> <h3>If you don't have an account</h3> <Link to='/register'> <h3>Register here</h3> </Link></div>

          <div className='already'> <h3>Forgot your password?</h3> <Link to='/olvide-password'> <h3>Reset it here</h3> </Link></div>


        </form>
      </section>
    </>
  )
}

export default LoginForm