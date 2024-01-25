import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef, useCallback } from 'react'
import * as THREE from 'three'

const Uranus = React.memo(() => {
  const UranusRef = useRef()
  const clockRef = useRef(new THREE.Clock()) // Create a reference to the clock

  const [UranusTexture] = useTexture(['/assets/2k_uranus.jpg'])
  const xAxis = 79
  const updateUranusPosition = useCallback(() => {
    // Orbit Rotation
    UranusRef.current.position.x =
      Math.sin(clockRef.current.getElapsedTime() * 0.8) * xAxis
    UranusRef.current.position.z =
      Math.cos(clockRef.current.getElapsedTime() * 0.8) * xAxis
    // Axis Rotation
    UranusRef.current.rotation.y += 0.002
  }, [])

  useFrame(() => {
    updateUranusPosition()
  })

  return (
    <mesh castShadow receiveShadow ref={UranusRef} position={[xAxis, 0, 0]}>
      {/* Radius , X-axis , Y-axis */}
      <sphereGeometry args={[3, 32, 32]} />
      <meshPhongMaterial
        map={UranusTexture}
        emissiveMap={UranusTexture}
        emissive={0xffffff}
        emissiveIntensity={0.05}
      />
    </mesh>
  )
})

export default Uranus
