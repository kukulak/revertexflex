import { createRoot } from 'react-dom/client'
import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer, Float, useGLTF, BakeShadows, ContactShadows } from '@react-three/drei'
import { LayerMaterial, Base, Depth } from 'lamina'
import { gsap } from "gsap";

import { coordenadas } from './creator.app.jsx';

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? props.color01 : props.color02} />
    </mesh>
  )
}

// createRoot(document.getElementById('root')).render(
//   <Canvas>
//     <ambientLight />
//     <pointLight position={[10, 10, 10]} />
//     <Box position={[-1.2, 0, 0]} />
//     <Box position={[1.2, 0, 0]} />
//   </Canvas>,
// )



////
// COLORS
///



const blue1 = [0x8be8cb, 0x392c8e, 0x7ea2aa]
const blue2 = [0x2d82b7, 0x070707, 0xc297b8]
const blue3 = [0xb7d5d4, 0x3852ad, 0x2a7f62]
const blue4 = [0x931f1d, 0x3a405a, 0xf6e8ea]
const blue5 = [0x2660a4, 0xe15554, 0xe1bc29]
const blue6 = [0x48acf0, 0x594236, 0xe3b505]
const blue7 = [0x4D848D, 0x59C3CF, 0xEFD956]
const blue8 = [0x361d2e, 0x2d93ad, 0xffd100]
const blue9 = [0x8fbfe0, 0x1f363d, 0xc2f9bb]


const green1 = [0x856F3F, 0xD9C152, 0xD98D26]
const green2 = [0x38023b, 0x4b8f8c, 0xf19953]
const green3 = [0x395e66, 0x808932, 0x4c2e05]
const green4 = [0x8be8cb, 0x392c8e, 0x7ea2aa]
const green5 = [0xb7d5d4, 0x3852ad, 0x2a7f62]
const green6 = [0xc9c5ba, 0xff3332, 0x97b1a6]
const green7 = [0x087e8b, 0xff5a5f, 0x3c3c3c]
const green8 = [0x8fbfe0, 0x1f363d, 0xc2f9bb]
const green9 = [0xd2cca1, 0x2d93ad, 0xdbd4d3]


const red1 = [0x283C31, 0xED932A, 0x313A54]
const red2 = [0x931f1d, 0x3a405a, 0xf6e8ea]
const red3 = [0xc9c5ba, 0xff3332, 0x97b1a6]
const red4 = [0x856F3F, 0xD9C152, 0xD98D26]
const red5 = [0x38023b, 0x4b8f8c, 0xf19953]
const red6 = [0x395e66, 0x808932, 0x4c2e05]
const red7 = [0xDED8D4, 0xD63651, 0x08102D]
const red8 = [0x2660a4, 0xe15554, 0xe1bc29]
const red9 = [0x087e8b, 0xff5a5f, 0x3c3c3c]


const magenta1 = [0xDED8D4, 0xD63651, 0x08102D]
const magenta2 = [0x2660a4, 0xe15554, 0xe1bc29]
const magenta3 = [0x087e8b, 0xff5a5f, 0x3c3c3c]
const magenta4 = [0x2d82b7, 0x070707, 0xc297b8]
const magenta5 = [0x931f1d, 0x3a405a, 0xf6e8ea]
const magenta6 = [0xc9c5ba, 0xff3332, 0x97b1a6]
const magenta7 = [0xd2cca1, 0x2d93ad, 0xdbd4d3]
const magenta8 = [0xff9b71, 0xffe13c, 0x60695c]
const magenta9 = [0x08090a, 0xffe19c, 0xf15946]


const blueClear1 = [0x48acf0, 0x594236, 0xe3b505]
const blueClear2 = [0x8fbfe0, 0x1f363d, 0xc2f9bb]
const blueClear3 = [0xd2cca1, 0x2d93ad, 0xdbd4d3]
const blueClear4 = [0x8be8cb, 0x392c8e, 0x7ea2aa]
const blueClear5 = [0x2d82b7, 0x070707, 0xc297b8]
const blueClear6 = [0x4D848D, 0x59C3CF, 0xEFD956]
const blueClear7 = [0x361d2e, 0x2d93ad, 0xffd100]
const blueClear8 = [0x08090a, 0xffe19c, 0xf15946]
const blueClear9 = [0xc9c5ba, 0xff3332, 0x97b1a6]


