import { Environment as EnvironmentBase } from "@react-three/drei";

import hdri from "./hdri.hdr";

export const Environment = () => {
  return (
    <EnvironmentBase files={hdri} environmentIntensity={0.5} environmentRotation={[45, Math.PI / 2, 0]} />
    <ContactShadows renderOrder={2} frames={1} resolution={1024} scale={120} blur={2} opacity={0.6} far={100} />
  );
};
