import React, { Component } from 'react';
import * as THREE from 'three';

class ThreeScene extends Component{
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { color: '#ef2837' };
  }

  componentDidMount(){
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    //ADD SCENE
    this.scene = new THREE.Scene()

    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    this.camera.position.z = 4

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    // this.renderer.setClearColor(this.props.backColor)
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)
    //ADD CUBE
    this.geometry = new THREE.BoxGeometry(1, 1, 1)
    // const material = new THREE.MeshBasicMaterial({ color: '#433F81'})
    // this.material = new THREE.MeshBasicMaterial({ color: this.props.cubeColor })
    this.cColor = this.state.color
    this.material = new THREE.MeshBasicMaterial({ color: this.cColor})
    // this.cColor = this.props.cubeColor
    this.setState(() => {
      return {color: this.props.cubeColor}
      });
    // this.material.color =  0x433F81
    // this.material.color =  this.props.cubeColor

    this.cube = new THREE.Mesh(this.geometry, this.material)
    
    this.scene.add(this.cube)
this.start()
  }

componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

// shouldComponentUpdate(props, state){
//     let ableToBuy =state.currency%10==0
//     return ableToBuy;
//     }

start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }
stop = () => {
    cancelAnimationFrame(this.frameId)
  }
animate = () => {
  // this.setState({color: this.props.cubeColor});
  this.cube.rotation.x += 0.01
  this.cube.rotation.y += 0.01
  this.renderScene()
  this.frameId = window.requestAnimationFrame(this.animate)
 }
renderScene = () => {
  this.renderer.render(this.scene, this.camera)
}
render(){
    return(
      <div
        style={{ position: 'absolute', top: 0, left: 0, zIndex: -1,  width: '100vw', height: '100vh' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}
export default ThreeScene