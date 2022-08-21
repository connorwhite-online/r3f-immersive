import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/m1_metal.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.5} position={[0, -2, -3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["64765"].geometry}
          material={materials.Material_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["64765_1"].geometry}
          material={materials.Material_3}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/m1_metal.gltf");