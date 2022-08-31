// import { createRoot } from 'react-dom/client'
import * as THREE from 'three'
import React, { useRef, useState, Suspense, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
// import { STLExporter } from "three/examples/jsm/exporters/STLExporter"
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { useSpring } from '@react-spring/three'
import { Image, useCursor,  useScroll, Text, useGLTF, softShadows, SpotLight, useDepthBuffer } from '@react-three/drei'
// import { LayerMaterial, Base, Depth } from 'lamina'
// import { gsap } from "gsap";
// import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils.js';


// import { coordenadas } from './creator.app.jsx';
// import { PolyhedronGeometry } from 'three'

import { useControls } from 'leva'


import finalArray from '../../utils/finalArray.js'
import useProyectos from '../../hooks/useProyectos.jsx'


softShadows()


const cubePositions = [
  [8.2, -5.32, -31.1],
  [8.2, -5.32, -45.1],
  [8.2, -5.32, -55.1],
  [-8.2, -5.32, -15.1],
  [-8.2, -5.32, -30.1],
  [-8.2, -5.32, -45.1],
]



const Floor = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

   // Set up state for the hovered and active state
   const [hovered, setHover] = useState(false)
   const [active, setActive] = useState(false)
  return(
    <mesh
    {...props}
    ref={mesh}
    scaleX={1}
    onClick={(event) => setActive(!active)}
    onPointerOver={(event) => setHover(true)}
    onPointerOut={(event) => setHover(false)}
    // castShadow
    receiveShadow
    >
      <boxGeometry
        args={[55, 25, 120]}
        />
      <meshStandardMaterial color={hovered ? '#555555' : '#555555'} side={THREE.BackSide} />


    </mesh>
  )
}



const Wall=(props) => {

  const mesh = useRef()

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={1}
      >
      <boxGeometry args={[15, 10, 0.5]} />
      <meshStandardMaterial color={'grey'} />
    </mesh>
  )

}

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  useFrame((state, delta) => {
    // mesh.current.rotation.x += 0.01
    if(hovered){
    mesh.current.rotation.y += 0.01

    }
    }
  )
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 3.5 : 3.5}
      receiveShadow
      castShadow
      // onClick={(event) => setActive(!active)}
      // onClick={(event) => console.log('clicked')}

      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      {/* <meshStandardMaterial  /> */}
      <meshStandardMaterial color={'#555555'} />
    </mesh>
  )
}



function BoxEscultura(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  useFrame((state, delta) => {
    // mesh.current.rotation.x += 0.01
    // if(hovered){
    // mesh.current.rotation.y += 0.0
    // }
  })
  return (
    <mesh
      {...props}
      ref={mesh}
      // scale={active ? 4.5 : 4.5}
      receiveShadow
      castShadow
      // onClick={(event) => setActive(!active)}
      // onClick={(event) => console.log('clicked')}

      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 0.5, 1]} />
      {/* <meshStandardMaterial  /> */}
      <meshStandardMaterial color={hovered ? props.color02 : props.color01} />
    </mesh>
  )
}

