'use client'

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Bounds, useBounds } from '@react-three/drei';
import { Suspense, useRef, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

function Model({ url }) {
  const gltf = useLoader(GLTFLoader, url);
  const model = useRef();

  // Traverse the model to adjust material properties
  gltf.scene.traverse((node) => {
    if (node.isMesh) {
      node.material.metalness = 0,5; // Adjust metalness
      node.material.roughness = 1; // Adjust roughness
    }
  });

  // Apply rotation to the model to make it stand upright
  return <primitive ref={model} object={gltf.scene} scale={1} />;
}

function FitCamera() {
  const api = useBounds();

  useEffect(() => {
    api.refresh().fit();
  }, [api]);

  return null;
}

export default function ModelViewer({ url, small = false }) {
  return (
    <Canvas style={{ height: small ? '100px' : '600px', width: '100%' }} camera={{fov: 50}} >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <Environment preset="night" />
        <Bounds fit clip observe margin={1}>
          <Model url={url} />
          <FitCamera />
        </Bounds>
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}




// 'use client'

// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { Suspense } from 'react';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { useLoader } from '@react-three/fiber';

// function Model({ url }) {
//   const gltf = useLoader(GLTFLoader, url);
//   return <primitive object={gltf.scene} scale={1} />;
// }

// export default function ModelViewer({ url, small = false }) {
//   return (
//     <Canvas style={{ height: small ? '200px' : '500px' }}>
//       <Suspense fallback={null}>
//         <ambientLight />
//         <pointLight position={[10, 10, 10]} />
//         <Model url={url} />
//         <OrbitControls />
//       </Suspense>
//     </Canvas>
//   );
// }


