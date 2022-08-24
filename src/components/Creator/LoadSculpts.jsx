import React, {useEffect, useRef, useState} from 'react'
import './creator.styles.css'
import useProyectos from '../../hooks/useProyectos'
import Preview from './Preview'
import { SwitchTransition, CSSTransition } from "react-transition-group";
import gsap from 'gsap';

const LoadSculpts = () => {
  // const { _id, nombre, apellidos, nick, magicNumber, color1, color2, color3} = proyecto

  const { proyectos, move } = useProyectos()
  const btnRef = useRef()
  const containerRef = useRef(null)
  const flechaRef = useRef()
  const [saveds, setSaveds] = useState(true)
  const [hoverOver, setHoverOver] = useState(false)

  const handleClick = () => {
    if(saveds){
     gsap.to(containerRef.current , {
          x: '-180',
        })
      flechaRef.current.style.transform = 'rotateY(180deg)'
      setSaveds(false)
    }else{
      gsap.to(containerRef.current, {
        x: '0',
      })
      flechaRef.current.style.transform = 'rotateY(360deg)'
      setSaveds(true)
    }
    
  }

  useEffect(() => {
    // console.log(move)
    if(move){
     gsap.timeline()
        .to(containerRef.current, {
          x: '-=30',
          duration: 0.3
        }).to(containerRef.current, {
          x: '+=30',
          duration: 0.1
        })
    // console.log('wastrue')
    }
    // console.log(move)
  }, [move])


  useEffect( () => {
    // console.log(hoverOver)
    if(hoverOver){
      // cancel scroll on main
      // console.log('HOVEROVER')
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = "initial"
      // console.log('NOHOVER')
    }
  })

 
  return (
    <div className='contenedorSaves'>   
      <div className='contenedorBtn' ref={btnRef} onClick={handleClick} >
          <button onClick={handleClick} className='titleSaved'>
            <span className='flecha' ref={flechaRef}>&#60;</span> Saved Sculptures
          </button>
      </div>
      {/* <div onMouseEnter={() => setHoverOver(true)} onMouseLeave={() => setHoverOver(false)} ref={containerRef} className='savedContainer'> */}
    
      
       <div onMouseEnter={() => setHoverOver(true)} onMouseLeave={() => setHoverOver(false)} ref={containerRef} className='savedContainer'>
          <section className='sculpturesImages'>
            {proyectos ? 
              proyectos.map((proyecto, i) => (
              <>
                <Preview key={proyecto._id} i={i} proyecto={proyecto}/>
                {/* {console.log('IDS', proyecto._id)} */}
                {/* {console.log(i)} */}
              </>
              ))
            : <p>Save yours Sculptures</p>}
          </section>
        </div>


      {/* </div> */}
       
    </div>
  )
}

export default LoadSculpts