import React from 'react'
import { Link } from 'react-router-dom'
import './Infos.css'

const About = () => {
  const goDown = () => {
    const element = document.querySelector("#formPersonal")
    element.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <div className='infos'>
      <div className='infoWraper'>
       
        <section>
          <div className='titleClose'> <h1>About</h1> <Link onClick={ goDown } to='/'> <h3>X close</h3> </Link></div>
          <p>
            Work of the multi-media artist Christian Valderrama
            see some of his work <Link to={'instagram'}>Here</Link>
            </p>
            <p>
              I try to capture the moment, that fraction of time, it can be big or little.
              Yocta moment or Yotto moment, could be very clouse like when the light bounce, that tiny moment, or when the light bonced many times in a bigger period of time, when a moment transfrom it self in to an object. 
            </p>
            <br />
            <p>
            "Making forms to create an sculpture with this kind of shapes could lead me to make two maybe three sculptures, so I desided to create an algorithm that process data to create the sculptures, the data of each person gives diferent position of the vertices"
          </p>
          <p>
            Its not warranted that your sculpture will be 100% unique but the probability to have two equal scultures is realy low.
          </p>
        </section>

      </div>
    </div>
  )
}

export default About
