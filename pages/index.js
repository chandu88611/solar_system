import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import MainContainer from '@/components/AppComponents/solarsystem/MainContainer'
// import { Perf } from 'r3f-perf'

// import MainContainer from './MainContainer'

function App() {
  return (
    <div className=' h-screen'>

    <Canvas
      shadows
      camera={{ fov: 55, near: 0.1, far: 1000, position: [16, 8.5, 19.5] }} >
      <color attach='background' args={['black']}   />

      <OrbitControls />
      <MainContainer />
    </Canvas>
          </div>
  )
}

export default App