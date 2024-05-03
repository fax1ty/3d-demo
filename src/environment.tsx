import { Environment as EnvironmentBase } from "@react-three/drei";

import hdri from "./hdri.hdr";

export const Environment = () => {
  return (
    <EnvironmentBase
      files={hdri}
      environmentIntensity={0.5}
      environmentRotation={[45, Math.PI / 2, 0]}
    />
  );
};
<Lightformer
  form="rect"
  intensity={0.5}
  color="white"
  scale={[10, 5]}
  target={[0, 0, 0]}
/>;
