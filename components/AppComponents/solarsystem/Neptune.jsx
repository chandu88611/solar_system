import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef, useCallback } from 'react'
import * as THREE from 'three'

const Neptune = React.memo(() => {
  const NeptuneRef = useRef()
  const clockRef = useRef(new THREE.Clock()) // Create a reference to the clock

  const [NeptuneTexture] = useTexture(['/assets/2k_neptune.jpg'])
  const xAxis = 89
  const updateNeptunePosition = useCallback(() => {
    // Orbit Rotation
    NeptuneRef.current.position.x =
      Math.sin(clockRef.current.getElapsedTime() * 0.8) * xAxis
    NeptuneRef.current.position.z =
      Math.cos(clockRef.current.getElapsedTime() * 0.8) * xAxis
    // Axis Rotation
    NeptuneRef.current.rotation.y += 0.002
  }, [])

  useFrame(() => {
    updateNeptunePosition()
  })

  return (
    <mesh castShadow receiveShadow ref={NeptuneRef} position={[xAxis, 0, 0]}>
      {/* Radius , X-axis , Y-axis */}
      <sphereGeometry args={[2.3, 32, 32]} />
      <meshPhongMaterial
        map={NeptuneTexture}
        emissiveMap={NeptuneTexture}
        emissive={0xffffff}
        emissiveIntensity={0.05}
      />
    </mesh>
  )
})

export default Neptune