const fullArray = (nacimiento, nombres, apellidos, nick, magicNumber) => { 
    // here the array wil be created

  let num = 2.0
 
  let num2 = 2

  //Array from Coordenadas 
  // const personalArray = coordenadas(props.nacimiento, props.nombre, props.apellido, props.nick)

  // const personalArray = coordenadas('26101986', 'daniela', 'kelly isunza', 'danny')

  // const personalArray = coordenadas(nacimiento, nombres, apellidos, nick)
  // const personalArray = finalArray(nacimiento, nombres, apellidos, nick, magicNumber)
  const personalArray = finalArray(nombres, apellidos, nick, nacimiento, magicNumber)

  //PISOS
    const pisos = [
        0, 3, 7, 12, 16,
        0, 4, 9, 13, 16,
        0, 5, 8, 12, 16,
        0, 4, 6, 10, 16,
        0, 6, 10, 13, 16
    ]
    const positions = [ ];
    let unPlano = [
    
    ]
    let array = []

    let escul = []
    const a = 1
    let b = personalArray[6]


for (let i = 0; i < personalArray.length; i++) {
    if(i % 3){
        num = personalArray[i]
    }
     // num = 5
    if(i % 5){
         num2 = personalArray[i]
        //  console.log('NUM@', num2)
     }
     
    if(i % 4){
         b = personalArray[i]
     }
    
     unPlano = [  
         [-num,  num2,  pisos[i]*9/2], //y 1!=1
         [-num+a,  num2,  pisos[i]*9/2.02], //y y
         [-num, num2+b/1.5,  pisos[i]*9/2], //x 1!=1
         
         [num, num2+b/1.5,  pisos[i]*9/2], //x 1!=1
         [-num+a, num2+b/1.5,  pisos[i]*9/2.02], //x x
         [num+a,  num2,  pisos[i]*9/2.02], //y y
         // [-num, num+b/2,  pisos[i]*9/2], //x 1!=1
     ]

     positions.push(unPlano)



 }
// mark
// console.log('UNPLANO', positions)

function prosesator(getPosition){
    for (let i = 0; i < positions.length; i++) {

                array.push(positions[getPosition+0][0]) 
                array.push(positions[getPosition+0][1])
                array.push(positions[getPosition+1][1])

                //
                array.push(positions[getPosition+0][0])
                array.push(positions[getPosition+0][2])
                array.push(positions[getPosition+1][2])

                //
                array.push(positions[getPosition+0][2])
                array.push(positions[getPosition+0][4])
                array.push(positions[getPosition+1][4])

                    //
                array.push(positions[getPosition+0][1])
                array.push(positions[getPosition+0][4])
                array.push(positions[getPosition+1][4])

                ////////
                ///////

                array.push(positions[getPosition+1][0]) 
                array.push(positions[getPosition+1][1])
                array.push(positions[getPosition+0][0])

                //
                array.push(positions[getPosition+1][0])
                array.push(positions[getPosition+1][2])
                array.push(positions[getPosition+0][0])

                //
                array.push(positions[getPosition+1][2])
                array.push(positions[getPosition+1][4])
                array.push(positions[getPosition+0][2])

                    //
                array.push(positions[getPosition+1][1])
                array.push(positions[getPosition+1][4])
                array.push(positions[getPosition+0][1])

                //////////
                //////////
                    /////////
                //////////
                
                
                array.push(positions[getPosition+1][0]) 
                array.push(positions[getPosition+1][1])
                array.push(positions[getPosition+2][1])

                //
                array.push(positions[getPosition+1][0])
                array.push(positions[getPosition+1][2])
                array.push(positions[getPosition+2][2])

                //
                array.push(positions[getPosition+1][2])
                array.push(positions[getPosition+1][4])
                array.push(positions[getPosition+2][4])

                    //
                array.push(positions[getPosition+1][1])
                array.push(positions[getPosition+1][4])
                array.push(positions[getPosition+2][4])

                ////////
                ///////

                array.push(positions[getPosition+2][0]) 
                array.push(positions[getPosition+2][1])
                array.push(positions[getPosition+1][0])

                //
                array.push(positions[getPosition+2][0])
                array.push(positions[getPosition+2][2])
                array.push(positions[getPosition+1][0])

                //
                array.push(positions[getPosition+2][2])
                array.push(positions[getPosition+2][4])
                array.push(positions[getPosition+1][2])

                    //
                array.push(positions[getPosition+2][1])
                array.push(positions[getPosition+2][4])
                array.push(positions[getPosition+1][1])
                


                //////////
                //////////
                    /////////
                //////////
                
                
                array.push(positions[getPosition+2][0]) 
                array.push(positions[getPosition+2][1])
                array.push(positions[getPosition+3][1])

                //
                array.push(positions[getPosition+2][0])
                array.push(positions[getPosition+2][2])
                array.push(positions[getPosition+3][2])

                //
                array.push(positions[getPosition+2][2])
                array.push(positions[getPosition+2][4])
                array.push(positions[getPosition+3][4])

                    //
                array.push(positions[getPosition+2][1])
                array.push(positions[getPosition+2][4])
                array.push(positions[getPosition+3][4])

                ////////
                ///////

                array.push(positions[getPosition+3][0]) 
                array.push(positions[getPosition+3][1])
                array.push(positions[getPosition+2][0])

                //
                array.push(positions[getPosition+3][0])
                array.push(positions[getPosition+3][2])
                array.push(positions[getPosition+2][0])

                //
                array.push(positions[getPosition+3][2])
                array.push(positions[getPosition+3][4])
                array.push(positions[getPosition+2][2])

                    //
                array.push(positions[getPosition+3][1])
                array.push(positions[getPosition+3][4])
                array.push(positions[getPosition+2][1])



                //////////
                //////////
                    /////////
                //////////
                
                
                array.push(positions[getPosition+3][0]) 
                array.push(positions[getPosition+3][1])
                array.push(positions[getPosition+4][1])

                //
                array.push(positions[getPosition+3][0])
                array.push(positions[getPosition+3][2])
                array.push(positions[getPosition+4][2])

                //
                array.push(positions[getPosition+3][2])
                array.push(positions[getPosition+3][4])
                array.push(positions[getPosition+4][4])

                    //
                array.push(positions[getPosition+3][1])
                array.push(positions[getPosition+3][4])
                array.push(positions[getPosition+4][4])

                ////////
                ///////

                array.push(positions[getPosition+4][0]) 
                array.push(positions[getPosition+4][1])
                array.push(positions[getPosition+3][0])

                //
                array.push(positions[getPosition+4][0])
                array.push(positions[getPosition+4][2])
                array.push(positions[getPosition+3][0])

                //
                array.push(positions[getPosition+4][2])
                array.push(positions[getPosition+4][4])
                array.push(positions[getPosition+3][2])

                    //
                array.push(positions[getPosition+4][1])
                array.push(positions[getPosition+4][4])
                array.push(positions[getPosition+3][1])

            
        // } 32 points by 3
        
    }

   

}

prosesator(0)
prosesator(5)
prosesator(10)
prosesator(15)
prosesator(20)
prosesator(25)




// new Float32Array()

// console.log('ARRAY', array)


for (let i = 0; i < array.length; i++) {
    for (let d = 0; d < array[i].length; d++) {
        escul.push(array[i][d])
    }
}
  // console.log('escul', escul.length)


//#Source https://bit.ly/2neWfJ2 
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );


