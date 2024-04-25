import { Gltf } from "@react-three/drei";

import model from "./model.glb";

export function Model() {
  return <Gltf src={model} />;
}
