import React, {useState, useEffect, createContext} from 'react'

import clienteAxios from '../config/clienteAxios'
import useAuth from '../hooks/useAuth'

const ProyectosContext = createContext()



const ProyectosProvider = ({children}) => {
  const [proyectos, setProyectos] = useState([])
  const [alerta, setAlerta] = useState([])
  const [move, setMove] = useState(false)
  const [retrive, setRetrive] = useState({})
  const [reload, setReload] = useState(false)


  const { auth } = useAuth()

  useEffect(() => {
    const obtenerProyectos = async () => {
      try{
        const token = localStorage.getItem('token')
        if(!token) return

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
        const { data } = await clienteAxios('/proyectos', config)

        setProyectos(data)

      }catch(error){
        console.log(error)
      }
    }
    obtenerProyectos()
  }, [auth])

  const mostrarAlerta = alerta => {
    setAlerta(alerta)
    setMove(true)
    setTimeout(()=>{
      setMove(false)
    }, 500)
    setTimeout(()=>{
      setAlerta({})
    }, 5000)
  }

  const submitProyecto = async proyecto => {
    try{
      const token = localStorage.getItem('token')
      if(!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      const { data } = await clienteAxios.post('/proyectos', proyecto, config)
      
      // display new saved sculpture
      setProyectos(proyectos => [...proyectos, data])
      console.log('DATA', data)
      mostrarAlerta({
        msg: 'Sculpture saved',
        error: false
      })
    }catch(error){
      console.log(error)
    }
  }

  const reloadRay = (e) => {
    return setReload(e)
  }

  const retriver = (e) => {
    return setRetrive(e)
  }
  
  const eliminarProyecto = async id => {
   try {
    const token = localStorage.getItem('token')
    if(!token) return
    const config ={
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
    const { data } = await clienteAxios.delete(`/proyectos/${id}`, config)
    const proyectosActualizados = proyectos.filter(proyectoState => proyectoState._id !== id)
    setProyectos(proyectosActualizados)
    mostrarAlerta({
      msg: data.msg,
      error: false
    })
  } catch (error) {
    console.log(error)
   }
  }

  const cerrarSesionProyectos = () => {
    setProyectos([])
    // setProyectos({})
    mostrarAlerta({
        msg: 'Logged out Successfully',
        error: false
      })
  }

  return (
    <ProyectosContext.Provider value={{
      proyectos,
      mostrarAlerta,
      alerta,
      submitProyecto,
      retriver,
      retrive,
      eliminarProyecto,
      cerrarSesionProyectos,
      reloadRay,
      reload,
      move,
    }}>
  {children}
    </ProyectosContext.Provider>
  )
}

export{
  ProyectosProvider
}

export default ProyectosContext