//  let sepSculter = chunk(escul, 9216)
 let arrayScult = chunk(escul, 9216)
//  let arrayScult = chunk(escul, 9216)

//  let sepScult = new Float32Array( sepSculter[1] )
//  let arrayScult = new Float32Array( sepSculter[arrayIndex] )
// console.log('aRRAY SCULT', arrayScult.length)

return arrayScult
// return array
// return escul


}

// let sepScult = new Float32Array( sepSculter[props.number] )



// let dataToRay = fullArray('26101986', 'daniela', 'kelly isunza', 'danny')
const Ray = (props)=>{
    // This reference will give us direct access to the mesh
  const mesh = useRef()
  const planeRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const [cPlane, setCPlane] = useState(-5)

  // const [nacimiento, setNacimiento] = useState('')
  // const [nombre, setNombre] = useState('')
  // const [apellido, setApellido] = useState('')
  // const [nick, setNick] = useState('')
  // let plane1 = new THREE.Plane( new THREE.Vector3( 0, -1, 0 ), -1.0 )
 
  // const { constant } = useSpring({constant: cPlane ? -5 : 11})
  // const constant = new SpringValue(-5)
  // constant.start([{ from: -5}, {to: 11 }])
  // if(constant === 11){
  //   constant.stop()
  // }
  // constant.finish(11)

  const styles = useSpring({
    // loop: { reverse: true },
    from: { x: -5 },
    to: { x: 9 },
    delay: props.delay, 
    config: { duration: 2000 },
    reset: !props.reload
  })

  const stylesD = useSpring({
    // loop: { reverse: true },
    from: { x: 9 },
    to: { x: -6 },
    delay: props.delay, 
    config: { duration: 20 },
    reset: {}
  })

  // useEffect(()=>{
  //   const timeout = setTimeout(() => {
  //     console.log('do That')
  //     // setTimeOut(true)
  //     }, 3000)
  //     return () => clearTimeout(timeout);
  //  }, [])

  // const thePlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 11)
  // [new THREE.Plane(new THREE.Vector3(0, -1, 0), constant)]

  const [planeOne] = useState(()=> 
    [new THREE.Plane(new THREE.Vector3(0, -1, 0), -5)]
  )
 

  const [reload, setReload] = useState(true)

  useFrame((state)=>{

    if(props.reload){
      if(styles.x.animation.values[0]){
        // console.log('x', styles.x.animation.values[0].lastPosition)
        setCPlane(styles.x.animation.values[0].lastPosition)
  
      }
    } else{
      setCPlane(stylesD.x.animation.values[0].lastPosition)
    }
      planeRef.current.clippingPlanes[0].constant = cPlane
    
  })

  return (
    <mesh
        {...props}
        ref={mesh}
        scale={active ? 0.2 : 0.2}
        receiveShadow
        castShadow
        onClick={(event) => setCPlane(11)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >

      <bufferGeometry attach='geometry' onUpdate={self => self.computeVertexNormals()}>
        <bufferAttribute attach='attributes-position' count={9216/3} array={props.arrayData} itemSize={3} normalized={true} />
      </bufferGeometry>

      <meshStandardMaterial
        ref={planeRef}
        attach='material'
        side={THREE.DoubleSide} 
        shininess= {0x111111}
        color={hovered ? props.color01 : props.color02}
        clippingPlanes= {planeOne}
        />
        {/* {console.log('MATERIAL', hovered, hovered ? props.color01 : props.color02)} */}
    </mesh>
  )
}


  const EsculturasL = ({name, ...props}) => {

   
    const numR = 1

    const [planes] = useState(()=> 
      [new THREE.Plane(new THREE.Vector3(0, -1, 0), -1)]
    )
    const mesh = useRef()
    const {nodes} = useGLTF(props.fileName)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    // console.log(nodes)

    useFrame((state, delta) => {
      mesh.current.rotation.y += props.time
     
    })
  
  
  

    return(
      <mesh
       {...props}
        ref={mesh}
        scale={1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        geometry={nodes[name].geometry}
        >
        
      
        <meshStandardMaterial side={THREE.DoubleSide} color={props.color} />
      </mesh>
    )
  }
  

  
  const Sculpture = (props) => {
    
    const [fullArrayData, setFullArrayData] = useState([])
    const [timeOut, setTimeOut] = useState(false)
    const [colorOrder, setColorOrder] = useState()
    const [colores, setColores] = useState()
    
   

    const group = useRef()




  useFrame((state) => {
 
    if(props.spin){
      group.current.rotation.y += 0.009
    }else{
   
    }
  })

  useEffect(()=>{
    // setFullArrayData(fullArray( props.nombres, props.apellidos, props.nick, props.nacimiento, props.magicNumber, props.colors))
    setFullArrayData(fullArray(props.nacimiento, props.nombres, props.apellidos, props.nick, props.magicNumber))
    // console.log(fullArrayData)
    
  }, [props.nacimiento, props.nombres, props.apellidos, props.nick, props.magicNumber])
  
  useEffect(() => {
    const colorNumber = Number(props.nacimiento[props.nacimiento.length - 1])
    // console.log('que', colorNumber)
    // console.log(props.color02)

     const cinco = [0, 1, 2, 3, 4]
     const tres = [7, 8, 9]
     const dos = [5, 6]

       if(cinco.find(e => e === colorNumber)){
           setColores('cinco')
       }else if(tres.find(e => e === colorNumber)){
           setColores('tres') 
       } else if(dos.find(e => e === colorNumber)){
           setColores('dos')
       }
    //  console.log(colores)
    //  console.log('----')

     switch(colores){ 
       case 'cinco':
         setColorOrder([props.color01, props.color01, props.color01, props.color02, props.color02, props.color03])
         break
       case 'tres':
         setColorOrder([props.color01, props.color01, props.color02, props.color02, props.color03, props.color03])
         break 
       case 'dos':
         setColorOrder([props.color01, props.color01, props.color01, props.color01, props.color02, props.color03])
         break 
       default:
         setColorOrder([props.color01, props.color01, props.color01, props.color02, props.color02, props.color03])
       }

    //  console.log(colorOrder)

  }, [colores, props.nacimiento, props.color01, props.color02, props.color03])

  //  }, [props.nacimiento, colores, colorOrder, props.color01, props.color02, props.color03])


  if(!props.process){
    return null
  }else{
     
    if(group.current){
      group.current.children[2].geometry.dispose()
      group.current.children[3].geometry.dispose()
      group.current.children[4].geometry.dispose()
      group.current.children[5].geometry.dispose()
      group.current.children[6].geometry.dispose()
      group.current.children[7].geometry.dispose()
    }

    return(
        <group ref={group} dispose={null} position={[0, -6, 0]}>
        
            <BoxEscultura color01={'grey'} color02={'darkgrey'} position={[0, 0.8, 0]} scale={[4.5, 4, 4.5]}/>
            <BoxEscultura color01={'darkgrey'} color02={'grey'} position={[0, -10.8, -0]} scale={10}/>
         
            <Ray friction={50} reload={props.reload} delay={100} arrayData={new Float32Array(fullArrayData[0])} color01={'hotpink'} color02={colorOrder[0]} number={0} position={[1.2, 1.5, 0]} rotation={[-1.6, 0, 1.7]}/>
            
            <Ray friction={240} reload={props.reload} delay={300} arrayData={new Float32Array(fullArrayData[3])} color01={'hotpink'} color02={colorOrder[1]} number={3} position={[1.2, 1.5, 0]} rotation={[-1.6, 0, 0.9]}/>
         
            <Ray friction={160} reload={props.reload} delay={500} arrayData={new Float32Array(fullArrayData[1])} color01={'hotpink'} color02={colorOrder[2]} number={5} position={[1.2, 1.5, -2.5]} rotation={[-1.6, 0, 2.2]}/>

            <Ray friction={10} reload={props.reload} delay={0} arrayData={new Float32Array(fullArrayData[4])} color01={'hotpink'} color02={colorOrder[3]} number={1} position={[1.2, 1.5, 0]} rotation={[-1.6, 0, 1]}/>

            <Ray friction={150} reload={props.reload} delay={200} arrayData={new Float32Array(fullArrayData[2])} color01={'hotpink'} color02={colorOrder[4]} number={2} position={[1.2, 1.5, 0]} rotation={[-1.6, 0, 0.7]}/>
            
            <Ray friction={300} reload={props.reload} delay={400} arrayData={new Float32Array(fullArrayData[4])} color01={'hotpink'} color02={colorOrder[5]} number={4} position={[1.2, 1.5, 0]} rotation={[-1.6, 0, 1.5]}/>

        </group>
    )
  }
}


function Caption({ children }, props) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      position={[1, 2, -109]}
      lineHeight={0.8}
      font="/Kanit-Black.ttf"
      fontSize={width / 8}
      material-toneMapped={false}
      textAlign='right'
      anchorX="center"
      anchorY="middle"
      color= {'#f0f8ff'}
      fillOpacity= { 0.3 }
      >
      {children}
    </Text>
  )
}

