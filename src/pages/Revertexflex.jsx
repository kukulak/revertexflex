import React from 'react'
import { Link } from 'react-router-dom'
import './Infos.css'

const Revertexflex = () => {
  const goDown = () => {
    const element = document.querySelector("#formPersonal")
    element.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <div className='infos'>
      
      <div className='infoWraper'>
    
    <section>
            
      <div className='titleClose'> <h1> What is REVERTEXFLEX or Revetexflect</h1> <Link onClick={ goDown } to='/'> <h3>X close</h3> </Link></div>

      <p>
        The word comes from the combination of vertex and reflex.
        </p>
      <p>
        Vertex in one hand is the point where edges intersect in a 3d object.
      </p>
      <p>
        Reflex in the oder hand is when the light bounces off a surface(not for comon use but still).
      </p>

    </section>
      </div>
      
    </div>
  )
}

export default Revertexflex
