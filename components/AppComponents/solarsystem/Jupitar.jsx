import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef, useCallback } from 'react'
import * as THREE from 'three'

const Jupitar = React.memo(() => {
  const jupitarRef = useRef()
  const clockRef = useRef(new THREE.Clock()) // Create a reference to the clock

  const [jupitarTexture] = useTexture(['/assets/2k_jupiter.jpg'])
  const xAxis = 55
  const updatejupitarPosition = useCallback(() => {
    // Orbit Rotation
    jupitarRef.current.position.x =
      Math.sin(clockRef.current.getElapsedTime() * 0.8) * xAxis
    jupitarRef.current.position.z =
      Math.cos(clockRef.current.getElapsedTime() * 0.8) * xAxis
    // Axis Rotation
    jupitarRef.current.rotation.y += 0.002
  }, [])

  useFrame(() => {
    updatejupitarPosition()
  })

  return (
    <mesh castShadow receiveShadow ref={jupitarRef} position={[xAxis, 0, 0]}>
      {/* Radius , X-axis , Y-axis */}
      <sphereGeometry args={[5, 32, 32]} />
      <meshPhongMaterial
        map={jupitarTexture}
        emissiveMap={jupitarTexture}
        emissive={0xffffff}
        emissiveIntensity={0.05}
      />
    </mesh>
  )
})

export default Jupitar
