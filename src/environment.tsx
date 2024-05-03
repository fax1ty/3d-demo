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
