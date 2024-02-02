import { MeshPortalMaterial, useGLTF, Line, useCursor, MeshDistortMaterial } from '@react-three/drei'
import { useFrame, extend } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { geometry } from 'maath'

extend(geometry)

export const Card = ({ route = '/', ...props }) => {
  const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  return (
    <mesh
      // onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}
    >
      {/* <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial roughness={0} color={hovered ? 'hotpink' : '#1fb2f5'} /> */}
      <roundedPlaneGeometry args={[2.5, 4, 0.3]} />
      <MeshPortalMaterial side={THREE.DoubleSide}>
        <color attach='background' args={['#000']} />

        <mesh>
          <sphereGeometry args={[1, 30, 30]} />
          <meshBasicMaterial color='red' />
        </mesh>
      </MeshPortalMaterial>

      {/* <meshBasicMaterial color={'#1fb2f5'} /> */}
    </mesh>
  )
}
