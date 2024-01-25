import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef, useCallback } from 'react'
import * as THREE from 'three'

const Venus = React.memo(() => {
  const VenusRef = useRef()
  const clockRef = useRef(new THREE.Clock()) // Create a reference to the clock

  const [VenusTexture] = useTexture(['/assets/2k_venus_surface.jpg'])
  const xAxis = 27
  const updateVenusPosition = useCallback(() => {
    // Orbit Rotation
    VenusRef.current.position.x =
      Math.sin(clockRef.current.getElapsedTime() * 0.8) * xAxis
    VenusRef.current.position.z =
      Math.cos(clockRef.current.getElapsedTime() * 0.8) * xAxis
    // Axis Rotation
    VenusRef.current.rotation.y += 0.002
  }, [])

  useFrame(() => {
    updateVenusPosition()
  })

  return (
    <mesh castShadow receiveShadow ref={VenusRef} position={[xAxis, 0, 0]}>
      {/* Radius , X-axis , Y-axis */}
      <sphereGeometry args={[1.9, 32, 32]} />
      <meshPhongMaterial
        map={VenusTexture}
        emissiveMap={VenusTexture}
        emissive={0xffffff}
        emissiveIntensity={0.05}
      />
    </mesh>
  )
})

export default Venus
