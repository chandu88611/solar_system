import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef, useCallback } from 'react'
import * as THREE from 'three'

const Mars = React.memo(() => {
  const MarsRef = useRef()
  const clockRef = useRef(new THREE.Clock()) // Create a reference to the clock

  const [MarsTexture] = useTexture(['/assets/2k_mars.jpg'])
  const xAxis = 48
  const updateMarsPosition = useCallback(() => {
    // Orbit Rotation
    MarsRef.current.position.x =
      Math.sin(clockRef.current.getElapsedTime() * 0.8) * xAxis
    MarsRef.current.position.z =
      Math.cos(clockRef.current.getElapsedTime() *0.8) * xAxis
    // Axis Rotation
    MarsRef.current.rotation.y += 0.002
  }, [])

  useFrame(() => {
    updateMarsPosition()
  })

  return (
    <mesh castShadow receiveShadow ref={MarsRef} position={[xAxis, 0, 0]}>
      {/* Radius , X-axis , Y-axis */}
      <sphereGeometry args={[2, 32, 32]} />
      <meshPhongMaterial
        map={MarsTexture}
        emissiveMap={MarsTexture}
        emissive={0xffffff}
        emissiveIntensity={0.05}
      />
    </mesh>
  )
})

export default Mars
