import React,{ useState, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom'

const ScrollContext = createContext()

const ScrollProvider = ({children}) => {

  const [auth, setAuth] = useState({})
  const [cargando, setCargando] = useState(true)

  const navigate = useNavigate()

  const goDown = () => {
    // console.log(document.body.scrollHeight)
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      })
  }

  return (
    <ScrollContext.Provider
      value={{
        goDown
      }}
      >
        {children}
      </ScrollContext.Provider>
  )
}

export{
  ScrollProvider
}

export default ScrollContext