function PrincipalText({ children }, ...props) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      material-fog= {false}
      position={[-7.5, -0.3, 8]}
      // position={props.position}
      lineHeight={0.8}
      font="/Staatliches-Regular.ttf"
      fontSize={1}
      material-toneMapped={false}
      textAlign='left'
      anchorX="left"
      anchorY="middle"
      color= {'#f0f8ff'}
      fillOpacity= { 0.3 }
      >
      {children}
    </Text>
  )
}

function SubText({ children }, ...props) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      material-fog= {false}
      position={[-4.45, -0.6, 5]}
      lineHeight={0.8}
      font="/Staatliches-Regular.ttf"
      fontSize={0.5}
      material-toneMapped={false}
      textAlign='left'
      anchorX="left"
      anchorY="middle"
      color= {'white'}
      fillOpacity= { 0.5 }
      >
      {children}
    </Text>
  )
}

function SecundaryText({ children }, ...props) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      material-fog= {false}
      position={[-9, -2.4, 5]}
      lineHeight={1.2}
      font="/Poppins/Poppins-ExtraLight.ttf"
      fontSize={0.3}
      material-toneMapped={false}
      textAlign='left'
      anchorX="left"
      anchorY="middle"
      color= {'#fafafa'}
      fillOpacity= { 0.7 }
      >
      {children}
    </Text>
  )
}

