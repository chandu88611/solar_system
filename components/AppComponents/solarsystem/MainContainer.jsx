import { useHelper } from '@react-three/drei'
import AnimatedStars from './AnimatedStars'
import { useRef } from 'react'
// import { Perf } from 'r3f-perf'

import * as THREE from 'three'
import Sun from './Sun'
import Earth from './earth/Earth'
import Jupitar from './Jupitar'
import Mercury from './Mercury'
import Mars from './Mars'
import Venus from './Venus'
import Saturn from './Saturn'
import Uranus from './Uranus'
import Neptune from './Neptune'

// import CameraPositionLogging from './helpers/CameraPositionLogging'

// import Earth from './scenes/earth/Earth'
// import Sun from './scenes/sun/Sun'

const MainContainer = () => {
  const directionalLightRef = useRef()
  const directionalLightRefTwo = useRef()
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink')
  useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, 'hotpink')
  return (
    <>
      {/* <Perf /> */}
      {/* <CameraPositionLogging event='mousedown' /> */}
      <AnimatedStars />
      {/* <directionalLight
        castShadow
        ref={directionalLightRef}
        position={[0, 0, 10]}
        intensity={1}
        // color={0xff0000}
      />
      <directionalLight
        castShadow
        ref={directionalLightRefTwo}
        position={[0, 0, -10]}
      /> */}
      <ambientLight intensity={0.1} />
<Earth/>
<Jupitar/>
<Mercury/>
<Mars/>
<Venus/>
<Saturn/>
<Uranus/>
<Neptune/>
      <Sun />
      {/* <Earth displacementScale={0.15} /> */}
    </>
  )
}

export default MainContainer
