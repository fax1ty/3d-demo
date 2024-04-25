import { useAnimations, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group, PerspectiveCamera } from "three";

import { useEmissiveNoToneMapped } from "@/hooks/use-emessive";
import { usePlayEverything } from "@/hooks/use-play-everything";

import model from "./model.glb";
import { buttonGroup, useControls } from "leva";

export function Model() {
  const ref = useRef<Group | null>(null);
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

  const { animations, scene } = useGLTF(model);

  const { actions } = useAnimations(animations, ref);
  const { toggle } = usePlayEverything(actions);

  useEmissiveNoToneMapped(scene);

  useControls({ animations: buttonGroup({ toggle }) });

  return (
    <group ref={ref}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(model);