const yellow1 = [0x4D848D, 0x59C3CF, 0xEFD956]
const yellow2 = [0xff9b71, 0xffe13c, 0x60695c]
const yellow3 = [0x361d2e, 0x2d93ad, 0xffd100]
const yellow4 = [0x856F3F, 0xD9C152, 0xD98D26]
const yellow5 = [0x38023b, 0x4b8f8c, 0xf19953]
const yellow6 = [0x395e66, 0x808932, 0x4c2e05]
const yellow7 = [0xc9c5ba, 0xff3332, 0x97b1a6]
const yellow8 = [0xDED8D4, 0xD63651, 0x08102D]
const yellow9 = [0x2660a4, 0xe15554, 0xe1bc29]


const black1 = [0x000000, 0x2f1000, 0x621b00]
const black2 = [0x08090a, 0xffe19c, 0xf15946]
const black3 = [0x000c00, 0x74121d, 0xbc5f04]
const black4 = [0x2d82b7, 0x070707, 0xc297b8]
const black5 = [0x38023b, 0x4b8f8c, 0xf19953]
const black6 = [0xDED8D4, 0xD63651, 0x08102D]
const black7 = [0x087e8b, 0xff5a5f, 0x3c3c3c]
const black8 = [0x8fbfe0, 0x1F363D, 0xc2f9bb]
const black9 = [0xff9b71, 0xffe13c, 0x60695c]



///
// END COLORS
///
const blue = [blue1, blue2, blue3, blue4, blue5, blue6, blue7, blue8, blue9]
const green = [green1, green2, green3, green4, green5, green6, green7, green8, green9]
const red = [red1, red2, red3, red4, red5, red6, red7, red8, red9]
const magenta = [magenta1, magenta2, magenta3, magenta4, magenta5, magenta6, magenta7, magenta8, magenta9]
const blueClear = [blueClear1, blueClear2, blueClear3, blueClear4, blueClear5, blueClear6, blueClear7, blueClear8, blueClear9]
const yellow = [yellow1, yellow2, yellow3, yellow4, yellow5, yellow6, yellow7, yellow8, yellow9]
const black = [black1, black2, black3, black4, black5, black6, black7, black8, black9]

const allColors = [blue, green, red, magenta, blueClear, green, black, yellow, blueClear]


/**
 * MODELS
 */




 const personalGeometry = new THREE.BufferGeometry();





 let num = 2.0
 
 let num2 = 2
 
 
 const nombre = document.getElementById('nombre')
 const apellido = document.getElementById('paterno')
 const apellidoDos = document.getElementById('materno')
 const fechaNacimiento = document.getElementById('nacimiento')
 const btnCrear = document.getElementById('btnCrear')
 const allForm = document.getElementById('allForm')
 const hambur = document.getElementById('hambur')
 
 const reloadApp = () => {
     window.location.reload(true)
 }
 
//  hambur.addEventListener('click', reloadApp)
 
 let personalArray = []

 let personalObject, personalObject1, personalObject2, personalObject3, personalObject4
 let dataNombre = '1'
 let dataApellido = '1'
 let nickName = '1'
 let dataFechaNacimiento = '1'
 const groupPersonal = new THREE.Group();
 
 
 function CreateEscultura(props){
    allForm.style.display = 'none'
    dataNombre = props.nombres
    dataApellido = props.apellidos
    nickName = props.nickName
    dataFechaNacimiento = props.fechaNacimiento

    // dataNombre = 'christian'
    // dataApellido = 'valderrama'
    // nickName = 'lerdo'
    // dataFechaNacimiento = '05071988'

    // nombres apellidos nickName fechaNacimiento

    personalArray = coordenadas(dataFechaNacimiento, dataNombre, dataApellido, nickName)



     const pisos = [0, 3, 7, 12, 16,
                    0, 4, 9, 13, 16,
                    0, 5, 8, 12, 16,
                    0, 3, 6, 10, 16,
                    0, 6, 10, 13, 16]

 
    const positions = [ ];
    let unPlano = [
        // -0.5, 0.5, 0,
        // 0.5, 0.5, 0,
        // -0.5, -0.5, 0,
        // 0.5, -0.5, 0,
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

            
        // }
        
    }

   

}


const numberCopies = 5


prosesator(0)
prosesator(5)
prosesator(10)
prosesator(15)
prosesator(20)


for (let i = 0; i < array.length; i++) {
    for (let d = 0; d < array[i].length; d++) {
        escul.push(array[i][d])
        
    }
}



//#Source https://bit.ly/2neWfJ2 
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );


 let sepScult = chunk(escul, 9216)

