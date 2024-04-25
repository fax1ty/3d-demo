import { Gltf } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { PerspectiveCamera } from "three";

import model from "./model.glb";

export function Model() {
  const ref = useRef<PerspectiveCamera | null>(null);
  const { set } = useThree();

  useEffect(() => {
    let camera: PerspectiveCamera | null = null;

    ref.current?.traverse((node) => {
      if (node instanceof PerspectiveCamera) {
        camera = node;
      }
    });

    if (camera) set({ camera });
  }, [set]);

  return <Gltf src={model} ref={ref} />;
}
