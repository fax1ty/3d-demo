import { OrbitControls } from "@react-three/drei";

import { Effects } from "./effects";
import { Model } from "./model";

export function Scene() {
  return (
    <>
      <Effects />

      <Model />

      <OrbitControls makeDefault />
    </>
  );
}
