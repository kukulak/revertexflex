import React from 'react'
import { Link } from 'react-router-dom'
import './Infos.css'

const BuyingProcess = () => {
  const goDown = () => {
    const element = document.querySelector("#formPersonal")
    element.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <div className='infos'>
      
      <div className='infoWraper'>
       
    <section>
        <div className='titleClose'> <h1>Buying</h1> <Link onClick={ goDown } to='/'> <h3>X close</h3> </Link></div>

        <p>
          To buy your created sculpture first you have to sign in, then click the buy button this will take you to fill form, then you'll be redirected to the process payment.
        </p>

        <p>The deliver will take some weeks keep reading to know why.  
        </p>
        <div className='pasosWraper'>
          <p>
            After the payment we download your digital sculpture then...
          </p>
          <div className='pasos'>   
        <div className="buyingcards">
          <p>
            The 3d model is proccesed in a sofware to clean it up.
            </p>
            <p>This step takes couple of hours,
              </p>
        </div>
        <div className="buyingcards">
            <p> We send it to our 3d print provider
              </p>
              <p>This take almost a week,
              </p>
        </div>
        <div className="buyingcards">
              <p>Then comes back to us and the art by hand starts, the 3d print is curated, sanded and painted,
              </p>
              <p>This takes another week,
              </p>
        </div>
        <div className="buyingcards">
              <p>Finally we send the final pice to you.
              </p>
              <p>            
              This delivery takes some times a week some times more.
              </p>
        </div>
          </div>
        </div>
    </section>

      </div>
    </div>
  )
}

export default BuyingProcess
