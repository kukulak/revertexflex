import React, {useState, Suspense, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

import LoadSculpts from '../../components/Creator/LoadSculpts'


import ByRay from '../Creator/ByRay.component'

import useProyectos from '../../hooks/useProyectos'
import Alert from './Alert'
import backArrow from '../../elements/backArrows.svg'
import girar from '../../elements/girar.svg'
import nogirar from '../../elements/nogirar.svg'

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const fetchData = () => new Promise((r) => setTimeout(()=> r(Date.now()), 100))


const PersonalForm = (props) => {

    gsap.registerPlugin(ScrollTrigger);
    //////

    

    /////
    const { auth, cargando } = useAuth()

    const [rays, setRays] = useState([])
    var one = new Date()
    // console.log(one)
    //State of the new Ray
    const [forms, setForms] = useState(false)
    const [process, setProcess] = useState(false)
    const [message, setMessage] = useState('reVertexFlex')
    const [nombre, setNombre] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [nick, setNick] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [magicNumber, setMagicNumber] = useState('')
    const [color1, setColor1] = useState('#aaaaaa')
    const [color2, setColor2] = useState('#888888')
    const [color3, setColor3] = useState('#ffffff')
    const [colores, setColores] = useState('')
    const [btnSave, setBtnSave] = useState('Process')
    const [colorNumber, setColorNumber] = useState()
    const [id, setId] = useState('')

    const nombreRef = useRef(null)
    const apellidosRef = useRef(null)
    const nickRef = useRef(null)
    const birthdateRef = useRef(null)
    const magicNumbreRef = useRef(null)
    const color1Ref = useRef(null)
    const color2Ref = useRef(null)
    const color3Ref = useRef(null)
    const formRef = useRef()
   
   
    const {retriver, eliminarProyecto, reloadRay, reload} = useProyectos()



    // formState
    const [textState, setTextState] = useState('')
    const [colorState, setColorState] = useState('hideFormColor')

    const [show, setShow] = useState(nogirar)
    const [spin, setSpin] = useState(false)

    const {mostrarAlerta, alerta, submitProyecto, retrive} = useProyectos()


    // useEffect(() => {
    //     gsap.to(formRef.current, {
    //         scrollTrigger:{
    //             trigger: formRef.current,
    //             start: '550vh 70%',
    //             endTrigger: formRef.current,
    //             end: "950vh 80px",
    //             scrub: -5,
    //             pin: true,
    //             markers: true,
    //         },
    //         x: 100,
    //         opacity: 1,
    //         // y: 20,
    //         // rotation: 10,
    //         duration: 1,
    //     }

    //     )
    // }, [])

    useEffect(() => {
        gsap.timeline(

            {
            scrollTrigger:{
                trigger: formRef.current,
                start: '550vh 70%',
                endTrigger: formRef.current,
                end: "950vh 80px",
                scrub: -5,
                pin: true,
                // markers: true,
               }
            })
            .to(formRef.current,{
                x: 120,
                opacity: 1,
                // y: 20,
                // rotation: 10,
                duration: 0.5,
            })  
            .to(formRef.current,{
                x: 120,
                opacity: 1,
                // y: 20,
                // rotation: 10,
                duration: 1,
            })       
    }, [])


    useEffect(() => {
        if(retrive.birthdate){
            const date = retrive.birthdate
            setBirthdate(date.substring(0, 10))
            // console.log('RETRIVER', birthdate)
        }
        
        setId(retrive.id)
        setNombre(retrive.nombre)
        setApellidos(retrive.apellidos)
        setNick(retrive.nick)
        // setBirthdate(retrive.birthdate)
        setMagicNumber(retrive.magicNumber)
        setColor1(retrive.color1)
        setColor2(retrive.color2)
        setColor3(retrive.color3)

    }, [retrive])
  


    
    useEffect(() => {
        // const creator = (e) =>{
            if(reload){
                setForms(true)
                setProcess(true)
                setSpin(true) 
                setColorNumber(magicNumber)  
                // setColor1(color1)
                // setColor2(color2)
                // setColor3(color3)
            }
        // }  

        // creator(reload)

        // return () => creator(false)

    }, [magicNumber, reload])


    const handleSubmit = async (event) => {
        event.preventDefault()
        // console.log('checking...')
        if([nombre, apellidos, nick, birthdate, magicNumber].includes('')){
            mostrarAlerta({
                msg: 'To create your sculpture the algorithm needs all the fields',
                error: true
            })
            return
        }

        reloadRay(false)
        setTimeout(() => {
            // setColorNumber(magicNumber)
            reloadRay(true)
        }, "600") 
        
    }

    const handleSaveSubmit = async (event) => {
        event.preventDefault()
        //pasar datos a provider
        await submitProyecto({id, nombre, apellidos, nick, birthdate, magicNumber, color1, color2, color3 })
    }

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    }

    const goDown = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    }

    const HandleSpin = () => {
        if(process){
            const handler = () => {
                spin ? setShow(girar) : setShow(nogirar)
                spin ? setSpin(false) : setSpin(true)
            }
            return(
                <button
                    onClick={ handler }
                    className='btnSpin'>
                    {/* <img src={show} alt='girar'/>  */}
                    {spin ? 'Pouse turning' : 'Resume turning'}
                    
                </button>
             )
        }else{
            return
       }
    }
  
    
    const Messages = () =>{
        return(
            <div className='titleForm'>{message}</div>
        )
    }


    if(cargando) return 'Cargando...'
 
    const { msg } = alerta

    return(


        <>


            {/* un return */}

               

            {/* end return  */}

        <div ref={formRef} id='formPersonal'>
        {/* {msg && <Alert alert={alerta} />} */}
        {/* <Alert alert={alerta} /> */}
            {/* <button onClick={ () => handleBack() } className={`btnReturn ${colorState}`}> <img src={backArrow} alt='go Back'/> </button> */}
        {/* <form  onSubmit={ !forms ? handleSubmit : handleSaveSubmit} > */}
        <form  onSubmit={ handleSubmit } >
           
        <Messages />
        {msg && <Alert alert={alerta} />}
       

            {/* <div className={`formSectionOne ${textState}`}> */}
            <div className='formSectionOne'>
               
                    <label htmlFor="formName">
                        Name/s:
                    </label>
                    <input
                        ref={nombreRef}
                        type="text"
                        name="name"
                        id="formName"
                        value={nombre}
                        onChange={ e => setNombre(e.target.value) }
                    /> 
                    <label htmlFor="formLastName">
                        Surname: 
                    </label>
                    <input
                        ref={apellidosRef}
                        type="text"
                        name="lastname"
                        id="formLastName"
                        value={apellidos}
                        onChange={e => setApellidos(e.target.value)}/> 
                    <label htmlFor='formAka'>
                        Nickname:  
                    </label>
                    <input
                        ref={nickRef}
                        type="text"
                        name="aka"
                        id="formAka"
                        value={nick}
                        onChange={e => setNick(e.target.value)}/>
                
                    <label htmlFor='formBirthDay'>
                        Birth date: 
                    </label>
                
                    <input
                        ref={birthdateRef}
                        type="date"
                        name="birthDay"
                        id="formBirthDay"
                        value={birthdate}
                        onChange={ e => setBirthdate(e.target.value) }/>

                    <label htmlFor='formNumber'>
                        Number (0-9): 
                    </label>
                    <input
                        ref={magicNumbreRef}
                        type="number"
                        name="birthDay"
                        id="formNumber"
                        min="0"
                        max="9"
                        value={magicNumber}
                        onChange={ e => setMagicNumber(e.target.value) }/>    
                </div> 

                {/* <div className={`formSectionTwo ${colorState}`}> */}
                <div className='formSectionTwo' >
                <p>
                        Choose your colors
                    </p>
                    
                    <div className='allColors'>
                        <input
                            ref={color1Ref}
                            type="color"
                            id="color03"
                            value={color3}
                            onChange={e => setColor3(e.target.value)}/>
                        <input
                            ref={color2Ref}
                            type="color"
                            id="color02"
                            value={color2}
                            onChange={e => setColor2(e.target.value)}/>
                        <input
                            ref={color3Ref}
                            type="color"
                            id="color01"
                            value={color1}
                            onChange={e => setColor1(e.target.value)}/>
                    </div>
                </div>

                {auth._id && reload && <div className='saveOrBuy'>
                        <button className='btnBuy' href='/'>
                            Buy Sculpture
                        </button>  
                        <button onClick={ handleSaveSubmit } className='btnBuy' href='/'>
                            Save
                        </button>   
                     </div>
                }

              {!reload && <input type="submit" value={btnSave} />}
            

            <HandleSpin/>

            {!auth._id ? (
                <nav>
                    <Link onClick={goTop} className='link' to="/login">
                        You must be logged in to save and buy your sculpture
                    </Link>
                    <Link onClick={goTop} className='link' to="/register">
                        Register
                    </Link>
                    <Link onClick={goTop} className='link' to='/olvide-password'>
                        Forgot password?
                    </Link>
                </nav>
            ) : <div/>}

        </form>

       
      
        </div>
  
        {auth._id ? <LoadSculpts /> : <div></div>}

        <ByRay
                   spin = { spin }
                process = { process }
                color01 = { color1 }
                color02 = { color2 }
                color03 = { color3 } 
                nombres = { nombre }
              apellidos = { apellidos }
                   nick = { nick }
             nacimiento = { birthdate }
            magicNumber = { magicNumber }
                colores = { colores }
            />
            
  
    </>
    )
}

export default PersonalForm