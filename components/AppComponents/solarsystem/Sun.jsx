import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import Tooltip from './Tooltip'

const Sun = React.memo(() => {
  const sunRef = useRef()
  const [hovered, setHovered] = useState(false);
  const [sunTexture] = useTexture(['/assets/sun_map.jpg'])
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  useFrame((state) => {
    // Axis Rotation
    sunRef.current.rotation.y -= 0.002;
  
    if (hovered) {
      const screenPosition = sunRef.current.position.clone().project(camera);
      const x = (screenPosition.x + 1) / 2 * state.viewport.width;
      const y = (-screenPosition.y + 1) / 2 * state.viewport.height;
      setTooltipPosition({ x, y });
    }
  });
  useFrame(() => {
    // Axis Rotation
    sunRef.current.rotation.y -= 0.002
  })

  const handleHover = (event) => {
    const intersects = event.intersects;
    setHovered(true);
  };

  return (
    <mesh ref={sunRef} position={[0, 0, 0]}  
    //  onPointerMove={handleHover}
    onPointerOut={() => setHovered(false)}
    >
      {/* Radius , X-axis , Y-axis */}
      <sphereGeometry args={[16, 32, 32]} />
      <meshPhongMaterial
        map={sunTexture}
        emissiveMap={sunTexture}
        emissiveIntensity={0.6}
        emissive={0xffffff}
      />
      <pointLight castShadow />
      {/* {hovered && (
        <Tooltip
          position={tooltipPosition}
          title="The Sun"
          description="The star at the center of our solar system."
          keyPoints={['Provides light and heat.', 'Source of solar energy.']}
        />
      )} */}
    </mesh>
  )
})

export default Sun
