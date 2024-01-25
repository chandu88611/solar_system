import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef, useCallback } from 'react'
import * as THREE from 'three'

const Saturn = React.memo(() => {
  const SaturnRef = useRef()
  const clockRef = useRef(new THREE.Clock()) // Create a reference to the clock

  const [SaturnTexture] = useTexture(['/assets/2k_saturn.jpg'])
  const xAxis = 67
  const updateSaturnPosition = useCallback(() => {
    // Orbit Rotation
    SaturnRef.current.position.x =
      Math.sin(clockRef.current.getElapsedTime() * 0.8) * xAxis
    SaturnRef.current.position.z =
      Math.cos(clockRef.current.getElapsedTime() * 0.8) * xAxis
    // Axis Rotation
    SaturnRef.current.rotation.y += 0.002
  }, [])

  useFrame(() => {
    updateSaturnPosition()
  })

  return (
    <mesh castShadow receiveShadow ref={SaturnRef} position={[xAxis, 0, 0]}>
      {/* Radius , X-axis , Y-axis */}
      <sphereGeometry args={[4, 32, 32]} />
      <meshPhongMaterial
        map={SaturnTexture}
        emissiveMap={SaturnTexture}
        emissive={0xffffff}
        emissiveIntensity={0.05}
      />
    </mesh>
  )
})

export default Saturn
