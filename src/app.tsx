import { Canvas } from "@react-three/fiber";

import { Scene } from "./scene";

export default function App() {
  return (
    <Canvas dpr={window.devicePixelRatio}>
      <Scene />
    </Canvas>
  );
}