function TresText({ children }, ...props) {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      material-fog= {false}
      position={[-9, -4, 5]}
      lineHeight={1.2}
      font="/Poppins/Poppins-ExtraLight.ttf"
      fontSize={0.3}
      material-toneMapped={false}
      textAlign='left'
      anchorX="left"
      anchorY="middle"
      color= {'#fafafa'}
      fillOpacity= { 0.7 }
      >
      {children}
    </Text>
  )
}


const CameraMovement = (props, { v = new THREE.Vector3(), c = new THREE.Color() }) => {

  const [zoom, set] = useState(false)
  const [cords, setCords] = useState()

  let scrollY = window.scrollY
  const camXYZ =  [0, 0 , 0]
  
  let camPositionZ = scrollY*-0.01
  const deg2rad = degrees => degrees * (Math.PI / 180);
  
  useFrame((state, event) => {
    setCords(props.clickedCube)
    window.addEventListener('scroll', () => {
      scrollY = window.scrollY
    })  
    
    state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, zoom ? 10 : 50, 0.05)
    state.camera.position.y = -2
    
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.mouse.x * 1.5, 0.03)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.mouse.y * 10.8, 0.01)
    
    
    let windowHeight = document.documentElement.clientHeight
    // state.camera.position.z = -scrollY * 0.01 + 20
    state.camera.position.z = -scrollY / windowHeight * 10
    // console.log(state.camera.position.z)

    state.camera.updateProjectionMatrix()
    state.camera.rotation.set(deg2rad(3), 0.1, 0)
  })

  return(
    <group>

       {/* DERECHA */}
      
       {/* <Box num={1} position={cubePositions[1]} /> */}
       <Box num={2} position={cubePositions[2]} />
   
   {/* IZQUIERDA */}
       <Box num={4} position={cubePositions[4]} />
       {/* <Box num={5} position={cubePositions[5]} /> */}
    </group>
  )

  
}