// console.log('CHIUNK', chunk(escul, 9216));



    personalGeometry.setAttribute( 'position', new THREE.Float32BufferAttribute( sepScult[0], 3 ) );


    
    let plane = new THREE.Plane( new THREE.Vector3( 0, -1, 0 ), -1.0 )
    // let plane = new THREE.Plane( new THREE.Vector3( 0, 0.6, 0 ), -4 )


    let pcolor = []

    // pcolor = groupColorAqua

    
    pcolor = allColors[dataFechaNacimiento[7]][dataFechaNacimiento[1]]





    personalGeometry.computeVertexNormals()
    // personalObject = new THREE.Mesh( personalGeometry, new THREE.MeshPhongMaterial({
    //     side: THREE.DoubleSide,
    //     color: pcolor[0], 
    //     shininess: 0,
    //     specular: 0x222222,
    //     clippingPlanes: [ plane ],
    //     clipShadows: true}
    //     ) );
    personalObject = new THREE.Mesh( personalGeometry, 
                                     new THREE.MeshMatcapMaterial({
                                        color: pcolor[0], 
                                        shininess: 0,
                                        specular: 0x222222,
                                         side: THREE.DoubleSide,
                                         clippingPlanes: [ plane ],
                                         clipShadows: true}));
       

        gsap.to(personalObject.material.clippingPlanes[0], {constant: 3, duration: 2.0, delay: 1})
        // clipping

    // const stencilGroup = createPlaneStencilGroup( personalObject, plane, 1 );
    
    // scene.add(plane)

    groupPersonal.add(personalObject);

    const pOZ = 0.30
    const pOY = 0.85


    personalObject.scale.set(.1, .1, .1)
    personalObject.position.set( 0.15, -0.94+pOY, pOZ )
    // personalObject.rotation.set(-0.0, -0.0, 0.15 + 1)


    let plane1 = new THREE.Plane( new THREE.Vector3( 0, -1, 0 ), -1.0  )
    // let plane1 = new THREE.Plane( new THREE.Vector3( 0, 0.6, 0 ), -4 )

    
    const personalGeometry1 = new THREE.BufferGeometry();
    
    
    personalGeometry1.setAttribute( 'position', new THREE.Float32BufferAttribute( sepScult[1], 3 ) );
    
    let pcolor1 = 0xD9C152 
    personalGeometry1.computeVertexNormals()

    personalObject1 = new THREE.Mesh( personalGeometry1, new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        color: pcolor[0], 
        shininess: 0,
        specular: 0x222222,
        clippingPlanes: [ plane1 ],
        clipShadows: true}) );

        gsap.to(personalObject1.material.clippingPlanes[0], {constant: 3, duration: 2.0, delay: 1.55})

    personalObject1.castShadow = true; //default is false
    personalObject1.receiveShadow = true; //default
    groupPersonal.add(personalObject1);
    
    personalObject1.scale.set(.1, .1, .1)
    personalObject1.position.set(0.58, -0.72+pOY, pOZ )
    personalObject1.rotation.set(-0.0, -0.0, 0.15 + 1)




    // let plane2 = new THREE.Plane( new THREE.Vector3( 0, 0.6, 0 ), -4 )
    let plane2 = new THREE.Plane( new THREE.Vector3( 0, -1, 0 ), -1.0  )


    const personalGeometry2 = new THREE.BufferGeometry();
    
    
    personalGeometry2.setAttribute( 'position', new THREE.Float32BufferAttribute( sepScult[2], 3 ) );
    // personalGeometry.computeVertexNormals();
    let pcolor2 = 0x856F3F 
    personalGeometry2.computeVertexNormals()

    personalObject2 = new THREE.Mesh( personalGeometry2, new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        color: pcolor[1], 
        shininess: 0,
        specular: 0x222222,
        clippingPlanes: [ plane2 ],
        clipShadows: true
    }) );
    gsap.to(personalObject2.material.clippingPlanes[0], {constant: 3, duration: 2.0, delay: 2})
    personalObject2.castShadow = true; //default is false
    personalObject2.receiveShadow = true; //default
    groupPersonal.add(personalObject2);
    
    personalObject2.scale.set(.1, .1, .1)
    personalObject2.position.set(0.0, 0.15+pOY, pOZ )
    personalObject2.rotation.set(-0.0, -0.0, 0.15 + 2)

    let plane3 = new THREE.Plane( new THREE.Vector3( 0, -1, 0 ), -1.0 )
    // let plane3 = new THREE.Plane( new THREE.Vector3( 0, 0.6, 0 ), -4 )



    const personalGeometry3 = new THREE.BufferGeometry();
    

    personalGeometry3.setAttribute( 'position', new THREE.Float32BufferAttribute( sepScult[3], 3 ) );
    // personalGeometry.computeVertexNormals();
    let pcolor3 = 0xD9C152 
    personalGeometry3.computeVertexNormals()
    
    personalObject3 = new THREE.Mesh( personalGeometry3, new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        color: pcolor[2], 
        shininess: 0,
        specular: 0x222222,
        clippingPlanes: [ plane3 ],
        clipShadows: true
    }) );
    gsap.to(personalObject3.material.clippingPlanes[0], {constant: 3, duration: 2, delay: 2.5})
    personalObject3.castShadow = true; //default is false
    personalObject3.receiveShadow = true; //default
    groupPersonal.add(personalObject3);
    
    personalObject3.scale.set(.1, .1, .1)
    personalObject3.position.set(-0.29, -0.29+pOY, pOZ )
    personalObject3.rotation.set(-0.00, -0.00, 0.15 + 3)

    let plane4 = new THREE.Plane( new THREE.Vector3( 0, -1, 0 ), -1.0  )
    // let plane4 = new THREE.Plane( new THREE.Vector3( 0, 0.6, 0 ), -4 )


    const personalGeometry4 = new THREE.BufferGeometry();


    personalGeometry4.setAttribute( 'position', new THREE.Float32BufferAttribute( sepScult[4], 3 ) );
    
    let pcolor4 = 0xD98D26

    personalGeometry4.computeVertexNormals()
    personalObject4 = new THREE.Mesh( personalGeometry4, new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        color: pcolor[2], 
        shininess: 0,
        specular: 0x222222,
        clippingPlanes: [ plane4 ],
        clipShadows: true
    }) );
    gsap.to(personalObject4.material.clippingPlanes[0], {constant: 3, duration: 2, delay: 3})

    // console.log( 'PERSONALOBJECT', personalObject4)

    personalObject4.castShadow = true; //default is false
    personalObject4.receiveShadow = true; //default
    groupPersonal.add(personalObject4);
    
    personalObject4.scale.set(.1, .1, .1)
    personalObject4.position.set(-0.94, -0.5+pOY, pOZ )
    personalObject4.rotation.set(-0.0, -0.0, 0.15 + 4)
    // console.log('PERSONAL OBJECT', personaObject)

    


   
    
    // scene.add(groupPersonal)

    const helpgroupPersonal = new THREE.BoxHelper( groupPersonal, 0xffff00 );
    // scene.add(helpgroupPersonal)


    groupPersonal.rotation.set(-1.59, -0.0, 0)
    groupPersonal.position.set(0.15, -1.25, 0.15+1 )
    groupPersonal.scale.set(.5, .5, .5)


