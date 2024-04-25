import { useAnimations, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { buttonGroup, useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import { Group, PerspectiveCamera } from "three";

import { useEmissiveNoToneMapped } from "@/hooks/use-emessive";
import { usePlayEverything } from "@/hooks/use-play-everything";

import { pluginFile } from "./leva-plugins/file";
import glb from "./model.glb";

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

  const [model, setModel] = useState(glb);
  useControls({
    model: pluginFile({
      onChange: (file) => {
        if (!file) return;
        setModel(URL.createObjectURL(file));
      },
    }),
  });
  const { animations, scene } = useGLTF(model);

  const { actions } = useAnimations(animations, ref);
  const { toggle } = usePlayEverything(actions);

  useEmissiveNoToneMapped(scene);

  useControls({ animations: buttonGroup({ toggle }) });

  return <primitive object={scene} ref={ref} />;
}

useGLTF.preload(glb);
