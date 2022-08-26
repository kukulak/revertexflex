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
            
      <div className='titleClose'> <h1> What is REVERTEXFLEX</h1> <Link onClick={ goDown } to='/'> <h3>X close</h3> </Link></div>

      <p>
        This name comes from the combination of vertex and reflex.
        </p>
      <p>
        Vertex in one hand is the point where edges intersect in a 3d object.
      </p>
      <p>
        Reflex in the oder hand is when the light bounces off a surface(not a common use but still).
      </p>
      <p>
        
      </p>

    </section>
      </div>
      
    </div>
  )
}

export default Revertexflex
