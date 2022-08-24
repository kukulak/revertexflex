import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Alert from '../Form/Alert'
import clienteAxios from '../../config/clienteAxios'

const NuevoPassword = () => {
  const [alerta, setAlerta] = useState({})
  const [tokenValido, setTokenValido] = useState(false)
  const [password, setPassword] = useState('')
  const params = useParams()
  const [passwordModificado, setPasswordModificado] = useState(false)
  const { token } = params

  useEffect(() => {
    const comprobarToken = async () => {
      try{
        await clienteAxios(`/usuarios/olvide-password/${token}`)
        setTokenValido(true)

      }catch(error){
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    }
    comprobarToken()
  }, [])

  const submitHandler = async e => {
    e.preventDefault()
    if(password.length < 6){
      setAlerta({
        msg: "the password must be at least 6 characters long",
        error: true
      })
      return
    }
    try{
      const url = `/usuarios/olvide-password/${token}`
      const {data} = await clienteAxios.post(url, { password })
      setPasswordModificado(true)
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
    const element = document.querySelector("#formPersonal")
    element.scrollIntoView({behavior: 'smooth'});
  }

  const { msg } = alerta

  return (
   <>

    {tokenValido && (
      <section className='formWraper'>
      <form className='registerForm' onSubmit={submitHandler}>
      <div className='titleClose'> <h2>Reset Password</h2> <Link onClick={ goDown } to='/'> <h3>X close</h3> </Link></div>
        <h2>Reset Password</h2>
      {msg && <Alert alert={alerta}/>}
      
        <label htmlFor="password-register"> Nuevo Password </label>
        <input name="password" id="password-register" className="form-control" type="password" placeholder="Write your password" autoComplete="off"
          value={password} onChange={e => setPassword(e.target.value)}
        />
      
        {/* <input name="password2" id="password-register2" className="form-control" type="password" placeholder="Confirma tu  password" autoComplete="off"
          value={password} onchange={e => setPassword(e.target.value)}
        /> */}
        
        <input type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block" value="Sign Up"/>
      </form>
      </section>
    )}
    {passwordModificado && (
          <nav>
                <Link className='link' to="/login">
                    You must be logged in to save and buy your sculpture
                </Link>
            </nav>
        )}
   </>
  )
}

export default NuevoPassword