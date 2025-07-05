import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const TechIcon = ({model }) => {
  const scene = useGLTF(model.modelPath)
  return (
    <Canvas>
      <ambientLight intensity={0.3}/>
    </Canvas>
  )
}

export default TechIcon
