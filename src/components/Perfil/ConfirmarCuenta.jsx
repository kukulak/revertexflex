import clienteAxios from '../../config/clienteAxios'
import React, {useEffect, useState} from 'react'
import { useParams, Link} from 'react-router-dom'
import Alert from '../Form/Alert'

const ConfirmarCuenta = () => {
  const [alerta, setAlerta] = useState({})
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)
  const params = useParams()
  const { id } = params

  useEffect(() => {
    const confirmarCuenta = async () => {
      try{
        const url = `usuarios/confirmar/${id}`
        const { data } = await clienteAxios.get(url)
        // console.log('data:', data.msg)
        setCuentaConfirmada(true)
        setAlerta({
          msg: data.msg,
          error: false
        })
      }catch(error){
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    }
    confirmarCuenta()
  }, [])

  const { msg } = alerta

  return (
    <>
      <h1>
        CONFIRMA TU CUENTA
      </h1>
      <div>
        {msg && <Alert alert={alerta} />}
        {cuentaConfirmada && (
          <nav>
                <Link className='link' to="/login">
                    You must be logged in to save and buy your sculpture
                </Link>
            </nav>
        )}
      </div>
    </>
  )
}

export default ConfirmarCuenta