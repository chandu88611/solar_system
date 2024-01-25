import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef, useCallback } from 'react'
import * as THREE from 'three'

const Mercury = React.memo(() => {
  const MercuryRef = useRef()
  const clockRef = useRef(new THREE.Clock()) // Create a reference to the clock

  const [MercuryTexture] = useTexture(['/assets/2k_mercury.jpg'])
  const xAxis = 22
  const updateMercuryPosition = useCallback(() => {
    // Orbit Rotation
    MercuryRef.current.position.x =
      Math.sin(clockRef.current.getElapsedTime() * 0.8) * xAxis
    MercuryRef.current.position.z =
      Math.cos(clockRef.current.getElapsedTime() * 0.8) * xAxis
    // Axis Rotation
    MercuryRef.current.rotation.y += 0.002
  }, [])

  useFrame(() => {
    updateMercuryPosition()
  })

  return (
    <mesh castShadow receiveShadow ref={MercuryRef} position={[xAxis, 0, 0]}>
      {/* Radius , X-axis , Y-axis */}
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshPhongMaterial
        map={MercuryTexture}
        emissiveMap={MercuryTexture}
        emissive={0xffffff}
        emissiveIntensity={0.05}
      />
    </mesh>
  )
})

export default Mercury
