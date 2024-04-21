import { Suspense } from 'react';
import './App.css';
import {Canvas} from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

function App() {

  const Angle = (angle:number) => Math.PI / 180 *angle;
  

  return (
    <Canvas className="App__myCanvas">
      <Suspense fallback={null}>
      <PerspectiveCamera makeDefault position={[0,1,4]} />
      <OrbitControls />
      <mesh position={[0,.5,0]}>
        <sphereGeometry args={[.5,32,32]}  />
        
        <meshStandardMaterial color={'orange'} />
      </mesh>

      <mesh rotation={[-(Angle(90)),0,0]}>
        <planeGeometry args={[5,5]} />
        <meshStandardMaterial color={'cyan'} />
      </mesh>


      <ambientLight color={'white'} intensity={1} />
      {/* <ambientLightProbe color={'white'} /> */}
      </Suspense>
    </Canvas>
  )
}

export default App
