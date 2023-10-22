//import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';


const Cellphone = () => {

  const cellphone = useGLTF('./cellphone/MobilePhone_01.gltf')
  
  return (
    <mesh>
    <hemisphereLight intensity={0.15}
    groundColor="black" />
    <pointLight intensity ={1}/>
    <spotLight
     position={[-20, 50, 10]}
     angle={0.12}
     penumbra={1}
     intensity={10}
     castShadow
     shadow-mapSize={1024}
    />
    <primitive
      object={cellphone.scene}
      scale={20}
      position-y={0}
      rotation-y={0}
      />  

</mesh>
  )
}

const CellphoneCanvas =() =>{
  return (
    <Canvas
    shadows
    frameloop='demand'
    gl={{ preserveDrawingBuffer: true}}
    camera={{
      fov:45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6]
    }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI /2}
          minPolarAngle={Math.PI /2}
        />
        <Cellphone/>
      </Suspense>
    </Canvas>
  )
}

export default CellphoneCanvas;