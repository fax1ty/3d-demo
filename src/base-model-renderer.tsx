import { useAnimations, useGLTF } from "@react-three/drei";
import { forwardRef, useRef } from "react";
import { useMergeRefs } from "rooks";
import { Group } from "three";

import { useEmissiveNoToneMapped } from "@/hooks/use-emessive";
import { usePlayEverything } from "@/hooks/use-play-everything";

type Props = JSX.IntrinsicElements["group"] & { src: string };

export const BaseModelRenderer = forwardRef<Group, Props>(
  function BaseAnimatedBuildingRender({ src, ...props }, ref) {
    const group = useRef<Group | null>(null);
    const { animations, scene } = useGLTF(src);

    const { actions } = useAnimations(animations, group);
    usePlayEverything(actions);

    useEmissiveNoToneMapped(scene);

    return (
      <group ref={useMergeRefs(ref, group)} {...props}>
        <primitive object={scene} />
      </group>
    );
  }
);