return groupPersonal


}

 
 
 
function Bg() {
    const mesh = useRef()
    useFrame((state, delta) => {
      mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += 0.001
    })
    return (
      <mesh ref={mesh} scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <LayerMaterial color="#f0aed2" attach="material" side={THREE.BackSide}>
          <Depth colorA="blue" colorB="#00aaff" alpha={0.5} mode="multiply" near={0} far={300} origin={[10, 10, 10]} />
          <Depth
            colorA="#ff0000"
            colorB="#00aaff"
            alpha={0.5}
            mode="multiply"
            near={0}
            far={300}
            origin={[100, 100, 100]}
          />
        </LayerMaterial>
      </mesh>
    )
  }

const TwoCubes = (props) => {
    const prop = { base: '#ff4eb8', colorA: '#00ffff', colorB: '#ff00e3' }
     return(

    <Canvas>
        {/* <spotLight
            color='0xffa95c'
            castShadow
            shadow-bias = {-0.0001}
            shadow-mapSize-width = {1024*4} shadow-mapSize-height = {1024*4}
            /> */}

        {/* Renders contents "live" into a HDRI environment (scene.environment). */}
    

        <BakeShadows />
        <Bg {...prop} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box color01={props.color01} color02={props.color02} position={[-1.2, 0, 0]} />
        <Box color01={props.color01} color02={props.color02} position={[1.2, 0, 0]} />
        <CreateEscultura nombres={'christian'} apellidos={'valderrama'} nickName={'gomes'} fechaNacimiento={'11021977'}/>
    </Canvas>

        )
  
}

export default TwoCubes