const Esculturas = (props) => {

 const mesh = useRef()
 const uno = useGLTF('/test-0021.glb')
//  console.log('hey', uno.nodes.Plane)

 return(
   <mesh
    {...props}
      ref={mesh}
      scale={21.5}

      geometry={uno.nodes.Plane.geometry}
      rotation={[0, 1.7, 0]}
      receiveShadow
      castShadow
     >
     
   
     <meshStandardMaterial side={THREE.DoubleSide} color={'#333333'} />
   
   </mesh>
 )
}

const GOLDENRATIO = 1.61803398875

function Frame({ url, c = new THREE.Color(), ...props }) {
  const [hovered, hover] = useState(false)
  const [rnd] = useState(() => Math.random())
  const image = useRef()
  const frame = useRef()
  useCursor(hovered)
  useFrame((state) => {
    image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2
    image.current.scale.x = THREE.MathUtils.lerp(image.current.scale.x, 0.85 * (hovered ? 0.85 : 1), 0.1)
    image.current.scale.y = THREE.MathUtils.lerp(image.current.scale.y, 0.9 * (hovered ? 0.905 : 1), 0.1)
    frame.current.material.color.lerp(c.set(hovered ? 'orange' : 'white'), 0.1)
  })
  return (
    <group {...props}>
      <mesh
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
      </mesh>
      
    </group>
  )
}


