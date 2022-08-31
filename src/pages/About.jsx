import React from 'react'
import { Link } from 'react-router-dom'
import './Infos.css'

const About = () => {
  const goDown = () => {
    const element = document.querySelector("#formName")
    element.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <div className='infos'>
      <div className='infoWraper'>
       
        <section>
          <div className='titleClose'> <h1>About</h1> <Link onClick={ goDown } to='/'> <h3>X close</h3> </Link></div>
          
          <p>
          Revertexflex is a project by Christian Valderrama that includes: oleo paintings, digital art and sculptures. You can see some of his work <Link to={'instagram'}>here</Link>
            </p>
            <br />
            <p>
              "I try to capture when the light coincide to create an object or a moment, this exploration is analyzed from two points of view"
              </p>
              <br />
              <h3>
                Yotta moment:
              </h3>
              <p>
              When the moment is seen from far away and the velocity is realy slow, in this case the viewer interprate the result, depending of owned references, it is when the light creates a moment that transfom it self in to an object. 
              </p>
              <br />
              <h3>
                Yocto moment:
              </h3>
              <p>
              Yocto moment could be very close in a really fast speed, in this case is the light as an object. It breacks the space, the time, the logical form with it's perspective. The light it's not limited, it is always chenging.
            </p>
            <br />
            <p>
            "Making forms to create an sculpture with this kind of shapes could lead me to make two maybe three sculptures, so I desided to create an algorithm that process data to create the sculptures, the data of each person gives diferent position of the vertices"
          </p>
          <p>
            Its not warranted that your sculpture will be 100% unique, but the probability to have two equal scultures is really low.
          </p>
          <br />
          <h3>
                What is Revertexflex
              </h3>
          <p>
        The name comes from the combination of vertex and reflex.
        </p>
      <p>
        Vertex in one hand is the point where edges intersect in a 3d object.
      </p>
      <p>
        Reflex in the other hand is when the light bounces off a surface (not a common use but still).
      </p>
      <p>
        The name has a strong influence from the character Varvatos Vex from TALES OF ARCADIA show.
      </p>


      {/* remover texto solo para prueba */}




{/* remover texto solo para prueba       */}
        </section>

      </div>
    </div>
  )
}

export default About