const TwoCubes = (rayoSculpture) => {
    const {spin, process, color01, color02, color03, nombres, apellidos, nick, nacimiento, magicNumber } = rayoSculpture
    const btnDownRef = useRef()
    const meshRef = useRef();
    const trash = useRef()
    const scroll = useScroll()
    var link = document.createElement( 'a' );    
    const gltfExporter = new GLTFExporter();


    const {reloadRay, reload} = useProyectos()

    // if(reload){
    //   console.log('to reload')

    // } else {
    //   console.log('not to reload')

    // }


    const handleSaveGLTF = () => {
      gltfExporter.parse(
        meshRef.current,
        function ( gltf ) {
          const output = JSON.stringify( gltf, null, 2)
          URL.createObjectURL( new Blob( [ output ], { type: 'text/plain' } ) )
          btnDownRef.download = 'scene.gltf'
        }
      );
    }
    
    function save( blob, filename ) {
      link.href = URL.createObjectURL( blob );
      link.download = filename;
      link.click();
    }

    function saveString( text, filename ) {
        save( new Blob( [ text ], { type: 'text/plain' } ), filename );
    }
  

    useEffect(() =>{
      gltfExporter.parse(
        meshRef.current,
        function ( gltf ) {
          const output = JSON.stringify( gltf, null, 2)
          console.log( 'fileSaved', gltf );
          saveString ( output, 'scene.gltf')
        }
      );
    }, [])
  
  

    const prop = { base: '#ff4eb8', colorA: '#00ffff', colorB: '#ff00e3' }

    const dirLight = useMemo(()=>{
  
      const light = new THREE.DirectionalLight('white');
      light.castShadow=true;
      //Set up shadow properties for the light
      light.shadow.mapSize.width = 512 // default
      light.shadow.mapSize.height = 512 // default
      light.shadow.camera.near = 0.1 // default
      light.shadow.camera.far = 5000 // default
      light.shadow.camera.top = -100 // default
      light.shadow.camera.right = 100 // default
      light.shadow.camera.left = -100 // default
      light.shadow.camera.bottom = 100 // default
      return light
    
    },[])
  
    const ManageGl = () => {
      const {gl} = useThree()
        gl.localClippingEnabled = true
        gl.antialias = false
      
    }

   
    const SpotLightScene = () => {
      const depthBuffer = useDepthBuffer({ size: 256 })
      return(
        <SpotLight
          penumbra={0}
          position={[-7, -1, 10]}
          intensity={100}
          angle={0.5}
          color="#ffffff"
      />
    )
    }


     const esProps = useControls({
      // position: [8, 3, -98]
      // rotation: [0, 1.5, 0]
    })

    return(
      // fov: 60,
   
      // <>
      
    <Canvas
      style={{position: 'absolute', top: '0', left: 0, zIndex: -1,  pointerEvents: 'all'}}
      shadows
      shadowmap = "true"
      camera={{ position: [0, 0, 15],  near: 0.1, far: 1000 }}
      // frameloop="demand" 
      linear = "true"
      onCreated={(state) => (state.gl.localClippingEnabled = true)}
      gl={{ preserveDrawingBuffer: true }} 
    >
    <group position = {[ 0, 0, -19 ]}>
    {/* <fog attach="fog" args={['#383838', 30, 15]} /> */}
    {/* <group
    position={[0, 3, -15]}
    > */}
          
        {/* <ambientLight intensity={0.3} /> */}
    
        <directionalLight
          position={[0, -13, 0]}
          // castShadow
          intensity={3}
          shadow-camera-far={10}
          />


        {/* <fog attach="fog" args={['white', 50, 140]} /> */}
        <fog attach="fog" args={['black', 50, 140]} />

        {/* <primitive object={dirLight} position={[30, 0, 30]} /> */}
        {/* <primitive object={dirLight.target} position={[0, 0, 0]}  /> */}
        {/* <ManageGl/> */}
        
        <ambientLight intensity={0.4} />

        {/* luz desactivarda----- */}
        
        {/* <directionalLight
          {...esProps}
          // castShadow
          // position={[5, 3 -110]}
          position={[-5, 3, -110]}
          intensity={2}
          shadow-mapSize-width={512}
          shadow-mapSize-height={512}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        /> */}
        
        {/* luz desactivarda----- */}

        <directionalLight
          {...esProps}
          castShadow
          // color={'black'}
          // position={[5, 3 -110]}
          position={[-5, 3, -110]}
          intensity={1.1}
          shadow-mapSize-width={512}
          shadow-mapSize-height={512}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        {/* <directionalLight
        castShadow
        position={[5, 3, 12]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
    /> */}

        <spotLight
          // color={'white'}
          color={color02}
          position={[-1, 130, -450]}
          // position={[5, 1, -160]}
          angle={0.105}
          intensity={0.1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.00001}
          castShadow
          />

        {/* <spotLight
                  // color={'white'}
                  color={props.color1}
                  position={[5, 37, -250]}
                  angle={0.1}
                  intensity={1}
                  shadow-mapSize-width={2048}
                  shadow-mapSize-height={2048}
                  shadow-bias={-0.00001}
                  castShadow
                  /> */}

          <spotLight
            // color={'white'}
            color={color01}
            position={[5, 37, -240]}
            angle={0.1}
            intensity={1}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.00001}
            castShadow
            />


      <pointLight position={[80, 50, -40]} color={color03} intensity={0.5} />
      <pointLight position={[40, 50, -40]} color={color01} intensity={0.5} />
      <pointLight position={[40, 50, -40]} color={"white"} intensity={0.3} />
      {/* <pointLight position={[0, -10, 0]} intensity={1.5} /> */}

      {/* <hemisphereLight skyColor= {0xd8d8d8} groundColor={0x080820} intensity={0.5} /> */}
      

      <Suspense>
      {/* escultura-cubo-f.glb */}
              <Esculturas position={[4.2, -5.4, -35]} />
              <group
                rotation={[0.0, 0.0, 0]}
                position={[-8.2, -4.0, -30]}

              >
                <EsculturasL  time={0.002} color={0x533809} name={'eintein_2001'} fileName={'/einsteinClean1.glb'}/>
                <EsculturasL  time={0.002} color={0x5D440E} name={'eintein_3001'} fileName={'/einsteinClean1.glb'} />
                <EsculturasL  time={0.002} color={0x2E1F0A} name={'eintein_4001'} fileName={'/einsteinClean1.glb'} />
                <EsculturasL  time={0.002} color={0x2E1F0A} name={'eintein_6001'} fileName={'/einsteinClean1.glb'} />
              </group>

              <group
                rotation={[0.08, 0.609, 0.209]}
                position={[-105.10, 35.2, -45]}
                scale={950.6}
              >
                <EsculturasL time={0.00002} color={0x533809} name={'Cube'} fileName={'/escultura-cubo-f.glb'}/>
                <EsculturasL time={0.00002} color={0x5D440E} name={'Cube001'} fileName={'/escultura-cubo-f.glb'} />
                <EsculturasL time={0.00002} color={0x2E1F0A} name={'Cube002'} fileName={'/escultura-cubo-f.glb'} />
                <EsculturasL time={0.00002} color={0x2E1F0A} name={'Cube003'} fileName={'/escultura-cubo-f.glb'} />
                <EsculturasL time={0.00002} color={0x2E1F0A} name={'Cube004'} fileName={'/escultura-cubo-f.glb'} />
              </group>

              <group
                rotation={[0.0, 0.0, 0]}
                position={[8, -4.0, -55]}
                scale={0.6}
              >
                <EsculturasL time={0.002} color={0xAC5C02} name={'Thomyorke001'} fileName={'/thomClean1.glb'}/>
                <EsculturasL time={0.002} color={0x2B1E03} name={'Thomyorke002'} fileName={'/thomClean1.glb'} />
                <EsculturasL time={0.002} color={0x2B1E03} name={'Thomyorke003'} fileName={'/thomClean1.glb'} />
                <EsculturasL time={0.002} color={0x786845} name={'Thomyorke004'} fileName={'/thomClean1.glb'} />
                <EsculturasL time={0.002} color={0xAC5C02} name={'Thomyorke005'} fileName={'/thomClean1.glb'} />
              </group>


              <group
                rotation={[0.0, 0.0, 0.0]}
                position={[28, -2.0, -25]}
                scale={10.4}
              >
                <EsculturasL time={0.00002} color={0x786845} name={'planeC00'} fileName={'/escultura-cubo001.glb'}/>
                <EsculturasL time={0.00002} color={0x2B1E03} name={'planeC001'} fileName={'/escultura-cubo001.glb'} />
                <EsculturasL time={0.00002} color={0x2B1E03} name={'planeC002'} fileName={'/escultura-cubo001.glb'} />
                <EsculturasL time={0.00002} color={0x786845} name={'planeC003'} fileName={'/escultura-cubo001.glb'} />
                <EsculturasL time={0.00002} color={0xAC5C02} name={'Cube002'} fileName={'/escultura-cubo001.glb'} />
              </group>

                      
              <Wall position= {[-8.2, -2.4, 1]}/>
              <Wall position= {[8.2, -2.4, 1]}/>

      </Suspense>
        



      <CameraMovement />

        <Suspense fallback={null}>
      {/* to save ref={ meshRef } */}
      <group position = {[ 0, -1, -90 ]}>

        <Sculpture
          // onClick={exportASCII}
          // ref = {exportMesh}
          ref         = { trash }
          spin        = { spin }
          process     = { process }
          color01     = { color01 }
          color02     = { color02 }
          color03     = { color03 }
          nacimiento  = { nacimiento }
          nombres     = { nombres }
          apellidos   = { apellidos }
          nick        = { nick }
          magicNumber = { magicNumber }
          reload      = { reload }
          
        />
          <BoxEscultura color01={'darkgrey'} color02={'grey'} position={[0, -5.5, -0]} scale={[10, 1, 15]}/>
      </group>
       
          {/* <Caption>{`${props.nombres}\n${props.apellidos}\n${props.nick}`}</Caption> */}
          {nick&&<Caption
          pos={[1, 2, -109]}
          >{`${nick.toUpperCase()}`}</Caption>}

          <PrincipalText
          position={[-7, -1, 10]}
          >
          {`REVERTEXFLEX`}
          </PrincipalText>

          <SubText
          >
          {`GalleryLab`}
          </SubText>

          <SecundaryText>
            {`Create your own personalized Sculpture.\nYour name, nickname and birthdate,\nwill be interpreted by the algorithm\nthen you'll be ask to choose your favorite colors.\nYou can buy this Sculpture to be 3d printed\nand shipped to your home or you can buy it as NFT.`}
          </SecundaryText>

          <TresText>
            {`Go all the way down to START.`}
          </TresText>

        <Floor position={[0, 6, -50]}/>
        
        </Suspense>
          

          </group>

        {/* </Suspense> */}

        {/* </group> */}
    </Canvas>
        // </>
        )
  
}

export default TwoCubes